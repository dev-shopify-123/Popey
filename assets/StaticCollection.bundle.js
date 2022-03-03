(window["wpJsonpPaskit"] = window["wpJsonpPaskit"] || []).push([[26],{

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StaticCollection; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shopify_currency_converter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var shopify_currency_converter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shopify_currency_converter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ProductGridItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var StaticCollection =
/*#__PURE__*/
function () {
  function StaticCollection(section) {
    _classCallCheck(this, StaticCollection);

    this.section = section;
    this.$el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(section.el);
    this.context = section.data.context;
    this.collectionUrl = this.context.collectionUrl;
    this.$focusItem = null;
    this.defaultView = this.context.grid_list;
    this.filtersContentSelector = '[data-productgrid-filters-content]';
    this.sortContent = '[data-productgrid-sort-content]';
    this.$sortTrigger = this.$el.find('[data-productgrid-trigger-sort]');
    this.$sortTriggerButton = this.$el.find('[data-productgrid-trigger-sort-button]');
    this.$sortTriggerModal = this.$el.find('[data-productgrid-modal-sort]');
    this.$filtersTrigger = this.$el.find('[data-productgrid-trigger-filters]');
    this.$filtersContent = this.$el.find(this.filtersContentSelector);
    this.$allTags = this.$filtersContent.find('.filter-item a:not([data-filter-toggle])');
    this.$advandedTags = this.$el.find('[data-tag-advanced] a');
    this.$additionalTags = this.$el.find('[data-filter-toggle]');
    this.$viewToggle = this.$el.find('[data-collection-view]');
    this.$gridContainer = this.$el.find('.productgrid--outer');
    this._changeSorting = this._changeSorting.bind(this);
    this._changeSortingButton = this._changeSortingButton.bind(this);
    this._showSortModal = this._showSortModal.bind(this);
    this._showFiltersModal = this._showFiltersModal.bind(this);
    this._activateTag = this._activateTag.bind(this);
    this._advancedTags = this._advancedTags.bind(this);
    this._toggleTags = this._toggleTags.bind(this);
    this._toggleView = this._toggleView.bind(this);
    this._checkListView = this._checkListView.bind(this);
    this.events = [this.$sortTrigger.on('change.collection', this._changeSorting), this.$sortTriggerButton.on('click.collection', this._changeSortingButton), this.$sortTriggerModal.on('click.collection', this._showSortModal), this.$filtersTrigger.on('click.collection', this._showFiltersModal), this.$advandedTags.on('click.collection', this._advancedTags), this.$allTags.on('click.collection', this._activateTag), this.$additionalTags.on('click.collection', this._toggleTags), this.$viewToggle.on('click.collection', this._toggleView)]; // Product items

    this.productItems = [];

    this._setSortByQueryParameters();

    this._checkListView();

    this._updatePrices();

    this.modal = new _components_Modal__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]();
  }

  _createClass(StaticCollection, [{
    key: "onSectionUnload",
    value: function onSectionUnload() {
      this.events.forEach(function ($el) {
        return $el.off('.collection');
      });
      this.modal.unload();
      this.productItems.forEach(function (productItem) {
        productItem.unload();
      });
    }
  }, {
    key: "_initProductItems",
    value: function _initProductItems() {
      var _this = this;

      var view = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'grid-view';
      var $productItems = this.$el.find('[data-product-item]');
      $productItems.each(function (i, productItem) {
        _this.productItems.push(new _components_ProductGridItem__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]({
          el: productItem,
          id: _this.section.id,
          lazy: true,
          grid_list: view
        }));
      });
    }
    /**
     * Set product grid prices to match CurrencyConverter settings on page load, section re-load
     *
     * @private
     */

  }, {
    key: "_updatePrices",
    value: function _updatePrices() {
      this.$el.find('.money:not([data-currency])').each(function (index, el) {
        return shopify_currency_converter__WEBPACK_IMPORTED_MODULE_1___default.a.update(el);
      });
    }
    /**
     * Open Tags/Filters modal (on mobile)
     *
     * @param event
     * @private
     */

  }, {
    key: "_showFiltersModal",
    value: function _showFiltersModal(event) {
      event.preventDefault();
      this.$focusItem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget);
      this.modal.open(this.filtersContentSelector, 'productgrid-filters');
    }
    /**
     * Open Sort by modal (on mobile)
     *
     * @param event
     * @private
     */

  }, {
    key: "_showSortModal",
    value: function _showSortModal(event) {
      event.preventDefault();
      this.$focusItem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget);
      this.modal.open(this.sortContent, 'productgrid-sort');
    }
    /**
     * Style a tag as active after click, before page transition
     *
     * @param event
     * @private
     */

  }, {
    key: "_activateTag",
    value: function _activateTag(event) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).closest('.filter-item').toggleClass('filter-item--active').toggleClass('filter-item--inactive');
    }
    /**
     * Used by advanced tags to concatenate tag searches
     *
     * @param event
     * @private
     */

  }, {
    key: "_advancedTags",
    value: function _advancedTags(event) {
      event.preventDefault();
      var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget).parent();
      var targetGroup = $target.attr('data-group');
      var $filtersContent = $target.closest('nav');
      var filterGroups = $filtersContent.find('[data-filter-group]');
      var filterHandles = []; // Build the filter for the url based on what is in the dom

      filterGroups.each(function (index, filterGroup) {
        if (filterGroup.getAttribute('data-filter-group') === targetGroup) {
          if (!$target.hasClass('filter-item--active')) {
            $target.siblings().removeClass('filter-item--active').addClass('filter-item--inactive');
            filterHandles.push($target.data('handle'));
          } // The active class is removed from the target in _activateTag

        } else {
          var selectedItems = filterGroup.querySelectorAll('.filter-item--active');

          if (selectedItems.length) {
            filterHandles.push(jquery__WEBPACK_IMPORTED_MODULE_0___default()(selectedItems).data('handle'));
          }
        }
      });

      if (this.collectionUrl.indexOf('vendors') > -1) {
        location.href = "".concat(this.collectionUrl, "&constraint=").concat(filterHandles.join('+'));
      } else {
        location.href = "".concat(this.collectionUrl, "/").concat(filterHandles.join('+'));
      }
    }
    /**
     * Expand / Collapse additional tags in the sidebar
     *
     * @param event
     * @private
     */

  }, {
    key: "_toggleTags",
    value: function _toggleTags(event) {
      event.preventDefault();
      var $trigger = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget);
      var $items = $trigger.parent().siblings('[data-hidden-default]');
      var siblingsVisible = $trigger.data('filter-toggle');
      $items.toggleClass('filter-item--hidden', siblingsVisible);
      $trigger.data('filter-toggle', !siblingsVisible).text(!siblingsVisible ? this.context.see_less : this.context.see_more);

      if (this.modal.isOpen()) {
        this.modal.position();
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
    /**
     * Sort by opens a modal on mobile, this handles button events
     *
     * @param event
     * @private
     */

  }, {
    key: "_changeSortingButton",
    value: function _changeSortingButton(event) {
      var activeClass = 'utils-sortby--modal-button--active';
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget).addClass(activeClass).parent().siblings().find(".".concat(activeClass)).removeClass(activeClass);

      this._changeSorting(event);
    }
    /**
     * Change sorting of collection
     *
     * @param event
     * @private
     */

  }, {
    key: "_changeSorting",
    value: function _changeSorting(event) {
      event.preventDefault();
      var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget);
      Shopify.queryParams.sort_by = $target.val();
      location.search = jQuery.param(Shopify.queryParams).replace(/\+/g, '%20');
    }
    /**
     * Toggle grid or list view
     *
     */

  }, {
    key: "_toggleView",
    value: function _toggleView(event) {
      var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget);
      Shopify.queryParams.grid_list = $target.data('collection-view');
      location.search = jQuery.param(Shopify.queryParams).replace(/\+/g, '%20');
    }
    /**
     * Check grid/list view toggle query parameters
     *
     */

  }, {
    key: "_checkListView",
    value: function _checkListView() {
      var view = Shopify.queryParams.grid_list ? Shopify.queryParams.grid_list : this.defaultView;
      this.$el.find('[href*="&grid_list"]').attr('href', function (i, url) {
        var href = url;

        if (url.indexOf('?') < 0) {
          var replaceIndex = url.indexOf('&');
          var firstHalf = url.substr(0, replaceIndex);
          var secondHalf = url.substr(replaceIndex + 1);
          href = firstHalf.concat('?', secondHalf);
        }

        href = href.replace('grid_list', "grid_list=".concat(view));
        return href;
      });
      this.$el.find('.utils-viewtoggle-button').removeClass('active');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("[data-collection-view=".concat(view, "]")).addClass('active');
      var className = view.replace('-', '');
      this.$gridContainer.addClass("productgrid-".concat(className));

      if (className === 'listview') {
        this.$gridContainer.removeClass('productgrid-gridview');
      } else {
        this.$gridContainer.removeClass('productgrid-listview');
      }

      this._initProductItems(view);
    }
  }]);

  return StaticCollection;
}();



/***/ })

}]);
//# sourceMappingURL=StaticCollection.bundle.js.map?1581358591380