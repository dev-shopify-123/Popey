(window["wpJsonpPaskit"] = window["wpJsonpPaskit"] || []).push([[35],{

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

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StaticSlideshow; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var just_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var just_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(just_debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flickity__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var StaticSlideshow =
/*#__PURE__*/
function () {
  function StaticSlideshow(section) {
    _classCallCheck(this, StaticSlideshow);

    this.el = section.el;
    this.settings = section.data;
    this.$window = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window);
    this.carousel = this.el.querySelector('.slideshow');
    this.slides = '.slideshow-slide';
    this.container = this.el.querySelector('.slideshow-height-fullscreen');
    this.isFullscreen = !!this.container;
    this.selectBlockOnLoad = true;
    this.continueAutoplay = true;
    this.stopAutoplay = false;
    this.autoplayTimeout = 0;
    this.$firstSlideImage = null;
    this.flickity = null;
    this.flickityOptions = null;
    this._initFlickity = this._initFlickity.bind(this);

    if (this.carousel && this.carousel.querySelectorAll(this.slides).length > 1) {
      this._initSlider();
    }
  }

  _createClass(StaticSlideshow, [{
    key: "_initSlider",
    value: function _initSlider() {
      var _this = this;

      this.flickityOptions = {
        autoPlay: this.settings.enable_autoplay ? this.settings.autoplay_duration * 1000 : false,
        setGallerySize: !this.isFullscreen,
        pauseAutoPlayOnHover: false,
        accessibility: true,
        adaptiveHeight: true,
        cellAlign: 'left',
        cellSelector: this.slides,
        contain: true,
        wrapAround: true,
        arrowShape: {
          x0: 10,
          x1: 60,
          y1: 50,
          x2: 65,
          y2: 45,
          x3: 20
        }
      };

      this._initFlickity();

      this.$firstSlideImage = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.slides, this.carousel).find('img[data-rimg]').first();
      this.$firstSlideImage.one('rimg:load', function () {
        if (_this.flickity) {
          _this.flickity.resize();
        }

        _this._slideshowHeight();

        _this._positionDots();

        _this._changeArrowColors();
      });
    }
  }, {
    key: "_initFlickity",
    value: function _initFlickity() {
      var _this2 = this;

      this.flickity = new flickity__WEBPACK_IMPORTED_MODULE_2___default.a(this.carousel, this.flickityOptions);
      this.flickity.resize();

      this._slideshowHeight();

      this._positionDots();

      this._changeArrowColors();

      this.$window.on('resize.slideshow', just_debounce__WEBPACK_IMPORTED_MODULE_1___default()(function () {
        _this2._slideshowHeight();

        _this2._positionDots();

        _this2._changeArrowColors();
      }));
      this.flickity.on('select', function () {
        _this2._slideshowHeight();

        _this2._positionDots();

        _this2._changeArrowColors();

        _this2.selectBlockOnLoad = false;

        if (_this2.settings.enable_autoplay && !_this2.stopAutoplay) {
          _this2.flickity.pausePlayer();

          if (_this2.continueAutoplay) {
            _this2.autoplayTimeout = 0;
          } else {
            _this2.autoplayTimeout = 10000;
          }

          _this2.continueAutoplay = true;
          setTimeout(function () {
            _this2.flickity.playPlayer();
          }, _this2.autoplayTimeout);
        }
      });
      this.flickity.on('dragStart', function () {
        _this2.continueAutoplay = false;
      });

      this.stopAutoplaying = function () {
        _this2.stopAutoplay = true;

        _this2.flickity.stopPlayer();
      }; // For users that need to use a keyboard for navigation, we want to pause the player
      // when they are focused on it, and we also want to slide to the slide their focus is on.


      this.slideElements = this.el.querySelectorAll(this.slides);
      this.slideElements.forEach(function (slide) {
        slide.addEventListener('focusin', function () {
          _this2.stopAutoplaying();

          var $slides = jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this2.slides);
          var $slide = jquery__WEBPACK_IMPORTED_MODULE_0___default()(slide);
          var slideIndex = $slides.index($slide);

          _this2.flickity.select(slideIndex, false, true);
        });
      }); // For screen readers, we will add a live region that is hidden to users,
      // but is read when clicking the nagivation buttons

      this.liveregion = document.createElement('div');
      this.liveregion.setAttribute('aria-live', 'polite');
      this.liveregion.setAttribute('class', 'live-region visually-hidden');
      this.el.appendChild(this.liveregion);

      this.handleManualSlideChange = function () {
        _this2.stopAutoplaying();

        _this2.liveregion.textContent = "Slide autoplay stopped.\n        On slide ".concat(_this2.flickity.selectedIndex + 1, " of ").concat(_this2.flickity.slides.length);
      }; // stop autoplaying if a user has interacted with the slideshow next/previous buttons


      this.el.querySelector('.flickity-prev-next-button.next').addEventListener('click', this.handleManualSlideChange);
      this.el.querySelector('.flickity-prev-next-button.previous').addEventListener('click', this.handleManualSlideChange);
    }
  }, {
    key: "_positionDots",
    value: function _positionDots() {
      var pageDots = this.el.querySelector('.flickity-page-dots');
      var top = 'auto';

      if (_Layout__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].isLessThanBreakpoint('S') && !this.isFullscreen) {
        var content = this.flickity.selectedElement.querySelector('.slideshow-slide-content');
        var height = this.flickity.selectedElement.querySelector('.slideshow-background').offsetHeight;
        var dotGutter = 5;

        if (content) {
          top = "".concat(height + dotGutter, "px");
        } else {
          var pageDotsHeight = pageDots.offsetHeight;
          var dotBottomGutter = 20; // If no content, and mobile, offset by height of dots, and the bottom gutter

          top = "".concat(height - (pageDotsHeight + dotBottomGutter), "px");
        }
      }

      pageDots.style.top = top;
    }
  }, {
    key: "_changeArrowColors",
    value: function _changeArrowColors() {
      var currentColor = this.flickity.selectedElement.querySelector('.slideshow-background').dataset;
      var dots = this.el.querySelectorAll('.flickity-page-dots .dot');

      if (_Layout__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].isLessThanBreakpoint('S') && !this.isFullscreen) {
        currentColor = currentColor.themecolor;
      } else {
        currentColor = currentColor.slidecolor;
      }

      this.el.querySelector('.flickity-prev-next-button.previous svg').style.fill = currentColor;
      this.el.querySelector('.flickity-prev-next-button.next svg').style.fill = currentColor;

      for (var i = 0; i < dots.length; i++) {
        dots[i].style.background = currentColor;
      }
    }
  }, {
    key: "_slideshowHeight",
    value: function _slideshowHeight() {
      if (this.isFullscreen) {
        var offsetHeight = document.querySelector('[data-site-header]').getBoundingClientRect().height;
        var announcement = document.querySelector('.site-announcement');

        if (announcement) {
          offsetHeight += announcement.getBoundingClientRect().height;
        }

        this.el.querySelector('.flickity-viewport').style.height = "calc(100vh - ".concat(offsetHeight, "px)");
        this.container.style.height = "calc(100vh - ".concat(offsetHeight, "px)");
      }
    }
  }, {
    key: "onSectionUnload",
    value: function onSectionUnload() {
      this._destroyFlickity();

      this.$window.off('.slideshow');
      this.$firstSlideImage.off('rimg:load');
    }
  }, {
    key: "_destroyFlickity",
    value: function _destroyFlickity() {
      if (!this.flickity) {
        return;
      }

      this.flickity.destroy();
    }
  }, {
    key: "onSectionBlockSelect",
    value: function onSectionBlockSelect(block) {
      var _this3 = this;

      setTimeout(function () {
        _this3.flickity.resize();
      }, 100);
      var $slides = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.slides);
      var $slide = jquery__WEBPACK_IMPORTED_MODULE_0___default()(block.el);
      var slideIndex = $slides.index($slide);

      if (this.settings.enable_autoplay) {
        this.stopAutoplay = true;
        this.flickity.pausePlayer();
      }

      if (!$slide.hasClass('is-selected') && !this.selectBlockOnLoad) {
        this.flickity.select(slideIndex, false, false);
      } else if (this.selectBlockOnLoad) {
        this.flickity.select(slideIndex, false, true);
      }
    }
  }, {
    key: "onSectionBlockDeselect",
    value: function onSectionBlockDeselect() {
      if (this.settings.enable_autoplay) {
        this.stopAutoplay = false;
        this.flickity.playPlayer();
      }
    }
  }]);

  return StaticSlideshow;
}();



/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = debounce

function debounce (fn, delay, at_start, guarantee) {
  var timeout
  var args
  var self

  return function debounced () {
    self = this
    args = Array.prototype.slice.call(arguments)

    if (timeout && (at_start || guarantee)) {
      return
    } else if (!at_start) {
      clear()

      timeout = setTimeout(run, delay)
      return timeout
    }

    timeout = setTimeout(clear, delay)
    fn.apply(self, args)

    function run () {
      clear()
      fn.apply(self, args)
    }

    function clear () {
      clearTimeout(timeout)
      timeout = null
    }
  }
}


/***/ })

}]);
//# sourceMappingURL=StaticSlideshow.bundle.js.map?1581358591380