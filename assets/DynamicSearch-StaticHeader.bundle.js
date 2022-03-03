(window["wpJsonpPaskit"] = window["wpJsonpPaskit"] || []).push([[4],{

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchForm; });
/* harmony import */ var _pixelunion_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _pixelunion_events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pixelunion_events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




function sanitizeCategory(value) {
  return value.replace(/(tag|product_type):(searchfilter_)?/, '');
}

var SearchForm =
/*#__PURE__*/
function () {
  function SearchForm($container) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, SearchForm);

    this.container = $container[0];
    this.form = this.container.querySelector('[data-live-search-form]');
    this.filter = this.container.querySelector('[data-live-search-filter]');
    this.isLiveSearch = options.liveSearch ? options.liveSearch : false;

    this.setCategory = options.setCategory || function () {
      /* do nothing */
    };

    this.events = new _pixelunion_events__WEBPACK_IMPORTED_MODULE_0___default.a();
    this.events.register(this.form, 'submit', function (e) {
      return _this.submitHandler(e);
    });

    if (this.filter) {
      this.filterLabel = this.container.querySelector('[data-live-search-filter-label]'); // page-search-form uses a hidden input to persist the filter, in which case
      // this.filter exists, but this.filterLabel does not.

      if (this.filterLabel) {
        this.setCategory(this.filterLabel.value);
        this.events.register(this.filter, 'change', function (e) {
          var value = e.target.value;

          if (value) {
            var newValue = sanitizeCategory(value);
            _this.filterLabel.innerHTML = newValue;

            _this.setCategory(newValue);

            _this.form.classList.add('live-search-filter-active');
          } else {
            _this.filterLabel.innerHTML = e.target.dataset.filterAll;

            _this.form.classList.remove('live-search-filter-active');

            _this.setCategory('');
          }
        });
      }

      var hideFilterIfMobile = function hideFilterIfMobile() {
        if (_Layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].isLessThanBreakpoint('S')) {
          _this.filter.value = '';

          _this.form.classList.remove('live-search-filter-active');

          if (_this.filterLabel) {
            _this.filterLabel.innerHTML = _this.filter.dataset.filterAll;
          }
        }
      };

      hideFilterIfMobile();
      _Layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].onBreakpointChange(function () {
        return hideFilterIfMobile();
      });
    }
  }

  _createClass(SearchForm, [{
    key: "unload",
    value: function unload() {
      this.events.unregisterAll();
    }
  }, {
    key: "submitHandler",
    value: function submitHandler(event) {
      event.preventDefault();
      var form = event.currentTarget.cloneNode(true);
      var termsInput = form.querySelector('[name=q]');
      form.style.position = 'absolute';
      form.style.left = '-1000px';
      form.style.bottom = '-1000px';
      form.style.visibility = 'hidden';
      var terms = termsInput.value;

      if (this.isLiveSearch && !terms) {
        return;
      } // Adds `*` after each word in search terms, doesn't add to last word


      if (terms.indexOf(' ') > 0) {
        terms = terms.split(' ').join('* ').trim();
      } // Adds `*` at the end of the search terms


      terms = "".concat(terms, "*"); // Add field filter

      terms = this.filter && this.filter.value ? "".concat(terms, " ").concat(this.filter.value) : terms; // Update value

      termsInput.value = terms; // Forms must be in the browser context in order to submit

      window.document.body.appendChild(form);
      form.submit();
    }
  }]);

  return SearchForm;
}();



/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(0);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);

// EXTERNAL MODULE: ./node_modules/just-debounce/index.js
var just_debounce = __webpack_require__(8);
var just_debounce_default = /*#__PURE__*/__webpack_require__.n(just_debounce);

// EXTERNAL MODULE: ./node_modules/shopify-currency-converter/dist/index.js
var dist = __webpack_require__(9);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// EXTERNAL MODULE: ./node_modules/eventemitter2/lib/eventemitter2.js
var eventemitter2 = __webpack_require__(34);
var eventemitter2_default = /*#__PURE__*/__webpack_require__.n(eventemitter2);

// CONCATENATED MODULE: ./source/scripts/Search.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * Search API Class
 */

