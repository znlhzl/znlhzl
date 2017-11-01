		/*---------------------------返回上页--------------------------------------*/
			left();

		/*----------------------------tab栏切换-----------------------------------*/
			var btns =document.getElementById("top").getElementsByTagName("div");
            var divs = document.getElementById("divs").getElementsByTagName("div");
            for(var i= 0;i<btns.length;i++)
            {
                btns[i].index = i;  
                btns[i].onclick = function(){
                   
                    for(var j=0;j<btns.length;j++)
                    {
                        btns[j].className = "";
                        divs[j].className = "";
                    }
                    this.className = "blue";
                  
                    divs[this.index].className = "show";
                }
            }
            
        
        
		/*-------------------右侧颜色变化----------------------*/
		var spans = document.getElementById("divs").getElementsByTagName("span");
		var sections =document.getElementsByTagName("section");
		for(var i=0;i<spans.length;i++){
			var smalls =sections[i].getElementsByTagName("small")[0];
			if(spans[i].innerHTML=="已拒绝"){
				spans[i].style.color="#FF715D";
				sections[i].onclick=function(){
					window.location.href="claimNew.html";
				}
				
			}else if(spans[i].innerHTML=="已完成"){
				spans[i].style.color="#3EC68B";
				
				
				if(smalls.innerHTML.indexOf("工厂索赔")>-1){
				sections[i].onclick=function(){
					window.location.href="claimWanchengF.html";
					}
				}
				if(smalls.innerHTML.indexOf("客户索赔")>-1){
				sections[i].onclick=function(){
					window.location.href="claimWanchengC.html";
					}
				}
				
			}else{
				if((spans[i].innerHTML=="待审批")&&(smalls.innerHTML.indexOf("工厂索赔")>-1)){
				sections[i].onclick=function(){
					window.location.href="claimReadF.html";
				}
			}
			if((spans[i].innerHTML=="待审批")&&(smalls.innerHTML.indexOf("客户索赔")>-1)){
				sections[i].onclick=function(){
					window.location.href="claimReadC.html";
				}
			}
			}
		}
		
		/*------------------adds------------------------*/
		adds("claimNew.html");
		
		
		/*-----------------跳转不同的页面---------------------*/
//		
//		for(var j=0;j<sections.length;j++){
//			var smalls =sections[j].getElementsByTagName("small")[0];
//			if((spans[j].innerHTML=="待审批")&&(smalls.innerHTML.indexOf("工厂索赔")>-1)){
//				sections[j].onclick=function(){
//					window.location.href="claimReadF.html";
//				}
//			}
//			if((spans[j].innerHTML=="待审批")&&(smalls.innerHTML.indexOf("客户索赔")>-1)){
//				sections[j].onclick=function(){
//					window.location.href="claimReadC.html";
//				}
//			}
//		}
//		
//		
//		
//		
//		
//		if((spans[i].innerHTML=="待审批")&&(smalls.innerHTML.indexOf("工厂索赔")>-1)){
//				sections[i].onclick=function(){
//					window.location.href="claimReadF.html";
//				}
//			}
//			if((spans[i].innerHTML=="待审批")&&(smalls.innerHTML.indexOf("客户索赔")>-1)){
//				sections[i].onclick=function(){
//					window.location.href="claimReadC.html";
//				}
//			}
//		
//		
//		
	var ur =location.href;
		if(ur.indexOf("?")>-1){
		var type=ur.split('?')[1].split("=")[1];
		$('#divs div').removeClass('show');
		$('#top div').removeClass('blue');
		$('#top div').eq(type-1).addClass('blue');
		$('#divs div').eq(type-1).addClass('show');
		}
		
		
		
		
		

