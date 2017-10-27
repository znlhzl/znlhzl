	/*-----------left上一页----------------*/
	left();
	


	/*--------------------(+)-(-)-(input)------------------------*/
	var addNum = document.getElementsByClassName("message")[0].getElementsByClassName("img2");
	var minusNum = document.getElementsByClassName("message")[0].getElementsByClassName("img1");
	var inputs  =document.getElementsByClassName("message")[0].getElementsByClassName("input1");

	for(var i=0;i<minusNum.length;i++){
		minusNum[i].index = i; 
		minusNum[i].onclick=function(){
	/*		console.log(inputs[this.index].value);*/
			if(inputs[this.index].value!=0){
				inputs[this.index].value--;
			}
			
			if(inputs[this.index].value==0){
				inputs[this.index].value==0;
				this.style.opacity="0.3";
			}
		}
		
	}

	for(var i=0;i<addNum.length;i++){
		addNum[i].index = i; 
		addNum[i].onclick=function(){
			console.log(inputs[this.index].value);
			inputs[this.index].value++;
			this.previousElementSibling.previousElementSibling.style.opacity="1";
		}
		
	}

	var tijiao =document.getElementsByClassName("tijiao")[0];
	tijiao.onclick=function(){
		window.history.go(-1);
	}
	

	var autoc = document.getElementsByClassName("autoc")[0];
	autoc.innerHTML=localStorage.name ;