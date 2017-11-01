left();
	var fqwl = document.getElementsByClassName("fqwl")[0];
	var lrsb = document.getElementsByClassName("lrsb")[0];
	fqwl.onclick=function(){
		window.location.href="newLog.html";
	}
	lrsb.onclick=function(){
		window.location.href="inputEquipment.html";
	}
	sessionStorage.setItem("name","采购");
	sessionStorage.setItem("num","采购台量:");