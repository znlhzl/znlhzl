var Ak = Ak || {};

Ak.Base_URL = '';
/**
 * 工具模块，不依赖第三方代码
 * 包含：类型判断
 */
Ak.Utils = {
    /**
    * 判断是否Array对象
    * @param {Object} value 判断的对象
    * @return {Boolean}
    */
    isArray: function (value) {
        return toString.call(value) === '[object Array]';
    },

    /**
     * 判断是否日期对象
     * @param {Object} value 判断的对象
     * @return {Boolean}
     */
    isDate: function (value) {
        return toString.call(value) === '[object Date]';
    },

    /**
     * 判断是否Object对象
     * @param {Object} value 判断的对象
     * @return {Boolean}
     */
    isObject: function (value) {
        return toString.call(value) === '[object Object]';
    },

    /**
     * 判断是否为空
     * @param {Object} value 判断的对象
     * @return {Boolean}
     */
    isEmpty: function (value) {
        return (value === null) || (value === undefined) || value === '' || (this.isArray(value) && value.length === 0);
    },

    /**
     * 判断是否移动电话
     * @param {Number} value 判断的值
     * @return {Boolean}
     */
    isMobilePhone: function (value) {
        value = Number.parseInt(value);
        // 1)是否非数字
        if (Number.isNaN(value)) {
            return false;
        }

        // 2)是否11位并且1开头的移动电话
        return /^(1[0-9]{10})$/.test(value);
    },

    /**
     * 判断是否为邮箱
     * @param {String} value 判断的值
     * @return {Boolean}
     */
    isEmail: function (value) {
        return /^[a-zA-Z\-_0-9]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+$/.test(value);
    },

    /**
    * 转换服务器请求的对象为Js的对象：包含首字母转换为小写；属性格式转换为Js支持的格式
    * @param {Object} en 服务器的获取的数据对象
    */
    transWebServerObj: function (en) {
        if (toString.call(en) == '[object Array]') {
            for (var i = 0, len = en.length; i < len; i++) {
                Ak.Utils.transWebServerObj(en[i])
            }

        } else {

            for (propertyName in en) {
                /*
                // 1.创建一个小写的首字母属性并赋值：ABC => aBC
                var newPropertyName = propertyName.charAt(0).toLowerCase() + propertyName.substr(1);
                en[newPropertyName] = en[propertyName];
                */
                var tmpName = propertyName;
                // 2.判断此属性是否为数组，若是就执行递归
                if (toString.call(en[tmpName]) == '[object Array]') {
                    for (var i = 0, len = en[tmpName].length; i < len; i++) {
                        Ak.Utils.transWebServerObj(en[tmpName][i]); // 数组里的每个对象再依次进行转换
                    }
                } else if (toString.call(en[tmpName]) == '[object Object]') {
                    Ak.Utils.transWebServerObj(en[tmpName]); // 若属性的值是一个对象，也要进行转换
                } else {
                    // 3.若不是其他类型，把此属性的值转换为Js的数据格式
                    // 3.1)日期格式：后台为2015-12-08T09:23:23.917 => 2015-12-08 09:23:23
                    if (new RegExp(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/).test(en[propertyName])) {
                        //  en[propertyName] = new RegExp(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/).exec(en[propertyName])[0].replace('T', ' ');

                        //  若为0001年，表示时间为空，就返回''空字符串
                        if (en[propertyName].indexOf('0001') >= 0) {
                            en[propertyName] = '';
                        }
                    } else if (toString.call(en[propertyName]) == '[object Number]' && new RegExp(/\d+[.]\d{3}/).test(en[propertyName])) {
                        // 3.2)溢出的float格式：1.33333 = > 1.33
                        en[propertyName] = en[propertyName].toFixed(2);
                    } else if (en[propertyName] == null) {
                        // 3.3)null值返回空
                        en[propertyName] = '';
                    }
                }
            }
        }
        return en;
    },

    /**
    *设置SessionStorage的值
    * @param key：要存的键
    * @param value ：要存的值
    */
    setSessionStorage: function (key, value) {
        if (this.isObject(value)) {
            value = this.toJsonStr(value);
        }
        sessionStorage[key] = value;
    },

    /**
    *获取SessionStorage的值
    * @param key：存的键
    */
    getSessionStorage: function (key) {
        var rs = sessionStorage[key];
        try {
            if (rs != undefined) {
                var obj = this.toJson(rs);
                rs = obj;
            }
        } catch (error) {

        }
        return rs;
    },

    /**
    * 清除SessionStorage的值
    * @param key：存的键
    */
    removeSessionStorage: function (key) {
        return sessionStorage.removeItem(key);
    },

    /**
    * 对传入的时间值进行格式化。后台传入前台的时间有两种个是：Sql时间和.Net时间
    * @param sValue {String|Date}：传入的时间字符串
    * @dateFormat {dateFormat | bool} ：日期格式，日期格式：eg：'Y-m-d H:i:s'
    * @return {String} ：2014-03-01 这种格式
    1) Sql时间格式：2015-02-24T00:00:00
    2) .Net时间格式：/Date(1410744626000)/
    */
    getDateTimeStr: function (sValue, dateFormat) {
        if (dateFormat == undefined) {
            dateFormat = 'Y-m-d'; // 默认显示年月日
        } else if (dateFormat == true) {
            dateFormat = 'Y-m-d H:i:s'; // 若dateFormat为true，显示全部
        }

        var dt;
        // 1.先解析传入的时间对象，
        if (sValue) {
            if (toString.call(sValue) !== '[object Date]') { //不为Date格式，就转换为DateTime类型
                sValue = sValue + '';
                if (sValue.indexOf('T') > 0) { // 1)格式：2015-02-24T00:00:00
                    var timestr = sValue.replace('T', ' ').replace(/-/g, '/'); //=> 2015/02/24 00:00:00
                    dt = new Date(timestr);
                } else { // 2).Net格式：/Date(1410744626000)/
                    //Convert date type that .NET can bind to DateTime
                    //var date = new Date(parseInt(sValue.substr(6)));
                    var timestr = sValue.toString().replace(/\/Date\((\d+)\)\//gi, "$1"); //
                    dt = new Date(Math.abs(timestr))
                }
            } else {
                dt = sValue;
            }
        }

        // 2.转换
        // 1)转换成对象 'Y-m-d H:i:s'
        var obj = {}; //返回的对象，包含了 year(年)、month(月)、day(日)
        obj.Y = dt.getFullYear(); //年
        obj.m = dt.getMonth() + 1; //月
        obj.d = dt.getDate(); //日期 
        obj.H = dt.getHours();
        obj.i = dt.getMinutes();
        obj.s = dt.getSeconds;
        //2.2单位的月、日都转换成双位
        if (obj.m < 10) {
            obj.m = '0' + obj.m;
        }
        if (obj.d < 10) {
            obj.d = '0' + obj.d;
        }

        // 3.解析
        var rs = dateFormat.replace('Y', obj.Y).replace('m', obj.m).replace('d', obj.d).replace('H', obj.H).replace('i', obj.i).replace('s', obj.s);

        return rs;
    },

    /**
    * 对象转换为json字符串
    * @param  {jsonObj} jsonObj Json对象
    * @return {jsonStr} Json字符串
    */
    toJsonStr: function (jsonObj) {
        return JSON.stringify(jsonObj);
    },

    /**
    * 讲json字符串转换为json对象
    * @param {String} jsonStr Json对象字符串
    * @return {jsonObj} Json对象
    */
    toJson: function (jsonStr) {
        return JSON.parse(jsonStr);
    },


    /**
     * @private
     */
    getCookieVal: function (offset) {
        var endstr = document.cookie.indexOf(";", offset);
        if (endstr == -1) {
            endstr = document.cookie.length;
        }
        return unescape(document.cookie.substring(offset, endstr));
    },

    /**
    * 获取指定key的cookie
    * @param {String} key cookie的key
    */
    getCookie: function (key) {
        var arg = key + "=",
            alen = arg.length,
            clen = document.cookie.length,
            i = 0,
            j = 0;

        while (i < clen) {
            j = i + alen;
            if (document.cookie.substring(i, j) == arg) {
                return this.getCookieVal(j);
            }
            i = document.cookie.indexOf(" ", i) + 1;
            if (i === 0) {
                break;
            }
        }
        return null;
    },

    /**
    * 设置cookie
    * @param {String} key cookie的key
    * @param {String} value cookie的value
    */
    setCookie: function (key, value) {
        var argv = arguments,
            argc = arguments.length,
            expires = (argc > 2) ? argv[2] : null,
            path = (argc > 3) ? argv[3] : '/',
            domain = (argc > 4) ? argv[4] : null,
            secure = (argc > 5) ? argv[5] : false;

        document.cookie = key + "=" + escape(value) + ((expires === null) ? "" : ("; expires=" + expires.toGMTString())) + ((path === null) ? "" : ("; path=" + path)) + ((domain === null) ? "" : ("; domain=" + domain)) + ((secure === true) ? "; secure" : "");
    },

    /**
    * 是否含有特殊字符
    * @param  {String} value 传入的值
    * @return {Boolean} true 含有特殊符号;false 不含有特殊符号
    */
    isHaveSpecialChar: function (value) {
        var oldLength = value.length;
        var newLength = value.replace(/[`~!@#$%^&*_+=\\{}:"<>?\[\];',.\/~！@#￥%……&*——+『』：“”《》？【】；‘’，。？ \[\]()（）]/g, '').length;
        if (newLength < oldLength) {
            return true;
        }
        return false;
    }

};

/**
 * http交互模块
 * 包含：ajax
 */
Ak.Http = {

    /**
     * 将`name` - `value`对转换为支持嵌套结构的对象数组
     *
     *     var objects = toQueryObjects('hobbies', ['reading', 'cooking', 'swimming']);
     *
     *     // objects then equals:
     *     [
     *         { name: 'hobbies', value: 'reading' },
     *         { name: 'hobbies', value: 'cooking' },
     *         { name: 'hobbies', value: 'swimming' },
     *     ];
     *
     *     var objects = toQueryObjects('dateOfBirth', {
     *         day: 3,
     *         month: 8,
     *         year: 1987,
     *         extra: {
     *             hour: 4
     *             minute: 30
     *         }
     *     }, true); // Recursive
     *
     *     // objects then equals:
     *     [
     *         { name: 'dateOfBirth[day]', value: 3 },
     *         { name: 'dateOfBirth[month]', value: 8 },
     *         { name: 'dateOfBirth[year]', value: 1987 },
     *         { name: 'dateOfBirth[extra][hour]', value: 4 },
     *         { name: 'dateOfBirth[extra][minute]', value: 30 },
     *     ];
     *
     * @param {String} name
     * @param {object | Array} value
     * @param {boolean} [recursive=false] 是否递归
     * @return {array}
     */
    toQueryObjects: function (name, value, recursive) {
        var objects = [],
            i, ln;

        if (Ak.Utils.isArray(value)) {
            for (i = 0, ln = value.length; i < ln; i++) {
                if (recursive) {
                    objects = objects.concat(toQueryObjects(name + '[' + i + ']', value[i], true));
                }
                else {
                    objects.push({
                        name: name,
                        value: value[i]
                    });
                }
            }
        }
        else if (Ak.Utils.isObject(value)) {
            for (i in value) {
                if (value.hasOwnProperty(i)) {
                    if (recursive) {
                        objects = objects.concat(toQueryObjects(name + '[' + i + ']', value[i], true));
                    }
                    else {
                        objects.push({
                            name: name,
                            value: value[i]
                        });
                    }
                }
            }
        }
        else {
            objects.push({
                name: name,
                value: value
            });
        }

        return objects;
    },

    /**
     * 把对象转换为查询字符串
     * e.g.:
     *     toQueryString({foo: 1, bar: 2}); // returns "foo=1&bar=2"
     *     toQueryString({foo: null, bar: 2}); // returns "foo=&bar=2"
     *     toQueryString({date: new Date(2011, 0, 1)}); // returns "date=%222011-01-01T00%3A00%3A00%22"
     * @param {Object} object 需要转换的对象
     * @param {Boolean} [recursive=false] 是否递归
     * @return {String} queryString
     */
    toQueryString: function (object, recursive) {
        var paramObjects = [],
            params = [],
            i, j, ln, paramObject, value;

        for (i in object) {
            if (object.hasOwnProperty(i)) {
                paramObjects = paramObjects.concat(this.toQueryObjects(i, object[i], recursive));
            }
        }

        for (j = 0, ln = paramObjects.length; j < ln; j++) {
            paramObject = paramObjects[j];
            value = paramObject.value;

            if (Ak.Utils.isEmpty(value)) {
                value = '';
            } else if (Ak.Utils.isDate(value)) {
                value = value.getFullYear() + "-"
                    + Ext.String.leftPad(value.getMonth() + 1, 2, '0') + "-"
                    + Ext.String.leftPad(value.getDate(), 2, '0') + "T"
                    + Ext.String.leftPad(value.getHours(), 2, '0') + ":"
                    + Ext.String.leftPad(value.getMinutes(), 2, '0') + ":"
                    + Ext.String.leftPad(value.getSeconds(), 2, '0');
            }

            params.push(encodeURIComponent(paramObject.name) + '=' + encodeURIComponent(String(value)));
        }

        return params.join('&');
    },

    /**
     * ajax请求
     * e.g.:
     *     Ak.Ajax.request({
     *         url: 'ajax_demo/sample.json',
     *         success: function(response, opts) {
     *             var res = toJson(response.responseText);
     *             console.dir(res);
     *         },
     *         failure: function(response, opts) {
     *             console.log('server-side failure with status code ' + response.status);
     *         }
     *     });
     *
     * @param {Object} options ajax配置项，可包含以下成员:
     * @param {String} options.url 请求地址
     * @param {String} options.method 请求方法，默认:POST
     * @param {Function} options.successCallback 成功接收内容时的回调函数
     */
    ajax: function (options) {
        // 1.请求的参数
        if (options.params && Ak.Utils.isObject(options.params)) {
            options.params = this.toQueryString(options.params);
        }

        // 2.请求的方法
        options.method = (options.method ? 'POST' : 'GET').toUpperCase();

        // 3.请求的url
        if (Ak.Utils.isEmpty(options.method)) {
            options.method = 'POST';
        } else if (options.method == 'GET' && !Ak.Utils.isEmpty(options.params)) {
            options.url = options.url + '?' + options.params;
        }

        // 4.xhr操作
        var xhr = new XMLHttpRequest();
        // 1)设置请求地址和头部
        xhr.open(options.method, options.url, true); // 请求地址
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"); // 请求头部

        // 2)接受返回数据
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                try {
                    // xhr.responseText 接收的数据
                    var res = Ak.Utils.toJson(xhr.responseText);
                    // 2.因为后台由C#编写，返回的对象成员名称首字母为大写，此处进行小写设置，并对C#的类型进行转换操作
                    if (res.data) { // data属性是否有数据
                        res.data = Ak.Utils.transWebServerObj(res.data);
                    } else if (res.children) { // children属性是否有数据
                        res.children = Ak.Utils.transWebServerObj(res.children);
                    }
                    // 3.调用成功执行的回调函数
                    if (options.successCallback) {
                        options.successCallback(res);
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        };

        // 3)开始请求
        if (Ak.Utils.isEmpty(options.params)) {
            xhr.send('');
        } else {
            xhr.send(options.params);
        }
    },


    /**
     * 以get方式请求获取JSON数据
     * @param {Object} options 配置项，可包含以下成员:
     * @param {String} options.url 请求地址
     * @param {Object} options.params 附加的请求条件
     * @param {Object} options.isHideLoading 是否关闭'载入中'提示框，默认false
     * @param {Function} options.successCallback 成功接收内容时的回调函数
     */
    get: function (options) {
        if (!options.isHideLoading) {
            Ak.Msg.showLoading();
        }
        options.url = Ak.Base_URL + options.url;
        if (options.params) {
            options.url = options.url + '?' + this.toQueryString(options.params);
        }

        $.getJSON(options.url, function (res, status, xhr) {
            Ak.Msg.hideLoading();
            if (res.success) {
                // 1.因为后台由C#编写，返回的对象成员名称首字母为大写，此处进行小写设置，并对C#的类型进行转换操作
                if (Ak.Utils.isObject(res)) {
                    res = Ak.Utils.transWebServerObj(res);
                }
                // 2.调用成功执行的回调函数
                if (options.successCallback) {
                    options.successCallback(res);
                }
            } else {
                Ak.Msg.toast(res.msg);
            }
        });
    },

    /**
     * 以get方式请求获取JSON数据
     * @param {Object} options 配置项，可包含以下成员:
     * @param {String} options.url 请求地址
     * @param {Object} options.params 附加的请求条件
     * @param {Function} options.successCallback 成功接收内容时的回调函数
     */
    post: function (options) {
        Ak.Msg.showLoading();
        options.url = Ak.Base_URL + options.url;
        $.post(options.url, options.params, function (res, status, xhr) {
            Ak.Msg.hideLoading();
            if (res.success) {
                // 1.因为后台由C#编写，返回的对象成员名称首字母为大写，此处进行小写设置，并对C#的类型进行转换操作
                if (Ak.Utils.isObject(res)) {
                    res = Ak.Utils.transWebServerObj(res);
                }
                // 2.调用成功执行的回调函数
                if (options.successCallback) {
                    options.successCallback(res);
                }
            } else {
                Ak.Msg.toast(res.msg);
            }
        });
    },


};


/**
* 消息模块
* 包含：确认框、信息提示框
* 基于：weui库
*/
Ak.Msg = {

    /**
    * 提示框
    * msg {string} ：信息内容
    */
    alert: function (msg) {
        weui.toast(msg, {
	        duration: 3000,
	        className: "bears"
	    });
    },

    /**
    * 确认框
    * msg {string} ：信息内容
    * callback {function} ：点击'确定'时的回调函数。
    */
    confirm: function (msg, callback) {
	    weui.confirm('提示', function () {
	        if(callback){
                callback();
            }
	    }, function () {
	    }, {
	        title: msg
	    });
    },

    /**
    * 显示正在加载
    */
    showLoading: function () {
        // 参照：$.showPreloader('加载中...')

        // 1)创建遮盖层 
        var backElement = document.createElement('div');
        backElement.className = 'weui-mask_transparent';
        backElement.id = 'msg_back_div';
        document.body.appendChild(backElement);

        // 2)创建loading层
        var popupElement = document.createElement('div');
        popupElement.className = 'weui-toast';
        popupElement.id = 'msg_loading_div';
        popupElement.style.display = 'block';
        popupElement.innerHTML = '<i class="weui-loading weui-icon_toast"></i> <p class="weui-toast__content">加载中</p>';
        document.body.appendChild(popupElement);
    },

    /**
    * 关闭正在加载
    */
    hideLoading: function () {
        // 参照：$.hidePreloader();
        // 1)去除遮盖层
        var backElement = document.getElementById('msg_back_div');
        if (backElement) {
            document.body.removeChild(backElement);
            backElement = null;
        }

        // 2)去除loading层
        var popupElement = document.getElementById('msg_loading_div');
        if (popupElement) {
            document.body.removeChild(popupElement);
            popupElement = null;
        }
    },

    /**
    * 自动消失的提示框
    * msg {string} ：信息内容
    */
    toast: function (msg) {
        weui.toast(msg, 2000);
    }
}
