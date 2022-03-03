(window["wpJsonpPaskit"] = window["wpJsonpPaskit"] || []).push([[34],{

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

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StaticSearch; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shopify_currency_converter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var shopify_currency_converter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shopify_currency_converter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ProductGridItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var _components_search_SearchForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var StaticSearch =
/*#__PURE__*/
function () {
  function StaticSearch(section) {
    var _this = this;

    _classCallCheck(this, StaticSearch);

    this.section = section;
    this.$el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(section.el);
    this.$searchField = this.$el.find('[data-live-search]'); // Product items

    this.productItems = [];
    var $productItems = this.$el.find('[data-product-item]');
    $productItems.each(function (i, productItem) {
      _this.productItems.push(new _components_ProductGridItem__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]({
        el: productItem,
        id: _this.section.id,
        lazy: true
      }));
    });

    this._updatePrices();

    this.searchForm = new _components_search_SearchForm__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"](this.$searchField);
  }

  _createClass(StaticSearch, [{
    key: "onSectionUnload",
    value: function onSectionUnload() {
      this.searchForm.unload();
      this.productItems.forEach(function (productItem) {
        productItem.unload();
      });
    }
  }, {
    key: "_updatePrices",
    value: function _updatePrices() {
      this.$el.find('.money:not([data-currency]').each(function (index, el) {
        return shopify_currency_converter__WEBPACK_IMPORTED_MODULE_1___default.a.update(el);
      });
    }
  }]);

  return StaticSearch;
}();



/***/ })

}]);
//# sourceMappingURL=StaticSearch.bundle.js.map?1581358591380