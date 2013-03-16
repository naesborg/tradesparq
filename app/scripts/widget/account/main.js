define(["jquery", "../signup/main",  "text!./index.html"], function($, signup, template) {




	return {
		'init': function() {
			
			var $template = $(template);
			$template.on("click", "button", function(){
				var $this = $(this);
				console.log('popup signup box');
				signup.init();
			});
			// Append to DOM
			$(".fn-account").append($template);

		}
	};
});