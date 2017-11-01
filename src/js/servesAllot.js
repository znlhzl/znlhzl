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
		checknum();
    });
    /*  ----------控制工程师数量------------------*/

    var helpgcs =document.getElementsByClassName("engineer1s")[0].getElementsByTagName("li");
    console.log(helpgcs.length);
    function checknum(){
    	var numa= document.getElementsByClassName("engineer1");
    	console.log(numa.length);
    	if(numa.length==helpgcs.length-1){
    		var addengineer=document.getElementsByClassName("add-engineer")[0];
    		addengineer.style.display="none";
    	}
    }
    checknum();
	
	
	
	function we(){
		var pins = document.getElementById("more").getElementsByClassName("engineer1");
		
		for( var j=0;j<pins.length;j++){
			 pins[j].index = j; 
			pins[j].onmousedown=function(){
				tk("engineer1","engineer1s",this.index);			
			}
		}
		
	}