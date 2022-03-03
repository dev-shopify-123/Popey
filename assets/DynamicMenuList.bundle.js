(window["wpJsonpPaskit"] = window["wpJsonpPaskit"] || []).push([[11],{

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Accordion; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Accordion =
/*#__PURE__*/
function () {
  function Accordion($el) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Accordion);

    this.$el = $el;
    this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, {
      activeClass: 'accordion--active',
      autoCollapse: false,
      content: '[data-accordion-content]',
      eligibleClass: 'has-accordion'
    }, options);
  }

  _createClass(Accordion, [{
    key: "toggle",
    value: function toggle($block) {
      var open = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (open || !$block.hasClass(this.options.activeClass)) {
        if (this.options.autoCollapse) this.closeOpen();

        this._open($block);
      } else {
        this._close($block);
      }
    }
  }, {
    key: "closeOpen",
    value: function closeOpen() {
      var _this = this;

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$el.find(".".concat(this.options.activeClass))).each(function (i, block) {
        var $block = jquery__WEBPACK_IMPORTED_MODULE_0___default()(block);

        if ($block.hasClass(_this.options.activeClass)) {
          _this._close($block);
        }
      });
    }
  }, {
    key: "openAll",
    value: function openAll() {
      var _this2 = this;

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$el.find(".".concat(this.options.eligibleClass))).each(function (i, block) {
        _this2._open(jquery__WEBPACK_IMPORTED_MODULE_0___default()(block), 0);
      });
    }
  }, {
    key: "_open",
    value: function _open($block) {
      $block.addClass(this.options.activeClass);
    }
  }, {
    key: "_close",
    value: function _close($block) {
      $block.removeClass(this.options.activeClass);
    }
  }]);

  return Accordion;
}();



/***/ }),

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

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DynamicMenuList; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var DynamicMenuList =
/*#__PURE__*/
function () {
  function DynamicMenuList(section) {
    _classCallCheck(this, DynamicMenuList);

    this.$el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(section.el);
    this.context = section.data.context;
    this.Accordion = new _Accordion__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"](this.$el); // Handle Accordion interaction when window size changes

    this.layoutHandler = this.onBreakpointChange.bind(this);
    _Layout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].onBreakpointChange(this.layoutHandler);

    this._bindEvents();
  }

  _createClass(DynamicMenuList, [{
    key: "_bindEvents",
    value: function _bindEvents() {
      var _this = this;

      this.$el.on('click.menu-list', '[data-accordion-trigger]', function (event) {
        event.preventDefault();

        _this._toggleAccordion(jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget).parent());
      });
      this.$el.on('click.menu-list', '[data-menulist-toggle]', function (event) {
        event.preventDefault();

        _this._toggleList(event.currentTarget);
      });
    }
  }, {
    key: "onSectionUnload",
    value: function onSectionUnload() {
      this.$el.off('.menu-list');
      delete this.Accordion;
    }
  }, {
    key: "onSectionBlockSelect",
    value: function onSectionBlockSelect(block) {
      this._toggleAccordion(jquery__WEBPACK_IMPORTED_MODULE_0___default()(block.el), true);
    }
  }, {
    key: "onSectionBlockDeselect",
    value: function onSectionBlockDeselect(block) {
      this._toggleAccordion(jquery__WEBPACK_IMPORTED_MODULE_0___default()(block.el), false);
    }
  }, {
    key: "_toggleAccordion",
    value: function _toggleAccordion($block) {
      if (_Layout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].isGreaterThanBreakpoint('M')) return;
      this.Accordion.toggle($block);
    }
  }, {
    key: "_toggleList",
    value: function _toggleList(el) {
      var $trigger = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
      var $items = $trigger.parent().siblings('[data-hidden-default]');
      var siblingsVisible = $trigger.data('menulist-toggle');
      $items.toggleClass('menulist--menu-item-hidden', siblingsVisible);
      $trigger.data('menulist-toggle', !siblingsVisible).text(!siblingsVisible ? this.context.see_less : this.context.see_more);
    }
  }, {
    key: "onBreakpointChange",
    value: function onBreakpointChange(event, breakpoints) {
      if (_Layout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].isGreaterThanBreakpoint('M')) {
        this.Accordion.openAll();
      } else if (breakpoints.previous === 'L' && !_Layout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].isGreaterThanBreakpoint('M')) {
        this.Accordion.closeOpen();
      }
    }
  }]);

  return DynamicMenuList;
}();



/***/ })

}]);
//# sourceMappingURL=DynamicMenuList.bundle.js.map?1581358591380