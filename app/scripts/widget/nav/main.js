define(['jquery', 'jquery.scrollto'], function($) {
    'use strict';


    return {
        'init': function() {
            $('nav li a').click(function(e){
                $('html,body').scrollTo(this.hash, this.hash);
                e.preventDefault();
            });
            $("a.navcontainer-top").click(function(e){
                $('html,body').scrollTo(this.hash, this.hash);
                e.preventDefault();
            });
        }
    };

});