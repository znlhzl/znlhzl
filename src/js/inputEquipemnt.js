	
	left();
	
	var keep=document.getElementsByClassName("keep")[0];
	var news =document.getElementsByClassName("new")[0];
	keep.onclick=function(){
		window.history.go(-2);
	}
	
	news.onclick=function(){
		window.history.go(-2);
	}
	
	tk("mendian","mendians","0");
	tk("pinpai","pinpais","0");
	tk("xinhao","xinhaos","0");
		
	
	var ems =document.getElementsByTagName("em");
	for(var i=0;i<ems.length;i++){
		ems[i].innerHTML=sessionStorage.num ;
	}