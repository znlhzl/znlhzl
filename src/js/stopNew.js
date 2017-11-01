	/*-------回到上页-----------*/
	left();
	

	var ok= document.getElementsByClassName("ok")[0];
	ok.onclick=function(){
	window.location.href="stop.html";
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




