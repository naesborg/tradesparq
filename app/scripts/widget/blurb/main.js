define(function(){

	var LANGUAGE_DEFAULT = 'en';

	var blurbs = {
	};

	return function(blurb, lng){
		lng = lng || LANGUAGE_DEFAULT;
		var dict = blurbs[blurb];
		if(dict){
			return dict[lng];
		}
		return "";
	};
});