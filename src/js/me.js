var changepw = document.getElementById("changepw");
changepw.onclick = function(){
	window.open("changepw.html","_self");
}




/*----------跳转登录页-------------*/
var leaves =document.getElementsByTagName("button")[0];

leaves.onclick=function(){
	leaves.backgroundColor="#006BB3";
//	window.location.href="login.html";
	window.open("login.html","_self");
}



