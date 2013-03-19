define(["jquery", "fancybox", "text!./index.html"], function($, fancybox, template) {

	return {
		'init': function() {

			var $template = $(template);
			$template.on("click", "button.submit", function() {
				var $this = $(this);
				// TODO: submit form
				// ...
			});
			// Append to DOM
			function showLoginBox(){
				$.fancybox($template, {
					'transitionIn': 'elastic',
					'transitionOut': 'elastic',
					'speedIn': 600,
					'speedOut': 200,
					'padding': 30,
					'scrolling': 'no',
					'overlayShow': false,
					"overlayOpacity": 0,
					"beforeShow": function(){
						$(".fancybox-overlay")
						.css("backgroundImage","none")
						.css("backgroundColor","transparent");
					},
					"afterShow": function(){
						$(".fancybox-close")
						.css("top", -10)
						.css("right", -10);
					}
				});
			};

			// Attach events for all elements with class "fn-login"
			$("body").on("click", ".fn-login", showLoginBox);

		}
	};
});