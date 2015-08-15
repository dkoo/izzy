var config = require('./config.js');

var izzy = {
	move: function(x, y) {
		var izzy = document.getElementById('izzy'),
			transform = config.getTransformProperty();

		izzy.style[transform] = 'translate3d(' + x + 'px, '+ y + 'px, 0) rotateZ(45deg)';
		// izzy.className = 'walking south';
	},
	getDestinationCoords: function(e) {
		izzy.move(e.offsetX - 80, e.offsetY - 80);
	}
};

module.exports = izzy;