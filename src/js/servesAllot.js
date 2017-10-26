	left();


	var ok =document.getElementsByClassName("ok")[0];
	ok.onclick=function(){
		window.location.href="serves.html?type=2"
	}
	tk("engineer","engineers","0");
	tk("engineer1","engineer1s","0");
	
		
    $('#addOl').click(function(){
    	
        $('#more').append('<div class="engineer1"><span>协作工程师</span><s>请选择协作工程师</s><img src="../img/next.png" class="next"/></div>')
		we();
    });
    

	function we(){
		var pins = document.getElementById("more").getElementsByClassName("engineer1");
		
		for( var j=0;j<pins.length;j++){
			 pins[j].index = j; 
			pins[j].onmousedown=function(){
				tk("engineer1","engineer1s",this.index);			
			}
		}
		
	}