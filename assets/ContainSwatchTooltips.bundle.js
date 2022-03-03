(window["wpJsonpPaskit"] = window["wpJsonpPaskit"] || []).push([[8],{

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContainSwatchTooltips; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function setTooltipOffset(target) {
  var margin = 10;
  var _window = window,
      innerWidth = _window.innerWidth;

  var _target$getBoundingCl = target.getBoundingClientRect(),
      x = _target$getBoundingCl.x,
      width = _target$getBoundingCl.width;

  var tooltipWidth = parseFloat(window.getComputedStyle(target, ':after').width);
  var required = tooltipWidth * 0.5;
  var available = 0;
  var offset = 0;

  if (x < innerWidth * 0.5) {
    // Closer to left side of screen
    available = x + width * 0.5 - margin;
    offset = required - available;
  } else {
    available = innerWidth - x - width * 0.5 - margin;
    offset = available - required;
  }

  target.style.setProperty('--swatch-tooltip-offset', "".concat(required >= available ? offset : 0, "px"));
}

function handleMouseover(_ref) {
  var target = _ref.target;
  // We need to check for dataset, because IE11 doesn't support
  // the dataset property for certain elements like svgs
  if (target.dataset && !target.dataset.swatchTooltip) return;
  window.requestAnimationFrame(function () {
    return setTooltipOffset(target);
  });
}

var ContainSwatchTooltips =
/*#__PURE__*/
function () {
  function ContainSwatchTooltips() {
    _classCallCheck(this, ContainSwatchTooltips);

    window.addEventListener('mouseover', handleMouseover);
  }

  _createClass(ContainSwatchTooltips, [{
    key: "unload",
    value: function unload() {
      window.removeEventListener('mouseover', handleMouseover);
    }
  }]);

  return ContainSwatchTooltips;
}();



/***/ })

}]);
//# sourceMappingURL=ContainSwatchTooltips.bundle.js.map?1581358591380