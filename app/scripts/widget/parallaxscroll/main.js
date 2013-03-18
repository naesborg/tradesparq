define(['jquery'], function($) {
    'use strict';

    var DEFAULT_MIN_HEIGHT = 500;
    var SLIDE_PARALLAX_CLASS = ".fn-slide li.slideactive";
    var SLIDE_DES_CLASS = ".herotestimonial-des";
    var $window = $(window);

    return {
        'init': function() {

            // Attach window scroll event
            $window.scroll(function() {

                var $activeSlide = $(SLIDE_PARALLAX_CLASS);
                var $activeSlideFG = $activeSlide.find("> div");
                var $activeSlideDes = $activeSlide.find(SLIDE_DES_CLASS);
                var MIN_HEIGHT = $activeSlide.height() / 2 || DEFAULT_MIN_HEIGHT;
                var scrollTop = $window.scrollTop();
                if (scrollTop > MIN_HEIGHT) {
                    return;
                }

                $activeSlide.css("backgroundPositionY", scrollTop / 4);
                $activeSlideFG.css("backgroundPositionY", scrollTop / 1.5);
                $activeSlideDes.css("top", scrollTop / 3);

            });

        }
    };

});