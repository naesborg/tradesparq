define(["jquery", "fancybox", "text!./index.html"], function($, fancybox, template) {




	return {
		'init': function() {
			// If exist, remove self
			$("body > .signup").remove();
			
			var $template = $(template);
			$template.on("click", "button.submit", function(){
				var $this = $(this);
				console.log('Signup submit');
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