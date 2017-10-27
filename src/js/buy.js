		/*---------------------------返回上页--------------------------------------*/
		left();


		// 获取页面 A 访问的 url
		var ur =location.href;
		// 获取页面 A 访问的 url 的 = 后面的 数字 （对应着这个页面的 id）
		if(ur.indexOf("?")>-1){
		var type=ur.split('?')[1].split("=")[1];
		// 使用传过来的 id 来控制该选项卡的切换
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
		var sections=document.getElementById("divs").getElementsByTagName("section");
		for(var i=0;i<bs.length;i++){
			if(bs[i].innerHTML=="审批通过"){
				bs[i].style.color="#3EC68B";
				sections[i].onclick=function(){
					window.location.href="buyGo.html";
				}
			}else if(bs[i].innerHTML=="已拒绝"){
				bs[i].style.color="#FE3F3B";
				sections[i].onclick=function(){
					window.location.href="buyJujue.html";
				}
			}else if(bs[i].innerHTML=="已作废"){
				bs[i].style.color="#FD8822";
				sections[i].onclick=function(){
					window.location.href="buyMore.html";
				}
			}else{
				sections[i].onclick=function(){
					window.location.href="buyRead.html";
				}
			}
		}

		/*--------------------------模态框和新页面--------------------------------*/
		var mark = document.getElementById("mark");
		var selects=document.getElementById("selects");
		btns[3].onclick=function(){
			mark.style.display="block";
			mark.style.background="rgba(0,0,0,0.60)" ;
			selects.style.display="block";
			selects.style.zIndex="200";
		}
		
		
		
		mark.onclick=function(){
			selects.style.display="none";
			mark.style.display="none";
		}
		
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
		adds('buyAdd.html');
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		