var Search =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Search, _EventEmitter);

  /**
   * Create a new Search instance, and override defaults
   *
   * @param options
   * @property {string} options.type - Search restriction. Use 'article', 'page', 'product', or ''
   * @property {string} options.view - Search template suffix. Specify different templates as needed
   */
  function Search() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Search);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Search).call(this));
    _this.searchType = options.type || '';
    _this.view = options.view || 'json';
    _this.inProgress = false;
    _this.xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    _this._xhrLoad = _this._xhrLoad.bind(_assertThisInitialized(_this));
    _this._xhrError = _this._xhrError.bind(_assertThisInitialized(_this));
    _this._xhrAbort = _this._xhrAbort.bind(_assertThisInitialized(_this));

    _this._bindEvents();

    return _this;
  }

  _createClass(Search, [{
    key: "_bindEvents",
    value: function _bindEvents() {
      this.xhr.addEventListener('load', this._xhrLoad);
      this.xhr.addEventListener('error', this._xhrError);
      this.xhr.addEventListener('abort', this._xhrAbort);
    }
    /**
     * XHR was successfull
     *
     * @description XHR completed successfully
     * @param {object} event
     * @fires Search#complete
     * @private
     */

  }, {
    key: "_xhrLoad",
    value: function _xhrLoad(event) {
      var response = {};
      var _event$target = this.xhr,
          readyState = _event$target.readyState,
          status = _event$target.status;

          console.log(event);

      try {
        if (readyState > 3 && status === 200) {
          response = JSON.parse(_event$target.responseText);
          this.emit('complete', response);
        } else {
          var message = "Invalid readyState: ".concat(readyState, ", or status: ").concat(status, ".");

          this._xhrError(event, message);

          return;
        }
      } catch (error) {
        this._xhrError(event, 'Invalid JSON', error);

        return;
      }

      this.inProgress = false;
    }
    /**
     * XHR contains an error
     *
     * @description XHR has contained an error, and was unable to complete
     * @param {object} event
     * @param {object|string} message
     * @param {object} error
     * @fires Search#error
     * @private
     */

  }, {
    key: "_xhrError",
    value: function _xhrError(event) {
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.inProgress = false;
      this.emit('error', {
        event: event,
        message: message,
        error: error
      });
    }
    /**
     * XHR has been aborted
     *
     * @description This event only fires if there is an active XHR request that has been terminated
     * @fires Search#aborted
     * @private
     */

  }, {
    key: "_xhrAbort",
    value: function _xhrAbort() {
      this.emit('aborted');
    }
    /**
     * Perform the search
     *
     * @param {string} term - Search term(s)
     * @fires Search#initialized
     * @fires Search#cancelled
     */

  }, {
    key: "execute",
    value: function execute(term) {
      this.emit('initialized', {
        term: term
      });

      if (this.inProgress) {
        this.emit('cancelled');
        this.xhr.abort();
      }

      this.inProgress = true;
      var url = '/search';
      var params = {
        q: term,
        type: this.searchType,
        view: this.view
      };
      var searchParams = Object.keys(params).map(function (key) {
        var value = params[key];
        return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(value));
      }).join('&');
      this.xhr.open('get', "".concat(url, "?").concat(searchParams));
      this.xhr.setRequestHeader('Accept', 'application/json');
      this.xhr.send();
    }
  }]);

  return Search;
}(eventemitter2_default.a);
/**
 * @description XHR initialized
 * @event Search#initialized
 * @type {object}
 */

/**
 * @description XHR completed
 * @event Search#complete
 * @property {object} response - JSON response from end point
 */

/**
 * @description XHR had an error
 * @event Search#error
 */

/**
 * @description XHR cancelled due to user interaction. If an XHR is being
 *        processed, this does not terminate it
 * @event Search#cancelled
 */

/**
 * @description XHR aborted due to user interaction, terminating previously executed XHR.
 * @event Search#aborted
 */



// EXTERNAL MODULE: ./source/scripts/Layout.js
var Layout = __webpack_require__(6);

// EXTERNAL MODULE: ./source/scripts/components/search/SearchForm.js
var SearchForm = __webpack_require__(18);

// CONCATENATED MODULE: ./source/scripts/components/search/LiveSearchTemplates.js
/**
 * Shows a list item component when result is an article, or a page
 *
 * @param contentItem
 * @returns {string}
 * @constructor
 */
