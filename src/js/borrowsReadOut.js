	var oks =document.getElementsByClassName("ok")[0];
	oks.onclick=function(){
		window.location.href="borrows.html?type=3";
	}
	/*------------工单审核---------------*/
	var btnss = document.getElementById("gdsp").getElementsByTagName("button");
	btnss[0].onclick=function(){
		this.style.background="#0082D9";
		this.style.color="#FFFFFF";
		btnss[1].style.background="none";
		btnss[1].style.color="#999999";
	}
	
	btnss[1].onclick=function(){
		this.style.background="#0082D9";
		this.style.color="#FFFFFF";
		btnss[0].style.background="none";
		btnss[0].style.color="#999999";
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
		
