var config = require('./config.js'),
	grid = document.getElementById('grid'),
	touch = config.getTouchEvents(),
	transform = config.getTransformProperty(),
	transitionEnd = config.getTransitionEndEvent(),
	transitionDuration = config.getTransitionDuration(),
	self = document.getElementById('izzy');

var izzy = {
	currentCoords: [0, 0],
	move: function(x, y) {
		var moveCommand = 'translate3d(' + x + 'px, '+ y + 'px, 0) rotateZ(45deg) ',
			distanceX = Math.floor(x - this.currentCoords[0]),
			distanceY = Math.floor(y - this.currentCoords[1]),

			// thanks, pythagoras
			distance = Math.floor(Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2))),
			walkTime = distance / 150,
			direction;

		if ( x > this.currentCoords[0] && y > this.currentCoords[1] ) {
			direction = Math.abs(distanceX) > Math.abs(distanceY) ? 'east' : 'south';
		} else if ( x > this.currentCoords[0] && y < this.currentCoords[1] ) {
			direction = Math.abs(distanceX) > Math.abs(distanceY) ? 'east' : 'north';
		} else if ( x < this.currentCoords[0] && y > this.currentCoords[1] ) {
			direction = Math.abs(distanceX) > Math.abs(distanceY) ? 'west' : 'south';
		} else if ( x < this.currentCoords[0] && y < this.currentCoords[1] ) {
			direction = Math.abs(distanceX) > Math.abs(distanceY) ? 'west' : 'north';
		}

		// prevent movement commands while moving
		grid.removeEventListener(touch.down, this.getDestinationCoords, true);

		// set direction and animation
		self.className = 'walking ' + direction;
		self.style[transform] = moveCommand;
		self.style[transitionDuration] = walkTime + 's';

		// reset current coordinates
		this.currentCoords = [x, y];

		// complete the move
		self.addEventListener(transitionEnd, izzy.completeMove, true);
	},
	completeMove: function(e) {
		if ( e.target.tagName.toLowerCase() === 'figure' ) {
			console.log('completed');
			self.classList.remove('walking');
			self.classList.add('idle');

			// reset
			self.removeEventListener(transitionEnd, izzy.completeMove, true);
			izzy.init();
		}
	},
	getDestinationCoords: function(e) {
		// don't move if a character or object is clicked
		if ( e.target.tagName.toLowerCase() === 'div' ) {
			// initiate the move
			izzy.move(e.offsetX - 50, e.offsetY - 50);
		} else {
			self.className = 'idle south';
		}
	},
	init: function() {
		grid.addEventListener(touch.down, izzy.getDestinationCoords, true);
	}
};

module.exports = izzy.init();