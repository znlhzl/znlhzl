 /*---------------------------返回上页--------------------------------------*/
			left();
			
/*-----------------------------单选按钮圆圈的图像----------------------------*/
			var uls=document.getElementsByTagName("ul")[0];
			var lis=document.getElementsByTagName("li");
			var radios =lis[0].getElementsByTagName("input");
			var imgs=lis[0].getElementsByTagName("img")[0];
			var bs= lis[0].getElementsByTagName("b");
			radios[0].onclick=function(){
				bs[1].style.color="#999999";
				bs[0].style.color="#363636";
				imgs.style.left="3.51rem";
			}

			radios[1].onclick=function(){
				bs[0].style.color="#999999";
				bs[1].style.color="#363636";
				imgs.style.left="5.37rem";
			}
/*----------------------------输入框问题------------------------------------*/

			
			
			function fun(s){
				s.onkeyup=function(){
				if(s.value!=""){
					s.style.textAlign="right";
				}else{
					s.style.textAlign="left";
				}
			}
			}
			
/*---------------------隐藏确定按钮在获取焦点时------------------------------------*/
		
		var btns =document.getElementsByTagName("button")[0];
	


/*-----------------------------------------------------------------------------*/
function news(){
	var ins =document.getElementsByTagName("input");
		for(var k=0;k<ins.length;k++){
			if(k!=0&&k!=1){
				fun(ins[k]);
			}
			
		}
}
news();
		
		
		
/*-----------------损坏明细处理---------------------------*/
/*-----------------添加新内容---------------------------*/
/*-----------------删除多余注意左侧序号---------------------------*/
/*-----------------最后一条是否保留---------------------------*/
	/*var more =document.getElementById("more");
	var ols = more.getElementsByTagName("ol")[0];
	
	var adds = document.getElementById("last").getElementsByTagName("i")[0];
	
	adds.onclick =function(){
		var olMore = document.createElement("ol");
		var num =more.children.length;
		olMore.className ="ol-more";
				olMore.innerHTML='<ol>'
		 		olMore.innerHTML+='<li class="first"><span>明细 <i>('+num+')</i></span><b>删除</b></li>';
		 		olMore.innerHTML+='<li><span>配件名称</span><input type="text" placeholder="请输入配件名称"/></li>';
		 		olMore.innerHTML+='<li><span>数量</span><input type="text" placeholder="请输入配件数量" /></li>';
		 		olMore.innerHTML+='</ol>';
		 		more.appendChild(olMore);
		 		news();
	}*/
	
	
/*	-------------------动态添加和删除和序列号重排-------------------------*/
$(function(){
    $('#addOl').click(function(){
    	var num =more.children.length;
        $('#more').append('<ol class="ol-more"><li class="first"><span>明细 <i>('+num+')</i></span><b class="btn-clear">删除</b></li><li><span>配件名称</span><input type="text" placeholder="请输入配件名称"/></li><li><span>数量</span><input type="number" placeholder="请输入配件数量" /></li></ol>'); 
        news();
        dels(1); //删除事件1
    });
    function dels(e){
        $('.btn-clear').bind('click','b',function(){
            $(this).parent().parent().remove();
            console.log(e);
            
           /* 序号重排序*/
            $('#more').find("ol").each(function(i){
    	$(this).find("i").text("("+parseInt(i+1)+")")
    })
        });
    }
    
    
});










