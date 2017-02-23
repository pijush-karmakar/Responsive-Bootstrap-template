$(document).ready(function(){
	
	//Initiat WOW JS ......
	new WOW().init();

  // slider

 $('.carousel').carousel({
  interval:4000 //changes the speed
  })



});
	
//Pretty Photo	
$(document).ready(function () {
        $("a[rel^='prettyPhoto']").prettyPhoto({
           social_tools: false,    
           
        });

// For scroll up 
	 $(window).scroll(function() {
            if ($(this).scrollTop() > 180) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });

    $('.scrollup').click (function () {
       $("html,body").animate({
          scrollTop:0

       },500);
          return false;
    }); 
   




    });

// portfolio 
jQuery(document).ready(function($){
   
     // Activate isotope in container
 
    $(".portfolio-items").isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows',
    });
    
    // Add isotope click function
    
    $('.portfolio-filter li a').click(function(){
        $(".portfolio-filter li a").removeClass("active");
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