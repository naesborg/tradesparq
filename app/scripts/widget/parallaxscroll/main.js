define(['jquery'], function($) {
    'use strict';

    var DEFAULT_MIN_HEIGHT = 500;
    var DEFAULT_FREECUSTOMS_TOP = 84;
    var SLIDE_CLASS = ".fn-slide";
    var SLIDE_PARALLAX_CLASS = ".fn-slide li.slideactive";
    var SLIDE_DES_CLASS = ".herotestimonial-des";
    var $window = $(window);

    return {
        'init': function() {

            var $freecustoms = $(".fn-freecustoms");
            var $freecustomsFixed = $(".fn-freecustoms-fixed");
            var heightFreeCustoms = $freecustoms.height();
            DEFAULT_FREECUSTOMS_TOP = $("header").height() + $(".navcontainer").height() + 4 || DEFAULT_FREECUSTOMS_TOP;
            var absFreeCustomsTopTemp = DEFAULT_FREECUSTOMS_TOP + heightFreeCustoms;
            $freecustomsFixed.css("top", ($freecustoms.get(0).getBoundingClientRect().top-DEFAULT_FREECUSTOMS_TOP) * -1);

            // Attach window scroll event
            $window.scroll(function() {
                // Slide parallax
                (function(){
                    var $activeSlide = $(SLIDE_PARALLAX_CLASS);
                    var $activeSlideFG = $activeSlide.find("> div");
                    var $activeSlideDes = $activeSlide.find(SLIDE_DES_CLASS);
                    var $slideButton = $(SLIDE_CLASS).find("a");
                    var MIN_HEIGHT = $activeSlide.height() || DEFAULT_MIN_HEIGHT;
                    var scrollTop = $window.scrollTop();
                    if (scrollTop > MIN_HEIGHT) {
                        return;
                    }

                    $activeSlide.css("backgroundPositionY", scrollTop);
                    $activeSlideFG.css("backgroundPositionY", scrollTop / 1.5);
                    $activeSlideDes.css("top", scrollTop / 3);
                    $slideButton.css("marginTop", scrollTop/1.8);
                })();

                // Free customs parallax
                var absFreeCustomsTop = $freecustoms.get(0).getBoundingClientRect().top;
                if((absFreeCustomsTop - heightFreeCustoms) <= DEFAULT_FREECUSTOMS_TOP){
                    $freecustomsFixed.css("top", (heightFreeCustoms-(absFreeCustomsTopTemp-absFreeCustomsTop)) * -1);
                }

            });

        }
    };

});