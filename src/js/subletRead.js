left();
	
	
	/*----------单选--------------*/
	var radios =document.getElementsByClassName("radios")[0];
	var year =document.getElementsByClassName("year")[0];
	var month =document.getElementsByClassName("month")[0];
	
	year.onclick=function(){
		radios.style.display="block";
		radios.style.right="2.09rem";
		radios.style.top="0.14rem";
	}
	
	month.onclick=function(){
		radios.style.display="block";
		radios.style.right="0.56rem";
		radios.style.top="0.14rem";
	}
	
	if(year.checked){
		radios.style.display="block";
		radios.style.right="2.09rem";
		radios.style.top="0.14rem";
	}
	if(month.checked){
		radios.style.display="block";
		radios.style.right="0.56rem";
		radios.style.top="0.14rem";
	}
	pizhun();
	
	var agree= document.getElementsByClassName("agree")[0];
	
	var disagree =document.getElementsByClassName("disagree")[0];
	
	
	
	var ok=document.getElementsByClassName("ok")[0];
	ok.onclick=function(){
		if(agree.style.color=="rgb(255, 255, 255)"||disagree.style.color=="rgb(255, 255, 255)"){
			window.location.href="sublet.html";
			alert("已审批，点击跳转");
		}else{
			alert("请填写审批结果后再确定");
		}
		
	}