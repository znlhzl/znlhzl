		/*---------left-------*/	
		left();
	
		tkother("suopei","suopeis","0");
		
		var custom = document.getElementsByClassName("custom");
		var factory= document.getElementsByClassName("factory");
		
		function tkother(a,b,c){
		var biglis = document.getElementsByClassName(a)[c];
		var popovers = biglis.getElementsByTagName("img")[0];
		var tck = document.getElementsByClassName(b)[0];
		var mark = document.getElementById("mark");
		popovers.onclick=function(){
			tck.style.display="block";
			mark.style.display="block";
			mark.style.background="rgba(0,0,0,0.60)";	
		}
		
		var tcklis =tck.getElementsByTagName("li");
		var ss =biglis.getElementsByTagName("s")[0];
		for(var i=0;i<tcklis.length;i++){
			tcklis[i].onclick=function(){
				clearTimeout(timer);
				_self=this;
				ss.innerHTML=_self.innerHTML;
				ss.style.color="#363636";
				
				this.style.color="rgba(0,130,217,1)";
				if(ss.innerHTML=="客户索赔"){
					for(var i=0;i<factory.length;i++){
						factory[i].style.display="none";
						custom[i].style.display="block";
					}
				}
				if(ss.innerHTML=="工厂索赔"){
					for(var i=0;i<factory.length;i++){
						custom[i].style.display="none";
						factory[i].style.display="block";
					}
				}
				var timer=setTimeout(function(){
					_self.parentNode.parentNode.style.display="none";
					_self.style.color="#363636";
					mark.style.display="none";
				},300);	
			}
		}
	}
		/*------------------总金额---------------------*/
		var allmoney = document.getElementsByClassName("allmoney")[0];
		allmoney.onclick =function(){
			var danjia =document.getElementsByClassName("num3");
			var num=0;
			for(var i=2;i<danjia.length;i++){
				if(typeof(parseInt(danjia[i].innerHTML))!="number" ){
					danjia[i].innerHTML=0;
				}
				num+=parseInt(danjia[i].innerHTML);
			}
			allmoney.innerHTML = num;
		}
		
		
		var ok = document.getElementsByClassName("ok")[0];
		var ol = document.getElementsByTagName("ol");
		ok.onclick=function(){
//			window.location.href="claim.html";
			window.history.go(-1);
		}
		
		
		
	 /*	-------------------动态添加和删除和序列号重排-------------------------*/
	$(function(){
    $('#addOl').click(function(){
    	var num =more.children.length+1;
        $('#more').append('<ol class="div-more writeul"><li class="li-first"><span>明细 <i>('+num+')</i></span><b class="btn-clear">删除</b></li><li><span>配件名称</span><input placeholder="请输入（必填）" /></li><li><span>数量</span><input placeholder="请输入（必填）" class="num1" onkeyup="autoAdd()" /></li><li><span>单价</span><input placeholder="请输入（必填）" class="num2" onkeyup="autoAdd()"/></li><li><span>小计</span><b class="rights num3">自动计算</b></li></ol>')
       autoAdd();
       dels(1);
        
    });
    function dels(e){
        $('.btn-clear').bind('click','b',function(){
            $(this).parent().parent().remove();
           /* 序号重排序*/
            $('#more').find("ol").each(function(i){
    			$(this).find("i").text("("+parseInt(i+1)+")")
   			 })
        });
    }

});