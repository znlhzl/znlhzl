	left();
	tk("gzlx","gzlxs","0");
	tk("gzxz","gzxzs","0");
	
	  $('#addOl').click(function(){
    	var num =more.children.length+1;
        $('#more').append('<ol class="div-more"><li class="li-first"><span>明细 <i>('+num+')</i></span><b class="btn-clear">删除</b></li><li><span>配件名称</span><input type="text" placeholder="请输入名称" class="num1" /></li><li><span>数量</span><input type="number" placeholder="请输入数量" class="num2"/></li></ol>')
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
    
	var ok =document.getElementsByClassName("ok")[0];

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
			alert("必填项未填好");
		}else{	
			window.location.href="deviceDefend.html";
			alert("已成功提交");
		}
		
		
		
	}
