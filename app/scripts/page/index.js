(function(){
    'use strict';
    
    require.config({
        paths: {
            "jquery": '../vendor/jquery/1.8.3/jquery.min',
            "jquery-ui": '../vendor/jquery-ui/1.10.0/jquery-ui',
            "jquery.cookie": "../vendor/jquery.cookie/1.3.1/jquery.cookie",
            "modernizr": "../vendor/modernizr/2.6.1/modernizr.min",
            "fancybox": "../vendor/fancybox/2.1.3/jquery.fancybox",
            "text": "../vendor/text/2.0.5+/text",
            "widget": "../widget/"
        },
        shim: {
            'fancybox': {
                deps: ['jquery']
            },
            "jquery.cookie": {
                deps: ['jquery']
            },
            'jquery-ui': {
                deps: ['jquery']
            }
        }
    });

    require(['require'
        , 'jquery'
        , 'widget/searchform/main'
        , 'widget/language/main'
        , 'widget/account/main'
        , 'widget/slide/main'
        , 'widget/parallaxscroll/main'
        , 'modernizr']
        , function(parentRequire, $, searchForm, Language, Account, parallaxScroll, slide) {
        $(document).ready(function() {
            // Initial language settings
            var language = Language();
            language.$el.appendTo($(".fn-lng-selector"))
            // Account - login/signup
            var account = Account();
            account.$el.appendTo($(".fn-account"));
            // Search form
            searchForm.init(0);
            // Slide show
            slide.init();
            // Parallax Scroll
            parallaxScroll.init();
        });
    });

})();