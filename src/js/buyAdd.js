	/*	--------回到之前页面------------------*/
		left();
		
	/*-------计划内和计划外----------------*/
	 var jhns = document.getElementsByClassName("jhns")[0];
	 var jhws = document.getElementsByClassName("jhws")[0];
	 var danxuan =document.getElementsByClassName("danxuan")[0]; 
	 jhns.onclick=function(){
	 	danxuan.style.display="block";
	 	danxuan.style.left="3.1rem";
	 }
	 jhws.onclick=function(){
	 	danxuan.style.display="block";
	 	danxuan.style.left="5.22rem";
	 }
	 
	 if(jhns.checked){
	 	danxuan.style.display="block";
	 	danxuan.style.left="3.1rem";
	 }
	 if(jhws.checked){
	 	danxuan.style.display="block";
	 	danxuan.style.left="5.22rem";
	 }
	 
	 
	 
	 var ok=document.getElementsByClassName("ok")[0];
	 ok.onclick=function(){
	 	window.location.href="buy.html";
	 }
	 /*	-------------------动态添加和删除和序列号重排-------------------------*/
	$(function(){	
	tk("caigou","caigous","0");
	tk("rzgs","rzgss","0");
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
            $('#more').find("ol").each(function(i){
    			$(this).find("i").text("("+parseInt(i+1)+")")
   			 })
        }); 

    }
    dels();

      
});

	
		 	
					
							

