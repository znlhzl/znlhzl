	/*----返回上一页------*/
	left();
	
	/*----同意不同意------*/
	pizhun();
	
	var ok =document.getElementsByClassName("ok")[0];
	
	ok.onclick=function(){
		window.location.href="buy.html?type=3";
	}
	