left();
	pizhun();
	
	var ok=document.getElementsByClassName("ok")[0];
	var agree= document.getElementsByClassName("agree")[0];
	var disagree = document.getElementsByClassName("disagree")[0];
	ok.onclick =function(){
		if(agree.style.color=="rgb(255, 255, 255)"||disagree.style.color=="rgb(255, 255, 255)"){
			window.location.href="claim.html?type=2";
			alert("审批结束，点击跳转页面");
		}else{
			alert("请审批后再确定");
		}
		
	}