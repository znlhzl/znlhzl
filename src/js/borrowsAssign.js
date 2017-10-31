var oks = document.getElementsByClassName("ok")[0];
	var gaibian = document.getElementsByClassName("gaibian")[0];
	
	oks.onclick=function(){
		if(gaibian.innerHTML=="请选择分派工程师"){
			alert("请选择分派工程师");
		}else{
			alert("分派完成，点击跳转页面");
			window.location.href="borrows.html?type=2";
		}
	}
	
	tk("fwgcs","fwgcss","0");