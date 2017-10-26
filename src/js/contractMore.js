/*---------------------------返回上页--------------------------------------*/
			var prev = document.getElementById("left");
			
			prev.onclick =function(){
				window.history.go(-1);
			}

		/*----------------------------tab栏切换-----------------------------------*/
			var btns =document.getElementById("top").getElementsByTagName("div");
            var divs = document.getElementById("divs").getElementsByTagName("div");
            for(var i= 0;i<btns.length;i++)
            {
                btns[i].index = i;  // 难点
                btns[i].onclick = function(){
                    //让所有的 btn 类名清空
                    //alert(this.index);
                    for(var j=0;j<btns.length;j++)
                    {
                        btns[j].className = "";
                        divs[j].className = "";
                    }
                    // 当前的那个按钮 的添加 类名
                    this.className = "blue";
                    //先隐藏下面所有的 div盒子
                    //留下中意的那个 跟点击的序号有关系的
                    divs[this.index].className = "show";
                }
            }
	