function ContentItem(contentItem) {
  return "\n  <li class=\"search-flydown--content-item\">\n    <a href=\"".concat(contentItem.url, "\">").concat(contentItem.title, "</a>\n  </li>\n  ");
}
/**
 * Shows a header for the article and page results
 *
 * @param context
 * @returns {string}
 * @constructor
 */


function ContentResultsHeader(context) {
  return "\n    <h5 class=\"search-flydown--content-title\">\n      ".concat(context.content_results.title, "\n    </h5>\n  ");
}
/**
 * Shows a list of results from articles, or pages
 *
 * @param props
 * @returns {jQuery|HTMLElement}
 * @constructor
 */


function ContentResults(props) {
  var content = props.content,
      context = props.context;
  var $title = ContentResultsHeader(context);
  var contentItems = content.map(function (contentItem) {
    return ContentItem(contentItem);
  });
  return $("\n    <div class=\"search-flydown--content-items\">\n      ".concat($title, "\n\n      <ul class=\"search-flydown--content-items-list\">\n        ").concat(contentItems.join(''), "\n      </ul>\n    </div>\n  "));
}
/**
 * Shows a message when there are no article or page results
 *
 * @param props
 * @returns {jQuery|HTMLElement}
 * @constructor
 */


function ContentNoResults(props) {
  var context = props.context;
  var $title = ContentResultsHeader(context);
  return $("\n    <div class=\"search-flydown--content-items\">\n      ".concat($title, "\n\n      <p class=\"search-flydown--content-items-none\">\n        ").concat(context.content_results.no_results, "\n      </p>\n    </div>\n  "));
}
/**
 * Shows the product's compare_at_price, with connection for CurrencyConverter
 *
 * @param price
 * @returns {string}
 * @constructor
 */


function ProductPriceCompareAt(price) {
  return "\n  <span class=\"search-flydown--product-price--compare-at\">\n    <span class=\"money\">".concat(price.compare_at_price, "</span>\n  </span>\n  ");
}
/**
 * Shows the product's price, with connection for CurrencyConverter
 *
 * @param price
 * @returns {string}
 * @constructor
 */


function ProductPriceMain(price) {
  return "\n  <span class=\"search-flydown--product-price--main\">\n    <span class=\"money\">".concat(price.price, "</span>\n  </span>\n  ");
}
/**
 * Shows the product's prices
 *
 * @param props
 * @returns {string}
 * @constructor
 */


function ProductPrice(props) {
  var price = props.price,
      onSale = props.onSale,
      consistentSaved = props.consistentSaved;
  var $compareAt = onSale && consistentSaved ? ProductPriceCompareAt(price) : '';
  var $price = ProductPriceMain(price);
  return "\n    <span class=\"search-flydown--product-price ".concat(onSale ? 'search-flydown--product-price-has-sale' : '', "\">\n      ").concat($price, "\n      ").concat($compareAt, "\n    </span>\n  ");
}
/**
 * Shows a product's main content
 *
 * @param product
 * @returns {string}
 * @constructor
 */


function ProductContent(product) {
  var $price = ProductPrice({
    price: product.price,
    onSale: product.on_sale,
    consistentSaved: product.consistent_saved
  });
  var swatchCount = product.swatch_count ? "<span class=\"search-flydown--product-swatch-count\">".concat(product.swatch_count, "</span>") : '';
  var productTitle = product.title.split("||")[window.currentLangIndex] ? product.title.split("||")[window.currentLangIndex] : product.title;
  return "\n    <div class=\"search-flydown--product-text\">\n      <span class=\"search-flydown--product-title\">\n        ".concat(productTitle, "\n      </span>\n      ").concat($price, "\n      ").concat(swatchCount, "\n    </div>\n  ");
}
/**
 * Shows a product's image
 *
 * @param image
 * @returns {string}
 * @constructor
 */


function ProductImage(image) {
  return "\n    <div class=\"search-flydown--product-image\">\n      ".concat(image, "\n    </div>\n  ");
}
/**
 * Shows a product list item component when result is a product
 *
 * @param product
 * @param enableImages
 * @returns {string}
 * @constructor
 */


function ProductItem(product, enableImages) {
  var $image = enableImages ? ProductImage(product.image) : '';
  var $content = ProductContent(product);
  return "\n    <a class=\"search-flydown--product search-flydown--product\" href=\"".concat(product.url, "\">\n      ").concat($image, "\n      ").concat($content, "\n    </a>\n  ");
}
/**
 * Shows a list of product results
 *
 * @param props
 * @returns {jQuery|HTMLElement}
 * @constructor
 */


