 /*---------------------------返回上页--------------------------------------*/
				left();
/*-----------------------------单选按钮圆圈的图像----------------------------*/
			var uls=document.getElementsByTagName("ul")[0];
			var lis=document.getElementsByTagName("li");
			var radios =lis[0].getElementsByTagName("input");
			var imgs=lis[0].getElementsByTagName("img")[0];
			var bs= lis[0].getElementsByTagName("b");
				var btns =document.getElementsByTagName("button")[0];
			radios[0].onclick=function(){
				lis[0].style.display="block";
				lis[1].style.display="block";
			    lis[2].style.display="block";
				lis[3].style.display="block";
				lis[4].style.display="block";
				bs[1].style.color="#999999";
				bs[0].style.color="#363636";
				imgs.style.left="3.51rem";
				btns.style.marginTop="0.5rem";
			}

			radios[1].onclick=function(){
				
				lis[0].style.display="block";
				lis[1].style.display="none";
			    lis[2].style.display="none";
				lis[3].style.display="none";
				lis[4].style.display="block";
				bs[0].style.color="#999999";
				bs[1].style.color="#363636";
				imgs.style.left="5.37rem";
				btns.style.marginTop="3.47rem";
				
			}
/*----------------------------输入框问题------------------------------------*/
//	
//var inputsMin = lis[1].getElementsByTagName("input")[0];
//var inputsDate = lis[2].getElementsByTagName("input")[0];
//var inputsHour = lis[3].getElementsByTagName("input")[0];
//			inputsMin.onkeyup=function(){
//				if(inputsMin.value!=""){
//					inputsMin.style.textAlign="right";
//				}else{
//					inputsMin.style.textAlign="left";
//				}
//			}
//			
//			inputsDate.onkeyup=function(){
//				if(inputsDate.value!=""){
//					inputsDate.style.textAlign="right";
//				}else{
//					inputsDate.style.textAlign="left";
//				}
//			}
//			
//			inputsHour.onkeyup=function(){
//				if(inputsHour.value!=""){
//					inputsHour.style.textAlign="right";
//				}else{
//					inputsHour.style.textAlign="left";
//				}
//			}
			

	
		
		


























