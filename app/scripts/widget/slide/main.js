define(['jquery'], function() {

	var ACTIVECLASS = "slideactive";

	function slideShow($slide) {
		var $slideContent = $slide.find(".slidecontent");
		var $slideBtnPrev = $slide.find(".slidebtn-prev");
		var $slideBtnNext = $slide.find(".slidebtn-next");

		var slideStatusCheck = (function fn() {
			var $slideActive = $slideContent.find('.' + ACTIVECLASS);
			if($slideActive.prev().length <= 0){
				$slideBtnPrev.hide();
			}
			else{
				$slideBtnPrev.show();
			}
			if($slideActive.next().length <= 0){
				$slideBtnNext.hide();
			}
			else{
				$slideBtnNext.show();
			}
			return fn;
		})();

		$slide.on("click", ".slidebtn-prev", function(e) {
			var $slideActive = $slideContent.find('.' + ACTIVECLASS);
			var $slidePrev = $slideActive.prev();
			if ($slidePrev.length > 0) {
				$slideActive.removeClass(ACTIVECLASS);
				$slidePrev.addClass(ACTIVECLASS);
				slideStatusCheck();
			}
			e.preventDefault();
		})
			.on("click", ".slidebtn-next", function(e) {
			var $slideActive = $slideContent.find('.' + ACTIVECLASS);
			var $slideNext = $slideActive.next();
			if ($slideNext.length > 0) {
				$slideActive.removeClass(ACTIVECLASS);
				$slideNext.addClass(ACTIVECLASS);
				slideStatusCheck();
			}
			e.preventDefault();
		});

	};

	return {
		'init': function() {
			var $slides = $('.slide');
			$slides.each(function() {
				$slide = $(this);
				slideShow($slide);
			});
		}
	}

});