function ProductResults(props) {
  var products = props.products,
      enableImages = props.enableImages;
  var productItems = products.map(function (product) {
    return ProductItem(product, enableImages);
  });
  return $("\n    <div class=\"search-flydown--product-items\">\n      ".concat(productItems.join(''), "\n    </div>\n  "));
}
/**
 * Show a message when no product results are found
 *
 * @param props
 * @returns {jQuery|HTMLElement}
 * @constructor
 */


function ProductNoResults(props) {
  var context = props.context,
      terms = props.terms,
      category = props.category;
  var title = context.no_results_products.title.replace('*terms*', terms);

  if (category) {
    title = context.no_results_products.title_in_category.replace('*terms*', terms).replace('*category*', category);
  }

  return $("\n    <div class=\"search-flydown--product-items--none\" data-live-search-no-products>\n      <h5>\n        ".concat(title, "\n      </h5>\n      <p>\n        ").concat(context.no_results_products.message, "\n      </p>\n      <p>\n        <a class=\"search-flydown--continue\" href=\"/collections/all\">\n          ").concat(context.view_all_products, "\n        </a>\n      </p>\n    </div>\n  "));
}
/**
 * Show's the Results footer, directing customers to all products
 *
 * @param props
 * @returns {jQuery|HTMLElement}
 * @constructor
 */


function ResultsFooter(props) {
  var context = props.context,
      terms = props.terms,
      type = props.type;
  return $("\n    <div class=\"search-flydown--footer\">\n      <a class=\"search-flydown--continue\" href=\"/search?q=".concat(terms, "&type=").concat(type, "\">\n        ").concat(context.view_all_results, "\n      </a>\n    </div>\n  "));
}


// CONCATENATED MODULE: ./source/scripts/components/search/LiveSearch.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveSearch_LiveSearch; });
function LiveSearch_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function LiveSearch_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function LiveSearch_createClass(Constructor, protoProps, staticProps) { if (protoProps) LiveSearch_defineProperties(Constructor.prototype, protoProps); if (staticProps) LiveSearch_defineProperties(Constructor, staticProps); return Constructor; }








var MAX_RESULTS = 7;

