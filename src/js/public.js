
	/*设置根节点font-size*/
	(function(){
	    var screenW = document.documentElement.offsetWidth||document.body.offsetWidth;
	    var oHtml = document.getElementsByTagName("html")[0];
	    oHtml.style.fontSize = 100*(screenW/750)+"px";
	})();
	
	function delayURL(url){
	 
	 setTimeout("window.location.href = '" + url + "'",200);
	}
	
	/*---------返回之前页面--------------*/
	function left(){
			var prev =document.getElementById("left");
			prev.onclick=function(){
				window.history.go(-1);
			}
		}

	/*------------输入框有内容居右对齐-----------------*/
	function funrights(s){
			s.onkeyup = function(){
				if(s.value!=""){
					s.style.textAlign="right";
				}else{
					s.style.textAlign="left";
				}
			}
		}
	
	/*------------------加号点击跳转新增页面----------------------*/	
	function adds(i){
		var add =document.getElementById("add");
		add.onclick=function(){
			window.location.href=i;
		}
	}
	
	/*---------------------------------筛选页面----------------------------------*/
	
	function selectHTML(){
		/*-----------------------------------勾选------------------------------------*/
		var selects=document.getElementById("selects");
		var lis = selects.getElementsByTagName("li");
		/*----------------------------------收缩和展开-------------------------------------*/
		for(var i=0;i<lis.length;i++){
			var ass=lis[i].getElementsByTagName("a");
			if(ass.length>3){
				var oimg =document.createElement("img");
				oimg.src="../img/device/bottom.png";
				oimg.className="addName1 addName";
				lis[i].appendChild(oimg);
				lis[i].style.height="1.56rem";
				lis[i].style.overflow="hidden";
				var addName =document.getElementsByClassName("addName");
				for( var j=0;addName.length>j;j++){
					addName[j].onclick=function(){
						if(this.getAttribute('class').indexOf('addName1')==-1){
							this.parentNode.style.height="1.56rem";
							this.src="../img/device/bottom.png";
							this.className="addName addName1";
						}else{
							this.parentNode.style.height="auto";
							this.src="../img/device/top.png";
							this.className="addName addName2";
						}
					}
				}
			}
		}
		/*需要在css里增加一个新的样式*/
		for(var i=0;i<lis.length;i++){
			var ass=lis[i].getElementsByTagName("a");
			for(var k=0;k<ass.length;k++){
				ass[k].onclick=function(){
					if(this.className==""){
						this.className="change-color";
						}else{
						this.className="";
						}
					}
			}
		}
		
		/*-------------------------reset按钮-------------------------------*/
		var resets = document.getElementById("selects").getElementsByTagName("button")[0];
		resets.onclick=function(){
			var aAll =document.getElementById("selects").getElementsByTagName("a");
			for(var i=0;i<aAll.length;i++){
				aAll[i].className ="";
			}
			
			var inputdate =document.getElementById("selects").getElementsByTagName("input");
			alert(inputdate.length);
			if(inputdate.length==0){
				console.log(0);
			}else{
				for(var j=0;j<inputdate.length;j++){
					inputdate[j].value="";
				}
			}
			
			
		}
	}
	
	
	
	/*----------------------------弹窗---------------------------------------*/
	function tk(a,b,c){
		
		var biglis = document.getElementsByClassName(a)[c];
		var popovers = biglis.getElementsByTagName("img")[0];
		var tck = document.getElementsByClassName(b)[0];
		var mark = document.getElementById("mark");
		popovers.onclick=function(){
			tck.style.display="block";
			mark.style.display="block";
			mark.style.background="rgba(0,0,0,0.60)";	
		}
		
		var tcklis =tck.getElementsByTagName("li");
		var ss =biglis.getElementsByTagName("s")[0];
		for(var i=0;i<tcklis.length;i++){
			tcklis[i].onclick=function(){
				clearTimeout(timer);
				_self=this;
				ss.innerHTML=_self.innerHTML;
				ss.style.color="#363636";
				this.style.color="rgba(0,130,217,1)";
				var timer=setTimeout(function(){
					_self.parentNode.parentNode.style.display="none";
					_self.style.color="#363636";
					mark.style.display="none";
				},300);	
			}
		}
	}
	
	
	/*----------------自动计算----------------------*/
	function autoAdd(){
    	/*-----------自动计算--------------*/
			  var input1 = document.getElementsByClassName("num1");
			  var input2 = document.getElementsByClassName("num2");
			  var sum =document.getElementsByClassName("num3");
  			  for(var i=0;i<input1.length;i++){
  				sum[i].innerHTML = parseInt(input1[i].value) * parseInt(input2[i].value);	
  				
			  }


    }
	
/*	-------------------筛选菜单滑入滑出--------------------------------*/
			function selectsMove(a){
			var btns =document.getElementById("top").getElementsByTagName("div");
			var mark = document.getElementById("mark");
			var selects=document.getElementById("selects");
			var selEnd = document.getElementsByClassName("sel-end")[0];
			btns[a].onclick=function(){
				selects.className="tkl";
				selEnd.className="tkls sel-end";
				clearTimeout(t);
				var t=setTimeout(function(){
				mark.style.display="block";
				mark.style.background="rgba(0,0,0,0.6)";
				},1000);
				selects.style.display="block";
				selects.style.zIndex="200";
			}
			
			mark.onclick=function(){
				
				selects.className="tkr";
				selEnd.className="tkrs sel-end";
				clearTimeout(t);
				var t=setTimeout(function(){
				mark.style.display="none";
				},1000);
			}
		}
			
		/*---------------筛选日期大小顺序-------------------*/	
			
        function selectDate(a,b){
			var date1 = document.getElementsByClassName(a)[0];
			var date2 = document.getElementsByClassName(b)[0];
		
			date1.onchange=function(){
					if((date1.value!=""&&date2.value=="")||(date2.value!=0&&date1.value<=date2.value)){
					
				}else{
					
					clearTimeout(dates);
					var dates=setTimeout(function(){
						alert("日期时间错误，请重填");
					},500)
					date1.value="";
				}
			}
			date2.onchange=function(){
					if(date2.value!=""&&date2.value>=date1.value){					
				}else{
					clearTimeout(dates);
					var dates=setTimeout(function(){
						alert("日期时间错误，请重填");
					},500)
					date2.value="";
				}
			}			
		}
		
		
		/*---------------------审批agree和disagree-------------------------*/
		function pizhun(){
			var agree= document.getElementsByClassName("agree")[0];
		
			var disagree =document.getElementsByClassName("disagree")[0];
			
			agree.onclick=function(){
				agree.style.background="#0082D9";
				disagree.style.background="none";
				agree.style.color="#FFFFFF";
				agree.style.border="none";
				disagree.style.border="1px solid #979797 "
				disagree.style.color="#979797";
					
			}
			disagree.onclick =function(){
				disagree.style.background="#0082D9";
				agree.style.background="none";
				disagree.style.color="#FFFFFF";
				agree.style.color="#979797";
				disagree.style.border="none";
				agree.style.border="1px solid #979797 "
				
			}
		}
		
		
		
