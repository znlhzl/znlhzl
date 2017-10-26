	
	left();
	
	var agree= document.getElementsByClassName("agree")[0];
	
	var disagree =document.getElementsByClassName("disagree")[0];
	
	agree.onclick=function(){
		agree.style.background="#0082D9";
		disagree.style.background="none";
		agree.style.color="#FFFFFF";
		disagree.style.color="#979797";
	}
	disagree.onclick =function(){
		disagree.style.background="#0082D9";
		agree.style.background="none";
		disagree.style.color="#FFFFFF";
		agree.style.color="#979797";
	}
