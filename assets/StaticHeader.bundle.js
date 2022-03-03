(window["wpJsonpPaskit"] = window["wpJsonpPaskit"] || []).push([[28],{

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

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(0);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);

// EXTERNAL MODULE: ./node_modules/shopify-currency-converter/dist/index.js
var dist = __webpack_require__(9);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// EXTERNAL MODULE: ./node_modules/scriptjs/dist/script.js
var script = __webpack_require__(1);
var script_default = /*#__PURE__*/__webpack_require__.n(script);

// EXTERNAL MODULE: ./source/scripts/Forms.js + 1 modules
var Forms = __webpack_require__(7);

// EXTERNAL MODULE: ./source/scripts/Layout.js
var Layout = __webpack_require__(6);

// CONCATENATED MODULE: ./source/scripts/components/StickyHeader.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var StickyHeader_StickyHeader =
/*#__PURE__*/
function () {
  function StickyHeader(options, settings) {
    var _this = this;

    _classCallCheck(this, StickyHeader);

    this.body = document.querySelector('body');
    this.header = document.querySelector('[data-site-header]');
    this.menu = this.header.querySelector('[data-site-navigation]');
    this.menuToggle = options.menuToggle;
    this.postMessage = options.postMessage;
    this.settings = settings;
    this.transitioning = false;
    this.lastToggle = Date.now() - 1000;
    this.stickyClass = 'site-header-sticky';
    this.scrolledClass = 'site-header-sticky--scrolled';
    this.navOpenClass = 'site-header-nav--open';
    this._toggleStickyHeader = this._toggleStickyHeader.bind(this);
    this._toggleMenu = this._toggleMenu.bind(this);

    if (this.settings.sticky_header) {
      this.body.classList.add(this.stickyClass);
      window.requestAnimationFrame(function () {
        // If browser doesn't support sticky, we don't want any of the sticky functionality.
        if (window.getComputedStyle(_this.header).position.indexOf('sticky') > -1) {
          _this.observer = new IntersectionObserver(function (entries) {
            return _this._toggleStickyHeader(entries);
          });

          _this.observer.observe(document.querySelector('[data-header-intersection-target]'));

          _this.toggleClick = function (event) {
            event.preventDefault();
            if (Layout["a" /* default */].isGreaterThanBreakpoint('M')) _this._toggleMenu();
          };

          _this.menuToggle.addEventListener('click', _this.toggleClick);
        }
      });
    }
  }

  _createClass(StickyHeader, [{
    key: "closeNavigation",
    value: function closeNavigation() {
      var _this2 = this;

      if (this.transitioning) {
        return;
      }

      this.menuToggle.classList.remove('active');

      this.navTransitionOutEvent = function () {
        _this2.header.classList.remove(_this2.navOpenClass);

        _this2.transitioning = false;

        _this2.menu.removeEventListener('transitionend', _this2.navTransitionOutEvent);
      };

      this.menu.addEventListener('transitionend', this.navTransitionOutEvent);
      this.transitioning = true;
      this.menu.setAttribute('style', "margin-top: -".concat(this.menu.getBoundingClientRect().height, "px;"));
      this.postMessage('nav:close-all');
    }
  }, {
    key: "openNavigation",
    value: function openNavigation() {
      var _this3 = this;

      var onOpen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

      if (this.transitioning || this.header.classList.contains(this.navOpenClass)) {
        onOpen();
        return;
      }

      this.menuToggle.classList.add('active');

      this.navTransitionInEvent = function () {
        _this3.transitioning = false;

        _this3.menu.removeEventListener('transitionend', _this3.navTransitionInEvent);

        onOpen();
      };

      this.menu.addEventListener('transitionend', this.navTransitionInEvent);
      this.transitioning = true; // We need to wait for the browser to set the display to 'block' before we set the margin
      // This will help with ensuring the different animations/transitions happen in sequence
      // and not at the same time.

      window.requestAnimationFrame(function () {
        _this3.header.classList.add(_this3.navOpenClass);

        window.requestAnimationFrame(function () {
          _this3.menu.setAttribute('style', 'margin-top: 0;');
        });
      });
    }
  }, {
    key: "_toggleMenu",
    value: function _toggleMenu() {
      if (this.header.classList.contains(this.navOpenClass)) {
        this.closeNavigation();
      } else {
        this.openNavigation();
      }
    }
    /**
     * Sticky header only shows as sticky after scroll
     *
     * @private
     */

  }, {
    key: "_toggleStickyHeader",
    value: function _toggleStickyHeader(entries) {
      if (this.body.classList.contains('scroll-lock') || !Layout["a" /* default */].isGreaterThanBreakpoint('M')) {
        return;
      }

      var shouldShrink = !entries[0].isIntersecting; // Sticky header is scrolled, is and is visible -- nothing more to do!

      if (shouldShrink && this.header.classList.contains(this.scrolledClass)) {
        return;
      } // We also check to make sure the toggle hasnt activated recently to stop jerky transitions


      if (this.lastToggle + 500 > Date.now()) {
        return;
      }

      this.lastToggle = Date.now();

      if (shouldShrink) {
        this._shrink();
      } else {
        this._expand();
      }
    }
  }, {
    key: "_shrink",
    value: function _shrink() {
      this.closeNavigation();
      this.header.classList.add(this.scrolledClass);
    }
  }, {
    key: "_expand",
    value: function _expand() {
      this.openNavigation();
      this.header.classList.remove(this.scrolledClass);
      this.menuToggle.classList.remove('active');
    }
  }, {
    key: "unload",
    value: function unload() {
      this.body.classList.remove(this.stickyClass);
      this.body.classList.remove(this.scrolledClass);

      if (this.observer) {
        this.observer.disconnect();
      }

      this.menuToggle.removeEventListener('click', this.toggleClick);
    }
  }]);

  return StickyHeader;
}();


// EXTERNAL MODULE: ./source/scripts/Accordion.js
var Accordion = __webpack_require__(17);

// CONCATENATED MODULE: ./source/scripts/components/navigation/NavMobileSubMenus.js
function NavMobileSubMenus_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NavMobileSubMenus_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function NavMobileSubMenus_createClass(Constructor, protoProps, staticProps) { if (protoProps) NavMobileSubMenus_defineProperties(Constructor.prototype, protoProps); if (staticProps) NavMobileSubMenus_defineProperties(Constructor, staticProps); return Constructor; }




var NavMobileSubMenus_NavMobileSubMenus =
/*#__PURE__*/
function () {
  function NavMobileSubMenus($el) {
    NavMobileSubMenus_classCallCheck(this, NavMobileSubMenus);

    this.$el = $el;
    this.Accordion = new Accordion["a" /* default */](this.$el, {
      activeClass: 'visible',
      content: '[data-accordion-content]'
    }); // Sub menu selectors

    this.activeMenuClass = 'navmenu-link-parent-active';
    this.activeMenu = ".".concat(this.activeMenuClass);
    this.linkClass = 'navmenu-link-parent';
    this.linkSelector = ".".concat(this.linkClass);
    this.navTrigger = '[data-navmenu-parent]';
    this.subMenu = '[data-navmenu-submenu]';
    this.buttonClass = 'navmenu-button';
    this.buttonSelector = ".".concat(this.buttonClass);

    this._bindEvents();
  }

  NavMobileSubMenus_createClass(NavMobileSubMenus, [{
    key: "unload",
    value: function unload() {
      this.$el.off('.mobile-nav');
      delete this.Accordion;
    }
  }, {
    key: "closeSubMenus",
    value: function closeSubMenus($current) {
      var _this = this;

      $current.find(this.activeMenu).each(function (index, el) {
        _this._closeSubmenu(jquery_default()(el));
      });
    }
  }, {
    key: "closeAllSubmenus",
    value: function closeAllSubmenus() {
      this.Accordion.closeOpen();
    }
  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      var _this2 = this;

      // Prevent focus state from applying on mouse click
      this.$el.on('mousedown.mobile-nav', '.navmenu-link', function (event) {
        event.preventDefault();
      });
      this.$el.on('click.mobile-nav', "".concat(this.navTrigger, " > .navmenu-link-parent"), this._linkClicked.bind(this));
      this.$el.on('click.mobile-nav', "".concat(this.navTrigger, " > .navmenu-button"), function (event) {
        event.preventDefault();

        _this2._toggleSubmenu(event);
      });
    }
  }, {
    key: "_linkClicked",
    value: function _linkClicked(event) {
      var $target = jquery_default()(event.currentTarget);

      if (!$target.hasClass(this.activeMenuClass)) {
        event.preventDefault();

        this._openSubmenu($target);
      }
    }
  }, {
    key: "_toggleSubmenu",
    value: function _toggleSubmenu(event) {
      var $target = jquery_default()(event.currentTarget);
      var $link = $target.hasClass(this.linkClass) ? $target : $target.siblings(this.linkSelector).first();

      if ($link.hasClass(this.activeMenuClass)) {
        this._closeSubmenu($target);
      } else {
        this._openSubmenu($target);
      }
    }
  }, {
    key: "_openSubmenu",
    value: function _openSubmenu($target) {
      var $menu = $target.siblings(this.subMenu).first();
      var $link = $target.hasClass(this.linkClass) ? $target : $target.siblings(this.linkSelector).first();
      var $button = $target.hasClass(this.buttonClass) ? $target : $target.siblings(this.buttonSelector).first();
      $menu.css('display', 'flex');
      $link.addClass(this.activeMenuClass).attr('aria-expanded', true);
      $button.attr('aria-expanded', true);
      this.Accordion.toggle($menu);
    }
  }, {
    key: "_closeSubmenu",
    value: function _closeSubmenu($target) {
      var $menu = $target.siblings(this.subMenu).first();
      var $link = $target.hasClass(this.linkClass) ? $target : $target.siblings(this.linkSelector).first();
      var $button = $target.hasClass(this.buttonClass) ? $target : $target.siblings(this.buttonSelector).first();
      $menu.one('transitionend', function () {
        return $menu.css('display', '');
      });
      $link.removeClass(this.activeMenuClass).attr('aria-expanded', false);
      $button.attr('aria-expanded', false);
      this.Accordion.toggle($menu);
      this.closeSubMenus($menu);
    }
  }]);

  return NavMobileSubMenus;
}();


// CONCATENATED MODULE: ./source/scripts/components/navigation/NavMobile.js
function NavMobile_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NavMobile_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function NavMobile_createClass(Constructor, protoProps, staticProps) { if (protoProps) NavMobile_defineProperties(Constructor.prototype, protoProps); if (staticProps) NavMobile_defineProperties(Constructor, staticProps); return Constructor; }





var NavMobile_NavMobile =
/*#__PURE__*/
function () {
  function NavMobile(elements) {
    NavMobile_classCallCheck(this, NavMobile);

    this.$body = jquery_default()(document.body);
    this.$window = jquery_default()(window);
    this.$el = elements.$el;
    this.$toggleOpen = elements.$toggleOpen;
    this.isOpen = false;
    this.subMenus = null;
    this.$mobileNav = this.$el.find('[data-mobile-nav]');
    this.$panel = this.$el.find('[data-mobile-nav-panel]');
    this.$overlay = this.$el.find('[data-mobile-nav-overlay]');
    this.$toggleClose = this.$el.find('[data-mobile-nav-close]'); // Revert navigation to original state on breakpoint change

    this.layoutHandler = this.onBreakpointChange.bind(this);
    Layout["a" /* default */].onBreakpointChange(this.layoutHandler);

    this._bindEvents();
  }

  NavMobile_createClass(NavMobile, [{
    key: "unload",
    value: function unload() {
      this._close();

      this.$window.off('resize.mobile-nav');
      Layout["a" /* default */].offBreakpointChange(this.layoutHandler);
    }
  }, {
    key: "onBreakpointChange",
    value: function onBreakpointChange() {
      if (Layout["a" /* default */].isGreaterThanBreakpoint('M') && this.isOpen) {
        this._close();
      }
    }
  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      var _this = this;

      this.$toggleOpen.on('click.mobile-nav', function (event) {
        event.preventDefault();
        if (!Layout["a" /* default */].isGreaterThanBreakpoint('M')) _this._open();
      });
      this.$window.on('resize.mobile-nav', function () {
        _this.$el.find('[data-menu-toggle]').removeClass('active');

        if (_this.isOpen) {
          _this._setPanelHeight();
        }
      });
    }
  }, {
    key: "_setPanelHeight",
    value: function _setPanelHeight() {
      this.$panel.height(window.innerHeight);
    }
  }, {
    key: "_open",
    value: function _open() {
      var _this2 = this;

      this.$body.addClass('scroll-lock');
      this.isOpen = true; // Activate Submenu handler

      this.subMenus = new NavMobileSubMenus_NavMobileSubMenus(this.$panel);

      this._setPanelHeight(); // Animate in elements


      this.$mobileNav.addClass('animating animating-in').one('trend', function () {
        _this2.$mobileNav.removeClass('animating animating-in').addClass('visible').off('trend');
      });
      this.$mobileNav.focus(); // Event handlers

      this.events = [// Close menu when clicking on the overlay
      this.$overlay.on('click.mobile-nav', function (event) {
        return _this2._close(event);
      }), this.$toggleClose.on('click.mobile-nav', function (event) {
        return _this2._close(event);
      }), // Disable scrolling on overlay and contactbar
      this.$overlay.on('touchmove.mobile-nav', function (event) {
        return event.preventDefault();
      })];
    }
  }, {
    key: "_close",
    value: function _close() {
      var _this3 = this;

      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (event) event.preventDefault();
      this.$mobileNav.addClass('animating animating-out').one('trend', function () {
        _this3.$mobileNav.removeClass('animating animating-out').removeClass('visible').off('trend');
      });
      this.$body.removeClass('scroll-lock');
      this.isOpen = false; // Close any open drop down menus

      if (this.subMenus) {
        this.subMenus.closeSubMenus(this.$el);
        this.subMenus.closeAllSubmenus(); // Unbind Mobile sub menus

        this.subMenus.unload();
      } // Unbind events


      if (this.events) {
        this.events.forEach(function ($el) {
          return $el.off('.mobile-nav');
        });
        this.events = [];
      }
    }
  }]);

  return NavMobile;
}();


