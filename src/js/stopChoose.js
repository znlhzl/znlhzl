
	left();
	pizhun();
	var agree= document.getElementsByClassName("agree")[0];
	var disagree =document.getElementsByClassName("disagree")[0];
	var ok= document.getElementsByClassName("ok")[0];
	ok.onclick=function(){
		if(agree.style.color=="rgb(255, 255, 255)"||disagree.style.color=="rgb(255, 255, 255)"){
			window.location.href="stop.html?type=2";
			alert("审批已提交，点击跳转");
		}else{
			alert("请确定审批结果");
		}
		
	}