var agree= document.getElementsByClassName("agree")[0];
	
		var disagree =document.getElementsByClassName("disagree")[0];
	
		var ok =document.getElementsByClassName("ok")[0];
		
	agree.onclick=function(){
		agree.style.background="#0082D9";
		disagree.style.background="none";
		agree.style.color="#FFFFFF";
		disagree.style.color="#979797";
		agree.style.border="none";
		disagree.style.border="1px solid #979797";
			
	}
	disagree.onclick =function(){
		disagree.style.background="#0082D9";
		agree.style.background="none";
		disagree.style.color="#FFFFFF";
		agree.style.color="#979797";
		disagree.style.border="none";
		agree.style.border="1px solid #979797";
		
	}
	
	
	ok.onclick=function(){
		if(agree.style.color=="rgb(255, 255, 255)"||disagree.style.color=="rgb(255, 255, 255)"){
			window.location.href="serves.html?type=3";
		}else{
			alert("请审批后再提交");
		}
		
	}