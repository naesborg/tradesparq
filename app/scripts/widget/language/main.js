define(["jquery", "jquery.cookie", "../blurb/main", "text!./index.html"], function($, cookie, blurbs, template) {

	var LANGUAGE_DEFAULT = 'en';
	var LANGUAGE_CLASSES = 'en cn';


	return {
		'init': function() {
			
			function update(lng){
				if(!lng){
					lng = LANGUAGE_DEFAULT;
				}
				// Set language class for styles
				$('body').removeClass(LANGUAGE_CLASSES).addClass(lng);
				// Set language text
				$("[data-blurb]").each(function(i, e){
					var $this = $(this);
					var blurb = $this.data('blurb');
					if(blurb){
						$this.html(blurbs(blurb, lng));
					}
				})
			};
			
			var $template = $(template);
			// Attach Events
			$template.on("click", "[data-lng]", function(e) {
				e.preventDefault();
				var $this = $(this);
				var toLng = $this.data('lng');
				$.cookie('lng', toLng);
				update(toLng);
			})
				.on("click", " > a.btn", function(e) {
				e.preventDefault();
				var $this = $(this);
				$this.next("ul").toggle(100);
			});
			// Append to DOM
			$(".fn-lng-selector").append($template);

			update($.cookie('lng'));

		}
	};
});