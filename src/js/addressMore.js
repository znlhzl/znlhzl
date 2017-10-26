
left();

var imglis =document.getElementsByTagName("ul")[0].getElementsByTagName("img");

for(var i=0;imglis.length>i;i++){
	
	if(i%2==0){
		imglis[i].onclick =function(){
			window.location.href="addressPeople.html";
//			window.open("addressPeople.html");
		}
	}
}


var as=document.getElementsByTagName("ul")[0].getElementsByTagName("a");
for(var j=0;j<as.length;j++){
	as[j].onclick=function(){
		/*调用电话号码，后台数据*/
		this.href="tel:18055969076";
	}
}


