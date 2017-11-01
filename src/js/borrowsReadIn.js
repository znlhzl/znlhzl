	
	pizhun();
	
	var oks =document.getElementsByClassName("ok")[0];
	oks.onclick=function(){
		var agree = document.getElementsByClassName("agree")[0];
		var disagree = document.getElementsByClassName("disagree")[0];
		if(agree.style.color=="#FFFFFF"||disagree.style.color){
			window.location.href="borrows.html?type=3";
			alert("已成功审核，点击跳转页面");
		}else{
			alert("请对工单审批后再确定");
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