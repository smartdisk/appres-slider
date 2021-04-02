'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
var Slider = /** @class */ (function () {

  function Slider() {
  }
  
  function version(){
    return "0.0.0";
  }

  Slider.prototype.version = function(){
    return version();  
  };

  Slider.slider = new Slider();
  Slider.version = function() {
    return this.slider.version();
  };

  return Slider;
}());

module.exports = Slider;
module.exports.Slider = Slider;