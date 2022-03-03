(window["wpJsonpPaskit"] = window["wpJsonpPaskit"] || []).push([[19],{

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GiftCard; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var GiftCard =
/*#__PURE__*/
function () {
  function GiftCard() {
    _classCallCheck(this, GiftCard);

    this.el = document.querySelector('.giftcard');
    this.$el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.el);
    this.qrCode = this.el.querySelector('[data-giftcard-qr]');
    this.giftCardCode = this.el.querySelector('[data-giftcard-code]');

    this._bindEvents();

    this.addQrCode();
  }

  _createClass(GiftCard, [{
    key: "addQrCode",
    value: function addQrCode() {
      return new QRCode(this.qrCode, {
        text: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.qrCode).data('giftcard-qr'),
        width: 120,
        height: 120
      });
    }
  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      var _this = this;

      this.$el.on('click', '[data-giftcard-print]', function () {
        window.print();
      }); // Auto-select gift card code on click, based on ID passed to the function

      this.$el.on('click', '[data-giftcard-code]', function () {
        _this._selectText();
      });
    }
  }, {
    key: "_selectText",
    value: function _selectText() {
      var range = '';
      var selection;

      if (document.body.createTextRange) {
        // ms method
        range = document.body.createTextRange();
        range.moveToElementText(this.giftCardCode);
        range.select();
      } else if (window.getSelection) {
        // moz, opera, webkit method
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(this.giftCardCode);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  }]);

  return GiftCard;
}();



/***/ })

}]);
//# sourceMappingURL=GiftCard.bundle.js.map?1581358591380