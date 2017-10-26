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
            
		/*--------------------验机按钮---------------------------*/
			var tests = document.getElementById("device").getElementsByTagName("ol")[0].getElementsByTagName("button");
			for(var j=0;j<tests.length;j++){
				if(tests[j].innerHTML=="验机通过"){
					tests[j].style.color="#3EC68B";
					tests[j].style.background="#FAFAFA";
				}else if(tests[j].innerHTML=="验机异常"){
					tests[j].style.color="#FE3F3B";
					tests[j].style.background="#FAFAFA";
				}
				
				if(tests[j].innerHTML=="验机"){
					tests[j].onclick=function(){
						window.location.href="checkDevice.html";
					}
				}
			}
	/*---------------发起物流--------------------*/
			var start =document.getElementsByClassName("start")[0];
			start.onclick=function(){
				window.location.href="newLog.html";
			}
			
			var ur =location.href;
		if(ur.indexOf("?")>-1){
		var type=ur.split('?')[1].split("=")[1];
		$('#divs div').removeClass('show');
		$('#top div').removeClass('blue');
		$('#top div').eq(type-1).addClass('blue');
		$('#divs div').eq(type-1).addClass('show');
		}
			
	

