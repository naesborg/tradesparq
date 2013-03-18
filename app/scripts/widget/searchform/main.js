define(['jquery', 'text!./index.html'], function($, template) {

	var $window = $(window);
	var HANG_NAV_ACTIVE_CLASS = "active";
	var SEARCHBAR_INACTIVE_CLASS = "inactive";

	return {
		'init': function(page) {
			page = page || 0;

			var flagAdsorbed;
			var scrollTop = page === 0 ? $(".herotestimonial").outerHeight() - $("header").outerHeight() - $(".searchbar").outerHeight() - $(".mediavoice").outerHeight() : $(".herotestimonial").outerHeight() - $("header").outerHeight() - Math.abs(parseInt($(".herotestimonial").next("div").css('marginTop')));

			var $header = $("header");
			var $nav = $header.find("nav");
			var $headerh1 = $header.find("h1");
			var $navContainer = $header.find(".fn-navcontainer");
			var $navContainerInner = $navContainer.find("> div");
			var $searchbar = $(".fn-searchbar");
			var $headerFormContainer = $header.find(".fn-searchformcontainer");
			var $searchbarFormContainer = $searchbar.find(".fn-searchformcontainer");
			var $searchForm = $(template);


			function adsorbSearch() {
				$navContainerInner.append($nav)
				$navContainer.addClass(HANG_NAV_ACTIVE_CLASS);
				$searchbar.addClass(SEARCHBAR_INACTIVE_CLASS);
				$headerFormContainer.append($searchForm);
			};

			function disAdsorbSearch() {
				$searchbarFormContainer.append($searchForm);
				$searchbar.removeClass(SEARCHBAR_INACTIVE_CLASS);
				$navContainer.removeClass(HANG_NAV_ACTIVE_CLASS);
				$headerh1.after($nav);
			};

			// Append search form to search bar
			$searchbarFormContainer.append($searchForm);
			// Attach window scroll event
			$window.scroll(function() {
				if (!flagAdsorbed) {
					if ($window.scrollTop() < scrollTop) {
						return;
					} else {
						adsorbSearch();
						flagAdsorbed = true;
						return;
					}
				} else {
					if ($window.scrollTop() > scrollTop) {
						return;
					} else {
						disAdsorbSearch();
						flagAdsorbed = false;
						return;
					}
				}
			});
		}

	};

})