define(['jquery'], function($) {
    'use strict';

    var DEFAULT_MIN_HEIGHT = 500;
    var DEFAULT_FREECUSTOMS_TOP = 84;
    var SLIDE_CLASS = ".fn-slide";
    var SLIDE_PARALLAX_CLASS = ".fn-slide li.slideactive";
    var SLIDE_DES_CLASS = ".herotestimonial-des";
    var VIEWPORT_HEIGHT = window.innerHeight || document.body.clientHeight;
    
    var $window = $(window);

    return {
        'init': function() {

            var $freecustoms = $(".fn-freecustoms");
            var $freecustomsFixed = $(".fn-freecustoms-fixed");
            var heightFreeCustoms = $freecustoms.height();
            var heightFreeCustomsFixed = $freecustomsFixed.height();
            var parallaxRate = (heightFreeCustomsFixed - heightFreeCustoms) / (VIEWPORT_HEIGHT + heightFreeCustoms);
            var absFreeCustomsTop = $freecustoms.get(0).getBoundingClientRect().top;
            $freecustomsFixed.css("top", ((heightFreeCustomsFixed - heightFreeCustoms)-(VIEWPORT_HEIGHT - absFreeCustomsTop) * parallaxRate) * -1);

            // Attach window scroll event
            $window.scroll(function() {
                var scrollTop = $window.scrollTop();
                // Slide parallax
                (function(){
                    var $activeSlide = $(SLIDE_PARALLAX_CLASS);
                    var $activeSlideFG = $activeSlide.find("> div");
                    var $activeSlideDes = $activeSlide.find(SLIDE_DES_CLASS);
                    var $slideButton = $(SLIDE_CLASS).find("a");
                    var MIN_HEIGHT = $activeSlide.height() || DEFAULT_MIN_HEIGHT;
                    if (scrollTop > MIN_HEIGHT) {
                        return;
                    }

                    $activeSlide.css("backgroundPositionY", scrollTop);
                    $activeSlideFG.css("backgroundPositionY", scrollTop / 1.5);
                    $activeSlideDes.css("top", scrollTop / 3);
                    $slideButton.css("marginTop", scrollTop/1.8);
                })();

                // Free customs parallax
                (function(){
                    var absFreeCustomsTop = $freecustoms.get(0).getBoundingClientRect().top;
                    if(absFreeCustomsTop > VIEWPORT_HEIGHT || absFreeCustomsTop < -1 * heightFreeCustoms){
                        return;
                    }
                    $freecustomsFixed.css("top", ((heightFreeCustomsFixed - heightFreeCustoms)-(VIEWPORT_HEIGHT - absFreeCustomsTop) * parallaxRate) * -1);
                })();

            });

        }
    };

});