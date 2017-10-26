	/*---------返回上一页-------------*/
	left();
	
	/*----------跳转新页面------------*/
	adds('stopNew.html');
	
	
	
	/*----------------------------tab栏切换-----------------------------------*/
			var btns =document.getElementById("top").getElementsByTagName("div");
            var divs = document.getElementById("divs").getElementsByTagName("div");
            for(var i= 0;i<btns.length;i++)
            {
                btns[i].index = i;  // 难点
                btns[i].onclick = function(){
                    //让所有的 btn 类名清空
                    //alert(this.index);
                    for(var j=0;j<btns.length;j++)
                    {
                        btns[j].className = "";
                        divs[j].className = "";
                    }
                    // 当前的那个按钮 的添加 类名
                    this.className = "blue";
                    //先隐藏下面所有的 div盒子
                    //留下中意的那个 跟点击的序号有关系的
                    divs[this.index].className = "show";
                }
            }
            
       
		/* -----------------------------判断颜色---------------------------------*/
		var bs = document.getElementById("divs").getElementsByTagName("b");
		var buttons = document.getElementById("divs").getElementsByTagName("button");
		var sections = document.getElementById("divs").getElementsByTagName("section");
		var smalls = document.getElementById("divs").getElementsByTagName("small");
		for(var i=0;i<bs.length;i++){
			if(bs[i].innerHTML=="已报停"){
				bs[i].style.color=" #FD9336";
				buttons[i].style.background="#FD9336";
				sections[i].onclick=function(){
					window.location.href="stopadvanceUse.html";
				}
			}else if(bs[i].innerHTML=="已拒绝"){
				bs[i].style.color="#FF715D";
				buttons[i].style.background="#FF715D";
				sections[i].onclick=function(){
					window.location.href="stopNew.html";
				}
			}else if(bs[i].innerHTML=="已开机"){
				bs[i].style.color="#3EC68B";
				buttons[i].style.display="none";
				sections[i].onclick=function(){
					window.location.href="stopadvanceMore.html";
				}
			}else{
				sections[i].onclick=function(){
					
				var smalls =this.getElementsByTagName("small")[1];
				
					if(smalls.innerHTML.indexOf("启用")>-1){
						window.location.href="stopadvanceChoose.html";
					}else{
						window.location.href="stopChoose.html";
					}
				}
			}
		}

		
		/*-----------------------------红圈删除和添加-----------------------------*/
		
		
		var spans =document.getElementById("top").getElementsByTagName("span");
		for(var i=0;i<spans.length;i++){
			if(divs[i+1].children.length<1){
			spans[i].style.opacity=0;
			}
		else{
			spans[i].style.opacity=1;
			}
		}
		
		/*------------------------------待审批详情页-------------------------------------*/
		
//		var cls =document.getElementsByClassName("cls");
//		for(var i=0;i<cls.length;i++){
//			cls[i].parentNode.parentNode.onclick=function(){
//				window.location.href="stopMore.html";
//			}
//		}
//		
		/*--------------------------审批按钮---------------------------*/
//		var pressBtn =document.getElementsByTagName("button");
//		for(var j=0;j<pressBtn.length;j++){
//			
//				
//				pressBtn[j].onclick=function(e){
//					if(this.innerHTML=="审批"){
//						window.location.href="stopChoose.html";
//						window.event? window.event.cancelBubble = true : e.stopPropagation();
//					}
//
//					
//				}
//				
//			
//		}
		
		
		
		
