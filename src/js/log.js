		/*---------------------------返回上页--------------------------------------*/
			left();
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
		var bs = document.getElementById("divs").getElementsByTagName("b");
		var buttons = document.getElementById("divs").getElementsByTagName("button");
		var sections = document.getElementById("divs").getElementsByTagName("section");
		for(var i=0;i<bs.length;i++){
			if(bs[i].innerHTML=="已完成"){
				bs[i].style.color="#3EC68B";
				buttons[i].style.display="none";
				sections[i].onclick=function(){
					window.location.href="logManage.html?type=1";
				}
			}else{
				sections[i].onclick=function(){
					window.location.href="logManage.html?type=1";
				}
				buttons[i].onclick=function(e){
					window.location.href="logManage.html?type=2";
					window.event? window.event.cancelBubble = true : e.stopPropagation();
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
		var spans=btns[1].getElementsByTagName("span")[0];
		if(divs[1].children.length<1){
			spans.style.opacity=0;
		}
		else{
			spans.style.opacity=1;
		}
		
		
		/*---------------------------------筛选页面----------------------------------*/
		function selectAll(){
		/*-----------------------------------勾选------------------------------------*/
		var lis = selects.getElementsByTagName("li");
	
		/*需要在css里增加一个新的样式*/
		for(var i=0;i<lis.length;i++){
			var ass=lis[i].getElementsByTagName("a");
			for(var k=0;k<ass.length;k++){
				ass[k].onclick=function(){
					if(this.className==""){
						this.className="change-color";
						}else{
						this.className="";
						}
					}
			}
		}
		
		/*-------------------------reset按钮-------------------------------*/
		var resets = document.getElementById("selects").getElementsByTagName("button")[0];
		resets.onclick=function(){
			var aAll =document.getElementById("selects").getElementsByTagName("a");
			for(var i=0;i<aAll.length;i++){
				aAll[i].className ="";
			}
		}
	}
		selectAll();
		/*------------------------------------加号点击事件-----------------------------------*/		
		adds('newLog.html');
		
		
		
	var kaishi = document.getElementsByClassName("kaishi")[0];
	var jieshu = document.getElementsByClassName("jieshu")[0];
	var dateFirst = document.getElementsByClassName("date-first")[0];
	var dateSecond = document.getElementsByClassName("date-second")[0];
	kaishi.onchange = function(){
		if(kaishi.value!=""){
			dateFirst.src="../img/dateb.png";
		}else{
			dateFirst.src="../img/date.png";
		}
	}
	
	jieshu.onchange=function(){
		if(jieshu.value!=""){
			dateSecond.src="../img/dateb.png";
		}else{
			dateSecond.src="../img/date.png";
		}
	}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		

