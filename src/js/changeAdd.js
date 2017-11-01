/*	--------回到之前页面------------------*/
	left();
		
	var ok = document.getElementsByClassName("ok")[0];
	ok.onclick=function(){
		var musts =document.getElementsByClassName("musts");
		var must =document.getElementsByClassName("must");
		var num=0;
		
		for(var j=0;j<musts.length;j++){
			if(musts[j].value==""){
				num++;
			}
		}
		for(var i=0;i<must.length;i++){
			if(must[i].innerHTML=="(必填)"||must[i].innerHTML=="（必填）"){
				num++;
			}
		}
		
		if(num!=0){
			alert("日期或其他必填项未填好")
		}else{
			
			window.location.href="change.html";
			alert("已成功提交");
		}
	}

/*-------------动态添加的内容弹框问题--------------------*/
	function we(){
		var pins = document.getElementById("more").getElementsByClassName("pins");
		var xins =document.getElementById("more").getElementsByClassName("xins");
		for( var j=0;j<pins.length;j++){
			 pins[j].index = j; 
			pins[j].onmousedown=function(){
				tk("pinpai","pinpais",this.index);			
			}
		}
		for( var j=0;j<xins.length;j++){
			 xins[j].index = j; 
			xins[j].onmousedown=function(){
				tk("xinhao","xinhaos",this.index);			
			}
		}
	}
	tk("drmd","drmds","0");
	tk("dcmd","dcmds","0");
	tk("pinpai","pinpais","0");
	tk("xinhao","xinhaos","0");
	
/*	-------------------动态添加和删除和序列号重排-------------------------*/
$(function(){
    $('#addOl').click(function(){
    	var num =more.children.length+1;
        $('#more').append('<ol class="div-more"><li class="li-first"><span>明细 <i>('+num+')</i></span><b class="btn-clear">删除</b></li><li class="pinpai"><span>品牌</span><s></s><img src="../img/next.png" class="next pins" /></li><li class="xinhao"><span>型号</span><s></s><img src="../img/next.png" class="next xins" /></li><li><span>台量</span><input type="number" placeholder="请输入台量" /></li></ol>'); 
        we();
        dels(1); //删除事件1
    });
    function dels(){
        $('.btn-clear').bind('click','b',function(){
            $(this).parent().parent().remove(); 
            we();
           /* 序号重排序*/
            $('#more').find("ol").each(function(i){
    	$(this).find("i").text("("+parseInt(i+1)+")")
    })
        });
     
    }
        dels(1);
});

