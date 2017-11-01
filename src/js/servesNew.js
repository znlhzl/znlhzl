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
		var leixin= document.getElementsByClassName("gdlx")[0].getElementsByTagName("s")[0];
		
		if(leixin.innerHTML.indexOf("保养")>-1||leixin.innerHTML.indexOf("整备")>-1){
			
			var mustm =document.getElementsByClassName("mustm")[0];
		
			if(mustm.value==""){
				alert("必填项请填写");
			}else{
				window.history.go(-1);
				alert("已提交，点击跳转页面");
			}
		}else if(leixin.innerHTML=="报修"){
				var musts =document.getElementsByClassName("mustr");
				var must =document.getElementsByClassName("must");
				var num=0;
			
				for(var j=0;j<musts.length;j++){
					if(musts[j].value==""){
						num++;
					}
				}
				for(var i=0;i<must.length;i++){
					if(must[i].innerHTML=="(必填)"||must[i].innerHTML=="（必填）"){
						num++;
					}
				}
				
				if(num!=0){
					alert("日期或其他必填项未填好");
				}else{
					
					window.history.go(-1);
					alert("已成功提交");
				}
		}
		
		
	}