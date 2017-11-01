	left();
	/*----------------------------tab栏切换-----------------------------------*/
			var btns =document.getElementById("top").getElementsByTagName("div");
            var divs = document.getElementById("divs").getElementsByTagName("div");
            for(var i= 0;i<btns.length;i++)
            {
                btns[i].index = i;  
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
                    divs[this.index].className = "show";
                }
            }
            

	
	/*----------------按钮变色--------------------------*/
	var bs=document.getElementById("onlyTwo").getElementsByTagName("b");
	var buttons =document.getElementById("onlyTwo").getElementsByTagName("button");
			for(var i=0;i<bs.length;i++){
				if(bs[i].innerHTML=="已完成"){
					bs[i].style.color="#3EC68B";
					buttons[i].style.display="none";
				}else if(bs[i].innerHTML=="运输中"){
					bs[i].style.color="#0082D9";
					buttons[i].style.background="#0082D9";
				}
			}
			
	for(var j=0;j<buttons.length;j++){
		buttons[j].onclick=function(){
			if(this.innerHTML=="装车"){
				window.location.href="inCar.html";
			}else if(this.innerHTML="卸车"){
				window.location.href="outCar.html";
			}
		}
	}
	
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
		


	tk("wls","wlss","0");
	
	/*--------------------(+)-(-)-(input)------------------------*/
	var addNum = document.getElementsByClassName("message")[0].getElementsByClassName("img2");
	var minusNum = document.getElementsByClassName("message")[0].getElementsByClassName("img1");
	var inputs  =document.getElementsByClassName("message")[0].getElementsByClassName("input1");

	for(var i=0;i<minusNum.length;i++){
		minusNum[i].index = i; 
		minusNum[i].onclick=function(){
	/*		console.log(inputs[this.index].value);*/
			if(inputs[this.index].value!=0){
				inputs[this.index].value--;
				
			}
			
			if(inputs[this.index].value==0){
				inputs[this.index].value==0;
				this.style.opacity="0.3";
			}
		}
		
	}
	for(var i=0;i<addNum.length;i++){
		addNum[i].index = i; 
		addNum[i].onclick=function(){
			console.log(inputs[this.index].value);
			inputs[this.index].value++;
			this.previousElementSibling.previousElementSibling.style.opacity="1";
		}
		
	}
	
	var ok= document.getElementsByClassName("ok")[0];
	ok.onclick=function(){
		window.location.href="log.html";
	}