
	var tel = document.getElementsByTagName("input")[0];
	var pw = document.getElementsByTagName("input")[1];
	var btn = document.getElementsByTagName("button")[0];
	var tips = document.getElementById("tips");
	var forget = document.getElementById("forget");
	
	tel.onfocus = function(){
		this.style.border = "2px solid #0080D6";
		missTips();
	}
	
	tel.onblur = function(){
		this.style.border = "2px solid #CCCCCC";
//		checkTel();
	}
	
	
	pw.onfocus = function(){
		this.style.border = "2px solid #0080D6";
		missTips();
	}
	
	pw.onblur = function(){
		this.style.border = "2px solid #CCCCCC";
		
	}
	
	btn.onclick =function(){
		
		if((/^1(3|4|5|7|8)\d{9}$/.test(tel.value))&&(pw.value.length>=6&&pw.value.length<=22)){
			mark.style.display="block";
			mark.style.background="rgba(0,0,0,0.60)" ;
		}else if((/^1(3|4|5|7|8)\d{9}$/.test(tel.value))&&(pw.value.length<6||pw.value.length>22)){
			tips.innerHTML="请输入6-22位密码";
	        tips.style.display="block";
		}else if(!(/^1(3|4|5|7|8)\d{9}$/.test(tel.value))&&(pw.value.length>=6&&pw.value.length<=22)){
			tips.innerHTML="请输入正确的手机号";
	        tips.style.display="block";
		}else{
			tips.innerHTML="请输入正确信息";
	        tips.style.display="block";
		}
	}
	
//	function checkPw(){
//		if(pw.value.length<6||pw.value.length>22){
//			tips.innerHTML="请输入6-22位密码";
//	        tips.style.display="block";
//		}
//		else{
//			tips.style.display="none";
//		}
//	}
//	
//	
//	function checkTel(){ 
//	/*	手机号码验证提示*/
//		if(tel.value!=""){
//			 if(!(/^1(3|4|5|7|8)\d{9}$/.test(tel.value))){ 
//			 /*	建议改为请输入正确的手机号*/
//	        tips.innerHTML="请输入11位手机号码";
//	        tips.style.display="block";
//	    	} 
//		}
//	}
	
	function missTips(){
		tips.style.display="none";
	}
	
	
	/*-------------忘记密码----------------*/
	forget.onclick = function(){
		tips.style.display="block";
		tips.innerHTML="请联系后台管理员";
		
	}
	
	/*----------------登录界面------------------*/
	
	
