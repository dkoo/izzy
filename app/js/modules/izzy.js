var config = require('./config.js');

var izzy = {
	currentCoords: [0, 0],
	move: function(x, y) {
		var self = document.getElementById('izzy'),
			transform = config.getTransformProperty(),
			transitionDuration = config.getTransitionDuration(),
			moveCommand = 'translate3d(' + x + 'px, '+ y + 'px, 0) rotateZ(45deg) ',
			// thanks, pythagoras
			distance = Math.floor(Math.sqrt(Math.pow(Math.floor(x - izzy.currentCoords[0]), 2) + Math.pow(Math.floor(y - izzy.currentCoords[1]), 2))),
			walkTime = distance / 150;


		self.style[transform] = moveCommand;
		self.style[transitionDuration] = walkTime + 's';
		// self.className = 'walking south';

		izzy.currentCoords = [x, y];
	},
	getDestinationCoords: function(e) {
		izzy.move(e.offsetX - 50, e.offsetY - 50);
	}
};

module.exports = izzy;