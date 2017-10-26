left();
	var btns = document.getElementsByClassName("choose")[0].getElementsByClassName("end1")[0].getElementsByTagName("button");
	btns[0].onclick=function(){
		this.style.background="#0082D9";
		this.style.color="#FFFFFF";
		this.style.border="none";
		btns[1].style.background="none";
		btns[1].style.color="#999999";
		btns[1].style.border="1px solid #979797";
	}
	
	btns[1].onclick=function(){
		this.style.background="#0082D9";
		this.style.color="#FFFFFF";
		this.style.border="none";
		btns[0].style.background="none";
		btns[0].style.color="#999999";
		btns[0].style.border="1px solid #979797";
	}
	