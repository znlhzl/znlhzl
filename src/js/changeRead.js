	left();
	pizhun();	
	var queding =$(".queding");
	var agree=$(".agree");
	var disagree=$(".disagree");
	queding.click(function(){
		if(agree.css('color')=="rgb(255, 255, 255)"||disagree.css('color')=="rgb(255, 255, 255)"){
			window.location.href="change.html";
			alert("已审批,点击跳转页面");
		}else{
			alert("请审批后再提交");
		}
		
	})