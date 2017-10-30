		/*---------------------------返回上页--------------------------------------*/
			var prev = document.getElementById("left");
			
			prev.onclick =function(){
				window.history.go(-1);
			}

		/*----------------------------tab栏切换-----------------------------------*/
			var btns =document.getElementById("top").getElementsByTagName("div");
            var divs = document.getElementById("divs").getElementsByTagName("div");
            for(var i= 0;i<btns.length-1;i++)
            {
                btns[i].index = i;  // 难点
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
                    //先隐藏下面所有的 div盒子
                    //留下中意的那个 跟点击的序号有关系的
                    divs[this.index].className = "show";
                }
            }
		/* -----------------------------判断颜色---------------------------------*/
		var bs=document.getElementById("divs").getElementsByTagName("b");
		var sections = document.getElementById("divs").getElementsByTagName("section");
		for(var i=0;i<bs.length;i++){
			if(bs[i].innerHTML=="审批通过"){
				bs[i].style.color="#3EC68B";
				sections[i].onclick=function(){
					window.location.href="changeGo.html";
				}
			}else if(bs[i].innerHTML=="已拒绝"){
				bs[i].style.color="#FE3F3B";
				sections[i].onclick=function(){
					window.location.href="changeJujue.html";
				}
			}else if(bs[i].innerHTML=="已作废"){
				bs[i].style.color="#FD8822";
				sections[i].onclick=function(){
					window.location.href="changeMore.html";
				}
			}else{
				sections[i].onclick=function(){
					window.location.href="changeRead.html";
				}
			}
		}

		/*--------------------------模态框和新页面--------------------------------*/
		selectsMove(3);
		
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
		adds('changeAdd.html');
		
		
		
		selectDate("date1","date2");
		
		
		

		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		

