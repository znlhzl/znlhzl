		/*---------------------------返回上页--------------------------------------*/
		left();
		
		var ur =location.href;
		if(ur.indexOf("?")>-1){
		var type=ur.split('?')[1].split("=")[1];
		$('#divs div').removeClass('show');
		$('#top div').removeClass('blue');
		$('#top div').eq(type-1).addClass('blue');
		$('#divs div').eq(type-1).addClass('show');
		}
		
		
		/*----------------------------tab栏切换-----------------------------------*/
			var btns =document.getElementById("top").getElementsByTagName("div");
            var divs = document.getElementById("divs").getElementsByTagName("div");
            for(var i= 0;i<btns.length-1;i++)
            {
                btns[i].index = i;  
                btns[i].onclick = function(){
                    //让所有的 btn 类名清空
                    //alert(this.index);
                    for(var j=0;j<btns.length-1;j++)
                    {
                        btns[j].className = "";
                        divs[j].className = "";
                    }
                    // 当前的那个按钮 的添加 类名
                    this.className = "blue";
                    divs[this.index].className = "show";
                }
            }
		/* -----------------------------判断颜色---------------------------------*/
		var bs=document.getElementById("divs").getElementsByTagName("b");
		var buttons = document.getElementById("divs").getElementsByTagName("button");
		var sections =document.getElementById("divs").getElementsByTagName("section");
		
		for(var i=0;i<bs.length;i++){
			if(bs[i].innerHTML=="待接单"){
				bs[i].style.color=" #FF715D";
				buttons[i].style.background=" #FF715D";
				sections[i].onclick=function(){
					window.location.href="servesAllotAgain.html";
				}
			}else if(bs[i].innerHTML=="待审批"){
				bs[i].style.color="#0082D9";
				buttons[i].style.background="#0082D9";
				sections[i].onclick=function(){
					if(this.getElementsByTagName("small")[2].innerHTML.indexOf("报修")>-1){
						console.log("报修");
						window.location.href="servesRepair.html";
					}else{
						window.location.href="servesMaintain.html";
					}
				}
			}else if(bs[i].innerHTML=="待回访"){
				bs[i].style.color="#63CFE8";
				buttons[i].style.background="#63CFE8";
				sections[i].onclick=function(){
					if(this.getElementsByTagName("small")[2].innerHTML.indexOf("报修")>-1){
						console.log("报修");
						window.location.href="servesReturnrepair.html";
					}else{
						window.location.href="servesReturnmaintain.html";
					}
				}
			}else if(bs[i].innerHTML=="待处理"){
				bs[i].style.color=" #FFAE3D";
				buttons[i].style.display="none";
			}else if(bs[i].innerHTML=="待整改"){
				bs[i].style.color=" #6673FF";
				sections[i].onclick=function(){
					window.location.href="servesNew.html";
				}
				buttons[i].style.display="none";
			}else if(bs[i].innerHTML=="已完成"){
				bs[i].style.color=" #3EC68B";
				buttons[i].style.display="none";
			}else{
				sections[i].onclick=function(){
					window.location.href="servesAllot.html";
				}
			}
			
			
		}

		/*--------------------------模态框和新页面--------------------------------*/
		selectsMove(4);
		/*-------------------------------红圈删除和添加-----------------------------*/
		var spans=btns[2].getElementsByTagName("span")[0];
		if(divs[2].children.length<1){
			spans.style.opacity=0;
		}
		else{
			spans.style.opacity=1;
		}
		
		
		/*---------------------------------筛选页面----------------------------------*/
		selectHTML();
		/*------------------------------------加号点击事件-----------------------------------*/		
		adds('servesNew.html');
		
		
		/*-------------r日期判断-----------------*/
		selectDate("date1","date2");
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		

