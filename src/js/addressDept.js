left();


	var lis =document.getElementsByTagName("ul")[0].getElementsByTagName("li");
	
	for(var i=0;i<lis.length;i++){
		lis[i].onclick=function(){
			this.style.background="#F2F2F2";
			delayURL('addressMore.html');
		}
	}
	
	var leaders =document.getElementById("leader").getElementsByTagName("div")[0];
	leaders.onclick=function(){
		this.style.background="#F2F2F2";
			delayURL('addressPeople.html');
	}
