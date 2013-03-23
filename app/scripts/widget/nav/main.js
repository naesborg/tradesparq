define(['jquery', 'jquery.scrollto'], function($) {
    'use strict';

    var OPTION = {
        gap: {
            x: 0,
            y: 84 * -1
        }
    };

    return {
        'init': function() {
            $('nav li a[data-async != "true"]').click(function(e){
                $('html,body').scrollTo(this.hash, this.hash, OPTION);
                e.preventDefault();
            });
            $("a.navcontainer-top").click(function(e){
                $('html,body').scrollTo(this.hash, this.hash);
                e.preventDefault();
            });
        }
    };

});