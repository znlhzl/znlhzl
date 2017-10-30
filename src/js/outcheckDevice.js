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



			
/*---------------------隐藏确定按钮在获取焦点时------------------------------------*/
		
		var btns =document.getElementsByTagName("button")[0];
	


/*-----------------------------------------------------------------------------*/


		
		

	
	
/*	-------------------动态添加和删除和序列号重排-------------------------*/
$(function(){
    $('#addOl').click(function(){
    	var num =more.children.length;
        $('#more').append('<ol class="ol-more"><li class="first"><span>明细 <i>('+num+')</i></span><b class="btn-clear">删除</b></li><li><span>配件名称</span><input type="text" placeholder="请输入配件名称"/></li><li><span>数量</span><input type="number" placeholder="请输入配件数量" /></li></ol>'); 
       
        dels(1); //删除事件1
    });
    function dels(){
        $('.btn-clear').bind('click','b',function(){
            $(this).parent().parent().remove();
           /* 序号重排序*/
            $('#more').find("ol").each(function(i){
    	$(this).find("i").text("("+parseInt(i+1)+")")
    })
        });
    }
    
    dels();	
});










