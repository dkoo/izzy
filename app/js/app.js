(function () {
	// define dependencies
	var config = require('./modules/config.js'),
		izzy = require('./modules/izzy.js'),

		// globalish vars
		transitionEnd = config.getTransitionEndEvent(),
		touch = config.getTouchEvents(),
		grid = document.getElementById('grid');

	// get it started
	grid.addEventListener(touch.down, izzy.getDestinationCoords);
})();