define(['jquery'], function($){
    'use strict';

    var MIN_HEIGHT = 600;
    var SLIDE_PARALLAX_CLASS = "slide-parallax";

	return {
        'init': function(){
		
            var $window = $(window);

            // Attach window scroll event
            $window.scroll(function() {
                    
                var $activeSlide = $(".slide li.slideactive");
                var scrollTop=$window.scrollTop();
                if (scrollTop > MIN_HEIGHT) {
                    return;
                }

                $activeSlide.css("backgroundPositionY", scrollTop/5);
                $activeSlide.find(">div").css("backgroundPositionY", scrollTop/1.5);


            });

        }
    };
	
});