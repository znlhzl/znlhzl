
	
	
	
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
		
		/*---------------------------返回上页--------------------------------------*/
			left();

		/*----------------------------tab栏切换-----------------------------------*/
			var btns =document.getElementById("top").getElementsByTagName("div");
            var divs = document.getElementById("divs").getElementsByTagName("div");
            for(var i= 0;i<btns.length-1;i++)
            {
                btns[i].index = i; 
                btns[i].onclick = function(){
               
                    for(var j=0;j<btns.length-1;j++)
                    {
                        btns[j].className = "";
                        divs[j].className = "";
                    }
             
                    this.className = "blue";
                    divs[this.index].className = "show";
                }
            }
		/* -----------------------------判断颜色---------------------------------*/
		/*-----------------button点击----------------------*/
		var bs=document.getElementById("divs").getElementsByTagName("b");
		var buttons=document.getElementById("divs").getElementsByTagName("button");
		var sections=document.getElementById("divs").getElementsByTagName("section");
		
		for(var i=0;i<bs.length;i++){
			if(bs[i].innerHTML=="待接单"){
				bs[i].style.color="#FF715D";
				buttons[i].style.background="#FF715D";
				sections[i].onclick=function(){
					window.location.href="borrowsAgainAssign.html";
				}
				
			}else if(bs[i].innerHTML=="待审批"){
				bs[i].style.color="#0082D9";
				buttons[i].style.background="#0082D9";
				if(sections[i].getElementsByTagName("small")[1].innerHTML.indexOf("进场")>-1){
					sections[i].onclick=function(){
					window.location.href="borrowsReadIn.html?type=2";
					}
				}
				if(sections[i].getElementsByTagName("small")[1].innerHTML.indexOf("进场")==-1){
					sections[i].onclick=function(){
					window.location.href="borrowsReadOut.html?type=2";
					}
				}
				
			}else if(bs[i].innerHTML=="待回访"){
				bs[i].style.color="#63CFE8";
				buttons[i].style.background="#63CFE8";
				sections[i].onclick=function(){
					window.location.href="borrowshuifang.html";
				}
			}else if(bs[i].innerHTML=="已完成"){
				bs[i].style.color="#3EC68B";
				buttons[i].style.display="none";
				sections[i].onclick=function(){
					window.location.href="borrowsFinish.html";
				}
			}else if(bs[i].innerHTML=="待处理"){
				bs[i].style.color="#FFAE3D";
				buttons[i].style.display="none";
				sections[i].onclick=function(){
					window.location.href="borrowsDaichuli.html";
				}
			}else{
				sections[i].onclick=function(){
					window.location.href="borrowsAssign.html";
				}
			}
		}
		
		/*--------------------------模态框和新页面--------------------------------*/
				
		selectsMove(4);
				
		/*-------------------------------红圈删除和添加-----------------------------*/
			
		for(var i=0;i<btns.length-2;i++){
			if(i>0){
				var spans=btns[i].getElementsByTagName("span")[0];
				if(divs[i].children.length<1){
					spans.style.opacity=0;
				}
				else{
					spans.style.opacity=1;
				}
			}
		}
		
		/*---------------------------------筛选页面----------------------------------*/
		
		/*-----------------------------------勾选------------------------------------*/
		var selects=document.getElementById("selects");
				
		/*----------------------------------收缩和展开-------------------------------------*/
		selectHTML();
		
		/*		-----------------日期判断----------------------------------*/
		selectDate("date1","date2");


	