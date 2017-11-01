left();
	/*----------单选--------------*/
	var radios =document.getElementsByClassName("radios")[0];
	var year =document.getElementsByClassName("year")[0];
	var month =document.getElementsByClassName("month")[0];
	
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