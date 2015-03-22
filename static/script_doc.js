$(document).ready(function(){
	$('.api_doc nav a, .endpoints a').click(function(){
	  $('html, body').animate({
	      scrollTop: $( $.attr(this, 'href') ).offset().top
	  }, 1000);
	  return false;
	});


	$(function(){
    var sections = {},
        _height  = $(window).height(),
        i        = 0;
    
    // Grab positions of our sections 
    $('.section').each(function(){
        sections[this.id] = $(this).offset().top;
    });

    $(document).scroll(function(){
        var $this = $(this),
            pos   = $this.scrollTop();
            
        for(i in sections){
            if( sections[i] < pos + _height){
                $('a').removeClass('active');
                $('#nav_' + i).addClass('active');
            }  
        }
    });

	});



});
