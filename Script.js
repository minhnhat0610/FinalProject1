// JavaScript Document

$(document).ready(function(){
	
	$("#leftDiv div").scroll(function(){
		$('.listItem').each(function(i){
			var x = $(this).position();
			if(x.top < $("#leftDiv div").outerHeight()*0.1){
				$(this).css({"opacity": "0.5",
							 "font-size": "0.5em"});
				
			}
			
			else if(x.top > $("#leftDiv div").outerHeight()*0.8){
				
				$(this).css({"opacity": "0.5",
							 "font-size": "0.5em"});
			}
			
			else{
				$(this).css({"opacity": "1",
							 "font-size": "0.7em"});
			}
			
		
		})
	})
	
	
	
	
});
