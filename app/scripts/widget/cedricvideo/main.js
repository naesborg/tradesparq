define(['jquery', "text!./index.html"], function($, template) {
    'use strict';


    var YOUKU_CN = "<iframe height=\"100%\" width=\"100%\" src=\"http://player.youku.com/embed/XNDc4NDkwODg4\" frameborder=\"0\" allowfullscreen></iframe>";
    var YOUKU_EN = "<iframe height=\"100%\" width=\"100%\" src=\"http://player.youku.com/embed/XNDc4NDkwMzY4\" frameborder=\"0\" allowfullscreen></iframe>";
    var YOUTUBE_EN = "<iframe width=\"100%\" height=\"100%\" src=\"http://www.youtube.com/embed/fxQ1JLh7U_c?rel=0\" frameborder=\"0\" allowfullscreen></iframe>";

    var w = function() {

        var $template = $(template);

        (function init(){

            var $videoContainer = $template.filter(".fn-mediaplayer-videocontainer");
            $template.on("click", ".fn-youku-cn", function(e){
                $videoContainer.empty().append(YOUKU_CN).show();
                e.preventDefault();
            }).on("click", ".fn-youku-en", function(e){
                $videoContainer.empty().append(YOUKU_EN).show();
                e.preventDefault();
            }).on("click", ".fn-youtube-en", function(e){
                $videoContainer.empty().append(YOUTUBE_EN).show();
                e.preventDefault();
            });
           
        })();
        
        // Return object
        var o = {};
        o.$el = $template;
        o.init = function(){

            var me = this;
            var $me = me.$el;

        };

        return o;
    };

    return w;

});