// CONCATENATED MODULE: ./node_modules/@pixelunion/animations/dist/animations.es.js

  /*!
   * @pixelunion/animations v0.1.0
   * (c) 2019 Pixel Union
   * Released under the UNLICENSED license.
  */

function animations_es_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function animations_es_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function animations_es_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) animations_es_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) animations_es_defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Promisified version of window.requestAnimationFrame.
 * @returns {Promise} Promise will resolve when requestAnimationFrame callback is run.
 */
function raf() {
  return new Promise(function (resolve) {
    window.requestAnimationFrame(resolve);
  });
}
/**
 * Represents an HTML element with associate states
 */


var Animation =
/*#__PURE__*/
function () {
  /**
   * @param {Object} options
   * @param {HTMLElement}  options.el Target element
   * @param {String} [options.state=initial] Initial state. This is also the default state.
   * @param {String} [options.stateAttribute=data-revealer] Attribute name to update with state.
   * @param {String} [options.stateChangeAttribute=data-revealer-transition] Attribute name to
   * update with change of state.
   * @param {String} [options.endEvent=transitionend] Event to listen for at end of state change.
   * @param {Boolean} [options.hold=false] If true, changeAttribute will not be removed until the
   * next state change.
   * @param {Function} [options.onStart] Callback to execute immediate after
   * applying stateChangeAttribute.
   */
  function Animation(options) {
    animations_es_classCallCheck(this, Animation);

    this._el = options.el;
    this.cancelRunning = null;
    this._state = options.state || 'initial';
    this.initialState = this._state;
    this.stateAttribute = options.stateAttribute || 'data-animation-state';
    this.stateChangeAttribute = options.stateChangeAttribute || 'data-animation';
    this.endEvent = options.endEvent || 'transitionend';
    this.hold = !!options.hold;

    this.onStart = options.onStart || function () {
      /* do nothing */
    };

    this.activeEventHandler = null;
  }
  /**
   * Returns target element
   *
   * @return {HTMLElement} Target element
   */


  animations_es_createClass(Animation, [{
    key: "isState",

    /**
     * Check if a state is active
     * @param {String} state State to compare
     *
     * @return {Boolean}
     */
    value: function isState(state) {
      return state === this._state;
    }
    /**
     * Sequences a change to a new state.
     * @param {String} state Target state
     *
     * @param {Boolean} options.force Switch to final state immediately
     *
     * @param {Function} options.onStart Callback to execute immediately after
     * applying stateChangeAttribute for this state change only.
     *
     * @param {Boolean} [options.hold=false] If true, changeAttribute will not be removed until the
     * next state change.
     *
     * @return {Promise} Resolves when endEvent triggered
     */

  }, {
    key: "animateTo",
    value: function animateTo(state) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var from = this._el.dataset[this.stateAttribute] || this._state;
      var to = state || this.initialState;
      var force = options.force;
      var hold = 'hold' in options ? options.hold : this.hold;
      return new Promise(function (resolve) {
        if (_this.cancelRunning) {
          _this.cancelRunning();
        }

        if (from === to) {
          // Removing this here fixes some lingering attributes. But why?
          _this._el.removeAttribute(_this.stateChangeAttribute);

          resolve(from, null);
          return;
        }

        var running = true;

        _this.cancelRunning = function () {
          running = false;
          resolve(null, null);
        };

        _this._el.removeEventListener(_this.endEvent, _this.activeEventHandler);

        _this.activeEventHandler = null;

        if (force) {
          _this._el.setAttribute(_this.stateChangeAttribute, "".concat(from, "=>").concat(to));

          _this.onStart({
            el: _this._el,
            from: from,
            to: to
          });

          if (typeof options.onStart === 'function') {
            options.onStart({
              el: _this._el,
              from: from,
              to: to
            });
          }

          _this._el.setAttribute(_this.stateAttribute, to);

          _this._state = to;

          if (!hold) {
            _this._el.removeAttribute(_this.stateChangeAttribute);
          }

          resolve(to, null);
          return;
        }

        raf().then(function () {
          if (!running) throw new Error('cancelled');

          _this._el.setAttribute(_this.stateChangeAttribute, "".concat(from, "=>").concat(to));

          _this.onStart({
            el: _this._el,
            from: from,
            to: to
          });

          if (typeof options.onStart === 'function') {
            options.onStart({
              el: _this._el,
              from: from,
              to: to
            });
          }

          return raf();
        }).then(function () {
          if (!running) throw new Error('cancelled');

          _this._el.removeEventListener(_this.endEvent, _this.activeEventHandler);

          _this.activeEventHandler = function (e) {
            // Ignore any events bubbling up
            if (e.target !== _this._el || !running) return;

            _this._el.removeEventListener(_this.endEvent, _this.activeEventHandler);

            if (!hold) {
              _this._el.removeAttribute(_this.stateChangeAttribute);
            }

            resolve(to, e);
          };

          _this._el.addEventListener(_this.endEvent, _this.activeEventHandler);

          _this._el.setAttribute(_this.stateAttribute, to);

          _this._state = to;
        })["catch"](function (error) {
          // Only catch 'cancelled' errors.
          if (error.message !== 'cancelled') throw error;
        });
      });
    }
    /**
     * Remove any event listeners
     */

  }, {
    key: "unload",
    value: function unload() {
      this._el.removeEventListener(this.endEvent, this.activeEventHandler);

      this.activeEventHandler = null;
    }
  }, {
    key: "el",
    get: function get() {
      return this._el;
    }
    /**
     * Returns current state
     *
     * @return {String} Current state
     */

  }, {
    key: "state",
    get: function get() {
      return this._state;
    }
  }]);

  return Animation;
}();

