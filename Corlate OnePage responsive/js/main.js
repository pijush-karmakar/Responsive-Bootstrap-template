jQuery(function($) {'use strict',

	

	//Initiat WOW JS ......
	new WOW().init();

	
});	

   // ---------------------------------------------- 
    //  magnific-popup
    // ----------------------------------------------

  jQuery(document).ready(function($){
    
    (function () {

        $('.portfolio-items').magnificPopup({ 
            delegate: 'a',
            type: 'image',
            // other options
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',

            gallery: {
                enabled: false
            },
            zoom: {
                enabled: true,
                duration: 300, // don't foget to change the duration also in CSS
                opener: function(element) {
                    return element.find('i');
                }
            }

        });

    }()); 


}); 



 // Isotope activation js codes

jQuery(document).ready(function($){
   
     // Activate isotope in container
 
    $(".portfolio-items").isotope({
        itemSelector: '.single-item',
        layoutMode: 'fitRows',
    });
    
    // Add isotope click function
    
    $('.portfolio-filter li').click(function(){
        $(".portfolio-filter li").removeClass("active");
        $(this).addClass("active");
 
        var selector = $(this).attr('data-filter');
        $(".portfolio-items").isotope({
            filter: selector,
            animationOptions: {
                duration: 850,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });

    
});    

/* testimonial */

 $(document).ready(function() {
  (function () {

    $(".st-testimonials").owlCarousel({
    singleItem:true,
    lazyLoad : true,
    pagination:false,
    navigation : false,
    autoPlay: true,
    });

  }());

	});
	
	   // Parallax Scrolling
    // ----------------------------------------------
   $(document).ready(function() { 
  (function () {
    $(window).bind('load', function () {
      parallaxInit();             
    });
    function parallaxInit() {   
      $("#testimonial").parallax("50%", 0.3);
    } 
    parallaxInit();
  }());
	
    });
	
     
//   ---------   for scrolling effect --------- // 

     (function ($) {
                
    // Navigation scrolls
    $('.navbar-nav li a').bind('click', function(event) {
        $('.navbar-nav li').removeClass('active');
        $(this).closest('li').addClass('active');
        var $anchor = $(this);
        var nav = $($anchor.attr('href'));
        if (nav.length) {
        $('html, body').stop().animate({                
            scrollTop: $($anchor.attr('href')).offset().top             
        }, 1500, 'easeInOutExpo');
        
        event.preventDefault();
        }
    });
    
   // Add smooth scrolling to all links in navbar
    $(".navbar a, a.mouse-hover, .overlay-detail a").on('click', function(event) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
    });  
   
}) (jQuery);