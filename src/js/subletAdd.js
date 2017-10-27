	/*-------回到上页-----------*/
	left();
	
    /*----------单选--------------*/
	var radios =document.getElementsByClassName("radios")[0];
	var year =document.getElementsByClassName("year")[0];
	var month =document.getElementsByClassName("month")[0];
	
	year.onclick=function(){
		radios.style.display="block";
		radios.style.right="2.09rem";
		radios.style.top="0.14rem";
	}
	
	month.onclick=function(){
		radios.style.display="block";
		radios.style.right="0.56rem";
		radios.style.top="0.14rem";
	}
	
	if(year.checked){
		radios.style.display="block";
		radios.style.right="2.09rem";
		radios.style.top="0.14rem";
	}
	if(month.checked){
		radios.style.display="block";
		radios.style.right="0.56rem";
		radios.style.top="0.14rem";
	}

 /*	-------------------动态添加和删除和序列号重排-------------------------*/
	$(function(){	
	tk("gys","gyss","0");
	tk("pinpai","pinpais",0);
	tk("xinhao","xinhaos",0);
		

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
	
	
		
    $('#addOl').click(function(){
    	var num =more.children.length+1;
        $('#more').append('<ol class="div-more"><li class="li-first"><span>明细 <i>('+num+')</i></span><b class="btn-clear">删除</b></li><li class="pinpai"><span>品牌</span><s></s><img src="../img/next.png" class="next pins" /></li><li class="xinhao"><span>型号</span><s></s><img src="../img/next.png" class="next xins" /></li><li><span>台量</span><input type="number" placeholder="请输入台量" class="num1" oninput="autoAdd()"/></li><li><span>单价(元)</span><input type="number" placeholder="请输入单价" class="num2" oninput="autoAdd()" /></li><li class="li-last"><span>小计(元)</span><b class="num3">自动计算</b></li></ol>')
		we();
        autoAdd();
        dels(1);    
       
    });
    function dels(e){
        $('.btn-clear').bind('click','b',function(){
            $(this).parent().parent().remove();
           /*序号重排序*/
          	we();
            $('#more').find("ol").each(function(i){
    			$(this).find("i").text("("+parseInt(i+1)+")")
   			 })
        }); 

    }
    
	dels(1);
      
});



var ok=document.getElementsByClassName("ok")[0];
	
	
	
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
			window.location.href="sublet.html";
		}
			
	}
	tk("gys","gyss","0");
		
		