/**
 * Manage state changes for a set of elements
 */

var AnimationsManager =
/*#__PURE__*/
function () {
  function AnimationsManager() {
    animations_es_classCallCheck(this, AnimationsManager);

    this.animations = new Map();
  }
  /**
   * Add a new element and return an animation for that element. If element already has an associated animation, return that animation.
   * @param {Object} options
   * @param {HTMLElement}  options.el Target element
   * @param {String} [options.state=initial] Initial state. This is also the default state.
   * @param {String} [options.stateAttribute=data-revealer] Attribute name to update with state.
   * @param {String} [options.stateChangeAttribute=data-revealer-transition] Attribute name to update with change of state.
   * @param {String} [options.endEvent=transitionend] Event name to listen for at end of state change.
   * @param {Boolean} [options.hold=false] If true, changeAttribute will not be removed until the next state change.
   * @param {Function} [options.onStart] Callback to execute immediate after applying stateChangeAttribute.
   *
   * @return {Animation}
   */


  animations_es_createClass(AnimationsManager, [{
    key: "add",
    value: function add(options) {
      if (this.animations.has(options.el)) return this.animations.get(options.el);
      var animation = new Animation(options);
      this.animations.set(options.el, animation);
      return animation;
    }
    /**
     * Remove a single animation
     * @param {Animation} animation Animation to remove. Any event listeners will also be removed.
     */

  }, {
    key: "remove",
    value: function remove(animation) {
      this.animations["delete"](animation.el);
      animation.unload();
    }
    /**
     * Remove all animations, including all event listeners.
     */

  }, {
    key: "removeAll",
    value: function removeAll() {
      this.animations.forEach(function (animation) {
        return animation.unload();
      });
    }
  }]);

  return AnimationsManager;
}();