var LiveSearch_LiveSearch =
/*#__PURE__*/
function () {
  function LiveSearch($els, settings) {
    var _this = this;

    LiveSearch_classCallCheck(this, LiveSearch);

    this.$el = $els.$el;
    this.$header = $els.$header;
    this.closeEvents = [];
    this.settings = settings;
    this.enableContent = this.settings.enable_content;
    this.enableImages = this.settings.enable_images;
    this.searchType = this.enableContent ? 'article,page,product' : 'product';
    this.category = '';
    var $form = this.$el.find('[data-live-search-form]');
    this.$input = $form.find('[data-live-search-input]');
    this.$button = $form.find('[data-live-search-submit]');
    this.$takeOverButton = $form.find('[data-live-search-takeover-cancel]');
    this.$filter = this.$el.find('[data-live-search-filter]');
    this.$flyDown = this.$el.find('[data-live-search-flydown]');
    this.$searchResults = this.$flyDown.find('[data-live-search-results]');
    this.$searchPlaceholder = this.$flyDown.find('[data-live-search-placeholder]');
    this.$quickLinks = this.$flyDown.find('[data-live-search-quick-links]');
    this.staticSearch = new SearchForm["a" /* default */](this.$el, {
      liveSearch: true,
      setCategory: function setCategory(category) {
        _this.category = category;
      }
    });
    this.search = new Search({
      view: 'header',
      type: this.searchType
    });
    this._search = this._search.bind(this);
    this._documentFocus = this._documentFocus.bind(this);
    this._searchCancelled = this._searchCancelled.bind(this);
    this._searchComplete = this._searchComplete.bind(this);
    this._searchError = this._searchError.bind(this);
    this.search.on('cancelled', this._searchCancelled);
    this.search.on('complete', this._searchComplete);
    this.search.on('error', this._searchError);

    this._closeEsc = function (e) {
      if (e.key === 'Escape') {
        e.stopPropagation();

        _this.$input.focus();

        _this._closeFlyDown(true);

        _this._closeTakeOver();
      }
    };

    this.events = [this.$input.on('keyup.live-search', just_debounce_default()(this._search, 250)), this.$input.on('focus.live-search', function (event) {
      event.stopPropagation();

      _this._onSearchFocus();
    }), this.$takeOverButton.on('click.live-search', function (event) {
      event.preventDefault();

      _this._closeTakeOver();
    }), this.$filter.on('change.live-search', this._search)];
  }

  LiveSearch_createClass(LiveSearch, [{
    key: "open",
    value: function open() {
      // If is XS, pop the search out into a Takeover screen
      if (Layout["a" /* default */].isLessThanBreakpoint('S')) {
        this._openTakeOver();
      }

      if (this._shouldOpenFlyDown()) {
        this._openFlyDown();
      }

      this.$input.focus();
    }
  }, {
    key: "unload",
    value: function unload() {
      this.events.forEach(function ($el) {
        return $el.off('.live-search');
      });
      this.search.off('cancelled', this._searchCancelled);
      this.search.off('complete', this._searchComplete);
      this.search.off('error', this._searchError);
      this.staticSearch.unload();
    }
  }, {
    key: "_onSearchFocus",
    value: function _onSearchFocus() {
      this.$el.addClass('live-search--focused'); // If is XS, pop the search out into a Takeover screen

      if (Layout["a" /* default */].isLessThanBreakpoint('S')) {
        this._openTakeOver();
      }

      if (this._shouldOpenFlyDown()) {
        this._openFlyDown();
      }
    }
  }, {
    key: "_search",
    value: function _search(event) {
      // Ignore non character key strokes
      var invalidKeyStrokes = ['Alt', 'ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'Capslock', 'Control', 'Escape', 'Meta', 'Shift', 'Tab', 'Enter'];

      if (event.key && invalidKeyStrokes.indexOf(event.key) !== -1) {
        return;
      }

      var terms = this.$input.val();
      var hasTerms = terms.length > 0; // If is XS, pop the search out into a Takeover screen

      if (Layout["a" /* default */].isLessThanBreakpoint('S')) {
        this._openTakeOver();
      } // Clear previous results


      this.$searchResults.html(''); // If terms has length, this will be true

      this._toggleButton(hasTerms);

      if (hasTerms) {
        this._openFlyDown();

        this._updateFlyDown(true); // Adds `*` after each word in search terms, doesn't add to last word


        if (terms.indexOf(' ') > 0) {
          terms = terms.split(' ').join('* ').trim();
        } // Adds `*` at the end of the search terms


        terms = "".concat(terms, "*");
        var filter = this.$filter[0]; // Add field filter

        terms = filter && filter.value ? "".concat(terms, " ").concat(filter.value) : terms;
        this.search.execute(terms);
      } else {
        this._closeFlyDown(true);
      }
    }
  }, {
    key: "_searchError",
    value: function _searchError(response) {
      console.warn('Search had error');
      console.log(response.message, response.error, response.event);

      this._toggleButton(false);
    }
    /**
     * Search has been cancelled due to new search being performed
     *
     * @private
     */

  }, {
    key: "_searchCancelled",
    value: function _searchCancelled() {// Searches are canceled on user interaction, UI should remain unchanged
    }
  }, {
    key: "_searchComplete",
    value: function _searchComplete(response) {
      var _this2 = this;

      var content = response.content,
          products = response.products;
      var terms = response.terms,
          sanitizedTerms = response.sanitizedTerms;
      content = content.slice(0, MAX_RESULTS);
      products = products.slice(0, MAX_RESULTS);
      var _this$settings = this.settings,
          enableImages = _this$settings.enable_images,
          context = _this$settings.context;
      var settings = {
        products: {
          results: {
            products: products,
            enableImages: enableImages
          },
          noResults: {
            context: context,
            terms: sanitizedTerms,
            category: this.category
          }
        },
        content: {
          results: {
            context: context,
            content: content
          },
          noResults: {
            context: context
          }
        },
        footer: {
          context: context,
          terms: terms,
          type: this.searchType
        }
      };
      var $productResults = products.length ? ProductResults(settings.products.results) : ProductNoResults(settings.products.noResults);
      var $contentResults = content.length ? ContentResults(settings.content.results) : ContentNoResults(settings.content.noResults);
      $productResults.find('.money').each(function (i, el) {
        el.innerHTML = Shopify.formatMoney( // eslint-disable-line no-param-reassign
        el.innerHTML, _this2.settings.money_format);
        dist_default.a.update(el);
      }); // Hide placeholder
      // TODO: Lock minimum height?

      this._updateFlyDown(); // Show results


      this.$searchResults.html($productResults).addClass('visible');

      if (this.enableContent) {
        this.$searchResults.append($contentResults);
      }

      this.$searchResults.append(ResultsFooter(settings.footer));

      this._toggleButton(false);
    }
    /**
     * Toggles search button while processing
     *
     * @param disable
     * @private
     */

  }, {
    key: "_toggleButton",
    value: function _toggleButton(disable) {
      if (disable) {
        this.$button.addClass('search-icon--processing').attr('disabled');
      } else {
        this.$button.removeClass('search-icon--processing').removeAttr('disabled');
      }
    }
  }, {
    key: "_shouldOpenFlyDown",
    value: function _shouldOpenFlyDown() {
      var hasTerms = this.$input.val().length > 0;
      var hasResults = this.$searchResults.children().length > 0;

      if (hasTerms && hasResults) {
        return true;
      }

      if (this.$quickLinks.length) {
        return true;
      }

      return false;
    }
  }, {
    key: "_openFlyDown",
    value: function _openFlyDown() {
      if (this.$flyDown.data('is-open')) {
        return;
      }

      var $window = jquery_default()(window);
      var $document = jquery_default()(document); // Only listen for events outside of the search flydown when its open

      this.closeEvents = [$window.on('keydown.live-search', this._closeEsc), $document.on('focusin.live-search', this._documentFocus), $document.on('touchstart.live-search', this._documentFocus), $document.on('click.live-search', this._documentFocus)];

      this._updateFlyDown();

      this.$el.addClass('live-search--active');
      this.$flyDown.data('is-open', true);
    }
  }, {
    key: "_updateFlyDown",
    value: function _updateFlyDown() {
      var placeholder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var hasTerms = this.$input.val().length > 0;
      var hasNoResults = this.$searchResults.find('[data-live-search-no-products]').length === 0;
      var hasPreviousResults = this.$searchResults.children().length > 0;
      var hasQuickLinks = this.$quickLinks.length;

      if (placeholder) {
        this.$quickLinks.removeClass('visible');
        this.$searchResults.removeClass('visible');
        this.$searchPlaceholder.addClass('visible');
      } else {
        this.$searchPlaceholder.removeClass('visible');

        if (hasTerms && hasNoResults && hasPreviousResults) {
          this.$searchResults.addClass('visible');
          this.$quickLinks.removeClass('visible');
        } else if (hasQuickLinks) {
          this.$searchResults.removeClass('visible');
          this.$quickLinks.addClass('visible');
        }
      }
    }
    /**
     * Close the FlyDown when no longer needed
     *  - Keep focus styling if input is still being interacted with
     *
     * @param retainFocus
     * @private
     */

  }, {
    key: "_closeFlyDown",
    value: function _closeFlyDown() {
      var retainFocus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!this.$flyDown.data('is-open')) {
        return;
      }

      this.$flyDown.data('is-open', false);
      this.$el.removeClass('live-search--active');

      if (!retainFocus) {
        this.$el.removeClass('live-search--focused');
      }

      this.closeEvents.forEach(function ($el) {
        return $el.off('.live-search');
      });
      this.closeEvents = [];
    }
  }, {
    key: "_openTakeOver",
    value: function _openTakeOver() {
      if (this.$header.hasClass('search--section')) {
        document.body.classList.add('search-takeover-active');
      }

      document.body.classList.add('scroll-lock');
      this.$el.addClass('live-search--takeover');
    }
  }, {
    key: "_closeTakeOver",
    value: function _closeTakeOver() {
      document.body.classList.remove('scroll-lock');
      document.body.classList.remove('search-takeover-active');
      this.$el.removeClass('live-search--takeover');
    }
    /**
     * When the focus element has changed, either by clicking, touching, or tabbing
     * check to see if it is within the flydown
     *
     * @param event
     * @private
     */

  }, {
    key: "_documentFocus",
    value: function _documentFocus(event) {
      var $closest = jquery_default()(event.target).closest('[data-live-search]');

      if ($closest.length) {
        return;
      }

      this._closeFlyDown();

      this._closeTakeOver();
    }
  }]);

  return LiveSearch;
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

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(0);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);

