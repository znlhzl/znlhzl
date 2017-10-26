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
            
         /* ---------------------------tab栏位置---------------------------------*/
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
       
        
       
		/*-------------------内容修改-------------------------------*/
		var bs =document.getElementById("divs").getElementsByTagName("b"); 
		var sections = document.getElementsByTagName("section");
		for(var i=0;i<bs.length;i++){
			var smalls =sections[i].getElementsByTagName("small")[2];
			if(bs[i].innerHTML=="待处理"){
				bs[i].style.color="#FFAE3D";
		
					if(smalls.innerHTML.indexOf("报修")>-1){
						sections[i].onclick=function(){
							window.location.href="deviceDefendResultR.html";
						}
					}
					if(smalls.innerHTML.indexOf("保养")>-1){
						sections[i].onclick=function(){
							window.location.href="deviceDefendResultM.html";
						}
					}
					if(smalls.innerHTML.indexOf("整备")>-1){
						sections[i].onclick=function(){
							window.location.href="deviceDefendResultZ.html";
						}
					}
				
				
					
			}else if(bs[i].innerHTML=="待整改"){
				bs[i].style.color="#6673FF";
				if(smalls.innerHTML.indexOf("报修")>-1){
						sections[i].onclick=function(){
							window.location.href="deviceDefendChangeR.html";
						}
					}
					if(smalls.innerHTML.indexOf("保养")>-1){
						sections[i].onclick=function(){
							window.location.href="deviceDefendChangeM.html";
						}
					}
					if(smalls.innerHTML.indexOf("整备")>-1){
						sections[i].onclick=function(){
							window.location.href="deviceDefendChangeZ.html";
						}
					}
					
			}else{
				if(smalls.innerHTML.indexOf("报修")>-1){
						sections[i].onclick=function(){
							window.location.href="deviceDefendReceive.html";
						}
					}
					if(smalls.innerHTML.indexOf("保养")>-1){
						sections[i].onclick=function(){
							window.location.href="deviceReceiveM.html";
						}
					}
					if(smalls.innerHTML.indexOf("整备")>-1){
						sections[i].onclick=function(){
							window.location.href="deviceReceiveZ.html";
						}
					}
			}
		}
		
		
		/*-----------------------红色小圈圈----------------------------*/
		var spans = document.getElementById("top").getElementsByTagName("span");
		
		for(var j=0;j<divs.length;j++){
			if(divs[j].children.length<1){
				spans[j].style.opacity="0";
			}
			else{
				spans[j].style.opacity="1";
			}
		}
		
		
		
		
		
		
		
		
		
