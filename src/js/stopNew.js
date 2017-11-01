	/*-------回到上页-----------*/
	left();
	

	var ok= document.getElementsByClassName("ok")[0];
	ok.onclick=function(){
		var musts =document.getElementsByClassName("musts");
		var num=0;	
		for(var j=0;j<musts.length;j++){
			if(musts[j].value==""){
				num++;
			}
		}
	
		if(num!=0){
			alert("日期或其他必填项未填好")
		}else{
			
			window.location.href="stop.html";
			alert("已成功提交");
		}
		
		
	}
	/*-----------------日期自动添加-----------------*/
	var times = document.getElementsByClassName("times")[0];
	var days = document.getElementsByClassName("days")[0];
	var times1 =document.getElementsByClassName("times1")[0];
	times.onchange=function(){
			endDate();
	}
	days.oninput=function(){
		endDate();
	}
	
	function endDate(){
			if(times.value!=""){
			
			var str =times.value;
			var arr =str.split("-");
			//console.log(arr);
			var myDate=new Date(arr[0],arr[1]-1,arr[2]);	
			if(typeof(parseInt(days.value))){
				myDate.setDate(myDate.getDate() + parseInt((days.value)));
				var mth =parseInt(myDate.getMonth()+1);
				if(mth<10){
					mth ="0"+mth;
				}
				var dd =parseInt(myDate.getDate());
				if(dd<10){
					dd ="0"+dd;
				}
				var y= myDate.getFullYear()+"-"+mth+"-"+dd;
				times1.value=y;
			}
		
		}
	}




