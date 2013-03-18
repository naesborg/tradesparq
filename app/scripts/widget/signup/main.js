define(["jquery", "fancybox", "text!./index.html"], function($, fancybox, template) {

	return {
		'init': function() {
			
			var $template = $(template);
			$template.on("click", "button.submit", function(){
				var $this = $(this);
				// TODO: submit form
				// ...
			});
			// Append to DOM
			//$("body").append($template);

			$.fancybox($template,{
				'transitionIn'	:	'elastic',
				'transitionOut'	:	'elastic',
				'speedIn'		:	600, 
				'speedOut'		:	200,
				'padding'		: 	30,
				'scrolling'		: 	'no',
				'overlayShow'	:	true
			});

		}
	};
});