//input框输入里内容颜色变化及判断


	/*-----------获取焦点时隐藏footer-----------------*/
	var message = document.getElementById('message');
	
	var footers = document.getElementsByTagName("footer")[0];
	
	message.onfocus = function(){
		footers.style.opacity ="0";
	}
	
	message.onblur = function(){
		
		setTimeout('footers.style.opacity ="1"',300);
	}
	
	/*------------点击跳转部门页面----------------*/
	var lis =document.getElementsByTagName("ul")[0].getElementsByTagName("li");
	
	for(var i=0;i<lis.length;i++){
		lis[i].onclick=function(){
			this.style.background="#F2F2F2";
			delayURL('addressDept.html');
		}
	}
	
	function left(){
		var prev =document.getElementById("left");
		prev.onclick=function(){
			window.history.go(-1);
		}
	}
