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
	
	/*----------设备详情----------------*/
	var inputblue = document.getElementsByClassName("de-more")[0].getElementsByTagName("input");
	for(var i=0;i<inputblue.length;i++){
		
		inputblue[i].onkeyup =function(){
			if(this.value!=""){
				this.style.textAlign="right";
			}else{
				this.style.textAlign="left"
			}
		}
		
		if(inputblue[i].value!=""){
			inputblue[i].style.textAlign="right";
		}else{
			inputblue[i].style.textAlign="left";
		}
		
	}
	
	
	
	
