(function($){
  'use strict';

  $.fn.PROJ = $.fn.PROJ || {};

  var ds = {

    count: 0,

    addToCount: function(num) {
      num = parseInt(num, 10);

      if(!isNaN(num)) {
        ds.count += num;
      }
    },

    _subtractTenFromCount: function() {
      ds.count -= 10;
    },

    getCount: function() {
      return ds.count;
    },

    init: function() {
      for(var i = 0; i < 100; i++) {
        ds.addToCount(1);
      }

      ds._subtractTenFromCount();

      return this;
    }
  };

  $.fn.PROJ.Filename = function(method) {
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

})(jQuery);


(function($) {
  'use strict';

  window.DS = window.DS || {};

  window.DS.Filename = function() {
    var self = this;
    var count = 0;

    self.addToCount = function(num) {
      num = parseInt(num, 10);

      if(!isNaN(num)) {
        count += num;
      }
    };

    self.getCount = function() {
      return count;
    }

    function _subtractTenFromCount() {
      count -= 10;
    }

    function init() {
      for(var i = 0; i < 100; i++) {
        self.addToCount(1);
      }

      _subtractTenFromCount();
    }

    init();

  }

})(jQuery);


(function($) {
  'use strict';

  window.DS = window.DS || {};

  function _subtractTenFromCount(val) {
    return val - 10;
  }

  var ds = function() {
    this.count = 0;
    this.init();
  };

  ds.prototype.addToCount = function(num) {
    num = parseInt(num, 10);

    if(!isNaN(num)) {
      this.count += num;
    }
  };

  ds.prototype.getCount = function() {
    return this.count;
  };

  ds.prototype.init = function() {
    for(var i = 0; i < 100; i++) {
      this.addToCount(1);
    }

    this.count = _subtractTenFromCount(this.count);
  };

  window.DS.Filename2 = ds;

})(jQuery);