function animation(options) {
  var setOptions = {
    endEvent: 'animationend',
    hold: true
  };
  return new Animation(_objectSpread2({
    options: options
  }, setOptions));
}

function transition(options) {
  return new Animation(options);
}



// CONCATENATED MODULE: ./source/scripts/components/navigation/NavDesktopDimmer.js
function NavDesktopDimmer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NavDesktopDimmer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function NavDesktopDimmer_createClass(Constructor, protoProps, staticProps) { if (protoProps) NavDesktopDimmer_defineProperties(Constructor.prototype, protoProps); if (staticProps) NavDesktopDimmer_defineProperties(Constructor, staticProps); return Constructor; }



var NavDesktopDimmer_NavDesktopDimmer =
/*#__PURE__*/
function () {
  function NavDesktopDimmer() {
    NavDesktopDimmer_classCallCheck(this, NavDesktopDimmer);

    this.el = document.querySelector('[data-main-nav-dimmer]');
    this.animation = transition({
      el: this.el,
      state: 'closed'
    });
    this.openers = new Set();
  }

  NavDesktopDimmer_createClass(NavDesktopDimmer, [{
    key: "open",
    value: function open(requestor) {
      if (this.openers.has(requestor)) return;
      this.openers.add(requestor);
      this.animation.animateTo('open');
    }
  }, {
    key: "close",
    value: function close(requestor) {
      this.openers.delete(requestor);
      if (this.openers.size) return;
      this.animation.animateTo('closed');
    }
  }, {
    key: "unload",
    value: function unload() {
      this.animation.unload();
    }
  }]);

  return NavDesktopDimmer;
}();

