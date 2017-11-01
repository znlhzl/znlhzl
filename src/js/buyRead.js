	/*----返回上一页------*/
	left();
	
	/*----同意不同意------*/
	pizhun();
	
	var ok =document.getElementsByClassName("ok")[0];
	var agree= document.getElementsByClassName("agree")[0];
	var disagree =document.getElementsByClassName("disagree")[0];
	
	ok.onclick=function(){
		
		if(agree.style.color=="rgb(255, 255, 255)"||disagree.style.color=="rgb(255, 255, 255)"){
			window.location.href="buy.html?type=3";
			alert("已审批，点击跳转");
		}else{
			alert("请填写审批结果后再确定");
		}
		
	}
	