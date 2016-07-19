#JavaScript

##Considerations

What considerations could be made for style guide and tips when it comes to our JavaScript coding approach?

* [Google JS Style Guide](https://google.github.io/styleguide/javascriptguide.xml)
* [MDN Coding Style](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Coding_Style)
* [MDN Coding Tips](https://developer.mozilla.org/en-US/docs/JavaScript_Tips)

##Standardizing Object Format

###jQuery Plugin Format

* [Object Pattern] (https://github.com/shichuan/javascript-patterns/blob/master/jquery-plugin-patterns/basic.html)
* Methods are not readable through JS console (is this considered good?)
* All properties set on ds object are changed by any instance, there is a huge loss of scope
* Accessibility can be cumbersome
* Performance is by far the slowest

```javascript
(function($){
  'use strict';

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
})(jQuery);

$.PROJ.Filename('listen');
```

###Private / Public Function Format

* Too many nested functions, however functions could live outside the DS object
* Private / Public variables would have to live outside the scope of DS which might have unexpected results if more than one object is instantiated
* Performance is better in terms of execution time, also would probably minify to a smaller weight

```javascript
(function($) {
  'use strict';

  window.DS = function() {
    var self = this;
    self.exampleProperty = 'exampleProperty';
    self.publicFunction = publicFunction;

    init();

    function init() {
      _listen();
    }

    function _listen() {

    }

    function publicFunction() {

    }
  };

  $(document).ready(function() {
    var dsObject = new window.DS();
    dsObject.publicFunction();
    var exampleProperty = dsObject.exampleProperty;
  });
})(jQuery);
```

###Prototype Format

* Standard in terms of historical JavaScript approach
* Context of `this` has some nuances
* Some best practices should be followed to prevent memory leaks around event listeners

```javascript
(function($) {
  'use strict';

  var ds = function() {
    this.init();
  };

  ds.prototype.init = function() {
    this.listen();
  };

  ds.prototype.listen = function() {

  }

  ds.prototype.publicFunction = function() {

  }

  window.DS = ds;
})(jQuery);
```

###Class Format

* What would this look like in the new ES6 [class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) format?
* What key considerations would be necessary in terms of static properties?
* How does the class format perform compared to the others?

```javascript
(function($) {
  'use strict';

  window.DS = class {
    constructor() {
      this.exampleProperty = 'exampleProperty';
      this._listen();
    }

    _listen() {

    }

    get exampleProperty() {
      return this.exampleProperty;
    }

    publicFunction() {

    }
  };

  $(document).ready(function() {
    var dsObject = new window.DS();
    dsObject.publicFunction();
    var exampleProperty = dsObject.exampleProperty;
  });
})(jQuery);
```

---

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
