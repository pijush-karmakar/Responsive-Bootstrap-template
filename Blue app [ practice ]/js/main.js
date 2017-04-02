	  
     //----------- for fixed navbar ------------//

    jQuery(window).bind('scroll', function (){
  if (jQuery(window).scrollTop() >990){
    jQuery('#menu').addClass('navbar-fixed-top');
  } else {
    jQuery('#menu').removeClass('navbar-fixed-top');
  }
});

 
     //----------------- Parallax Scrolling ------------------------//
  
   $(document).ready(function() { 
    /*
  (function () {
    $(window).bind('load', function () {
      parallaxInit();             
    });
    function parallaxInit() {   
      $("#header").parallax("50%", 0.4);
    } 
    parallaxInit();
  }()); */  //  -------- or use  it ------- thats are shown in below //  

    $("#header").parallax("50%", 0.4);
    $("#Reviews").parallax("50%", 0.4);
    $("#Download").parallax("50%", 0.3); 
	
    });

   // ---------- owl carosel  --------- // 
    $(document).ready(function() {
     
      $("#owl-demo").owlCarousel({
     
          autoPlay: 3000, //Set AutoPlay to 3 seconds
     
          items : 4,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3]
     
      });
     
    });
    // ---------- owl carosel  --------- // 
  $(document).ready(function() {
     
      $("#testimonial").owlCarousel({
     
          autoPlay: 3000, //Set AutoPlay to 3 seconds
     
          items : 1,
          itemsDesktop : [1199,1],
          itemsDesktopSmall : [979,1]
     
      });
     
    });


// ------------  prettyphoto --------------//
$(document).ready(function () {
        $("a[data-rel^='prettyPhoto']").prettyPhoto({
           social_tools: false   
           
        });

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
        }, 1000, 'easeInOutExpo');
        
        event.preventDefault();
        }
    });
    
   // Add smooth scrolling to all links in navbar
    $(".navbar a, a.mouse-hover, .overlay-detail a").on('click', function(event) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function(){
            window.location.hash = hash;
        });
    });  
   
}) (jQuery);