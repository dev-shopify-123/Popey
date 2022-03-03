(window["wpJsonpPaskit"] = window["wpJsonpPaskit"] || []).push([
  [6],
  {
    /***/ 7: /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";

      // EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
      var jquery = __webpack_require__(0);
      var jquery_default = /*#__PURE__*/ __webpack_require__.n(jquery);

      // CONCATENATED MODULE: ./source/scripts/helpers/Quantity.js
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

      var Quantity =
        /*#__PURE__*/
        (function () {
          function Quantity(el) {
            _classCallCheck(this, Quantity);

            this.$el = $(el);
            this.$inputParent = this.$el.find(".form-field--qty-input");
            this.$input = this.$el.find("[data-quantity-input]");
            this.$selectParent = this.$el.find(".form-field--qty-select");
            this.$select = this.$el.find("[data-quantity-select]");
            this._watchSelect = this._watchSelect.bind(this);
            this._watchInput = this._watchInput.bind(this);
            this.$select.on("change.quantity", this._watchSelect);
            this.$input.on("change.quantity", this._watchInput);
          }

          _createClass(Quantity, [
            {
              key: "unload",
              value: function unload() {
                this.$el.off(".quantity");
              },
            },
            {
              key: "_validateValue",
              value: function _validateValue(event) {
                var baseValue = parseInt(event.currentTarget.value, 10);
                return isNaN(baseValue) ? 1 : baseValue;
              },
            },
            {
              key: "_watchSelect",
              value: function _watchSelect(event) {
                var value = this._validateValue(event); // Update input to match select

                this.$input.val(value).trigger("change"); // Switch to quantity input when 10 or more

                if (value >= 10) {
                  this.$inputParent.removeClass("hidden").addClass("visible");
                  this.$input.focus().removeAttr("tabindex").select();
                  this.$selectParent.removeClass("visible").addClass("hidden");
                  this.$select.attr("tabindex", "-1");
                }
              },
            },
            {
              key: "_watchInput",
              value: function _watchInput(event) {
                this.$input.val(this._validateValue(event));
              },
            },
          ]);

          return Quantity;
        })();

      // CONCATENATED MODULE: ./source/scripts/Forms.js
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "a",
        function () {
          return Forms_Forms;
        }
      );
      function Forms_classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function Forms_defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function Forms_createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          Forms_defineProperties(Constructor.prototype, protoProps);
        if (staticProps) Forms_defineProperties(Constructor, staticProps);
        return Constructor;
      }

      var Forms_Forms =
        /*#__PURE__*/
        (function () {
          function Forms(el) {
            var _this = this;

            var selector =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : ".form-field-input";

            Forms_classCallCheck(this, Forms);

            this.$el = jquery_default()(el);
            this.filledClass = "form-field-filled";
            this.fieldSelector = selector;
            this.quantityItems = [];
            this.$quantityWrapper = this.$el.find("[data-quantity-wrapper]");
            this._toggleFilled = this._toggleFilled.bind(this);
            this.$el.on("focus.forms", this.fieldSelector, this._toggleFilled);
            this.$el.on("blur.forms", this.fieldSelector, this._toggleFilled);

            this._checkFilled();

            if (this.$quantityWrapper.length) {
              this.$quantityWrapper.each(function (i, el) {
                _this.quantityItems.push(new Quantity(el));
              });
            }
          }

          Forms_createClass(Forms, [
            {
              key: "unload",
              value: function unload() {
                this.$el.off(".forms");
                this.quantityItems.forEach(function (quantityItem) {
                  quantityItem.unload();
                });
              },
            },
            {
              key: "_checkFilled",
              value: function _checkFilled() {
                var _this2 = this;

                this.$el.find(this.fieldSelector).each(function (i, el) {
                  if (jquery_default()(el).hasClass(_this2.filledClass)) return;

                  _this2._toggleFilled(null, el);
                });
              },
            },
            {
              key: "_toggleFilled",
              value: function _toggleFilled() {
                var event =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : null;
                var el =
                  arguments.length > 1 && arguments[1] !== undefined
                    ? arguments[1]
                    : false;
                var target = event ? event.currentTarget : el;
                var $target = jquery_default()(target);
                var value = target.value;
                var isFilled = value.length > 0;

                try {
                  isFilled = isFilled || $target.is(":-webkit-autofill");
                  $target.toggleClass(this.filledClass, isFilled);
                } catch (e) {
                  $target.toggleClass(this.filledClass, isFilled);
                }
              },
            },
          ]);

          return Forms;
        })();

      /***/
    },

    /***/ 77: /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "default",
        function () {
          return Account;
        }
      );
      /* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        0
      );
      /* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        jquery__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var _Forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        7
      );
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

      var Account =
        /*#__PURE__*/
        (function () {
          function Account() {
            _classCallCheck(this, Account);

            this.$accountContents = jquery__WEBPACK_IMPORTED_MODULE_0___default()(
              "[data-template-account]"
            );
            this.$loginContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()(
              "[data-template-account-login]"
            );
            this.$addressesContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()(
              "[data-template-account-addresses]"
            );
            this.$addressButtonFocus = null;
            this._loginToggle = this._loginToggle.bind(this);

            if (this.$loginContent.length) {
              this._initLoginPage();
            }

            if (this.$addressesContent.length) {
              this._initAddressPage();
            }

            if (this.$accountContents.length) {
              this._init();
            }
          }

          _createClass(Account, [
            {
              key: "_init",
              value: function _init() {
                new _Forms__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"](
                  this.$accountContents
                );
              },
            },
            {
              key: "_initLoginPage",
              value: function _initLoginPage() {
                this.$loginToggle = this.$loginContent.find(
                  "[data-login-toggle]"
                );
                this.$login = this.$loginContent.find(
                  "[data-account-login-main]"
                );
                this.$recovery = this.$loginContent.find(
                  "[data-account-login-recovery]"
                );
                this.$recoveryHasMessage = this.$recovery.find(
                  "[data-recovery-has-message]"
                );
                this.$loginToggle.on("click", this._loginToggle);

                if (this.$recoveryHasMessage.length) {
                  this._loginToggle();
                }
              },
            },
            {
              key: "_loginToggle",
              value: function _loginToggle() {
                var event =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : null;

                if (event) {
                  event.preventDefault();
                }

                this.$login.toggleClass("visible");
                this.$recovery.toggleClass("visible");
              },
            },
            {
              key: "_initAddressPage",
              value: function _initAddressPage() {
                var _this = this;

                var $customerAddresses = this.$addressesContent.find(
                  "[data-address-id]"
                );
                this.$addressesContent.on(
                  "click",
                  "[data-edit-address]",
                  function (event) {
                    var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(
                      event.currentTarget
                    );
                    var itemId = $target.attr("data-edit-address");
                    $customerAddresses.removeClass("visible");
                    _this.$addressButtonFocus = $target;
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(
                      '[data-address-id="'.concat(itemId, '"]')
                    )
                      .addClass("visible")
                      .find(".form-field-input")
                      .eq(0)
                      .focus();
                  }
                );
                this.$addressesContent.on(
                  "click",
                  "[data-edit-address-cancel]",
                  function () {
                    $customerAddresses.removeClass("visible");
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(
                      '[data-address-id="new"]'
                    ).addClass("visible"); // Return focus to last used button

                    _this.$addressButtonFocus.focus();

                    _this.$addressButtonFocus = null;
                  }
                );
                this.$addressesContent.on(
                  "click",
                  "[data-delete-address]",
                  function (event) {
                    var itemId = jquery__WEBPACK_IMPORTED_MODULE_0___default()(
                      event.target
                    ).closest("[data-delete-address]").attr("data-delete-address");
                    Shopify.CustomerAddress.destroy(itemId, "");
                  }
                );
                $customerAddresses.each(function (i, el) {
                  var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(
                    el
                  ).attr("data-address-id");
                  var countryEl = "customer_addr_".concat(id, "_country");
                  var provinceEl = "customer_addr_".concat(id, "_province");
                  var options = {
                    hideElement: "address_province_container_".concat(id),
                  }; // Initiate provinces for address forms

                  new Shopify.CountryProvinceSelector(
                    countryEl,
                    provinceEl,
                    options
                  );
                });
              },
            },
          ]);

          return Account;
        })();

      /***/
    },
  },
]);
//# sourceMappingURL=Account.bundle.js.map?1581358591380
