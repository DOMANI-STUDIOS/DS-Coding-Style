# Javascript

## File Structure
* [Object Pattern] (https://github.com/shichuan/javascript-patterns/blob/master/jquery-plugin-patterns/basic.html)

```javascript
(function( $ ){
  	var ds = {

		listen: function() {
			return;
		},

		init: function() {
			ds.listen();
		}
	};

	$.PROJ.Filename = function(method) {
		if (ds[method]){
			return ds[method].apply(this,Array.prototype.slice.call(arguments,1));
		}
		else if (typeof method === 'object' || ! method){
			return ds.init.apply(this,arguments);
		}
		else {
			$.error('Method ' +  method + ' does not exist on jQuery.PROJ.Filename');
		}
	};

	$(document).ready(function() {
		$.PROJ.Filename();
	});
})( jQuery );

$.PROJ.Filename("listen");
```

* Object Pattern

```javascript
(function($) {
	// window.DS = function() {
	function DS() {
		var self = this;
		self.publicFunction = publicFunction;

		init();

		function init() {
			listen();
		}

		function listen() {

		}

		function publicFunction() {

		}
	}

	$(document).ready(function() {
		var dsObject = new Ds();
		dsObject.publicFunction();
	});
})(jQuery);
```

## Code Patterns
* [Resource] (http://shichuan.github.io/javascript-patterns/#general-patterns)

## Debugger
* [Resource] (https://developer.chrome.com/extensions/tut_debugging)
* Use sourcemap if working with minified code

## Listeners
* requestAnimationFrame in place of setTimeout or setInterval - [Resource] (https://gist.github.com/Warry/4254579)

```javascript
// Detect request animation frame
var requestAnimFrame = window.requestAnimationFrame ||
             window.webkitRequestAnimationFrame ||
             window.mozRequestAnimationFrame ||
             window.msRequestAnimationFrame ||
             window.oRequestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60) };

function loop(){

    var top = window.pageYOffset;

    // Updates based on new scroll position

    // Recall the loop
    requestAnimFrame( loop )
}

// Call the loop for the first time
loop();
```

* Typically runs at 60fps if framerate is important
* Paul Irish polyfill: [link](http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/)

## Optimization
* Repeated querying of the DOM via jQuery
* Debounced scroll events

## Promises
* Exercise - [link] (https://github.com/stevekane/promise-it-wont-hurt)