// CONCATENATED MODULE: ./source/scripts/helpers/Quantity.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Quantity =
/*#__PURE__*/
function () {
  function Quantity(el) {
    _classCallCheck(this, Quantity);

    this.$el = $(el);
    this.$inputParent = this.$el.find('.form-field--qty-input');
    this.$input = this.$el.find('[data-quantity-input]');
    this.$selectParent = this.$el.find('.form-field--qty-select');
    this.$select = this.$el.find('[data-quantity-select]');
    this._watchSelect = this._watchSelect.bind(this);
    this._watchInput = this._watchInput.bind(this);
    this.$select.on('change.quantity', this._watchSelect);
    this.$input.on('change.quantity', this._watchInput);
  }

  _createClass(Quantity, [{
    key: "unload",
    value: function unload() {
      this.$el.off('.quantity');
    }
  }, {
    key: "_validateValue",
    value: function _validateValue(event) {
      var baseValue = parseInt(event.currentTarget.value, 10);
      return isNaN(baseValue) ? 1 : baseValue;
    }
  }, {
    key: "_watchSelect",
    value: function _watchSelect(event) {
      var value = this._validateValue(event); // Update input to match select


      this.$input.val(value).trigger('change'); // Switch to quantity input when 10 or more

      if (value >= 10) {
        this.$inputParent.removeClass('hidden').addClass('visible');
        this.$input.focus().removeAttr('tabindex').select();
        this.$selectParent.removeClass('visible').addClass('hidden');
        this.$select.attr('tabindex', '-1');
      }
    }
  }, {
    key: "_watchInput",
    value: function _watchInput(event) {
      this.$input.val(this._validateValue(event));
    }
  }]);

  return Quantity;
}();


