(window["wpJsonpPaskit"] = window["wpJsonpPaskit"] || []).push([[32],{

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/rimg-shopify/dist/index.es.js + 1 modules
var index_es = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/shopify-asyncview/dist/index.es.js
var dist_index_es = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/shopify-currency-converter/dist/index.js
var dist = __webpack_require__(9);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// EXTERNAL MODULE: ./source/scripts/Layout.js
var Layout = __webpack_require__(6);

// EXTERNAL MODULE: ./source/scripts/components/ProductGridItem.js + 3 modules
var ProductGridItem = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/just-debounce/index.js
var just_debounce = __webpack_require__(8);
var just_debounce_default = /*#__PURE__*/__webpack_require__.n(just_debounce);

// EXTERNAL MODULE: ./node_modules/flickity/js/index.js
var js = __webpack_require__(13);
var js_default = /*#__PURE__*/__webpack_require__.n(js);

// CONCATENATED MODULE: ./source/scripts/components/ProductRowScroller.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var ProductRowScroller_ProductRowScroller =
/*#__PURE__*/
function () {
  function ProductRowScroller(productRow) {
    _classCallCheck(this, ProductRowScroller);

    this.$window = $(window);
    this.flickity = null;
    this.productRow = productRow;
    this.$productRow = $(this.productRow); // Activate flickity on mobile

    this._mobileSlider = this._mobileSlider.bind(this);
    Layout["a" /* default */].onBreakpointChange(this._mobileSlider);

    this._mobileSlider();
  }

  _createClass(ProductRowScroller, [{
    key: "unload",
    value: function unload() {
      Layout["a" /* default */].offBreakpointChange(this._mobileSlider);

      this._destroyFlickity();
    }
  }, {
    key: "_initFlickity",
    value: function _initFlickity() {
      this.flickity = new js_default.a(this.productRow, {
        cellSelector: '.productgrid--item',
        contain: true,
        freeScroll: true,
        percentPosition: false,
        prevNextButtons: false,
        pageDots: false,
        setGallerySize: false
      });

      this._bindSlider();
    }
  }, {
    key: "_destroyFlickity",
    value: function _destroyFlickity() {
      if (!this.flickity) {
        return;
      }

      this.$window.off('.product-row');
      this.$productRow.off('.product-row');
      this.flickity.destroy();
      this.flickity = null;
    }
  }, {
    key: "_mobileSlider",
    value: function _mobileSlider() {
      // If is Large layout, attempt to destroy flickity
      if (Layout["a" /* default */].isGreaterThanBreakpoint('M')) {
        this._destroyFlickity();

        return;
      } // Is XS/S/M, and flickity is init'd -- do nothing


      if (this.flickity) {
        return;
      } // Is XS/S/M, and flickity is not init'd


      this._initFlickity();
    }
  }, {
    key: "_bindSlider",
    value: function _bindSlider() {
      var _this = this;

      var $slider = this.$productRow.find('.flickity-slider');
      this.$window.on('resize.product-row', just_debounce_default()(function () {
        _this.$productRow.trigger('heightUpdate.product-row');
      }));
      this.flickity.on('cellSelect', function () {
        _this.$productRow.trigger('heightUpdate.product-row');
      });
      this.$productRow.on('heightUpdate.product-row', function () {
        if (!_this.flickity) {
          return;
        }

        $slider.height(Math.ceil(_this.flickity.maxCellHeight));
      }); // Sets the Slider to the height of the first slide

      this.$productRow.trigger('heightUpdate.product-row');
    }
  }]);

  return ProductRowScroller;
}();


// EXTERNAL MODULE: ./source/scripts/helpers/ProductReviews.js
var ProductReviews = __webpack_require__(31);

// CONCATENATED MODULE: ./source/scripts/sections/StaticProductRecommendations.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StaticProductRecommendations_StaticProductRecommendations; });
function StaticProductRecommendations_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function StaticProductRecommendations_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function StaticProductRecommendations_createClass(Constructor, protoProps, staticProps) { if (protoProps) StaticProductRecommendations_defineProperties(Constructor.prototype, protoProps); if (staticProps) StaticProductRecommendations_defineProperties(Constructor, staticProps); return Constructor; }

 // eslint-disable-line








var StaticProductRecommendations_StaticProductRecommendations =
/*#__PURE__*/
function () {
  function StaticProductRecommendations(section) {
    StaticProductRecommendations_classCallCheck(this, StaticProductRecommendations);

    this.section = section;
    this.productId = section.data.productId;
    this.limit = section.data.settings.limit;
    this.recommendedProducts = [];
    this.productsScroller = null;
    this.recommendationContainer = document.querySelector('[data-product-recommendations]');
    this.recommendUrl = "/recommendations/products?section_id=static-product-recommendations&limit=".concat(this.limit, "&product_id=").concat(this.productId);
    this._loadRecommendations = this._loadRecommendations.bind(this);
    this._resizeRowScroller = this._resizeRowScroller.bind(this);

    this._loadRecommendations();
  }

  StaticProductRecommendations_createClass(StaticProductRecommendations, [{
    key: "_loadRecommendations",
    value: function _loadRecommendations() {
      var _this = this;

      dist_index_es["a" /* default */].load(this.recommendUrl, {
        view: ''
      }).then(function (_ref) {
        var html = _ref.html;
        _this.recommendationContainer.innerHTML = html;
        index_es["a" /* default */].watch(_this.recommendationContainer);

        var productItems = _this.recommendationContainer.querySelectorAll('[data-product-item]');

        var productItemLazyLoad = Layout["a" /* default */].isGreaterThanBreakpoint('L', true);

        if (productItems.length) {
          productItems.forEach(function (productItem) {
            _this.recommendedProducts.push(new ProductGridItem["a" /* default */]({
              el: productItem,
              id: _this.section.id,
              lazy: productItemLazyLoad
            }));
          });
          Object(ProductReviews["a" /* initShopifyProductReviews */])();

          var moneyItems = _this.recommendationContainer.querySelectorAll('.money');

          moneyItems.forEach(function (money) {
            return dist_default.a.update(money);
          });

          if (window.Shopify && Shopify.PaymentButton) {
            Shopify.PaymentButton.init();
          }

          _this.recommendationContainer.addEventListener('rimg:load', _this._resizeRowScroller);

          _this.productsScroller = new ProductRowScroller_ProductRowScroller(_this.section.el.querySelector('[data-product-row]'));
        }
      });
    }
  }, {
    key: "_resizeRowScroller",
    value: function _resizeRowScroller() {
      if (this.productsScroller && this.productsScroller.flickity) {
        this.productsScroller.flickity.resize();
      }
    }
  }, {
    key: "onSectionUnload",
    value: function onSectionUnload() {
      if (this.productsScroller) {
        this.productsScroller.unload();
      }

      this.recommendedProducts.forEach(function (productItem) {
        productItem.unload();
      });
      this.recommendationContainer.removeEventListener('rimg:load', this._resizeRowScroller);
    }
  }]);

  return StaticProductRecommendations;
}();



/***/ })

}]);
//# sourceMappingURL=StaticProductRecommendations.bundle.js.map?1581358591380