/* harmony default export */ var navigation_NavDesktopDimmer = (new NavDesktopDimmer_NavDesktopDimmer());
// CONCATENATED MODULE: ./source/scripts/components/navigation/NavDesktopParent.js
function NavDesktopParent_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NavDesktopParent_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function NavDesktopParent_createClass(Constructor, protoProps, staticProps) { if (protoProps) NavDesktopParent_defineProperties(Constructor.prototype, protoProps); if (staticProps) NavDesktopParent_defineProperties(Constructor, staticProps); return Constructor; }



 // eslint-disable-line import/no-cycle

var NavDesktopParent_NavDesktopParent =
/*#__PURE__*/
function () {
  function NavDesktopParent(el, options) {
    var _this = this;

    NavDesktopParent_classCallCheck(this, NavDesktopParent);

    this.listitem = el;
    this.link = null;
    this.submenu = null;
    this._isOpen = false;
    this.menu = null;
    this.parentMenu = options.parentMenu;
    this.closeSiblings = this.parentMenu.closeSiblings;
    var children = this.listitem.children;

    for (var i = 0; i < children.length; i++) {
      if (children[i].classList.contains('navmenu-link')) {
        this.link = children[i];
      } else if (children[i].classList.contains('navmenu-submenu')) {
        this.submenu = children[i];
      }
    }

    this.animation = transition({
      el: this.submenu,
      state: 'closed'
    });

    this.open = function () {
      _this._open();
    };

    this.close = function () {
      _this._close();
    };

    this.closeEsc = function (e) {
      if (e.key === 'Escape') {
        _this.link.focus();

        _this.close();
      }
    };

    this.timer = null;

    this.mouseover = function () {
      _this.open();

      clearTimeout(_this.timer);
    };

    this.mouseout = this.mouseout.bind(this);

    this.click = function (e) {
      e.stopPropagation(); // if already open, continue to link destination

      if (!e.target.classList.contains('navmenu-link-parent') || _this._isOpen) {
        return;
      }

      e.preventDefault();

      _this.open();
    };

    this.focusin = function (e) {
      e.stopPropagation();

      if (e.target.classList.contains('navmenu-link-parent')) {
        _this.closeSiblings(_this);
      }
    };

    this.listitem.addEventListener('mouseover', this.mouseover);
    this.listitem.addEventListener('mouseout', this.mouseout);
    this.listitem.addEventListener('touchend', this.click);
    this.listitem.addEventListener('click', this.click);
    this.listitem.addEventListener('focusin', this.focusin);
    document.body.addEventListener('click', this.close);
    document.body.addEventListener('focusin', this.close);
  }

  NavDesktopParent_createClass(NavDesktopParent, [{
    key: "mouseout",
    value: function mouseout() {
      this.timer = setTimeout(this.close, 400);
    }
  }, {
    key: "forceOpen",
    value: function forceOpen() {
      return this._open(true);
    }
  }, {
    key: "forceClose",
    value: function forceClose() {
      return this._close(true);
    }
  }, {
    key: "_open",
    value: function _open() {
      var _this2 = this;

      if (this._isOpen) return;
      this._isOpen = true;
      navigation_NavDesktopDimmer.open(this);
      this.closeSiblings(this);
      window.addEventListener('keydown', this.closeEsc);

      if (!this.menu) {
        this.menu = new NavDesktopMenu_NavDesktopMenu(this.submenu);
      }

      this.animation.animateTo('open', {
        hold: true,
        onStart: function onStart(_ref) {
          var el = _ref.el;
          var height = 0;

          for (var i = 0; i < el.children.length; i++) {
            height += el.children[i].offsetHeight;
          }

          var _window$getComputedSt = window.getComputedStyle(el),
              paddingTop = _window$getComputedSt.paddingTop,
              paddingBottom = _window$getComputedSt.paddingBottom;

          height += parseInt(paddingTop, 10);
          height += parseInt(paddingBottom, 10);

          _this2.listitem.style.setProperty('--menu-open-height', "".concat(height, "px")); // Check for alternate side dropdown


          var bounds = _this2.submenu.getBoundingClientRect();

          if (bounds.right > document.documentElement.clientWidth) {
            _this2.listitem.classList.add('alternate-drop');
          }
        }
      }).then(function (state) {
        if (state === 'open') {
          _this2.link.setAttribute('aria-expanded', true);
        }
      });
    }
  }, {
    key: "_close",
    value: function _close() {
      var _this3 = this;

      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!this._isOpen) return;

      if (this.menu) {
        this.menu.unload();
        this.menu = null;
      }

      this._isOpen = false;
      window.removeEventListener('keydown', this.closeEsc);
      navigation_NavDesktopDimmer.close(this);
      this.animation.animateTo('closed', {
        force: force
      }).then(function (state) {
        if (state === 'closed') {
          _this3.listitem.classList.remove('alternate-drop');

          _this3.link.setAttribute('aria-expanded', false);

          _this3.parentMenu.openSelectedBlock();
        }
      });
    }
  }, {
    key: "unload",
    value: function unload() {
      this.forceClose();
      this.listitem.removeEventListener('mouseover', this.mouseover);
      this.listitem.removeEventListener('mouseout', this.mouseout);
      this.listitem.removeEventListener('touchend', this.click);
      this.listitem.removeEventListener('click', this.click);
      this.listitem.removeEventListener('focusin', this.focusin);
      window.removeEventListener('keydown', this.closeEsc);
      document.body.removeEventListener('click', this.bodyClose);
      document.body.removeEventListener('focusin', this.focusInClose);
      this.animation.unload();
    }
  }, {
    key: "isOpen",
    get: function get() {
      return this._isOpen;
    }
  }]);

  return NavDesktopParent;
}();