// CONCATENATED MODULE: ./source/scripts/Forms.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Forms_Forms; });
function Forms_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Forms_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Forms_createClass(Constructor, protoProps, staticProps) { if (protoProps) Forms_defineProperties(Constructor.prototype, protoProps); if (staticProps) Forms_defineProperties(Constructor, staticProps); return Constructor; }




var Forms_Forms =
/*#__PURE__*/
function () {
  function Forms(el) {
    var _this = this;

    var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.form-field-input';

    Forms_classCallCheck(this, Forms);

    this.$el = jquery_default()(el);
    this.filledClass = 'form-field-filled';
    this.fieldSelector = selector;
    this.quantityItems = [];
    this.$quantityWrapper = this.$el.find('[data-quantity-wrapper]');
    this._toggleFilled = this._toggleFilled.bind(this);
    this.$el.on('focus.forms', this.fieldSelector, this._toggleFilled);
    this.$el.on('blur.forms', this.fieldSelector, this._toggleFilled);

    this._checkFilled();

    if (this.$quantityWrapper.length) {
      this.$quantityWrapper.each(function (i, el) {
        _this.quantityItems.push(new Quantity(el));
      });
    }
  }

  Forms_createClass(Forms, [{
    key: "unload",
    value: function unload() {
      this.$el.off('.forms');
      this.quantityItems.forEach(function (quantityItem) {
        quantityItem.unload();
      });
    }
  }, {
    key: "_checkFilled",
    value: function _checkFilled() {
      var _this2 = this;

      this.$el.find(this.fieldSelector).each(function (i, el) {
        if (jquery_default()(el).hasClass(_this2.filledClass)) return;

        _this2._toggleFilled(null, el);
      });
    }
  }, {
    key: "_toggleFilled",
    value: function _toggleFilled() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var target = event ? event.currentTarget : el;
      var $target = jquery_default()(target);
      var value = target.value;
      var isFilled = value.length > 0;

      try {
        isFilled = isFilled || $target.is(':-webkit-autofill');
        $target.toggleClass(this.filledClass, isFilled);
      } catch (e) {
        $target.toggleClass(this.filledClass, isFilled);
      }
    }
  }]);

  return Forms;
}();



/***/ })

}]);
//# sourceMappingURL=DynamicSearch-StaticHeader.bundle.js.map?1581358591380