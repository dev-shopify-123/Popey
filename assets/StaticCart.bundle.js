(window["wpJsonpPaskit"] = window["wpJsonpPaskit"] || []).push([[25],{

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageBanner; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var MessageBanner =
/*#__PURE__*/
function () {
  function MessageBanner() {
    var _this = this;

    _classCallCheck(this, MessageBanner);

    this.$window = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window);
    this.$document = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document);
    this.$body = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body);
    this.$bannerTemplate = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-templates] [data-message-banner]');
    this.$banners = [];
    this.header = document.querySelector('[data-site-header]');
    this.events = [];
    this.$document.on('touchstart.message-banner, click.message-banner', function (event) {
      _this._handleDocumentClick(event.target);
    });
    this.$window.on('keydown.message-banner', function (event) {
      return _this._closeEsc(event);
    });
  }

  _createClass(MessageBanner, [{
    key: "unload",
    value: function unload() {
      this.$document.off('touchstart.message-banner, click.message-banner');
      this.$window.off('keydown.message-banner');
    }
  }, {
    key: "message",
    value: function message(_message, type) {
      var $banner = this.$bannerTemplate.clone();
      $banner.addClass("message--".concat(type)).find('[data-message-banner-content]').html(_message);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.header).append($banner);

      this._bindEvents($banner);

      this._show($banner);
    }
  }, {
    key: "dismissBanners",
    value: function dismissBanners() {
      var _this2 = this;

      var $visibleBanners = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-message-banner]:visible');
      $visibleBanners.each(function (index, banner) {
        _this2._hide(jquery__WEBPACK_IMPORTED_MODULE_0___default()(banner), index);
      });
    }
  }, {
    key: "_bindEvents",
    value: function _bindEvents($banner) {
      var _this3 = this;

      this.events.push([$banner.on('click.message-banner', '[data-message-banner-close]', function (event) {
        event.preventDefault();

        _this3._hide($banner);
      }), this.$window.on('keydown.message-banner', function (e) {
        if (e.key === 'Escape') {
          _this3._hide($banner);
        }
      })]);
    }
  }, {
    key: "_closeEsc",
    value: function _closeEsc(e) {
      if (e.key === 'Escape') {
        this.dismissBanners();
      }
    }
  }, {
    key: "_show",
    value: function _show($banner) {
      this.$banners.push($banner);
      $banner.addClass('animating animating-in').one('trend', function () {
        $banner.removeClass('animating animating-in').addClass('visible').off('trend');
      });
    }
  }, {
    key: "_hide",
    value: function _hide($banner) {
      var _this4 = this;

      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      $banner.addClass('animating animating-out').one('trend', function () {
        $banner.removeClass('animating animating-out visible').off('trend');

        _this4._removeBanner($banner, index);
      });
    }
  }, {
    key: "_removeBanner",
    value: function _removeBanner($banner, index) {
      if (this.events[index]) {
        this.events[index].forEach(function ($el) {
          return $el.off('.message-banner');
        });
        this.events.splice(index, 1);
      }

      this.$banners.splice(index, 1);
      $banner.remove();
    }
  }, {
    key: "_handleDocumentClick",
    value: function _handleDocumentClick(target) {
      var $parent = jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).parents('[data-message-banner]');
      if ($parent.length) return;
      this.dismissBanners();
    }
  }]);

  return MessageBanner;
}();



/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StaticCart; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var scriptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var scriptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(scriptjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var just_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var just_debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(just_debounce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var morphdom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var shopify_asyncview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var shopify_currency_converter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var shopify_currency_converter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(shopify_currency_converter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shopify_theme_addresses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36);
/* harmony import */ var rimg_shopify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2);
/* harmony import */ var _Forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7);
/* harmony import */ var _components_MessageBanner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }












var StaticCart =
/*#__PURE__*/
function () {
  function StaticCart(section) {
    var _this = this;

    _classCallCheck(this, StaticCart);

    this.settings = section.data.settings;
    this.shipping = section.data.shipping;
    this.messageBanner = new _components_MessageBanner__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]();
    this.updateTimeout = null;
    this.$window = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window);
    this.$el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(section.el);
    this.el = section.el;
    this.$total = this.$el.find('[data-cart-total]');
    this.$shipping = this.$el.find('[data-cartshipping]'); // Product form containers

    this.$titleTotalSmall = this.$el.find('.cart-title-total--small');
    this.$titleTotalLarge = this.$el.find('.cart-title-total--large');
    this.$titleTotalContents = this.$el.find('[data-cart-title-total]'); // Cart list

    this.cartItemList = this.$el[0].querySelector('[data-cart-item-list]');
    this.cartDiscounts = this.$el[0].querySelector('[data-cart-discounts]'); // Shipping calculator elements

    this.$shippingToggle = this.$el.find('[data-cartshipping-toggle]');
    this.$shippingResponse = this.$shipping.find('[data-cartshipping-response]');
    this.$shippingResponseMessage = this.$shippingResponse.find('[data-cartshipping-message]');
    this.$shippingResponseRates = this.$shippingResponse.find('[data-cartshipping-rates]');
    this.$shippingSubmit = this.$shipping.find('[data-cartshipping-submit]');

    this._moveTitleTotal();

    var $scripts = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-scripts]');
    this._quantityKeyUp = this._quantityKeyUp.bind(this);
    this._editItemQuantity = this._editItemQuantity.bind(this);
    scriptjs__WEBPACK_IMPORTED_MODULE_1___default()($scripts.data('shopify-api-url'), function () {
      _this._bindEvents();

      window.Shopify.onError = _this._handleErrors.bind(_this);
    });
    this.forms = new _Forms__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"](this.$el); // Update the section when onSectionLoad fires to restore prices to local currency

    this._updatePrices();

    if (this.settings.shipping && this.$shipping.length) {
      scriptjs__WEBPACK_IMPORTED_MODULE_1___default()($scripts.data('shopify-countries'), function () {
        scriptjs__WEBPACK_IMPORTED_MODULE_1___default()($scripts.data('shopify-common'), function () {
          _this._initShippingCalc();
        });
      });
    }
  }

  _createClass(StaticCart, [{
    key: "_updatePrices",
    value: function _updatePrices() {
      this.$el.find('.money:not([data-currency]').each(function (index, el) {
        return shopify_currency_converter__WEBPACK_IMPORTED_MODULE_5___default.a.update(el);
      });
    }
  }, {
    key: "onSectionUnload",
    value: function onSectionUnload() {
      this.$el.off('.cart-page');
      this.$window.off('.cart-page');
      this.forms.unload();
      this.messageBanner.unload();
      this.messageBanner.dismissBanners();
    }
  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      var _this2 = this;

      this.$el.on('keyup.cart-page', '[data-cartitem-quantity]', this._quantityKeyUp);
      this.$el.on('keydown.cart-page', '[data-cartitem-quantity]', this._quantityKeyDown);
      /*
       * There are two [data-cartitem-quantity] selectors.
       * Use the input as the source of truth rather than the select
       * because the input has an infinite value range whereas the select
       * has a finite range.
       */

      this.$el.on('change.cart-page', '[data-cartitem-quantity][data-quantity-input]', this._editItemQuantity);
      this.$el.on('click.cart-page', '[data-cartitem-remove]', function (event) {
        event.preventDefault();

        _this2._editItemQuantity(event, true);
      });
      this.$window.on('resize.cart-page', just_debounce__WEBPACK_IMPORTED_MODULE_2___default()(function () {
        return _this2._moveTitleTotal();
      }, 20));
    }
    /**
     * Gets the current value of the quantity input box for a given line item key
     *
     * @param {string} key
     */

  }, {
    key: "_getItemQuantity",
    value: function _getItemQuantity(key) {
      return parseInt(this.el.querySelector("[data-cartitem-key=\"".concat(key, "\"] [data-quantity-input]")).value, 10);
    }
  }, {
    key: "_moveTitleTotal",
    value: function _moveTitleTotal() {
      if (!this.$titleTotalContents.length) {
        return;
      }

      if (this.$window.outerWidth() >= 480) {
        if (!jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(this.$titleTotalLarge[0], this.$titleTotalContents[0])) {
          var $form = this.$titleTotalContents.detach();
          this.$titleTotalLarge.append($form);
        }
      } else if (!jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(this.$titleTotalSmall[0], this.$titleTotalContents[0])) {
        var _$form = this.$titleTotalContents.detach();

        this.$titleTotalSmall.append(_$form);
      }
    }
    /**
     * Update form depending on key input
     *
     * @param event
     * @private
     */

  }, {
    key: "_quantityKeyUp",
    value: function _quantityKeyUp(event) {
      if (event.key === 'Backspace') {
        // We block update on backspace so UI doesn't revert to select dropdown
        // when user is trying to edit quantities with the text input.
        if (this.updateTimeout !== null) {
          clearTimeout(this.updateTimeout);
          this.updateTimeout = null;
        }

        return;
      }

      this._editItemQuantity(event);
    }
    /**
     * Prevent form submission when pressing `enter` within a quantity selector
     *
     * @param event
     * @private
     */

  }, {
    key: "_quantityKeyDown",
    value: function _quantityKeyDown(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
      }
    }
    /**
     * Handle an item quantity change
     *
     * @param event
     * @param {Boolean} remove - Set as true to remove cart item
     * @private
     */

  }, {
    key: "_editItemQuantity",
    value: function _editItemQuantity(event) {
      var remove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.messageBanner.dismissBanners();
      var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget);
      var cartItemRow = $target.closest('[data-cartitem-id]')[0];
      var quantity = remove ? 0 : parseInt(cartItemRow.querySelector('.form-field.visible [data-cartitem-quantity]').value, 10);
      var key = cartItemRow.getAttribute('data-cartitem-key');

      this._updateCart(key, quantity);
    }
    /**
     * Update cart with a valid quantity
     *
     * @param $cartItem
     * @param quantity
     * @private
     */

  }, {
    key: "_updateCart",
    value: function _updateCart(key, quantity) {
      var _this3 = this;

      // cancel any pending requests
      if (this.updateTimeout !== null) {
        clearTimeout(this.updateTimeout);
      }

      this.updateTimeout = setTimeout(function () {
        if (quantity > 0 && _this3._getItemQuantity(key) !== quantity) {
          _this3.updateTimeout = null;
          return;
        }

        var thisTimeoutId = _this3.updateTimeout; // Notify Shopify updated item

        window.Shopify.changeItem(key, quantity, function (response) {
          if (_this3.updateTimeout !== thisTimeoutId) {
            return;
          }

          _this3._didUpdate(response, thisTimeoutId);
        });
      }, 300);
    }
    /**
     * Fetches new cart contents and swaps into page
     *
     * @param response
     * @param {integer} thisTimeoutId Id of timeout for this request. If no longer current, update is cancelled.
     * @returns {*}
     * @private
     */

  }, {
    key: "_didUpdate",
    value: function _didUpdate(response, thisTimeoutId) {
      var _this4 = this;

      // Reload page if all items are removed from cart
      if (!response.items.length) {
        window.location = '/cart';
        return;
      } // Reload the cart-item-list and the discounts snippets


      shopify_asyncview__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].load('/cart', {
        view: '_ajax'
      }).then(function (_ref) {
        var html = _ref.html;

        // If another request is in progress, discard this update
        if (_this4.updateTimeout !== thisTimeoutId) {
          return;
        }

        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('cartcount:update', {
          response: response
        });

        _this4.$total.each(function (i, el) {
          el.innerHTML = Shopify.formatMoney( // eslint-disable-line no-param-reassign
          response.total_price, _this4.settings.money_format);
          shopify_currency_converter__WEBPACK_IMPORTED_MODULE_5___default.a.update(el);
        }); // Inject new cart list contents


        var newListContainer = document.createElement('div');
        newListContainer.innerHTML = html.list;
        Object(morphdom__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this4.cartItemList, newListContainer.querySelector('ul'), {
          onBeforeElUpdated: function onBeforeElUpdated(fromEl, toEl) {
            // Skip images if src matches
            // - we don't want to reload lazy loaded images
            if (fromEl.tagName === 'IMG' && fromEl.src === toEl.src) {
              return false;
            }

            return true;
          }
        });

        _this4.cartItemList.querySelectorAll('.money').forEach(function (money) {
          return shopify_currency_converter__WEBPACK_IMPORTED_MODULE_5___default.a.update(money);
        });

        rimg_shopify__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].watch(_this4.cartItemList);

        _this4.forms.unload();

        _this4.forms = new _Forms__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"](_this4.$el);

        _this4.$el.off('keyup.cart-page', '[data-cartitem-quantity]');

        _this4.$el.on('keyup.cart-page', '[data-cartitem-quantity]', _this4._quantityKeyUp);

        _this4.$el.off('keydown.cart-page', '[data-cartitem-quantity]');

        _this4.$el.on('keydown.cart-page', '[data-cartitem-quantity]', _this4._quantityKeyDown);

        _this4.$el.off('change.cart-page', '[data-cartitem-quantity][data-quantity-input]');

        _this4.$el.on('change.cart-page', '[data-cartitem-quantity][data-quantity-input]', _this4._editItemQuantity);

        _this4.$el.off('click.cart-page', '[data-cartitem-remove]');

        _this4.$el.on('click.cart-page', '[data-cartitem-remove]', function (event) {
          event.preventDefault();

          _this4._editItemQuantity(event, true);
        }); // Inject new cart level discounts


        _this4.cartDiscounts.innerHTML = html.discounts;

        _this4.cartDiscounts.querySelectorAll('.money').forEach(function (money) {
          return shopify_currency_converter__WEBPACK_IMPORTED_MODULE_5___default.a.update(money);
        });
        
        

        
      }).catch(function () {
        return window.location.reload();
      });
      
      
    }
    /**
     * Handle Errors returned from Shopify
     *
     * @param errors
     * @private
     */

  }, {
    key: "_handleErrors",
    value: function _handleErrors() {
      var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (!errors) {
        return;
      }

      var shippingResponse = {
        message: this.shipping.error_general
      };

      if (errors.zip && errors.zip.length > 0) {
        if (errors.zip[0].indexOf('is not valid') !== -1 || errors.zip[0].indexOf('can\'t be blank') !== -1) {
          shippingResponse.message = "".concat(this.shipping.zip, " ").concat(errors.zip);
        }
      }

      if (errors.error && errors.error.length > 0) {
        if (errors.error[0].indexOf('shipment_too_heavy') !== -1) {
          shippingResponse.message = this.shipping.shipment_too_heavy;
        }
      }

      this._handleShippingResponse(shippingResponse);
    }
  }, {
    key: "_initShippingCalc",
    value: function _initShippingCalc() {
      var _this5 = this;

      this._bindShippingCalcEvents();

      var countrySelect = document.getElementById('address_country');
      var provinceSelect = document.getElementById('address_province');
      var provinceContainer = document.getElementById('address_province_container');
      this.shippingCountryProvinceSelector = new _shopify_theme_addresses__WEBPACK_IMPORTED_MODULE_6__[/* CountryProvinceSelector */ "a"](countrySelect.innerHTML);
      this.shippingCountryProvinceSelector.build(countrySelect, provinceSelect, {
        onCountryChange: function onCountryChange(provinces) {
          if (provinces.length) {
            provinceContainer.style.display = 'block';
          } else {
            provinceContainer.style.display = 'none';
          } // "Province", "State", "Region", etc. and "Postal Code", "ZIP Code", etc.
          // Even countries without provinces include a label.


          var _window$Countries$cou = window.Countries[countrySelect.value],
              label = _window$Countries$cou.label,
              zipLabel = _window$Countries$cou.zip_label;
          provinceContainer.querySelector('label[for="address_province"]').innerHTML = label;
          _this5.el.querySelector('#address_zip ~ label[for="address_zip"]').innerHTML = zipLabel;
        }
      });
    }
  }, {
    key: "_bindShippingCalcEvents",
    value: function _bindShippingCalcEvents() {
      var _this6 = this;

      this.$el.on('click.cart-page', '[data-cartshipping-toggle]', function () {
        _this6._toggleShippingCalc();
      });
      this.$el.on('click.cart-page', '[data-cartshipping-submit]', function () {
        _this6._getShippingRates();
      });
      this.$el.on('keypress.cart-page', '#address_zip', function (event) {
        if (event.keyCode === 10 || event.keyCode === 13) {
          event.preventDefault();

          _this6.$shippingSubmit.trigger('click');
        }
      });
    }
  }, {
    key: "_toggleShippingCalc",
    value: function _toggleShippingCalc() {
      var oldText = this.$shippingToggle.text();
      var newText = this.$shippingToggle.data('cartshipping-toggle');
      this.$shippingToggle.text(newText).data('cartshipping-toggle', oldText);
      this.$shipping.toggleClass('open');
    }
  }, {
    key: "_getShippingRates",
    value: function _getShippingRates() {
      var _this7 = this;

      this._disableShippingButton();

      var shippingAddress = {};
      shippingAddress.country = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#address_country').val() || '';
      shippingAddress.province = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#address_province').val() || '';
      shippingAddress.zip = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#address_zip').val() || '';
      var queryString = Object.keys(shippingAddress).map(function (key) {
        return "".concat(encodeURIComponent("shipping_address[".concat(key, "]")), "=").concat(encodeURIComponent(shippingAddress[key]));
      }).join('&');
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax("/cart/shipping_rates.json?".concat(queryString), {
        dataType: 'json'
      }).fail(function (error) {
        return _this7._handleErrors(error.responseJSON || {});
      }).done(function (response) {
        var rates = response.shipping_rates;
        var addressBase = [];

        if (shippingAddress.zip.length) {
          addressBase.push(shippingAddress.zip.trim());
        }

        if (shippingAddress.province.length) {
          addressBase.push(shippingAddress.province);
        }

        if (shippingAddress.country.length) {
          addressBase.push(shippingAddress.country);
        }

        var address = addressBase.join(', ');
        var message = '';

        if (rates.length > 1) {
          var firstRate = window.Shopify.formatMoney(rates[0].price, _this7.settings.money_format);
          message = _this7.shipping.multiple_rates.replace('*address*', address).replace('*number_of_rates*', rates.length).replace('*rate*', "<span class=\"money\">".concat(firstRate, "</span>"));
        } else if (rates.length === 1) {
          message = _this7.shipping.one_rate.replace('*address*', address);
        } else {
          message = _this7.shipping.no_rates;
        }

        var ratesList = rates.map(function (rate) {
          var price = window.Shopify.formatMoney(rate.price, _this7.settings.money_format);

          var rateValue = _this7.shipping.rate_value.replace('*rate_title*', rate.name).replace('*rate*', "<span class=\"money\">".concat(price, "</span>"));

          return "<li>".concat(rateValue, "</li>");
        });

        _this7._handleShippingResponse({
          message: message,
          rates: ratesList
        });
      });
    }
  }, {
    key: "_enableShippingButton",
    value: function _enableShippingButton() {
      this.$shippingSubmit.text(this.shipping.calculate_shipping).attr('disabled', false);
    }
  }, {
    key: "_disableShippingButton",
    value: function _disableShippingButton() {
      this.$shippingSubmit.text(this.shipping.calculating).attr('disabled', true);
    }
  }, {
    key: "_showShippingResponse",
    value: function _showShippingResponse() {
      this.$shippingResponse.addClass('visible');
    }
  }, {
    key: "_hideShippingResponse",
    value: function _hideShippingResponse() {
      this.$shippingResponse.removeClass('visible');
    }
    /**
     * Handle shipping responses
     *
     * @param {object} shippingResponse
     * @property {String} shippingResponse.messages - Error / Success message
     * @property {Array|String} shippingResponse.rates - Shipping rates
     * @private
     */

  }, {
    key: "_handleShippingResponse",
    value: function _handleShippingResponse() {
      var shippingResponse = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // Hide the response so that it can be populated smoothly
      this._hideShippingResponse();

      var message = shippingResponse.message || null;
      var rates = shippingResponse.rates || null; // Empty out contents

      this.$shippingResponseMessage.empty();
      this.$shippingResponseRates.empty();

      if (message) {
        this.$shippingResponseMessage.html(message).find('.money').each(function (index, money) {
          return shopify_currency_converter__WEBPACK_IMPORTED_MODULE_5___default.a.update(money);
        });
      }

      if (rates) {
        this.$shippingResponseRates.html(rates).find('.money').each(function (index, money) {
          return shopify_currency_converter__WEBPACK_IMPORTED_MODULE_5___default.a.update(money);
        });
      } // Reset the calculating button so it can be used again


      this._enableShippingButton(); // No error provided


      if (!message && !rates) {
        return;
      } // Show the response


      this._showShippingResponse();
    }
  }]);

  return StaticCart;
}();



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
//# sourceMappingURL=StaticCart.bundle.js.map?1581358591380