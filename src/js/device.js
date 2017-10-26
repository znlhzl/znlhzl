		
	
		
          var divs = document.getElementById("divs").getElementsByTagName("div");
          

		/*--------------------------模态框和新页面--------------------------------*/
		var mark = document.getElementById("mark");
		var selects=document.getElementById("selects");
		var sels=document.getElementsByTagName("header")[0].getElementsByTagName("div")[0];
		sels.onclick=function(){
			mark.style.display="block";
			mark.style.background="rgba(0,0,0,0.60)" ;
			selects.style.display="block";
			selects.style.zIndex="200";
		}
		
		
		
		mark.onclick=function(){
			selects.style.display="none";
			mark.style.display="none";
		}
		
		
	/*-----------------跳转页面-------------------*/

		var sections=document.getElementsByTagName("section");
		for(var i=0;i<sections.length;i++){
			sections[i].onclick=function(){
				this.style.opacity="0.5";
				delayURL('devicemore.html');
			}
		}
		
	
		/* -----------------------------判断颜色---------------------------------*/
		var bs=document.getElementById("divs").getElementsByTagName("b");
		
		for(var i=0;i<bs.length;i++){
			if(bs[i].innerHTML=="待进场"){
				bs[i].style.color="#FD9336";
			}else if(bs[i].innerHTML=="报停"){
				bs[i].style.color="#FF715D";
			}else if(bs[i].innerHTML=="整备"){
				bs[i].style.color="#63CFE8 ";
			}else if(bs[i].innerHTML=="在租"){
				bs[i].style.color="#3EC68B";
			}
		}
	
	
	/*---------------------------------筛选页面----------------------------------*/
		function selectAll(){
		/*-----------------------------------勾选------------------------------------*/
		var lis = selects.getElementsByTagName("li");
	
		/*需要在css里增加一个新的样式*/
		for(var i=0;i<lis.length;i++){
			var ass=lis[i].getElementsByTagName("a");
			for(var k=0;k<ass.length;k++){
				ass[k].onclick=function(){
					if(this.className==""){
						this.className="change-color";
						}else{
						this.className="";
						}
					}
			}
		}
		
		/*-------------------------reset按钮-------------------------------*/
		var resets = document.getElementById("selects").getElementsByTagName("button")[0];
		resets.onclick=function(){
			var aAll =document.getElementById("selects").getElementsByTagName("a");
			for(var i=0;i<aAll.length;i++){
				aAll[i].className ="";
			}
		}
	}
		selectAll();
		
		
		
		