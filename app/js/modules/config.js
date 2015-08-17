var config = {
	getTransitionEndEvent: function () {
		var t,
			el = document.documentElement,
			transitions = {
				'transition':'transitionend',
				'OTransition':'oTransitionEnd',
				'MozTransition':'transitionend',
				'WebkitTransition':'webkitTransitionEnd'
			};

		for ( t in transitions ) {
			if( el.style[t] !== undefined ) {
				return transitions[t];
			}
		}
	},
	getTransformProperty: function() {
		var t,
			el = document.documentElement,
			transforms = {
				'transform':'transform',
				'OTransform':'OTransform',
				'MozTransform':'MozTransform',
				'WebkitTransform':'WebkitTransform'
			};

		for ( t in transforms ) {
			if( el.style[t] !== undefined ) {
				return transforms[t];
			}
		}
	},
	getTransitionDuration: function() {
		var t,
			el = document.documentElement,
			duration = {
				'transitionDuration':'transitionDuration',
				'OTransitionDuration':'transitionDuration',
				'MozTransitionDuration':'transitionDuration',
				'WebkitTransitionDuration':'WebkitTransitionDuration'
			};

		for ( t in duration ) {
			if( el.style[t] !== undefined ) {
				return duration[t];
			}
		}
	},
	getTouchEvents: function() {
		var test = {
			'touchStart': 'ontouchstart' in document.documentElement,
			'pointerDown': 'onmspointerdown' in document.documentElement
		},
		touch = {};
	
		if (touch.pointerDown) {
			touch.down = 'MSPointerDown';
			touch.move = 'MSPointerMove';
			touch.end = 'MSPointerUp';
		} else if (touch.touchStart) {
			touch.down = 'touchstart';
			touch.move = 'touchmove';
			touch.end = 'touchend';
		} else {
			touch.down = 'mousedown';
			touch.move = 'mousemove';
			touch.end = 'mouseup';
		}

		return touch;
	}
};

module.exports = config;