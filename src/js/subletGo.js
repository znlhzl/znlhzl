	sessionStorage.setItem('name','转租');
	sessionStorage.setItem("num","转租台量:");
	left();
	var fqwl =document.getElementsByClassName("fqwl")[0];
	var lrsb =document.getElementsByClassName("lrsb")[0];
	fqwl.onclick=function(){
		window.location.href="newLog.html";
	}
	
	lrsb.onclick=function(){
		window.location.href="inputEquipment.html";
	}
	
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