// CONCATENATED MODULE: ./source/scripts/components/navigation/NavDesktopMeganavParent.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function NavDesktopMeganavParent_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NavDesktopMeganavParent_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function NavDesktopMeganavParent_createClass(Constructor, protoProps, staticProps) { if (protoProps) NavDesktopMeganavParent_defineProperties(Constructor.prototype, protoProps); if (staticProps) NavDesktopMeganavParent_defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // eslint-disable-line import/no-cycle

var NavDesktopMeganavParent_NavDesktopMeganavParent =
/*#__PURE__*/
function (_NavDesktopParent) {
  _inherits(NavDesktopMeganavParent, _NavDesktopParent);

  function NavDesktopMeganavParent() {
    NavDesktopMeganavParent_classCallCheck(this, NavDesktopMeganavParent);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavDesktopMeganavParent).apply(this, arguments));
  }

  NavDesktopMeganavParent_createClass(NavDesktopMeganavParent, [{
    key: "mouseout",
    value: function mouseout() {
      // This prevents the menu from closing on mouseout when it's selected in the TE
      if (!this.parentMenu.shouldBlockClose(this)) return;
      this.timer = setTimeout(this.close, 400);
    }
  }, {
    key: "_open",
    value: function _open() {
      var _this = this;

      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (this._isOpen) return;
      this._isOpen = true;
      window.addEventListener('keydown', this.closeEsc); // Handles the special meganav to meganav transition behaviour, where
      // the drawer appears to stay open and transition from old to new height

      var resolveOpenMeganavs = new Promise(function (resolve) {
        var openMeganav = _this.parentMenu.openMeganav;

        if (openMeganav) {
          // Set height to start transitioning from: the open height of the previous meganav
          _this.listitem.style.setProperty('--menu-closed-height', "".concat(openMeganav.openHeight, "px")); // Inject old meganav ghost content


          var meganavGhostContent = openMeganav.content.cloneNode(true);

          var _openMeganav$content$ = openMeganav.content.getBoundingClientRect(),
              width = _openMeganav$content$.width,
              left = _openMeganav$content$.left;

          meganavGhostContent.classList.add('meganav-ghost'); // Set styles to absolutely position ghost content correctly

          meganavGhostContent.style.left = "".concat(left, "px");
          meganavGhostContent.style.width = "".concat(width, "px");

          _this.submenu.appendChild(meganavGhostContent);

          navigation_NavDesktopDimmer.open(_this); // Jump to ghost state

          _this.animation.animateTo('ghost', {
            force: true
          }) // Close other meganav
          .then(function () {
            return _this.parentMenu.openMeganav.forceClose();
          }).then(resolve);
        } else {
          // If no other meganavs are open we can start immediately.
          _this.listitem.style.setProperty('--menu-closed-height', 0);

          navigation_NavDesktopDimmer.open(_this);
          resolve();
        }
      });
      resolveOpenMeganavs.then(function () {
        return _this.closeSiblings(_this);
      }).then(function () {
        return _this.animation.animateTo('open', {
          force: force,
          hold: !force,
          onStart: function onStart(_ref) {
            var el = _ref.el;
            var wrapper = el.querySelector('.navmenu-meganav-wrapper');
            var maxHeight = parseInt(window.getComputedStyle(wrapper).maxHeight, 10);
            var height = isFinite(maxHeight) ? Math.min(wrapper.scrollHeight, maxHeight) : wrapper.scrollHeight;

            _this.listitem.style.setProperty('--menu-open-height', "".concat(height, "px"));

            _this._openHeight = height;
          }
        });
      }).then(function () {
        _this.link.setAttribute('aria-expanded', true);

        _this.parentMenu.openMeganav = _this; // Rapid mouse movement can sometimes cancel animation before ghost is removed,
        // so when things finally settle make sure we're removing all ghosts.

        _this.submenu.querySelectorAll('.meganav-ghost').forEach(function (ghost) {
          ghost.parentNode.removeChild(ghost);
        });
      });
    }
  }, {
    key: "_close",
    value: function _close() {
      var _this2 = this;

      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      // You would expect to see something like this to avoid "double closing" menus,
      // but in practice it works more reliably to always run when the function is called,
      // to avoid out-of-sync situations.
      // if (!this._isOpen) return Promise.resolve();
      if (this.parentMenu.openMeganav === this) {
        this.parentMenu.openMeganav = null;
      }

      this._isOpen = false;
      window.removeEventListener('keydown', this.closeEsc);
      this.listitem.style.setProperty('--menu-closed-height', 0);
      navigation_NavDesktopDimmer.close(this);
      return this.animation.animateTo('closed', {
        force: force
      }).then(function () {
        _this2.link.setAttribute('aria-expanded', false);

        _this2.parentMenu.openSelectedBlock();
      });
    }
  }, {
    key: "content",
    get: function get() {
      return this.submenu.querySelector('.navmenu-meganav-wrapper');
    }
  }, {
    key: "openHeight",
    get: function get() {
      return this._openHeight;
    }
  }, {
    key: "blockId",
    get: function get() {
      return this.submenu.dataset.meganavId;
    }
  }]);

  return NavDesktopMeganavParent;
}(NavDesktopParent_NavDesktopParent);


