(window["wpJsonpPaskit"] = window["wpJsonpPaskit"] || []).push([[16],{

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DynamicSearch; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var scriptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var scriptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(scriptjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _components_search_LiveSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);
/* harmony import */ var _components_search_SearchForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var DynamicSearch =
/*#__PURE__*/
function () {
  function DynamicSearch(section) {
    var _this = this;

    _classCallCheck(this, DynamicSearch);

    this.$el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(section.el);
    this.settings = section.data.settings;
    this.search = null;
    this.$scripts = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-scripts]');
    this.$searchField = this.$el.find('[data-live-search]');
    this.forms = new _Forms__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"](this.$el);

    if (this.settings.live_search.enable) {
      scriptjs__WEBPACK_IMPORTED_MODULE_1___default()(this.$scripts.data('shopify-api-url'), function () {
        _this.search = new _components_search_LiveSearch__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]({
          $el: _this.$searchField,
          $header: _this.$el
        }, _this.settings.live_search);
      });
    } else {
      this.search = new _components_search_SearchForm__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"](this.$searchField);
    }
  }

  _createClass(DynamicSearch, [{
    key: "onSectionUnload",
    value: function onSectionUnload() {
      this.search.unload();
      this.forms.unload();
    }
  }]);

  return DynamicSearch;
}();



/***/ })

}]);
//# sourceMappingURL=DynamicSearch.bundle.js.map?1581358591380