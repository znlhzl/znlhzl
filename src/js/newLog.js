	/*-----------left上一页----------------*/
	left();
	


	/*--------------------(+)-(-)-(input)------------------------*/
	var addNum = document.getElementsByClassName("message")[0].getElementsByClassName("img2");
	var minusNum = document.getElementsByClassName("message")[0].getElementsByClassName("img1");
	var inputs  =document.getElementsByClassName("message")[0].getElementsByClassName("input1");

	for(var i=0;i<minusNum.length;i++){
		minusNum[i].index = i; 
		minusNum[i].onclick=function(){
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
	
	var ok=document.getElementsByClassName("ok")[0];
	ok.onclick=function(){
		var musts =document.getElementsByClassName("musts");	
		var num=0;
		for(var j=0;j<musts.length;j++){
			if(musts[j].value==""){
				num++;
			}
		}
		if(num!=0){
			alert("日期或其他必填项未填好")
		}else{
			window.history.go(-1);
			alert("已成功提交");
		}
			
	}
	
	
	var autoc = document.getElementsByClassName("autoc")[0];
	autoc.innerHTML=sessionStorage.name ;
	