// CONCATENATED MODULE: ./source/scripts/components/navigation/NavDesktopMenu.js
function NavDesktopMenu_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NavDesktopMenu_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function NavDesktopMenu_createClass(Constructor, protoProps, staticProps) { if (protoProps) NavDesktopMenu_defineProperties(Constructor.prototype, protoProps); if (staticProps) NavDesktopMenu_defineProperties(Constructor, staticProps); return Constructor; }

 // eslint-disable-line import/no-cycle

 // eslint-disable-line import/no-cycle

var NavDesktopMenu_NavDesktopMenu =
/*#__PURE__*/
function () {
  function NavDesktopMenu(_ref) {
    var _this = this;

    var children = _ref.children;

    NavDesktopMenu_classCallCheck(this, NavDesktopMenu);

    this.parents = [];
    this.children = children; // Meganav, if any, that is fully open (not animating).

    this._openMeganav = null; // Meganav, if any, that is selected for editing in the TE.

    this._selectedBlock = null;
    this._megaNavs = null;

    this.closeSiblings = function (current) {
      _this.parents.forEach(function (parent) {
        if (parent !== current) {
          parent.close();
        }
      });
    };

    for (var i = 0; i < this.children.length; i++) {
      var child = this.children[i];

      if (child.dataset.navmenuMeganavTrigger !== undefined) {
        this.parents.push(new NavDesktopMeganavParent_NavDesktopMeganavParent(child, {
          parentMenu: this
        }));
      } else if (child.dataset.navmenuParent !== undefined) {
        this.parents.push(new NavDesktopParent_NavDesktopParent(child, {
          parentMenu: this
        }));
      } else if (child.classList.contains('navmenu-item')) {
        child.addEventListener('focusin', this.closeSiblings);
      }
    }
  }

  NavDesktopMenu_createClass(NavDesktopMenu, [{
    key: "selectBlock",
    value: function selectBlock(id) {
      var _this2 = this;

      // This is TE only, so only initialize the first time a block is selected
      if (!this._megaNavs) {
        this._megaNavs = {};
        this.parents.filter(function (parent) {
          return parent instanceof NavDesktopMeganavParent_NavDesktopMeganavParent;
        }).forEach(function (megaNav) {
          _this2._megaNavs[megaNav.blockId] = megaNav;
        });
      }

      var newSelectedBlock = this._megaNavs[id];
      if (this._selectedBlock === newSelectedBlock) return;

      if (this._selectedBlock) {
        this._selectedBlock.close();
      }

      this._selectedBlock = this._megaNavs[id]; // Force open give a better experience when changing settings.
      // Otherwise the selected block visibly closes and reopens after every
      // settings change.

      this._selectedBlock.forceOpen();
    }
  }, {
    key: "openSelectedBlock",
    value: function openSelectedBlock() {
      if (this._selectedBlock && this.parents.filter(function (parent) {
        return parent.isOpen;
      }).length === 0) {
        this._selectedBlock.open();
      }
    } // If a block is open and selected in the TE and no other blocks are open
    // we don't want to close it when we normally would.

  }, {
    key: "shouldBlockClose",
    value: function shouldBlockClose(block) {
      if (block === this._selectedBlock && this.parents.filter(function (parent) {
        return parent.isOpen;
      }).length === 1) {
        return false;
      }

      return true;
    }
  }, {
    key: "closeAllMenus",
    value: function closeAllMenus() {
      this._selectedBlock = null;
      this.parents.forEach(function (parent) {
        return parent.close();
      });
    }
  }, {
    key: "unload",
    value: function unload() {
      this.parents.forEach(function (parent) {
        parent.unload();
      });

      for (var i = 0; i < this.children.length; i++) {
        this.children[i].removeEventListener('focusin', this.closeSiblings);
      }
    }
  }, {
    key: "openMeganav",
    get: function get() {
      return this._openMeganav;
    },
    set: function set(meganav) {
      this._openMeganav = meganav;
    }
  }]);

  return NavDesktopMenu;
}();


// EXTERNAL MODULE: ./source/scripts/components/search/LiveSearch.js + 2 modules
var LiveSearch = __webpack_require__(32);

// EXTERNAL MODULE: ./source/scripts/components/search/SearchForm.js
var SearchForm = __webpack_require__(18);

