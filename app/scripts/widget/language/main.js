define(["jquery", "jquery.cookie", "../blurb/main", "text!./index.html"], function($, cookie, blurbs, template) {

	var LANGUAGE_DEFAULT = 'en';

	return {
		'init': function() {

			var lng_cookie = $.cookie('lng');
			var lng = lng_cookie || LANGUAGE_DEFAULT;

			if (lng) {
				// Set language class for styles
				$('body').addClass(lng);
				// Set language text
				$("[data-blurb]").each(function(i, e) {
					var $this = $(this);
					var blurb = $this.data('blurb');
					if (blurb) {
						$this.html(blurbs(blurb, lng));
					}
				})
			}

			var $template = $(template);
			// Attach Events
			$template.on("click", "[data-lng]", function(e) {
				e.preventDefault();
				var $this = $(this);
				var toLng = $this.data('lng');
				$.cookie('lng', toLng);
				location.reload(true);
			})
				.on("click", " > a.btn", function(e) {
				e.preventDefault();
				var $this = $(this);
				$this.next("ul").toggle(100);
			});
			// Append to DOM
			$(".lng-selector").append($template);

		}
	};
});