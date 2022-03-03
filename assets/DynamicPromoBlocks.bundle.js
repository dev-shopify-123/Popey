(window["wpJsonpPaskit"] = window["wpJsonpPaskit"] || []).push([[14],{

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

var eventHandlers = [];
var previousBreakpoint = null;

function getBreakpoints() {
  return window.getComputedStyle(document.documentElement, ':before').getPropertyValue('content').replace(/"/g, '').split(',');
}

function getBreakpoint() {
  return window.getComputedStyle(document.documentElement, ':after').getPropertyValue('content').replace(/"/g, '');
}

jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', function (event) {
  var currentBreakpoint = getBreakpoint();

  if (previousBreakpoint !== currentBreakpoint) {
    eventHandlers.forEach(function (eventHandler) {
      eventHandler(event, {
        previous: previousBreakpoint,
        current: currentBreakpoint
      });
    });
  }

  previousBreakpoint = currentBreakpoint;
});

function isLessThanBreakpoint(breakpoint) {
  var inclusive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var breakpoints = getBreakpoints();
  var currentBreakpoint = getBreakpoint();
  var comparison = breakpoints.indexOf(currentBreakpoint) - breakpoints.indexOf(breakpoint);
  return inclusive ? comparison <= 0 : comparison < 0;
}

function isGreaterThanBreakpoint(breakpoint) {
  var inclusive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var breakpoints = getBreakpoints();
  var currentBreakpoint = getBreakpoint();
  var comparison = breakpoints.indexOf(currentBreakpoint) - breakpoints.indexOf(breakpoint);
  return inclusive ? comparison >= 0 : comparison > 0;
}

function isBreakpoint() {
  var currentBreakpoint = getBreakpoint();

  for (var _len = arguments.length, breakpoints = new Array(_len), _key = 0; _key < _len; _key++) {
    breakpoints[_key] = arguments[_key];
  }

  return breakpoints.some(function (breakpoint) {
    return breakpoint === currentBreakpoint;
  });
}

function onBreakpointChange(eventHandler) {
  if (eventHandlers.indexOf(eventHandler) === -1) {
    eventHandlers.push(eventHandler);
  }
}

function offBreakpointChange(eventHandler) {
  var index = eventHandlers.indexOf(eventHandler);

  if (index !== -1) {
    eventHandlers.splice(index, 1);
  }
}

/* harmony default export */ __webpack_exports__["a"] = ({
  isLessThanBreakpoint: isLessThanBreakpoint,
  isGreaterThanBreakpoint: isGreaterThanBreakpoint,
  isBreakpoint: isBreakpoint,
  onBreakpointChange: onBreakpointChange,
  offBreakpointChange: offBreakpointChange
});

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DynamicPromoBlocks; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


 // Adjusts the height of the block so it can contain the wrapper within it

var adjustHeight = function adjustHeight(block) {
  var $block = jquery__WEBPACK_IMPORTED_MODULE_0___default()(block);
  var $wrapper = $block.find('.promo-block--content-wrapper');
  var padding = window.getComputedStyle($block[0], null).getPropertyValue('padding-top').replace('px', '');

  if ($block.innerHeight() - padding * 2 < $wrapper.innerHeight()) {
    $block.css({
      height: "".concat($wrapper.innerHeight() + padding * 2, "px")
    });
    $wrapper.css({
      transform: 'none',
      top: 'auto'
    });
  }
}; // Removes height settings on the block because they only need to be there for small screens


var resetHeight = function resetHeight(block) {
  var $block = jquery__WEBPACK_IMPORTED_MODULE_0___default()(block);
  var $wrapper = $block.find('.promo-block--content-wrapper');
  $block.css({
    height: ''
  });
  $wrapper.css({
    transform: '',
    top: ''
  });
};

var DynamicPromoBlocks =
/*#__PURE__*/
function () {
  function DynamicPromoBlocks(section) {
    var _this = this;

    _classCallCheck(this, DynamicPromoBlocks);

    this.$el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(section.el);
    this.content = '[data-promo-block-content]';
    this.expandedClass = 'promo-block--expanded';
    this.compressBlocks = section.data.compress_blocks; // Revert navigation to original state on breakpoint change

    this.layoutHandler = this.onBreakpointChange.bind(this);
    _Layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].onBreakpointChange(this.layoutHandler);
    this._blockInteraction = this._blockInteraction.bind(this);
    this.$el.on('click.promo-block', this.content, this._blockInteraction);

    if (!this.compressBlocks && _Layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].isLessThanBreakpoint('S')) {
      this.$el.find(this.content).each(function (index, block) {
        adjustHeight(block);
      });
    }

    if (!this.compressBlocks) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', function () {
        _this.$el.find(_this.content).each(function (index, block) {
          if (_Layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].isLessThanBreakpoint('S')) {
            adjustHeight(block);
          } else {
            resetHeight(block);
          }
        });
      });
    }
  }
  /**
   * Remove block's toggled state and attributes when leaving mobile
   */


  _createClass(DynamicPromoBlocks, [{
    key: "onBreakpointChange",
    value: function onBreakpointChange() {
      var _this2 = this;

      if (!_Layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].isLessThanBreakpoint('S')) {
        this.$el.find(".".concat(this.expandedClass)).each(function (i, content) {
          _this2._collapse(content);
        });
        this.$el.find(this.content).each(function (index, block) {
          resetHeight(block);
        });
      } else if (!this.compressBlocks) {
        this.$el.find(this.content).each(function (index, block) {
          adjustHeight(block);
        });
      }
    }
    /**
     * Unbind events when section is re-drawn
     */

  }, {
    key: "onSectionUnload",
    value: function onSectionUnload() {
      this.$el.off('.promo-block');
      _Layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].offBreakpointChange(this.layoutHandler);
    }
    /**
     * Callback to open block on mobile from the TE
     *
     * @param block
     */

  }, {
    key: "onSectionBlockSelect",
    value: function onSectionBlockSelect(block) {
      if (!_Layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].isLessThanBreakpoint('S')) return;

      this._expand(block.el.querySelector(this.content));
    }
    /**
     * Callback to close block on mobile from the TE
     *
     * @param block
     */

  }, {
    key: "onSectionBlockDeselect",
    value: function onSectionBlockDeselect(block) {
      if (!_Layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].isLessThanBreakpoint('S')) return;

      this._collapse(block.el.querySelector(this.content));
    }
    /**
     * Expand a block on first click, then allow it to behave as normal
     *
     * @param event
     * @private
     */

  }, {
    key: "_blockInteraction",
    value: function _blockInteraction(event) {
      var content = event.currentTarget;
      var clicked = content.getAttribute('data-clicked'); // On second click, or on desktop, don't interfere with block

      if (clicked || !_Layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].isLessThanBreakpoint('S') || !this.compressBlocks) {
        return;
      }

      event.preventDefault();
      content.setAttribute('data-clicked', 'clicked');

      this._expand(content);
    }
    /**
     * Expand promo block
     *
     * @param content
     * @private
     */

  }, {
    key: "_expand",
    value: function _expand(content) {
      var _this3 = this;

      if (!this.compressBlocks) {
        return;
      }

      var $content = jquery__WEBPACK_IMPORTED_MODULE_0___default()(content);
      $content.addClass('animating animating-in').one('trend', function () {
        $content.removeClass('animating animating-in').addClass(_this3.expandedClass).off('trend');
        adjustHeight($content);
      });
    }
    /**
     * Collapse a block
     *
     * @param content
     * @private
     */

  }, {
    key: "_collapse",
    value: function _collapse(content) {
      var _this4 = this;

      if (!this.compressBlocks) {
        return;
      }

      var $content = jquery__WEBPACK_IMPORTED_MODULE_0___default()(content);
      $content.addClass('animating animating-out').one('trend', function () {
        $content.removeClass("animating animating-out ".concat(_this4.expandedClass)).off('trend');
        content.removeAttribute('data-clicked');
        resetHeight($content);
      });
    }
  }]);

  return DynamicPromoBlocks;
}();



/***/ })

}]);
//# sourceMappingURL=DynamicPromoBlocks.bundle.js.map?1581358591380