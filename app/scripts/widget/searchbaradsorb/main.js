define(['jquery', 'text!./index.html'], function($, template) {

	// body...
	return {
		'init': function(page) {
			page = page || 0;

			var $window = $(window);
			var flagAdsorbed;
			var scrollTop = page === 0 ? $(".herotestimonial").outerHeight() - $("header").outerHeight() - $(".searchbar").outerHeight() - $(".mediavoice").outerHeight() : $(".herotestimonial").outerHeight() - $("header").outerHeight() - Math.abs(parseInt($(".herotestimonial").next("div").css('marginTop')));

			var $header = $("header");
			var $nav = $header.find("nav");
			var $headerh1 = $header.find("h1");
			var $navContainer = $header.find(".navcontainer");
			var $navContainerInner = $navContainer.find(">div");
			var $searchbar = $(".searchbar");
			var $headerFormContainer = $header.find(".searchformcontainer");
			var $searchbarFormContainer = $searchbar.find(".searchformcontainer");
			var $searchForm = $(template);


			function adsorbSearch() {
				$navContainerInner.append($nav)
				$navContainer.show();
				$searchbar.hide();
				$headerFormContainer.append($searchForm);
			};

			function disAdsorbSearch() {
				$navContainer.hide();
				$headerh1.after($nav);
				$searchbar.show();
				$searchbarFormContainer.append($searchForm);
			};

			// Append search form to search bar
			$searchbarFormContainer.append($searchForm);
			// Attach window scroll event
			$window.scroll(function() {
				if (!flagAdsorbed) {
					if ($window.scrollTop() < scrollTop) {
						return;
					} else {
						console.log('adsorb');
						adsorbSearch();
						flagAdsorbed = true;
						return;
					}
				} else {
					if ($window.scrollTop() > scrollTop) {
						return;
					} else {
						console.log('disadsorb');
						disAdsorbSearch();
						flagAdsorbed = false;
						return;
					}
				}
			});
		}

	};

})