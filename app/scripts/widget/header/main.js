/*
make header scroll when viewport little than header width.
*/
define(['jquery'], function ($) {
    'use strict';


    function setViewport() {
        var viewportWidth = window.innerHeight || document.body.clientWidth;
        var docEl = document.documentElement,
            left = 0;
        if (viewportWidth >= docEl.scrollWidth) {
            return;
        }

        left = -1 * (docEl.scrollLeft || document.body.scrollLeft);
        $('header').width(docEl.scrollWidth).css('left', left);
    };

    $(window)
        .load(setViewport)
        .scroll(setViewport);
});