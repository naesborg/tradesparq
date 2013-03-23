define(['jquery', 'jquery.scrollto', "text!./index.html"], function($, $scrollto, template) {
    'use strict';

    var $template = $(template);
    var OPTION = {
        gap: {
            x: 0,
            y: 56 * -1
        }
    };

    return {
        'init': function() {
            var $container = $(".howitworks-container");

            $(".fn-howitworks").on("click", function(e){
                if($container.find(".howitworks").length <= 0){
                    $template.appendTo($container);
                }

                $template.removeClass("out").addClass("in");
                // Then scroll to
                var hash = this.hash;
                if(hash){
                    $('html,body').scrollTo(hash, hash, OPTION);
                }

                e.preventDefault();
            });
            $container.on("click", "a.howitworks-close", function(e){
                $template.removeClass("in").addClass("out");
                setTimeout(function(){
                    $container.empty();
                }, 400);
                e.preventDefault;
            });
        }
    };

});