// CONCATENATED MODULE: ./source/scripts/sections/StaticHeader.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StaticHeader_StaticHeader; });
function StaticHeader_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function StaticHeader_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function StaticHeader_createClass(Constructor, protoProps, staticProps) { if (protoProps) StaticHeader_defineProperties(Constructor.prototype, protoProps); if (staticProps) StaticHeader_defineProperties(Constructor, staticProps); return Constructor; }












var StaticHeader_StaticHeader =
/*#__PURE__*/
function () {
  function StaticHeader(section) {
    var _this = this;

    StaticHeader_classCallCheck(this, StaticHeader);

    this.$el = jquery_default()(section.el);
    this.settings = section.data.settings;
    this.currency = section.data.currency;
    this.postMessage = section.postMessage;
    this.headerSearch = null;
    this.$scripts = jquery_default()('[data-scripts]');
    this.$menuToggle = this.$el.find('[data-menu-toggle]');
    this.$cartCount = this.$el.find('[data-header-cart-count]');
    this.$searchField = this.$el.find('[data-live-search]');
    this.$siteNavigation = this.$el.find('[data-site-navigation]');
    this.$desktopNavigation = this.$siteNavigation.find('ul.navmenu-depth-1');
    this.$headerTools = this.$siteNavigation.find('[data-header-actions]');
    this.converter = '[data-currency-converter]';
    this.$converter = jquery_default()(this.converter);
    this.stickyHeader = new StickyHeader_StickyHeader({
      header: this.$el[0],
      menuToggle: this.$menuToggle[0],
      postMessage: this.postMessage
    }, this.settings);
    this.navMobile = new NavMobile_NavMobile({
      $el: this.$el,
      $toggleOpen: this.$menuToggle
    });
    this.navDesktop = new NavDesktopMenu_NavDesktopMenu(document.querySelector('.site-navigation > [data-navmenu]'));
    this.forms = new Forms["a" /* default */](this.$el);

    if (this.settings.live_search.enable) {
      script_default()(this.$scripts.data('shopify-api-url'), function () {
        _this.headerSearch = new LiveSearch["a" /* default */]({
          $el: _this.$searchField,
          $header: _this.$el
        }, _this.settings.live_search);

        _this.mobileSearchButtonOnClick = function (e) {
          e.stopPropagation();

          _this.headerSearch.open();
        };

        _this.mobileSearchButtonEl = section.el.querySelector('[data-mobile-search-button]');

        if (_this.mobileSearchButtonEl) {
          _this.mobileSearchButtonEl.addEventListener('click', _this.mobileSearchButtonOnClick);
        }
      });
    } else {
      this.headerSearch = new SearchForm["a" /* default */](this.$searchField);
    }

    if (this.currency.enable) {
      // we assume currencies.js has been loaded
      this._converter();
    }

    jquery_default()(window).on('cartcount:update', function (event, data) {
      _this.$cartCount.attr('data-header-cart-count', data.response.item_count).toggleClass('visible', data.response.item_count > 0);
    });
  }

  StaticHeader_createClass(StaticHeader, [{
    key: "onSectionSelect",
    value: function onSectionSelect() {
      this.stickyHeader.openNavigation();
    }
  }, {
    key: "onSectionDeselect",
    value: function onSectionDeselect() {
      this._closeAllNavigation();
    }
  }, {
    key: "onSectionUnload",
    value: function onSectionUnload() {
      this.stickyHeader.unload();
      this.navMobile.unload();
      this.navDesktop.unload();
      this.forms.unload();
      jquery_default()(window).off('cartcount:update');
      this.headerSearch.unload();

      if (this.currency.enable) {
        this.$converter.off('change.converter');
      }

      if (this.mobileSearchButtonEl) {
        this.mobileSearchButtonEl.removeEventListener('click', this.mobileSearchButtonOnClick);
      }
    }
  }, {
    key: "onSectionMessage",
    value: function onSectionMessage(name) {
      if (name === 'nav:close-all' && Layout["a" /* default */].isGreaterThanBreakpoint('M')) {
        this._closeAllNavigation();
      }
    }
  }, {
    key: "onSectionBlockSelect",
    value: function onSectionBlockSelect(block) {
      var _this2 = this;

      if (!Layout["a" /* default */].isGreaterThanBreakpoint('M')) {
        return;
      }

      this.stickyHeader.openNavigation(function () {
        _this2.navDesktop.selectBlock(block.id);
      });
    }
  }, {
    key: "onSectionBlockDeselect",
    value: function onSectionBlockDeselect() {
      this._closeAllNavigation();
    }
  }, {
    key: "_converter",
    value: function _converter() {
      var _this3 = this;

      dist_default.a.init({
        switcherSelector: this.converter,
        priceSelector: '.money',
        shopCurrency: this.currency.shop_currency,
        defaultCurrency: this.currency.default_currency,
        displayFormat: this.currency.display_format,
        moneyFormat: this.currency.money_format,
        moneyFormatNoCurrency: this.currency.money_format_no_currency,
        moneyFormatCurrency: this.currency.money_format_currency
      });
      this.$converter.on('change.converter', function (event) {
        _this3.$converter.each(function (index, converter) {
          if (converter.value !== event.currentTarget.value) {
            converter.value = event.currentTarget.value; // eslint-disable-line no-param-reassign
          }
        });

        dist_default.a.setCurrency(event.currentTarget.value);
      });
    }
  }, {
    key: "_closeAllNavigation",
    value: function _closeAllNavigation() {
      this.navDesktop.closeAllMenus();
    }
  }]);

  return StaticHeader;
}();



/***/ })

}]);
//# sourceMappingURL=StaticHeader.bundle.js.map?1581358591380