define(["jquery", "../signup/main",  "text!./index.html"], function($, signup, template) {

	var w = function(){
		var $template = $(template);

		(function init(){
			// Attach events
			$template.on("click", "button", function(){
				var $this = $(this);
				signup.init();
			});
		})();

		// Return object
		var o = {};
		o.$el = $template;

		return o;
	};

	return w;

});