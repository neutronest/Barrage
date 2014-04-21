// barrage.js
// ==========

// > (c) 2014-2015 dongchao 
// > barrage may be freely distributed under the MIT license.
// > For all details and documentation:

// Initial Setup
// -------------

(function() {
  // a reference to the global object. 'window' in the browser
  // or 'global' on the server

  console.log("hello Barrage!_(:з」∠)_");
  var root = this;

  var array = [];
  var push = array.push;
  var slice = array.slice;
  var splice = array.splice;

  // The top-level namespace.
  var Barrage;
  if ( typeof exports !== 'undefined') {
    Barrage = exports;
  } else {
    Barrage = root.Barrage = {};
  }

  // Current Version of Barrage
  Barrage.VERSION = '0.0.1';

  // extends the jquery
  Barrage.$ = root.jQuery;

  Barrage.config = {

    'color' : ['red', 'blue', 'black', 'orange', 'white'],
    'font_family' : ['Monaco'],
    'font_size' : ['18px', '20px', '24px', '28px'],
    'speed' : [10000,9000,8000,7000,6000,5000,4000 ]
  };

  Barrage.random = function(len) {
    return Math.random() * len;
  };
  var bullet = Barrage.bullet = (function() {

    var _font_family;
    var _font_size;
    var _color;
    var _speed;
    var _x_pos;
    var _y_pos;
    
    var random_render = function(config_item) {

      return config_item[Math.floor(Barrage.random(config_item.length))];
    };
    
    var launch = function(objects, pose) {

      _font_size = objects.font_size || random_render(Barrage.config.font_size);
      _font_family = objects.font_family || random_render(Barrage.config.font_family);
      _color = objects.color || random_render(Barrage.config.color);
      _speed = objects.speed || random_render(Barrage.config.speed);
      _y_pos = objects.y_pos || Math.random() * window.innerHeight;

      console.log(_font_size);
      console.log(_font_family);
      console.log(_color);
      console.log(_speed);
      console.log(_y_pos);
      console.log("=============");
    
      if (!objects.content) return;

      var words = Barrage.$("<b>" + objects.content + "</b>");
      words.css("font-size", _font_size);
      words.css("font-family", _font_family);
      words.css("color", _color);
      words.css("right", - words.css("width"));
      words.css("position", "absolute");
      words.css("top", _y_pos);
      words.attr("zoom", 1000);
      $("body").append(words);
      Barrage.$(words).animate({
        "right" : window.innerWidth
        }, _speed, function() {
          console.log("finished!");
      });
    };

    return {
      launch : launch
    };
  })();

  var Action = Barrage.Action = {

  };
}).call(this);















