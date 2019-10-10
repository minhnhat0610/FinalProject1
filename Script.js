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
	
	$("#navigationDiv nav a:first-of-type").on('click',function(e){
		e.preventDefault();
		$("#biographyTab").hide();
		$("#profileTab").fadeIn(2000);
		$("#skillsTab").hide();
		$("#educationTab").hide();
		$("#tagsTab").hide();
	})
	
	
	$("#navigationDiv nav a:nth-of-type(2)").on('click',function(e){
		e.preventDefault();
		$("#biographyTab").fadeIn();
		$("#profileTab").hide();
		$("#skillsTab").hide();
		$("#educationTab").hide();
		$("#tagsTab").hide();
	})
	
	$("#navigationDiv nav a:nth-of-type(3)").on('click',function(e){
		e.preventDefault();
		$("#biographyTab").hide();
		$("#profileTab").hide();
		$("#skillsTab").fadeIn();
		$("#educationTab").hide();
		$("#tagsTab").hide();
	})
	
	$("#navigationDiv nav a:nth-of-type(4)").on('click',function(e){
		e.preventDefault();
		$("#biographyTab").hide();
		$("#profileTab").hide();
		$("#skillsTab").hide();
		$("#educationTab").fadeIn();
		$("#tagsTab").hide();
	})
	
	
	$("#navigationDiv nav a:nth-of-type(5)").on('click',function(e){
		e.preventDefault();
		$("#biographyTab").hide();
		$("#profileTab").hide();
		$("#skillsTab").hide();
		$("#educationTab").hide();
		$("#tagsTab").fadeIn();
	})
	
	
	
	
});
