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
            
         /* ---------------------------点击跳转---------------------------------*/
        
        var sections = document.getElementsByTagName("section");
        
        for(var i = 0;i < sections.length;i++){
        	sections[i].onclick=function(){
        		window.location.href="contractMore.html";
        	}
        }
	
		/*---------------------------------------------------------*/
		var bs =document.getElementById("divs").getElementsByTagName("b");
		for(var k=0;k<bs.length;k++){
			if(bs[k].innerHTML=="已完成"){
				bs[k].style.color="#3EC68B";
			}
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		

