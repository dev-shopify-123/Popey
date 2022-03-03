(window["wpJsonpPaskit"] = window["wpJsonpPaskit"] || []).push([[3],{

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

  /*!
   * shopify-asyncview v2.0.3
   * (c) 2019 Pixel Union
  */

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var deferred = {};

var AsyncView =
/*#__PURE__*/
function () {
  function AsyncView() {
    _classCallCheck(this, AsyncView);
  }

  _createClass(AsyncView, null, [{
    key: "load",

    /**
     * Load the template given by the provided URL into the provided
     * view
     *
     * @param {string} url - The url to load
     * @param {object} query - An object containing additional query parameters of the URL
     * @param {string} query.view - A required query parameter indicating which view to load
     * @param {object} [options] - Config options
     * @param {string} [options.hash] - A hash of the current page content
     */
    value: function load(url) {
      var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (!('view' in query)) {
        return Promise.reject(new Error('\'view\' not found in \'query\' parameter'));
      }

      var querylessUrl = url.replace(/\?[^#]+/, '');
      var queryParamsString = new RegExp(/.+\?([^#]+)/).exec(url);
      var queryParams = query;

      if (queryParamsString && queryParamsString.length >= 2) {
        queryParamsString[1].split('&').forEach(function (param) {
          var _param$split = param.split('='),
              _param$split2 = _slicedToArray(_param$split, 2),
              key = _param$split2[0],
              value = _param$split2[1];

          queryParams[key] = value;
        });
      } // NOTE: We're adding an additional timestamp to the query.
      // This is to prevent certain browsers from returning cached
      // versions of the url we are requesting.
      // See this PR for more info: https://github.com/pixelunion/shopify-asyncview/pull/4


      var cachebustingParams = _objectSpread2({}, queryParams, {
        _: new Date().getTime()
      });

      var hashUrl = querylessUrl.replace(/([^#]+)(.*)/, function (match, address, hash) {
        return "".concat(address, "?").concat(Object.keys(queryParams).sort().map(function (key) {
          return "".concat(key, "=").concat(encodeURIComponent(queryParams[key]));
        }).join('&')).concat(hash);
      });
      var requestUrl = querylessUrl.replace(/([^#]+)(.*)/, function (match, address, hash) {
        return "".concat(address, "?").concat(Object.keys(cachebustingParams).sort().map(function (key) {
          return "".concat(key, "=").concat(encodeURIComponent(cachebustingParams[key]));
        }).join('&')).concat(hash);
      });
      var promise = new Promise(function (resolve, reject) {
        var data;

        if (hashUrl in deferred) {
          resolve(deferred[hashUrl]);
          return;
        }

        deferred[hashUrl] = promise;

        if (options.hash) {
          data = sessionStorage.getItem(hashUrl);

          if (data) {
            var deserialized = JSON.parse(data);

            if (options.hash === deserialized.options.hash) {
              delete deferred[hashUrl];
              resolve(deserialized);
              return;
            }
          }
        }

        var xhr = new XMLHttpRequest();
        xhr.open('GET', requestUrl, true);

        xhr.onload = function () {
          var el = xhr.response;
          var newOptions = {};
          var optionsEl = el.querySelector('[data-options]');

          if (optionsEl && optionsEl.innerHTML) {
            newOptions = JSON.parse(el.querySelector('[data-options]').innerHTML);
          }

          var htmlEls = el.querySelectorAll('[data-html]');
          var newHtml = {};

          if (htmlEls.length === 1 && htmlEls[0].getAttribute('data-html') === '') {
            newHtml = htmlEls[0].innerHTML;
          } else {
            for (var i = 0; i < htmlEls.length; i++) {
              newHtml[htmlEls[i].getAttribute('data-html')] = htmlEls[i].innerHTML;
            }
          }

          var dataEls = el.querySelectorAll('[data-data]');
          var newData = {};

          if (dataEls.length === 1 && dataEls[0].getAttribute('data-data') === '') {
            console.log(dataEls[0]);
            newData = JSON.parse(dataEls[0].innerHTML);
          } else {
            for (var _i = 0; _i < dataEls.length; _i++) {
              newData[dataEls[_i].getAttribute('data-data')] = JSON.parse(dataEls[_i].innerHTML);
            }
          }


          if (options.hash) {
            try {
              sessionStorage.setItem(hashUrl, JSON.stringify({
                options: newOptions,
                data: newData,
                html: newHtml
              }));
            } catch (error) {
              console.error(error);
            }
          }

          delete deferred[hashUrl];
          resolve({
            data: newData,
            html: newHtml
          });
        };

        xhr.onerror = function () {
          delete deferred[hashUrl];
          reject();
        };

        xhr.responseType = 'document';
        xhr.send();
      });
      return promise;
    }
  }]);

  return AsyncView;
}();

/* harmony default export */ __webpack_exports__["a"] = (AsyncView);


/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Modal; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var just_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var just_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(just_debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vanilla_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var vanilla_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vanilla_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopify_theme_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Modal =
/*#__PURE__*/
function () {
  function Modal() {
    var callbacks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Modal);

    this.$body = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body);
    this.$window = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window);
    this.modal = null;
    this.$modal = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-modal-container]');
    this.$modalInner = this.$modal.find('[data-modal-inner]');
    this.trigger = null; // Extend default vanilla-modal callbacks back to instantiator of Modal

    this.defaultCallbacks = {
      onOpen: function onOpen() {},
      onClose: function onClose() {},
      onBeforeOpen: function onBeforeOpen() {},
      onBeforeClose: function onBeforeClose() {}
    };
    this.callbacks = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, this.defaultCallbacks, callbacks);
    this.finishedLoading = this.finishedLoading.bind(this);
    this._onOpen = this._onOpen.bind(this);
    this._onBeforeOpen = this._onBeforeOpen.bind(this);
    this._onClose = this._onClose.bind(this);
    this._onBeforeClose = this._onBeforeClose.bind(this);
    this._closeEsc = this._closeEsc.bind(this);
    this.position = this.position.bind(this);
    this.modalOptions = {
      loadClass: '',
      class: 'modal-loaded',
      onOpen: this._onOpen,
      onClose: this._onClose,
      onBeforeOpen: this._onBeforeOpen,
      onBeforeClose: this._onBeforeClose,
      transitions: false
    };
  }

  _createClass(Modal, [{
    key: "unload",
    value: function unload() {
      if (!this.modal || !this.modal.isOpen) return;
      this.modal.destroy();
    }
    /**
     * Open a modal with contents from selector
     *
     * @param selector
     * @param handle
     */

  }, {
    key: "open",
    value: function open(selector) {
      var handle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'general';
      var trigger = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      this._addModalClass(handle);

      this.modal = new vanilla_modal__WEBPACK_IMPORTED_MODULE_2___default.a(this.modalOptions);
      this.modal.open(selector);
      this.trigger = trigger;
      window.addEventListener('keydown', this.closeEsc);
    }
  }, {
    key: "close",
    value: function close() {
      this.modal.close();
      window.removeEventListener('keydown', this.closeEsc);
    }
  }, {
    key: "finishedLoading",
    value: function finishedLoading() {
      Object(_shopify_theme_a11y__WEBPACK_IMPORTED_MODULE_3__[/* trapFocus */ "b"])(this.$modal[0]);
    }
  }, {
    key: "_closeEsc",
    value: function _closeEsc(e) {
      if (e.key === 'Escape') {
        this.close();
      }
    }
  }, {
    key: "isOpen",
    value: function isOpen() {
      return this.modal && this.modal.isOpen;
    }
    /**
     * Update the vertical positioning of modal
     */

  }, {
    key: "position",
    value: function position() {
      var windowHeight = window.innerHeight;
      var modalHeight = this.$modalInner.outerHeight();
      var modalPadding = parseInt(this.$modal.css('padding-top'), 10) * 2;
      var offset = (windowHeight - modalPadding - modalHeight) / 2;
      var marginTop = offset > 0 ? offset : 0;
      this.$modalInner.css({
        marginTop: marginTop
      });
    }
    /**
     * Add a class to the modal for individual styling
     * @param handle
     * @private
     */

  }, {
    key: "_addModalClass",
    value: function _addModalClass(handle) {
      this.$modal.addClass("modal--".concat(handle));
    }
    /**
     * Remove modal class based on the handle
     * @private
     */

  }, {
    key: "_removeModalClass",
    value: function _removeModalClass() {
      var modalClass = this.$modal.attr('class').match(/modal--[\w-]*\b/);

      if (!modalClass) {
        return;
      }

      this.$modal.removeClass(modalClass[0]);
    }
  }, {
    key: "_onClose",
    value: function _onClose() {
      this._removeModalClass();

      this.$body.removeClass('scroll-lock').removeClass('modal-visible');
      this.$window.off('resize.modal');
      this.$modalInner.css({
        marginTop: ''
      });
      this.callbacks.onClose();
      Object(_shopify_theme_a11y__WEBPACK_IMPORTED_MODULE_3__[/* removeTrapFocus */ "a"])(this.$modal[0]);

      if (this.activeElement) {
        this.activeElement.focus();
      }
    }
  }, {
    key: "_onOpen",
    value: function _onOpen() {
      var _this = this;

      this.activeElement = document.activeElement;
      this.position();
      this.$body.addClass('scroll-lock').addClass('modal-visible');
      this.$window.on('resize.modal', just_debounce__WEBPACK_IMPORTED_MODULE_1___default()(function () {
        return _this.position();
      }, 16, true, true));
      this.callbacks.onOpen();
      Object(_shopify_theme_a11y__WEBPACK_IMPORTED_MODULE_3__[/* trapFocus */ "b"])(this.$modal[0]);
    }
  }, {
    key: "_onBeforeClose",
    value: function _onBeforeClose() {
      this.callbacks.onBeforeClose();
    }
  }, {
    key: "_onBeforeOpen",
    value: function _onBeforeOpen() {
      this.callbacks.onBeforeOpen();
    }
  }]);

  return Modal;
}();



/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(0);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);

// EXTERNAL MODULE: ./node_modules/scriptjs/dist/script.js
var script = __webpack_require__(1);
var script_default = /*#__PURE__*/__webpack_require__.n(script);

// EXTERNAL MODULE: ./source/scripts/Layout.js
var Layout = __webpack_require__(6);

// CONCATENATED MODULE: ./source/scripts/helpers/LazyLoader.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Allows a callback to be run once, when a target intersects the viewport.
 * @constructor
 * @param {HTMLElement} target Element to track
 * @param {Function} callback Function to execute when target enters viewport (only executed once)
 * @param {Object} [options] options with which to construct the IntersectionObserver
 * @param {string} [options.rootMargin='30%'] A string which specifies a set of offsets to add to the root's bounding_box when calculating intersections.
 * @param {number} [options.threshold=0] Ratio of intersection required to trigger callback
 */
var LazyLoader =
/*#__PURE__*/
function () {
  function LazyLoader(target, callback, options) {
    _classCallCheck(this, LazyLoader);

    var defaultOptions = {
      rootMargin: '30%',
      threshold: 0
    };
    this.callback = callback;
    this._runCallback = this._runCallback.bind(this);
    this.observer = new IntersectionObserver(this._runCallback, _objectSpread({}, defaultOptions, {}, options));
    this.observer.observe(target);
  }
  /**
   * Runs the callback if first entry becomes intersecting, then unloads the LazyLoader
   * @_runCallback
   * @param {IntersectionObserverEntry[]} entries Entry to check - all but the
   * first element will be ignored.
   */


  _createClass(LazyLoader, [{
    key: "_runCallback",
    value: function _runCallback(entries) {
      // do nothing unless target moved into state of intersection
      if (entries[0].isIntersecting === true) {
        this.unload();
        this.callback();
      }
    }
    /**
     * Disconnects IntersectionObserver if active
     * @unload
     */

  }, {
    key: "unload",
    value: function unload() {
      this.observer.disconnect();
    }
  }]);

  return LazyLoader;
}();


// EXTERNAL MODULE: ./node_modules/shopify-currency-converter/dist/index.js
var dist = __webpack_require__(9);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// EXTERNAL MODULE: ./node_modules/shopify-asyncview/dist/index.es.js
var index_es = __webpack_require__(19);

// EXTERNAL MODULE: ./source/scripts/components/Modal.js
var Modal = __webpack_require__(21);

// EXTERNAL MODULE: ./source/scripts/components/ProductDetails.js + 2 modules
var ProductDetails = __webpack_require__(29);

// EXTERNAL MODULE: ./source/scripts/components/RichText.js
var RichText = __webpack_require__(10);

// EXTERNAL MODULE: ./source/scripts/helpers/ProductReviews.js
var ProductReviews = __webpack_require__(31);

// CONCATENATED MODULE: ./source/scripts/components/ProductQuickshop.js
function ProductQuickshop_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ProductQuickshop_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ProductQuickshop_createClass(Constructor, protoProps, staticProps) { if (protoProps) ProductQuickshop_defineProperties(Constructor.prototype, protoProps); if (staticProps) ProductQuickshop_defineProperties(Constructor, staticProps); return Constructor; }









var ProductQuickshop_ProductQuickshop =
/*#__PURE__*/
function () {
  function ProductQuickshop(options) {
    ProductQuickshop_classCallCheck(this, ProductQuickshop);

    this.$el = options.$el;
    this.id = options.id;
    this.initialVariant = options.initialVariant || null;
    this.quickShopSelector = "#shopify-section-".concat(this.id, " [data-product-quickshop]");
    this.$quickShop = jquery_default()(this.quickShopSelector);
    this.quickshopSpinner = this.$quickShop[0].querySelector('.quickshop-spinner');
    this.modalClass = options.modalClass;
    this.loaded = false;
    this.richText = null;
    this.productDetails = null;
    this.trigger = options.trigger;
    this.isOpen = false;
    this.openingAddToCart = false;
    this.url = this.$el.data('product-quickshop-url');
    this.hash = this.$el.data('quickshop-hash');
    this.modalCallbacks = {
      onOpen: this._open.bind(this),
      onClose: this._close.bind(this)
    };
    this.atcCallbacks = {
      onInit: this._onATCInit.bind(this),
      onError: this._onATCError.bind(this),
      onSuccess: this._onATCSuccess.bind(this),
      onClose: this._onATCClose.bind(this)
    };

    this._initialize();
  }

  ProductQuickshop_createClass(ProductQuickshop, [{
    key: "_initialize",
    value: function _initialize() {
      var _this = this;

      this.modal = new Modal["a" /* default */](this.modalCallbacks);
      this.modal.open(this.quickShopSelector, this.modalClass, this.trigger);
      this.isOpen = true;
      var $quickShopModalContent = this.modal.$modalInner.find('[data-modal-content]');
      index_es["a" /* default */].load(this.url, {
        view: '_quickshop'
      }, {
        hash: this.hash
      }).then(function (_ref) {
        var html = _ref.html,
            data = _ref.data;

        // Stop populating the modal if it was closed before the content was loaded
        if (!_this.isOpen) {
          return;
        }

        $quickShopModalContent.html(html.content);
        Object(ProductReviews["a" /* initShopifyProductReviews */])();
        $quickShopModalContent.find('.money').each(function (index, el) {
          return dist_default.a.update(el);
        });

        if (window.Shopify && Shopify.PaymentButton) {
          Shopify.PaymentButton.init();
        }

        _this.$message = $quickShopModalContent.find('[data-product-quickshop-message]');
        _this.$formArea = $quickShopModalContent.find('[data-product-form-area]');
        _this.gallery = $quickShopModalContent[0].querySelector('[data-product-gallery]');
        _this.$details = $quickShopModalContent.find('[data-product-details]');
        _this.$description = $quickShopModalContent.find('[data-product-description]');
        _this.context = data.context;
        _this.settings = data.settings;
        _this.product = data.product;

        _this._onQuickshopLoaded();
      }).catch();
    }
  }, {
    key: "_onQuickshopLoaded",
    value: function _onQuickshopLoaded() {
      var _this2 = this;

      if (this.loaded) {
        return;
      }

      if (this.$description && this.$description.length) {
        this.richText = new RichText["a" /* default */](this.$description);
      }

      var options = {
        $formArea: this.$formArea,
        gallery: this.gallery,
        $details: this.$details,
        atcCallbacks: this.atcCallbacks,
        context: this.context,
        settings: this.settings,
        product: this.product,
        useHistory: false,
        isQuickshop: true,
        initialVariant: this.initialVariant
      };
      this.modal.position();
      this.modal.finishedLoading();
      this.loaded = true;
      window.requestAnimationFrame(function () {
        _this2.productDetails = new ProductDetails["a" /* default */](options);
      });
    }
  }, {
    key: "_open",
    value: function _open() {// do nothing
    }
  }, {
    key: "_close",
    value: function _close() {
      if (this.productDetails) {
        this.productDetails.unload();
      }

      if (this.richText) {
        this.richText.unload();
      }

      if (!this.openingAddToCart) {
        this.trigger.focus();
      }

      this.loaded = false;
      this.isOpen = false;
      this.$quickShop.empty();
      this.$quickShop.html(this.quickshopSpinner);

      this._toggleMessage('', false);

      this.modal.unload();
    }
  }, {
    key: "_toggleMessage",
    value: function _toggleMessage(message, isVisible) {
      if (this.$message) {
        this.$message.html(message).toggleClass('visible', isVisible);
      }
    }
  }, {
    key: "_onATCInit",
    value: function _onATCInit() {
      this.openingAddToCart = true;
      this.$message.removeClass('visible');
    }
  }, {
    key: "_onATCError",
    value: function _onATCError(error) {
      var $content = jquery_default()("<div class=\"product-message--error\" tabindex=\"-1\">".concat(error, "</div>"));

      this._toggleMessage($content, true);

      $content.focus();
    }
  }, {
    key: "_onATCSuccess",
    value: function _onATCSuccess() {
      this._close();
    }
  }, {
    key: "_onATCClose",
    value: function _onATCClose() {// Do nothing
    }
  }, {
    key: "unload",
    value: function unload() {
      this._close();
    }
  }]);

  return ProductQuickshop;
}();


// EXTERNAL MODULE: ./source/scripts/components/AddToCartFlyout.js + 1 modules
var AddToCartFlyout = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/@pixelunion/events/dist/EventHandler.js
var EventHandler = __webpack_require__(16);
var EventHandler_default = /*#__PURE__*/__webpack_require__.n(EventHandler);

// EXTERNAL MODULE: ./node_modules/just-debounce/index.js
var just_debounce = __webpack_require__(8);
var just_debounce_default = /*#__PURE__*/__webpack_require__.n(just_debounce);

// EXTERNAL MODULE: ./node_modules/rimg-shopify/dist/index.es.js + 1 modules
var dist_index_es = __webpack_require__(2);

// CONCATENATED MODULE: ./source/scripts/components/GridItemSwatches.js
function GridItemSwatches_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GridItemSwatches_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GridItemSwatches_createClass(Constructor, protoProps, staticProps) { if (protoProps) GridItemSwatches_defineProperties(Constructor.prototype, protoProps); if (staticProps) GridItemSwatches_defineProperties(Constructor, staticProps); return Constructor; }





var swatchGap = null;

var GridItemSwatches_GridItemSwatches =
/*#__PURE__*/
function () {
  function GridItemSwatches(options) {
    var _this = this;

    GridItemSwatches_classCallCheck(this, GridItemSwatches);

    this.el = options.el;
    this.setInitialVariant = options.setInitialVariant;
    this.expanded = false;
    this.swatchImages = {};
    this.swatchVariantIds = {};
    this.selectedImage = null;
    this.state = {};
    this.events = new EventHandler_default.a();
    this.data = JSON.parse(this.el.querySelector('[data-swatch-data]').innerHTML);
    this.variants = this.data.variants;
    this.swatchesContainer = this.el.querySelector('[data-swatches-container]');
    this.cardLinks = this.el.querySelectorAll('[data-product-page-link]');
    this.cardLinkHref = this.cardLinks[0].getAttribute('href');
    this.activeControlTime = 0;
    this.activeControl = this.swatchesContainer.querySelector('[checked]');
    this.isPreselected = !!this.activeControl;
    this.swatches = this.swatchesContainer.querySelectorAll('[data-swatch]');
    this.swatchCount = this.swatches.length;
    this.swatchCountWrapper = this.el.querySelector('[data-swatch-count-wrapper]');
    this.swatchCount = this.swatchCountWrapper.querySelector('[data-swatch-count]');
    this.swatchWidths = Array.prototype.map.call(this.swatches, function (swatch) {
      return swatch.getBoundingClientRect().width;
    });
    this.resize();
    this.el.querySelector('[data-swatches]').classList.add('processed');
    this.originalImages = {
      primary: this.el.querySelector('.productitem--image-primary'),
      alternate: this.el.querySelector('.productitem--image-alternate')
    };
    this.disableUnavailable(); // +/- button expansion events

    this.events.register(window, 'resize', just_debounce_default()(function () {
      return _this.resize();
    }, 50));
    this.events.register(this.swatchCountWrapper, 'click', function () {
      return _this._toggleExpanded();
    }); // Image injection events

    this.injectImagesMouseoverEvent = this.events.register(this.el, 'mouseover', function () {
      return _this._injectImages();
    });
    this.injectImagesFocusinEvent = this.events.register(this.el, 'focusin', function () {
      return _this._injectImages();
    }); // Image/swatch switching events

    this.events.register(this.swatchesContainer, 'mouseover', function (e) {
      return _this._handleMouseOver(e);
    });
    this.events.register(this.swatchesContainer, 'mouseleave', function (e) {
      return _this._handleMouseLeave(e);
    });
    this.events.register(this.swatchesContainer, 'click', function (e) {
      return _this._handleClick(e);
    });
    this.events.register(this.swatchesContainer, 'change', function (e) {
      return _this._handleChange(e);
    });
    this.events.register(this.swatchesContainer, 'focusin', function (e) {
      return _this._handleSwatchFocus(e);
    });
  }

  GridItemSwatches_createClass(GridItemSwatches, [{
    key: "disableUnavailable",
    value: function disableUnavailable() {
      var _this2 = this;

      if (!this.variants) {
        return;
      }

      var availableSwatches = {};
      this.variants.forEach(function (variant) {
        if (variant.available) {
          availableSwatches[variant[_this2.data.swatchOptionKey]] = true;
        }
      });
      var swatchInputs = this.swatchesContainer.querySelectorAll('input[name="swatch"]');
      swatchInputs.forEach(function (swatch) {
        if (!(swatch.value in availableSwatches)) {
          swatch.disabled = true;
        }
      });
    }
  }, {
    key: "resize",
    value: function resize() {
      var _this3 = this;

      if (this.expanded) this._toggleExpanded();
      var availableWidth = this.swatchesContainer.getBoundingClientRect().width - parseInt(window.getComputedStyle(this.swatchesContainer).paddingRight, 10);
      var newShowSwatchCount = this.swatches.length;
      var cumulativeWidth = 0;

      for (var i = 0; i < this.swatches.length; i++) {
        if (cumulativeWidth + this.getSwatchGap() + this.swatchWidths[i] < availableWidth) {
          cumulativeWidth += swatchGap + this.swatchWidths[i];
        } else {
          newShowSwatchCount = i;
          break;
        }
      }

      if (newShowSwatchCount === this.showSwatchCount) return;
      this.showSwatchCount = newShowSwatchCount;
      this.swatches.forEach(function (swatch, index) {
        if (index < _this3.showSwatchCount) {
          swatch.classList.add('productitem--swatches-swatch-visible');
          swatch.classList.remove('productitem--swatches-swatch-hidden');
        } else {
          swatch.classList.remove('productitem--swatches-swatch-visible');
          swatch.classList.add('productitem--swatches-swatch-hidden');
        }
      });
      this.swatchCountWrapper.style.left = "".concat(cumulativeWidth, "px");

      if (this.swatches.length > this.showSwatchCount) {
        this.swatchCountWrapper.style.display = 'flex';
        this.swatchCount.innerText = "+".concat(this.swatches.length - this.showSwatchCount);
      } else {
        this.swatchCountWrapper.style.display = 'none';
      }
    }
  }, {
    key: "_injectImages",
    value: function _injectImages() {
      var _this4 = this;

      this.events.unregister(this.injectImagesFocusinEvent);
      this.events.unregister(this.injectImagesMouseoverEvent);
      index_es["a" /* default */].load(this.cardLinkHref, {
        view: '_swatch-data'
      }, {
        hash: this.data.hash
      }).then(function (_ref) {
        var data = _ref.data;
        if (_this4.imagesInjected) return;
        _this4.imagesInjected = true;
        var tempContainer = document.createDocumentFragment();

        if (data.featuredImage) {
          var tempEl = document.createElement('div');
          tempEl.innerHTML = data.featuredImage;
          var img = tempEl.querySelector('img');
          tempContainer.appendChild(img);
          _this4.featuredImage = img;
        }

        data.swatches.forEach(function (_ref2) {
          var swatchValue = _ref2.swatchValue,
              imageString = _ref2.imageString,
              variantId = _ref2.variantId;
          _this4.swatchVariantIds[swatchValue] = variantId;

          if (imageString) {
            var _tempEl = document.createElement('div');

            _tempEl.innerHTML = imageString;

            var _img = _tempEl.querySelector('img');

            tempContainer.appendChild(_img);
            _this4.swatchImages[swatchValue] = _img;
          }
        });

        var imagesContainer = _this4.el.querySelector('[data-product-item-image]');

        var salesBadge = imagesContainer.querySelector('[data-badge-sales]');
        imagesContainer.insertBefore(tempContainer, salesBadge);
        dist_index_es["a" /* default */].watch(imagesContainer);

        _this4._setState({
          swatchName: _this4.activeControl ? _this4.activeControl.value : null,
          primaryImage: _this4.originalImages.primary,
          hideAlternateImage: !!_this4.activeControl
        });
      });
    }
  }, {
    key: "_setState",
    value: function _setState(_ref3) {
      var swatchName = _ref3.swatchName,
          primaryImage = _ref3.primaryImage,
          hideAlternateImage = _ref3.hideAlternateImage;
      var oldPrimaryImg = this.state.primaryImage;
      var href = swatchName ? "".concat(this.cardLinkHref, "?variant=").concat(this.swatchVariantIds[swatchName]) : this.cardLinkHref;
      this.cardLinks.forEach(function (link) {
        return link.setAttribute('href', href);
      });
      this.setInitialVariant(this.swatchVariantIds[swatchName] || this.variants[0].id);

      if (oldPrimaryImg) {
        oldPrimaryImg.classList.remove('productitem--image-primary');
        oldPrimaryImg.style.visibility = '';
      }

      if (primaryImage) {
        primaryImage.classList.add('productitem--image-primary');
        primaryImage.style.visibility = hideAlternateImage ? 'visible' : '';
      }

      if (this.originalImages.alternate) {
        this.originalImages.alternate.style.visibility = hideAlternateImage ? 'hidden' : '';
      }

      this.state = {
        swatchName: swatchName,
        primaryImage: primaryImage,
        hideAlternateImage: hideAlternateImage
      };
    }
  }, {
    key: "_handleChange",
    value: function _handleChange(_ref4) {
      var target = _ref4.target;
      this.activeControlTime = Date.now();
      this.activeControl = target;
      var swatchName = target.value;
      this.selectedImage = this.swatchImages[swatchName] || this.originalImages.primary;

      this._setState({
        swatchName: swatchName,
        primaryImage: this.selectedImage,
        hideAlternateImage: true
      });
    }
  }, {
    key: "_handleClick",
    value: function _handleClick(_ref5) {
      var target = _ref5.target;

      if (target === this.activeControl && this.activeControlTime + 150 < Date.now()) {
        // Allow deselection, if swatch has been active for more than the threshold
        // because we can't guarantee the order of the click and change events
        target.checked = false;
        this.activeControl = null;
        this.selectedImage = null; // Swaps in featured image if card was rendered on server with preselected swatch variant image.

        if (this.isPreselected && this.featuredImage) {
          this.originalImages.primary = this.featuredImage;
          this.isPreselected = false;
        }

        this._setState({
          swatchName: null,
          primaryImage: this.state.primaryImage,
          hideAlternateImage: true
        });
      }
    }
  }, {
    key: "_handleMouseOver",
    value: function _handleMouseOver(event) {
      if (event.target.hasAttribute('data-swatch-tooltip')) {
        this._setState({
          swatchName: this.state.swatchName,
          primaryImage: this.swatchImages[event.target.dataset.swatchTooltip] || this.originalImages.primary,
          hideAlternateImage: true
        });
      }
    }
  }, {
    key: "_handleMouseLeave",
    value: function _handleMouseLeave(_ref6) {
      var target = _ref6.target;

      if (target.hasAttribute('data-swatches-container')) {
        this._setState({
          swatchName: this.state.swatchName,
          primaryImage: this.selectedImage || this.originalImages.primary,
          hideAlternateImage: !!this.selectedImage
        });
      }
    }
  }, {
    key: "_handleSwatchFocus",
    value: function _handleSwatchFocus(_ref7) {
      var target = _ref7.target;

      if (this.expanded === false && target.nextElementSibling.classList.contains('productitem--swatches-swatch-hidden')) {
        this._toggleExpanded();
      }
    }
  }, {
    key: "_toggleExpanded",
    value: function _toggleExpanded() {
      var swatchesEl = this.el.querySelector('[data-swatches]');

      if (this.expanded) {
        this.expanded = false;
        swatchesEl.classList.remove('productitem--swatches-expanded');
        this.swatchCount.innerText = "+".concat(this.swatches.length - this.showSwatchCount);
      } else {
        this.expanded = true;
        swatchesEl.classList.add('productitem--swatches-expanded');
      }
    } // Getters are used to avoid having to get these properties for every card on the page

  }, {
    key: "getSwatchGap",
    value: function getSwatchGap() {
      if (swatchGap === null) {
        swatchGap = parseInt(window.getComputedStyle(this.swatches[0]).getPropertyValue('margin-right'), 10);
      }

      return swatchGap;
    }
  }, {
    key: "unload",
    value: function unload() {
      this.events.unregisterAll();
    }
  }]);

  return GridItemSwatches;
}();


// CONCATENATED MODULE: ./source/scripts/components/ProductGridItem.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductGridItem_ProductGridItem; });
function ProductGridItem_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ProductGridItem_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ProductGridItem_createClass(Constructor, protoProps, staticProps) { if (protoProps) ProductGridItem_defineProperties(Constructor.prototype, protoProps); if (staticProps) ProductGridItem_defineProperties(Constructor, staticProps); return Constructor; }









var ProductGridItem_ProductGridItem =
/*#__PURE__*/
function () {
  function ProductGridItem(options) {
    var _this = this;

    ProductGridItem_classCallCheck(this, ProductGridItem);

    this.$el = jquery_default()(options.el);
    this.id = options.id;
    this.productQuickshop = null;
    this.quickshopInitialVariant = null;
    this.quickBuySettings = null;
    this.events = [];
    this.actionsOpen = false;
    this.defaultView = options.grid_list;

    if (options.lazy) {
      this.lazyLoader = new LazyLoader(this.$el[0], function () {
        return _this._init();
      });
    } else {
      this._init();
    }
  }

  ProductGridItem_createClass(ProductGridItem, [{
    key: "_init",
    value: function _init() {
      var _this2 = this;

      this.$window = jquery_default()(window);
      this.$html = jquery_default()('html');
      this.$content = this.$el.find('[data-product-item-content]');
      this.$actions = this.$el.find('[data-product-actions]');
      this.swatchesEl = this.$el[0].querySelector('[data-swatches]');
      this.hasProductActions = this.$actions.length;
      this._addToCart = this._addToCart.bind(this);
      this._actionsToggle = this._actionsToggle.bind(this);
      this._openQuickShop = this._openQuickShop.bind(this);

      if (this.hasProductActions) {
        this._setSortByQueryParameters();

        if (this.$html.hasClass('no-touch') && this.defaultView !== 'list-view') {
          this.events.push(this.$el.on('mouseenter.product-item', this._actionsToggle));
          this.events.push(this.$el.on('mouseleave.product-item', this._actionsToggle));
          this.events.push(this.$el.on('focusin.product-item', this._actionsToggle));
        } // $scripts checks existence of script in header before attempting to inject


        script_default()(jquery_default()('[data-scripts]').data('shopify-api-url'), function () {
          _this2.events.push(_this2.$el.on('click.product-item', '[data-quick-buy]', _this2._addToCart));

          _this2.events.push(_this2.$el.on('click.product-item', '[data-quickshop-slim]', _this2._openQuickShop));

          _this2.events.push(_this2.$el.on('click.product-item', '[data-quickshop-full]', _this2._openQuickShop));
        });
      }

      if (this.$el.find('[data-quick-buy]').length) {
        this._initQuickBuy();
      }

      this._objectFitPolyfill();

      if (this.swatchesEl) {
        this.swatches = new GridItemSwatches_GridItemSwatches({
          el: this.$el[0],
          setInitialVariant: function setInitialVariant(id) {
            _this2.quickshopInitialVariant = id;
          },
          product: this.product
        });
      }
    }
    /**
     * Make Shopify aware of releavent collection search info
     *  - tag
     *  - vendor
     *  - pagination
     *  - sorting criteria
     *
     * @private
     */

  }, {
    key: "_setSortByQueryParameters",
    value: function _setSortByQueryParameters() {
      Shopify.queryParams = {};

      if (location.search.length) {
        for (var i = 0, aCouples = location.search.substr(1).split('&'); i < aCouples.length; i++) {
          var aKeyValue = aCouples[i].split('='); // Reset the page number when we apply (i.e. don't add it to params)

          if (aKeyValue.length > 1 && aKeyValue[0] !== 'page') {
            Shopify.queryParams[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]);
          }
        }
      }
    }
  }, {
    key: "_initQuickBuy",
    value: function _initQuickBuy() {
      try {
        this.quickBuySettings = JSON.parse(this.$el.find('[data-quick-buy-settings]').text());
      } catch (error) {
        console.warn("Quick buy: invalid QuickBuy data found. ".concat(error.message));
      }
    }
  }, {
    key: "_openQuickShop",
    value: function _openQuickShop(event) {
      event.preventDefault();
      var leftThumbsClass = event.currentTarget.hasAttribute('data-thumbs-left') ? ' quickshop-thumbs-left' : '';
      var modalClass = event.currentTarget.hasAttribute('data-quickshop-full') ? "quickshop-full".concat(leftThumbsClass) : 'quickshop-slim';

      if (this.productQuickshop) {
        this.productQuickshop.unload();
      }

      this.productQuickshop = new ProductQuickshop_ProductQuickshop({
        $el: this.$el,
        id: this.id,
        modalClass: modalClass,
        trigger: this.$el.find('.productitem--title a'),
        initialVariant: this.quickshopInitialVariant
      });
    }
  }, {
    key: "_isObjectFitAvailable",
    value: function _isObjectFitAvailable() {
      return 'objectFit' in document.documentElement.style;
    }
  }, {
    key: "_objectFitPolyfill",
    value: function _objectFitPolyfill() {
      if (this._isObjectFitAvailable()) {
        return;
      }

      var $figure = jquery_default()('[data-product-item-image]', this.$el);
      var featuredSrc = jquery_default()('img:not(.productitem--image-alternate)', $figure).attr('src');
      var alternateSrc = jquery_default()('.productitem--image-alternate', $figure).attr('src');
      $figure.addClass('product-item-image-no-objectfit');
      $figure.css('background-image', "url(\"".concat(featuredSrc, "\")"));

      if (alternateSrc) {
        this.$el.on('mouseover', function () {
          $figure.css('background-image', "url(\"".concat(alternateSrc, "\")"));
        });
        this.$el.on('mouseleave', function () {
          $figure.css('background-image', "url(\"".concat(featuredSrc, "\")"));
        });
      }
    }
    /**
     * Get height of element, and combined height of element + actions
     *
     * @returns {{heightBase, heightExpanded: *}}
     * @private
     */

  }, {
    key: "_getHeights",
    value: function _getHeights() {
      var height = this.$el.height();
      var actionsHeight = this.$el.find('[data-product-actions]').outerHeight(true);
      return {
        heightBase: height,
        heightExpanded: height + actionsHeight
      };
    }
  }, {
    key: "_actionsToggle",
    value: function _actionsToggle(event) {
      if (!Layout["a" /* default */].isGreaterThanBreakpoint('M')) return;
      var $currentTarget = jquery_default()(event.currentTarget);
      var $target = jquery_default()(event.target);
      var openProductItem = false; // This function gets called on the element as well as the document focusin, so we want to
      // be extra careful that we are inside the product card in question. We want the product card
      // to close if another product card has received focus.

      var productHasFocus = this.$el.is($currentTarget) || this.$el.is($target) || this.$el.is($target.parents('.productgrid--item').first()) || event.type === 'focusin' && $target[0].contains(this.$el[0]);

      if (event.type === 'mouseenter' || event.type === 'mouseleave') {
        openProductItem = event.type === 'mouseenter';
      } else if (productHasFocus) {
        openProductItem = true;
      }

      if (openProductItem) {
        this._showActions();
      } else {
        this._hideActions();
      }
    }
  }, {
    key: "_showActions",
    value: function _showActions() {
      var _this3 = this;

      if (this.actionsOpen) {
        return;
      }

      var _this$_getHeights = this._getHeights(),
          heightBase = _this$_getHeights.heightBase,
          heightExpanded = _this$_getHeights.heightExpanded; // Lock heights to prevent jumping


      this.$el.css('height', heightBase);
      this.$content.css('height', heightBase); // Store height for when hovering out

      this.$el.data('base-height', heightBase); // Start animation, and transition height to expanded height

      this.$el.revealer('show').one('revealer-animating.product-item', function () {
        _this3.$content.css('height', heightExpanded);
      });
      document.addEventListener('focusin', this._actionsToggle);
      this.actionsOpen = true;
    }
  }, {
    key: "_hideActions",
    value: function _hideActions() {
      var _this4 = this;

      var height = this.$el.data('base-height');
      /*
        - Transition buttons up, using base height for animation
        - Remove heights after animation is complete in case of resize
       */

      this.$el.revealer('hide').one('revealer-animating', function () {
        _this4.$el.off('revealer-animating.product-item');

        _this4.$el.css({
          height: height
        });

        _this4.$content.css({
          height: height
        });
      }).one('revealer-hide', function () {
        _this4.$el.off('revealer-hide.product-item').css('height', '');

        _this4.$content.css('height', '');
      });
      document.removeEventListener('focusin', this._actionsToggle);
      this.actionsOpen = false;
    }
  }, {
    key: "_addToCart",
    value: function _addToCart(event) {
      event.preventDefault();
      var $atcButton = jquery_default()(event.currentTarget);
      var variantID = $atcButton.attr('data-variant-id');
      var formData = [{
        name: 'id',
        value: variantID
      }, {
        name: 'quantity',
        value: 1
      }];
      var options = {
        $atcButton: $atcButton,
        settings: {
          moneyFormat: this.quickBuySettings.money_format,
          cartRedirection: this.quickBuySettings.cart_redirection
        }
      };
      AddToCartFlyout["a" /* default */].init(formData, options);
    }
  }, {
    key: "unload",
    value: function unload() {
      this.events.forEach(function ($el) {
        return $el.off('.product-item');
      });

      if (this.productQuickshop) {
        this.productQuickshop.unload();
      }

      document.removeEventListener('focusin', this._actionsToggle);

      if (this.swatches) {
        this.swatches.unload();
      }

      this.lazyLoader.unload();
    }
  }]);

  return ProductGridItem;
}();



/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var defaults = {
    modal: '.modal',
    modalInner: '.modal-inner',
    modalContent: '.modal-content',
    open: '[data-modal-open]',
    close: '[data-modal-close]',
    page: 'body',
    class: 'modal-visible',
    loadClass: 'vanilla-modal',
    clickOutside: true,
    closeKeys: [27],
    transitions: true,
    transitionEnd: null,
    onBeforeOpen: null,
    onBeforeClose: null,
    onOpen: null,
    onClose: null
  };

  function throwError(message) {
    // eslint-disable-next-line no-console
    console.error('VanillaModal: ' + message);
  }

  function find(arr, callback) {
    return function (key) {
      var filteredArray = arr.filter(callback);
      return filteredArray[0] ? filteredArray[0][key] : undefined;
    };
  }

  function transitionEndVendorSniff() {
    var el = document.createElement('div');
    var transitions = [{ key: 'transition', value: 'transitionend' }, { key: 'OTransition', value: 'otransitionend' }, { key: 'MozTransition', value: 'transitionend' }, { key: 'WebkitTransition', value: 'webkitTransitionEnd' }];
    return find(transitions, function (_ref) {
      var key = _ref.key;
      return typeof el.style[key] !== 'undefined';
    })('value');
  }

  function isPopulatedArray(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]' && arr.length;
  }

  function getNode(selector, parent) {
    var targetNode = parent || document;
    var node = targetNode.querySelector(selector);
    if (!node) {
      throwError(selector + ' not found in document.');
    }
    return node;
  }

  function addClass(el, className) {
    if (!(el instanceof HTMLElement)) {
      throwError('Not a valid HTML element.');
    }
    el.setAttribute('class', el.className.split(' ').filter(function (cn) {
      return cn !== className;
    }).concat(className).join(' '));
  }

  function removeClass(el, className) {
    if (!(el instanceof HTMLElement)) {
      throwError('Not a valid HTML element.');
    }
    el.setAttribute('class', el.className.split(' ').filter(function (cn) {
      return cn !== className;
    }).join(' '));
  }

  function getElementContext(e) {
    if (e && typeof e.hash === 'string') {
      return document.querySelector(e.hash);
    } else if (typeof e === 'string') {
      return document.querySelector(e);
    }
    throwError('No selector supplied to open()');
    return null;
  }

  function applyUserSettings(settings) {
    return _extends({}, defaults, settings, {
      transitionEnd: transitionEndVendorSniff()
    });
  }

  function matches(e, selector) {
    var allMatches = (e.target.document || e.target.ownerDocument).querySelectorAll(selector);
    for (var i = 0; i < allMatches.length; i += 1) {
      var node = e.target;
      while (node && node !== document.body) {
        if (node === allMatches[i]) {
          return node;
        }
        node = node.parentNode;
      }
    }
    return null;
  }

  var VanillaModal = function () {
    function VanillaModal(settings) {
      _classCallCheck(this, VanillaModal);

      this.isOpen = false;
      this.current = null;
      this.isListening = false;

      this.settings = applyUserSettings(settings);
      this.dom = this.getDomNodes();

      this.open = this.open.bind(this);
      this.close = this.close.bind(this);
      this.closeKeyHandler = this.closeKeyHandler.bind(this);
      this.outsideClickHandler = this.outsideClickHandler.bind(this);
      this.delegateOpen = this.delegateOpen.bind(this);
      this.delegateClose = this.delegateClose.bind(this);
      this.listen = this.listen.bind(this);
      this.destroy = this.destroy.bind(this);

      this.addLoadedCssClass();
      this.listen();
    }

    _createClass(VanillaModal, [{
      key: 'getDomNodes',
      value: function getDomNodes() {
        var _settings = this.settings,
            modal = _settings.modal,
            page = _settings.page,
            modalInner = _settings.modalInner,
            modalContent = _settings.modalContent;

        return {
          modal: getNode(modal),
          page: getNode(page),
          modalInner: getNode(modalInner, getNode(modal)),
          modalContent: getNode(modalContent, getNode(modal))
        };
      }
    }, {
      key: 'addLoadedCssClass',
      value: function addLoadedCssClass() {
        addClass(this.dom.page, this.settings.loadClass);
      }
    }, {
      key: 'setOpenId',
      value: function setOpenId(id) {
        var page = this.dom.page;

        page.setAttribute('data-current-modal', id || 'anonymous');
      }
    }, {
      key: 'removeOpenId',
      value: function removeOpenId() {
        var page = this.dom.page;

        page.removeAttribute('data-current-modal');
      }
    }, {
      key: 'open',
      value: function open(allMatches, e) {
        var page = this.dom.page;
        var _settings2 = this.settings,
            onBeforeOpen = _settings2.onBeforeOpen,
            onOpen = _settings2.onOpen;

        if (!(this.current instanceof HTMLElement === false)) {
          throwError('VanillaModal target must exist on page.');
          return;
        }
        this.releaseNode(this.current);
        this.current = getElementContext(allMatches);
        if (typeof onBeforeOpen === 'function') {
          onBeforeOpen.call(this, e);
        }
        this.captureNode(this.current);
        addClass(page, this.settings.class);
        this.setOpenId(this.current.id);
        this.isOpen = true;
        if (typeof onOpen === 'function') {
          onOpen.call(this, e);
        }
      }
    }, {
      key: 'detectTransition',
      value: function detectTransition() {
        var modal = this.dom.modal;

        var css = window.getComputedStyle(modal, null);
        return Boolean(['transitionDuration', 'oTransitionDuration', 'MozTransitionDuration', 'webkitTransitionDuration'].filter(function (i) {
          return typeof css[i] === 'string' && parseFloat(css[i]) > 0;
        }).length);
      }
    }, {
      key: 'close',
      value: function close(e) {
        var _settings3 = this.settings,
            transitions = _settings3.transitions,
            transitionEnd = _settings3.transitionEnd,
            onBeforeClose = _settings3.onBeforeClose;

        var hasTransition = this.detectTransition();
        if (this.isOpen) {
          this.isOpen = false;
          if (typeof onBeforeClose === 'function') {
            onBeforeClose.call(this, e);
          }
          removeClass(this.dom.page, this.settings.class);
          if (transitions && transitionEnd && hasTransition) {
            this.closeModalWithTransition(e);
          } else {
            this.closeModal(e);
          }
        }
      }
    }, {
      key: 'closeModal',
      value: function closeModal(e) {
        var onClose = this.settings.onClose;

        this.removeOpenId(this.dom.page);
        this.releaseNode(this.current);
        this.isOpen = false;
        this.current = null;
        if (typeof onClose === 'function') {
          onClose.call(this, e);
        }
      }
    }, {
      key: 'closeModalWithTransition',
      value: function closeModalWithTransition(e) {
        var _this = this;

        var modal = this.dom.modal;
        var transitionEnd = this.settings.transitionEnd;

        var closeTransitionHandler = function closeTransitionHandler() {
          modal.removeEventListener(transitionEnd, closeTransitionHandler);
          _this.closeModal(e);
        };
        modal.addEventListener(transitionEnd, closeTransitionHandler);
      }
    }, {
      key: 'captureNode',
      value: function captureNode(node) {
        var modalContent = this.dom.modalContent;

        while (node.childNodes.length) {
          modalContent.appendChild(node.childNodes[0]);
        }
      }
    }, {
      key: 'releaseNode',
      value: function releaseNode(node) {
        var modalContent = this.dom.modalContent;

        while (modalContent.childNodes.length) {
          node.appendChild(modalContent.childNodes[0]);
        }
      }
    }, {
      key: 'closeKeyHandler',
      value: function closeKeyHandler(e) {
        var closeKeys = this.settings.closeKeys;

        if (isPopulatedArray(closeKeys) && closeKeys.indexOf(e.which) > -1 && this.isOpen === true) {
          e.preventDefault();
          this.close(e);
        }
      }
    }, {
      key: 'outsideClickHandler',
      value: function outsideClickHandler(e) {
        var clickOutside = this.settings.clickOutside;
        var modalInner = this.dom.modalInner;

        if (clickOutside) {
          var node = e.target;
          while (node && node !== document.body) {
            if (node === modalInner) {
              return;
            }
            node = node.parentNode;
          }
          this.close(e);
        }
      }
    }, {
      key: 'delegateOpen',
      value: function delegateOpen(e) {
        var open = this.settings.open;

        var matchedNode = matches(e, open);
        if (matchedNode) {
          e.preventDefault();
          this.open(matchedNode, e);
        }
      }
    }, {
      key: 'delegateClose',
      value: function delegateClose(e) {
        var close = this.settings.close;

        if (matches(e, close)) {
          e.preventDefault();
          this.close(e);
        }
      }
    }, {
      key: 'listen',
      value: function listen() {
        var modal = this.dom.modal;

        if (!this.isListening) {
          modal.addEventListener('click', this.outsideClickHandler, false);
          document.addEventListener('keydown', this.closeKeyHandler, false);
          document.addEventListener('click', this.delegateOpen, false);
          document.addEventListener('click', this.delegateClose, false);
          this.isListening = true;
        } else {
          throwError('Event listeners already applied.');
        }
      }
    }, {
      key: 'destroy',
      value: function destroy() {
        var modal = this.dom.modal;

        if (this.isListening) {
          this.close();
          modal.removeEventListener('click', this.outsideClickHandler);
          document.removeEventListener('keydown', this.closeKeyHandler);
          document.removeEventListener('click', this.delegateOpen);
          document.removeEventListener('click', this.delegateClose);
          this.isListening = false;
        } else {
          throwError('Event listeners already removed.');
        }
      }
    }]);

    return VanillaModal;
  }();

  exports.default = VanillaModal;
});


/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initShopifyProductReviews; });
var initShopifyProductReviews = function initShopifyProductReviews() {
  if (!window.SPR) {
    return;
  }

  window.SPR.registerCallbacks();
  window.SPR.initRatingHandler();
  window.SPR.initDomEls();
  window.SPR.loadProducts();
  window.SPR.loadBadges();
};
/* unused harmony default export */ var _unused_webpack_default_export = ({
  initShopifyProductReviews: initShopifyProductReviews
});

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
//# sourceMappingURL=DynamicFeaturedCollection-StaticCollection-StaticProductRecommendations-StaticSearch.bundle.js.map?1581358591380