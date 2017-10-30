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

		/*-------------------------------红圈删除和添加-----------------------------*/
		for(var i=0;i<btns.length;i++){
		
				var spans=document.getElementById("top").getElementsByTagName("span");
				if(divs[i].children.length<1){
					spans[i].style.opacity=0;
				}
				else{
					spans[i].style.opacity=1;
				}
			
		}
		
		
		/*-----------------------接单和待处理样式------------------------------*/
		
		var buttons=document.getElementById("divs").getElementsByTagName("button");
		for(var i=0;i<buttons.length;i++){
			
			if(buttons[i].innerHTML=="待处理"){
				buttons[i].style.background="#FAFAFA";
				buttons[i].style.color=" #0082D9";
			}
			if(buttons[i].innerHTML=="接单"){
					buttons[i].style.background="#0082D9";
					buttons[i].style.color="#FAFAFA";
			}
		}
		
		/*-----------------------------跳转页面---------------------------------------*/
		var divs =document.getElementById("divs").getElementsByTagName("div");
		var sections= divs[0].getElementsByTagName("section");
		for(var i=0;i<sections.length;i++){
			if(buttons[i].innerHTML=="接单"){
				sections[i].onclick=function(){
				window.location.href="fieldOrder.html";
				}
			}else{
				sections[i].onclick=function(){
				window.location.href="inField.html";
				}
			}
			
		}
		
		var sections1 =divs[1].getElementsByTagName("section");
		for(var i=0;i<sections1.length;i++){
			if(buttons[i].innerHTML=="接单"){
				sections1[i].onclick=function(){
				window.location.href="fieldOrder.html";
				}
			}else{
				sections1[i].onclick=function(){
				window.location.href="outField.html";
			}
			}
			
			
		}
		
		

