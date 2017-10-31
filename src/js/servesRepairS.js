var agree= document.getElementsByClassName("agree")[0];
	
		var disagree =document.getElementsByClassName("disagree")[0];
	
		var ok =document.getElementsByClassName("ok")[0];
		var tips =document.getElementById("tips");
	agree.onclick=function(){
		agree.style.background="#0082D9";
		disagree.style.background="none";
		agree.style.color="#FFFFFF";
		disagree.style.color="#979797";
		agree.style.border="none";
		disagree.style.border="1px solid #979797";
		tips.style.display="block";
		clearTimeout(timers);	
		var timers=setTimeout(function(){
					tips.style.display="none";
					mark.style.display="none";
					ok.innerHTML="发起索赔";
				},700);	
	}
	disagree.onclick =function(){
		disagree.style.background="#0082D9";
		agree.style.background="none";
		disagree.style.color="#FFFFFF";
		agree.style.color="#979797";
		disagree.style.border="none";
		agree.style.border="1px solid #979797";
		clearTimeout(timers);	
		var timers=setTimeout(function(){

					ok.innerHTML="确&nbsp;&nbsp;&nbsp;定";
				},700);	
	}
	ok.onclick=function(){
		window.location.href="serves.html?type=3";
	}