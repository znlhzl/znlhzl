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
            
		/*---------------------------整备和发起索赔--------------------------------*/
		var suopei =document.getElementsByClassName("suopei");
		var zhengbei =document.getElementsByClassName("zhengbei");
		for(var k=0;k<suopei.length;k++){
			suopei[k].onclick=function(){
				window.location.href="claimNew.html";
			}
			zhengbei[k].onclick=function(){
				window.location.href="servesNew.html";
			}
		}
		

		
		
