(window["wpJsonpPaskit"] = window["wpJsonpPaskit"] || []).push([[22],{

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StaticAnnouncement; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StaticAnnouncement = function StaticAnnouncement(section) {
  _classCallCheck(this, StaticAnnouncement);

  // Since the announcement bar positioning is actually handled by the
  // StaticSectionHeader and StickyHeader classes, we need to let them know
  // when the announcement element is refreshed within the editor.
  if (window.Shopify && window.Shopify.designMode) {
    section.postMessage('announcement:load');
  }
};



/***/ })

}]);
//# sourceMappingURL=StaticAnnouncement.bundle.js.map?1581358591380