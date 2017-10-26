left();
	tk("xinhao","xinhaos","0");
	tk("mendian","mendians","0");
	var maintain = document.getElementsByClassName("maintain");
	var repair = document.getElementsByClassName("repair");
	for(var i=0;i<maintain.length;i++){
		maintain[i].style.display="none";
	}
	
		tkothers("gdlx","gdlxs","0");
		function tkothers(a,b,c){
		var biglis = document.getElementsByClassName(a)[c];
		var popovers = biglis.getElementsByTagName("img")[0];
		var tck = document.getElementsByClassName(b)[0];
		var mark = document.getElementById("mark");
		popovers.onclick=function(){
			tck.style.display="block";
			mark.style.display="block";
			mark.style.background="rgba(0,0,0,0.60)";	
		}
		
		var tcklis =tck.getElementsByTagName("li");
		var ss =biglis.getElementsByTagName("s")[0];
		for(var i=0;i<tcklis.length;i++){
			tcklis[i].onclick=function(){
				clearTimeout(timer);
				_self=this;
				ss.innerHTML=_self.innerHTML;
				ss.style.color="#363636";
				
				this.style.color="rgba(0,130,217,1)";
				if(ss.innerHTML=="报修"){
					for(var i=0;i<repair.length;i++){
						maintain[i].style.display="none";
						repair[i].style.display="block";
					}
				}
				if(ss.innerHTML=="保养"||ss.innerHTML=="整备"){
					for(var i=0;i<repair.length;i++){
						repair[i].style.display="none";
						maintain[i].style.display="block";
					}
				}
				var timer=setTimeout(function(){
					_self.parentNode.parentNode.style.display="none";
					_self.style.color="#363636";
					mark.style.display="none";
				},300);	
			}
		}
	}
		
	var ok =document.getElementsByClassName("ok")[0];
	ok.onclick=function(){
//		window.location.href="serves.html";
		window.history.go(-1);
	}