	/*--------上一页--------------*/
	left();
	
	/*-----------折叠---------------*/
	var morepic = document.getElementsByClassName("more-pic")[0];
	
	morepic.onclick=function(){
		console.log(1);
		
		if(morepic.className=="more-pic"){
				morepic.parentNode.nextElementSibling.style.display="none";
				morepic.parentNode.nextElementSibling.nextElementSibling.style.display="none";
				morepic.parentNode.style.borderBottom="1px solid  #B3B3B3";
				morepic.className="more-pic1";
		}else{
			morepic.parentNode.nextElementSibling.style.display="block";
				morepic.parentNode.nextElementSibling.nextElementSibling.style.display="block";
				morepic.parentNode.style.borderBottom="none";
				morepic.className="more-pic";
		}
	
	}
	

	
	
	
	
