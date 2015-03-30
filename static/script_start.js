  $(document).ready(function(){
  	
  	// smooth scroll when nav-click 
  	$('nav a').click(function(){
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 1000);
      return false;
  	});

  	//sticky nav funtion
	$(function(){
	  	// grab the initial top offset of the navigation 
	   	var stickyNavTop = $('#intro').offset().top;

	  	// our function that decides weather the navigation bar should have "fixed" css position or not.
	   	var stickyNav = function(){
		    var scrollTop = $(window).scrollTop(); // our current vertical position from the top
		    stickyNavTop = stickyNavTop -1;
		    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
		    // otherwise change it back to relative
		    if (scrollTop > stickyNavTop) {
		        $('nav').addClass('fixed-nav');
		    } else {
		    	//over breakpoint
		    	$('nav').removeClass('fixed-nav'); 
		    }
		};

		// and run it again every time you scroll
		$(window).scroll(function() {
			stickyNav();
		});
	});

	//show active section function
	$(function(){
	    var sections = {},
	        _height  = $(window).height(),
	        i        = 0;
	    
	    // Grab positions of sections 
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