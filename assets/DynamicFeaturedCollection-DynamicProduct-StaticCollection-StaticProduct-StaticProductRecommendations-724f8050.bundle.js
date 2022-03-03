(window["wpJsonpPaskit"] = window["wpJsonpPaskit"] || []).push([[1],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RichText; });
/* harmony import */ var fitvids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var fitvids__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fitvids__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grouped_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var grouped_content__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grouped_content__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var RichText =
/*#__PURE__*/
function () {
  function RichText($el) {
    _classCallCheck(this, RichText);

    this.$el = $el;

    this._initExternalLinks();

    this.groupedContent = null;

    if (this.$el.length) {
      this.groupedContent = new grouped_content__WEBPACK_IMPORTED_MODULE_1___default.a($el.get(0), {
        layout: 'tabs',
        intelliparse: false
      });
      fitvids__WEBPACK_IMPORTED_MODULE_0___default()('.rte');
    }
  }

  _createClass(RichText, [{
    key: "unload",
    value: function unload() {
      if (this.groupedContent) {
        this.groupedContent.unload();
      }
    }
    /**
     * Open links within an RTE field in a new window if they point to external domains
     *
     * @private
     */

  }, {
    key: "_initExternalLinks",
    value: function _initExternalLinks() {
      var anchors = this.$el.find('a[href^="http"]').filter(function (i, el) {
        return el.href.indexOf(location.hostname) === -1;
      });
      anchors.attr('target', '_blank');
    }
  }]);

  return RichText;
}();



/***/ }),

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

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/scriptjs/dist/script.js
var script = __webpack_require__(1);
var script_default = /*#__PURE__*/__webpack_require__.n(script);

// CONCATENATED MODULE: ./source/scripts/components/Youtube.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var api = 'https://www.youtube.com/iframe_api';
var apiLoadedCallbacks = [];
var apiLoaded = false;

window.onYouTubeIframeAPIReady = function () {
  apiLoadedCallbacks.forEach(function (apiLoadedCallback) {
    return apiLoadedCallback();
  });
  apiLoadedCallbacks = [];
  apiLoaded = true;
};

var Youtube_Youtube =
/*#__PURE__*/
function () {
  function Youtube(_ref) {
    var el = _ref.el,
        videoUrl = _ref.videoUrl,
        loop = _ref.loop;

    _classCallCheck(this, Youtube);

    var regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i; // eslint-disable-line no-useless-escape

    this.el = el;
    this.id = videoUrl.match(regex)[1] || null;
    this.onApiLoaded = this._onApiLoaded.bind(this);
    this.isReady = false;
    this.onReady = this._onReady.bind(this);
    this.onReadyCallback = null;
    this.loop = loop ? 1 : 0;
    this.onStateChange = this._onStateChange.bind(this);
    this.onPlayCallback = null;

    if (apiLoaded) {
      this._onApiLoaded();
    } else {
      apiLoadedCallbacks.push(this.onApiLoaded);
      script_default()(api);
    }
  }

  _createClass(Youtube, [{
    key: "play",
    value: function play() {
      var _this = this;

      return new Promise(function (resolve) {
        _this.onPlayCallback = resolve;

        if (_this.isReady) {
          _this.player.playVideo();
        } else {
          _this.onReadyCallback = function () {
            _this.player.playVideo();
          };
        }
      });
    }
  }, {
    key: "pause",
    value: function pause() {
      var _this2 = this;

      return new Promise(function (resolve) {
        _this2.onPlayCallback = resolve;

        if (_this2.isReady) {
          _this2.player.pauseVideo();
        } else {
          _this2.onReadyCallback = function () {
            _this2.player.pauseVideo();
          };
        }
      });
    }
  }, {
    key: "autoplay",
    value: function autoplay() {
      var _this3 = this;

      return new Promise(function (resolve) {
        _this3.onPlayCallback = resolve;

        if (_this3.isReady) {
          _this3.player.playVideo();

          _this3.player.mute();
        } else {
          _this3.onReadyCallback = function () {
            _this3.player.playVideo();

            _this3.player.mute();
          };
        }
      });
    }
  }, {
    key: "unload",
    value: function unload() {
      this.player.destroy();
    }
  }, {
    key: "_onApiLoaded",
    value: function _onApiLoaded() {
      var playerVars = {
        modestbranding: true,
        showinfo: false,
        controls: false,
        loop: this.loop,
        rel: 0
      };

      if (this.loop) {
        // This is required to allow 'loop' to work based on the YouTube api
        playerVars.playlist = this.id;
      }

      this.player = new YT.Player(this.el, {
        videoId: this.id,
        playerVars: playerVars,
        events: {
          onReady: this.onReady,
          onStateChange: this.onStateChange
        }
      });
    }
  }, {
    key: "_onReady",
    value: function _onReady() {
      this.isReady = true;

      if (this.onReadyCallback) {
        this.onReadyCallback();
      }
    }
  }, {
    key: "_onStateChange",
    value: function _onStateChange(event) {
      var state = event.data;

      if (this.onPlayCallback && state === YT.PlayerState.BUFFERING) {
        this.onPlayCallback();
        this.onPlayCallback = null;
      }
    }
  }]);

  return Youtube;
}();


// CONCATENATED MODULE: ./source/scripts/components/Vimeo.js
function Vimeo_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Vimeo_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Vimeo_createClass(Constructor, protoProps, staticProps) { if (protoProps) Vimeo_defineProperties(Constructor.prototype, protoProps); if (staticProps) Vimeo_defineProperties(Constructor, staticProps); return Constructor; }


var Vimeo_api = 'https://player.vimeo.com/api/player.js';
var Vimeo_apiLoaded = false;

var Vimeo_VimeoPlayer =
/*#__PURE__*/
function () {
  function VimeoPlayer(_ref) {
    var el = _ref.el,
        videoUrl = _ref.videoUrl;

    Vimeo_classCallCheck(this, VimeoPlayer);

    this.el = el;
    var urlParts = videoUrl.split('/');
    this.id = urlParts[urlParts.length - 1];
    this.onReadyCallback = null;
    this.onApiLoaded = this._onApiLoaded.bind(this);
    this.onProgress = this._onProgress.bind(this);
    this.onProgressCallback = null;

    if (Vimeo_apiLoaded) {
      this._onApiLoaded();
    } else {
      script_default()(Vimeo_api, this.onApiLoaded);
    }
  }

  Vimeo_createClass(VimeoPlayer, [{
    key: "play",
    value: function play() {
      var _this = this;

      return new Promise(function (resolve) {
        _this.onProgressCallback = resolve;

        if (Vimeo_apiLoaded) {
          _this.player.on('play', _this.onProgress);

          _this.player.play();
        } else {
          _this.onReadyCallback = function () {
            _this.player.on('play', _this.onProgress);

            _this.player.play();
          };
        }
      });
    }
  }, {
    key: "pause",
    value: function pause() {
      var _this2 = this;

      return new Promise(function (resolve) {
        _this2.onProgressCallback = resolve;

        if (Vimeo_apiLoaded) {
          _this2.player.on('pause', _this2.onProgress);

          _this2.player.pause();
        } else {
          _this2.onReadyCallback = function () {
            _this2.player.on('pause', _this2.onProgress);

            _this2.player.pause();
          };
        }
      });
    }
  }, {
    key: "autoplay",
    value: function autoplay() {
      var _this3 = this;

      return new Promise(function (resolve) {
        _this3.onProgressCallback = resolve;

        if (Vimeo_apiLoaded) {
          _this3.player.on('play', _this3.onProgress);

          _this3.player.setVolume(0);

          _this3.player.play();
        } else {
          _this3.onReadyCallback = function () {
            _this3.player.on('play', _this3.onProgress);

            _this3.player.setVolume(0);

            _this3.player.play();
          };
        }
      });
    }
  }, {
    key: "unload",
    value: function unload() {
      this.player.unload().catch();
    }
  }, {
    key: "_onApiLoaded",
    value: function _onApiLoaded() {
      this.player = new window.Vimeo.Player(this.el, {
        id: this.id
      });
      this.player.ready().then().catch();
      Vimeo_apiLoaded = true;

      if (this.onReadyCallback) {
        this.onReadyCallback();
      }
    }
  }, {
    key: "_onProgress",
    value: function _onProgress() {
      this.player.off('play', this.onProgress);
      this.player.off('pause', this.onProgress);

      if (this.onProgressCallback) {
        this.onProgressCallback();
        this.onProgressCallback = null;
      }
    }
  }]);

  return VimeoPlayer;
}();


// CONCATENATED MODULE: ./source/scripts/components/Video.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Video_Video; });
function Video_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Video_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Video_createClass(Constructor, protoProps, staticProps) { if (protoProps) Video_defineProperties(Constructor.prototype, protoProps); if (staticProps) Video_defineProperties(Constructor, staticProps); return Constructor; }




var Video_Video =
/*#__PURE__*/
function () {
  function Video(el, options) {
    Video_classCallCheck(this, Video);

    this.el = el;
    this.options = options;
    this.platform = el.getAttribute('data-video').trim();
    this.playButton = el.querySelector('[data-video-play-button]');
    this.videoEl = el.querySelector('[data-video-element]');
    this.onPlayClick = this._onPlayClick.bind(this);
    this.onPauseClick = this._onPauseClick.bind(this);
    this.autoplay = this._autoplay.bind(this);
    this.video = null;
    this.videoData = {
      el: this.videoEl.childNodes[0],
      videoUrl: this.videoEl.getAttribute('data-video-url'),
      loop: this.options && this.options.loop
    };

    switch (this.platform) {
      case 'youtube':
        this.video = new Youtube_Youtube(this.videoData);
        break;

      case 'vimeo':
        this.video = new Vimeo_VimeoPlayer(this.videoData);
        break;

      default:
        this.video = null;
        break;
    }

    this.el.addEventListener('click', this.onPlayClick);

    if (this.playButton) {
      if (this.options && this.options.autoplay) {
        this.autoplay();
      }

      this.playButton.addEventListener('click', this.onPlayClick);
    }
  }

  Video_createClass(Video, [{
    key: "_onPlayClick",
    value: function _onPlayClick() {
      var _this = this;

      this.el.classList.add('video-loading');
      this.video.play().then(function () {
        _this.el.classList.add('video-transitioning');

        setTimeout(function () {
          _this.el.classList.remove('video-loading');

          _this.el.classList.remove('video-transitioning');

          _this.el.classList.add('video-playing');
        }, 200);
      });
    }
  }, {
    key: "_onPauseClick",
    value: function _onPauseClick() {
      this.video.pause();
    }
  }, {
    key: "_autoplay",
    value: function _autoplay() {
      var _this2 = this;

      this.el.classList.add('video-loading');
      this.video.autoplay().then(function () {
        _this2.el.classList.add('video-transitioning');

        setTimeout(function () {
          _this2.el.classList.remove('video-loading');

          _this2.el.classList.remove('video-transitioning');

          _this2.el.classList.add('video-playing');
        }, 200);
      });
    }
  }, {
    key: "play",
    value: function play() {
      this._onPlayClick();
    }
  }, {
    key: "pause",
    value: function pause() {
      this._onPauseClick();
    }
  }, {
    key: "unload",
    value: function unload() {
      this.el.removeEventListener('click', this.onPlayClick);

      if (this.playButton) {
        this.playButton.removeEventListener('click', this.onPlayClick);
      }

      if (this.video) {
        this.video.unload();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.unload();
    }
  }]);

  return Video;
}();



/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(0);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);

// EXTERNAL MODULE: ./node_modules/shopify-currency-converter/dist/index.js
var dist = __webpack_require__(9);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// EXTERNAL MODULE: ./node_modules/shopify-variants/dist/shopify-variants.es.js
var shopify_variants_es = __webpack_require__(37);

// EXTERNAL MODULE: ./source/scripts/Forms.js + 1 modules
var Forms = __webpack_require__(7);

// EXTERNAL MODULE: ./source/scripts/components/AddToCartFlyout.js + 1 modules
var AddToCartFlyout = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/drift-zoom/es/Drift.js + 6 modules
var Drift = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/flickity/js/index.js
var js = __webpack_require__(13);
var js_default = /*#__PURE__*/__webpack_require__.n(js);

// EXTERNAL MODULE: ./node_modules/@pixelunion/events/dist/EventHandler.js
var EventHandler = __webpack_require__(16);
var EventHandler_default = /*#__PURE__*/__webpack_require__.n(EventHandler);

// EXTERNAL MODULE: ./node_modules/rimg-shopify/dist/index.es.js + 1 modules
var index_es = __webpack_require__(2);

// EXTERNAL MODULE: ./source/scripts/Layout.js
var Layout = __webpack_require__(6);

// EXTERNAL MODULE: ./source/scripts/components/Video.js + 2 modules
var Video = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/photoswipe/dist/photoswipe.js
var photoswipe = __webpack_require__(49);
var photoswipe_default = /*#__PURE__*/__webpack_require__.n(photoswipe);

// EXTERNAL MODULE: ./node_modules/@shopify/theme-a11y/theme-a11y.js
var theme_a11y = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/photoswipe/dist/photoswipe-ui-default.js
var photoswipe_ui_default = __webpack_require__(50);
var photoswipe_ui_default_default = /*#__PURE__*/__webpack_require__.n(photoswipe_ui_default);

// CONCATENATED MODULE: ./source/scripts/components/ProductClickToZoom.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var ProductClickToZoom_ProductClickToZoom =
/*#__PURE__*/
function () {
  function ProductClickToZoom(_ref) {
    var _this = this;

    var settings = _ref.settings,
        slides = _ref.slides,
        originalThumbnails = _ref.originalThumbnails,
        startIndex = _ref.startIndex,
        selectGalleryIndex = _ref.selectGalleryIndex;

    _classCallCheck(this, ProductClickToZoom);

    this.settings = settings;
    this.photoswipeDialog = document.querySelector('[data-photoswipe]');
    this.thumbContainer = this.photoswipeDialog.querySelector('[data-photoswipe-thumbs]');
    this.thumbScroller = this.photoswipeDialog.querySelector('[data-photoswipe-thumb-scroller]');
    this.thumbScrollerButtons = this.photoswipeDialog.querySelectorAll('[data-gallery-scroll-button]');
    this.closeButton = this.photoswipeDialog.querySelector('.pswp__button--close');
    this.selectedSlide = slides[startIndex];
    this.thumbScroller.innerHTML = '';
    this.thumbnails = [];
    var selectedIndex = startIndex; // Clone the original thumbnails into the photoswipe dialog

    originalThumbnails.forEach(function (thumb, thumbIndex) {
      if (thumb.dataset.mediaType !== 'image') {
        if (startIndex > thumbIndex) selectedIndex--;
        return;
      }

      var newThumb = thumb.cloneNode(true);

      _this.thumbScroller.appendChild(newThumb);

      _this.thumbnails.push(newThumb);
    });
    index_es["a" /* default */].watch(this.thumbContainer);
    this.selectedThumb = this.thumbContainer.querySelector('[data-gallery-selected="true"]');
    this.events = new EventHandler_default.a(); // Set up options for initializing PhotoSwipe

    var photoswipeSlides = [];
    slides.forEach(function (slide) {
      if (['video', 'external_video', 'model'].indexOf(slide.dataset.mediaType) > -1) return;
      photoswipeSlides.push({
        src: slide.dataset.zoom,
        msrc: slide.dataset.zoom,
        h: slide.dataset.imageHeight,
        w: slide.dataset.imageWidth
      });
    }); // Adjust the bottom bar height to allow for the mobile thumbnails

    var bottomBarHeight = Layout["a" /* default */].isGreaterThanBreakpoint('L', true) ? 0 : 75;
    var photoswipeOptions = {
      index: selectedIndex,
      barsSize: {
        top: 0,
        bottom: bottomBarHeight
      },
      fullscreenEl: false,
      zoomEl: false,
      shareEl: false,
      counterEl: false,
      arrowEl: false,
      preloaderEl: false,
      closeOnScroll: false,
      showHideOpacity: true,
      history: false,
      loop: true,
      clickToCloseNonZoomable: false,
      timeToIdle: false,
      timeToIdleOutside: false
    };

    if (this.settings.click_to_zoom === 'always' || Layout["a" /* default */].isGreaterThanBreakpoint('S', true) && this.settings.click_to_zoom === 'desktop' || Layout["a" /* default */].isLessThanBreakpoint('S') && this.settings.click_to_zoom === 'mobile') {
      photoswipeOptions.getThumbBoundsFn = function () {
        var pageYScroll = window.pageYOffset || document.documentElement.scrollTop;

        var bounds = _this.selectedSlide.querySelector('[data-rimg]').getBoundingClientRect();

        return {
          x: bounds.left,
          y: bounds.top + pageYScroll,
          w: bounds.width
        };
      };
    }

    this.photoswipe = new photoswipe_default.a(this.photoswipeDialog, photoswipe_ui_default_default.a, photoswipeSlides, photoswipeOptions);
    this.events.register(this.closeButton, 'click', function () {
      return _this.photoswipe.close();
    }); // The following fixes an issue on iOS12 and below, where click events were not registering

    this.events.register(this.closeButton, 'touchstart', function () {
      return _this.photoswipe.close();
    });
    this.thumbnails.forEach(function (thumb, index) {
      _this.events.register(thumb, 'click', function () {
        _this.photoswipe.goTo(index);
      });
    });
    this.events.register(this.thumbScroller, 'scroll', function () {
      return _this._handleScrollButtonVisibility();
    });
    this.events.register(this.thumbScrollerButtons[0], 'click', function () {
      return _this._onScrollButtonClick(true);
    });
    this.events.register(this.thumbScrollerButtons[1], 'click', function () {
      return _this._onScrollButtonClick(false);
    }); // Photoswipe documentation claims that the closeOnVerticalDrag option is always false if
    // the mouse is used, which is what we want. Unfortunately that's not how it actually works,
    // so we need to dynamically update the setting when a mouse is detected.

    if (this.photoswipe.options.mouseUsed) {
      this.photoswipe.options.closeOnVerticalDrag = false;
    } else {
      this.photoswipe.listen('mouseUsed', function () {
        _this.photoswipe.options.closeOnVerticalDrag = false;
      });
    }

    this.photoswipe.listen('afterChange', function () {
      var index = _this.photoswipe.getCurrentIndex();

      if (_this.selectedThumb) {
        _this.selectedThumb.dataset.gallerySelected = false;
      }

      _this.selectedThumb = _this.thumbnails[index];
      _this.selectedThumb.dataset.gallerySelected = true;

      var slideIndex = _this.selectedThumb.getAttribute('data-gallery-index');

      var slide = slides[slideIndex];

      _this._adjustMobileThumbPosition();

      _this._handleScrollButtonVisibility();

      selectGalleryIndex(slideIndex);
      _this.selectedSlide = slide;
    });
    this.photoswipe.listen('close', function () {
      Object(theme_a11y["a" /* removeTrapFocus */])(_this.photoswipeDialog);

      _this.selectedSlide.focus();

      _this.photoswipe = null;
    });
    this.photoswipe.listen('destroy', function () {
      _this.events.unregisterAll();

      _this.photoswipe = null;
    }); // Detect if mouse is over the thumbnails, if it is allow scroll left/right

    this.events.register(this.thumbContainer, 'mouseenter', function () {
      if (Layout["a" /* default */].isLessThanBreakpoint('S')) {
        _this.photoswipe.options.closeOnScroll = true;
      }
    });
    this.events.register(this.thumbContainer, 'mouseleave', function () {
      if (Layout["a" /* default */].isLessThanBreakpoint('S')) {
        _this.photoswipe.options.closeOnScroll = false;
      }
    }); // If a user closes the dialog using the escape key, then we should focus
    // on the expand button.

    var closeEsc = function closeEsc(e) {
      if (e.key === 'Escape') {
        slides[0].parentNode.querySelector('[data-gallery-expand]').focus();
      }
    };

    this.events.register(window, 'keydown', function (e) {
      return closeEsc(e);
    });
    this.photoswipe.init();
    Object(theme_a11y["b" /* trapFocus */])(this.photoswipeDialog);
  }

  _createClass(ProductClickToZoom, [{
    key: "_adjustMobileThumbPosition",
    value: function _adjustMobileThumbPosition() {
      // This brings the thumbnail into view if it is not visible on the screen after
      // a user swipes to a slide that it is tied to.
      if (Layout["a" /* default */].isLessThanBreakpoint('S')) {
        var thumbBounds = this.selectedThumb.getBoundingClientRect();
        var thumbWrapperBounds = this.thumbScroller.getBoundingClientRect();

        if (thumbBounds.left + thumbBounds.width + 30 > thumbWrapperBounds.width) {
          this.thumbScroller.scrollLeft = this.selectedThumb.offsetLeft + thumbBounds.width - thumbWrapperBounds.width + 35;
        } else if (this.selectedThumb.offsetLeft < this.thumbScroller.scrollLeft) {
          this.thumbScroller.scrollLeft = this.selectedThumb.offsetLeft - 35;
        }
      }
    }
  }, {
    key: "_handleScrollButtonVisibility",
    value: function _handleScrollButtonVisibility() {
      if (Layout["a" /* default */].isLessThanBreakpoint('S')) {
        // We use 4px here just to ensure the user has scrolled a little bit before
        // showing the buttons.
        if (this.thumbScroller.scrollLeft > 4) {
          this.thumbScrollerButtons[0].classList.add('visible');
        } else {
          this.thumbScrollerButtons[0].classList.remove('visible');
        }

        if (this.thumbScroller.scrollLeft < this.thumbScroller.scrollWidth - this.thumbScroller.clientWidth) {
          this.thumbScrollerButtons[1].classList.add('visible');
        } else {
          this.thumbScrollerButtons[1].classList.remove('visible');
        }
      } else {
        this.thumbScrollerButtons[0].classList.remove('visible');
        this.thumbScrollerButtons[1].classList.remove('visible');
      }
    }
  }, {
    key: "_onScrollButtonClick",
    value: function _onScrollButtonClick(scrollRight) {
      if (scrollRight) {
        this.thumbScroller.scrollLeft = this.thumbScroller.scrollLeft - 100;
      } else {
        this.thumbScroller.scrollLeft = this.thumbScroller.scrollLeft + 100;
      }
    }
  }, {
    key: "unload",
    value: function unload() {
      if (this.photoswipe) {
        this.photoswipe.destroy();
        this.photoswipe = null;
      }
    }
  }]);

  return ProductClickToZoom;
}();


// CONCATENATED MODULE: ./source/scripts/components/ProductGallery.js
function ProductGallery_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ProductGallery_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ProductGallery_createClass(Constructor, protoProps, staticProps) { if (protoProps) ProductGallery_defineProperties(Constructor.prototype, protoProps); if (staticProps) ProductGallery_defineProperties(Constructor, staticProps); return Constructor; }









var ProductGallery_ProductGallery =
/*#__PURE__*/
function () {
  function ProductGallery(_ref) {
    var _this = this;

    var el = _ref.el,
        settings = _ref.settings,
        isQuickshop = _ref.isQuickshop;

    ProductGallery_classCallCheck(this, ProductGallery);

    this.el = el;
    this.settings = settings;
    this.isQuickshop = isQuickshop || false;
    this.events = new EventHandler_default.a();
    this.viewer = this.el.querySelector('[data-gallery-viewer]');
    this.navigation = this.el.querySelector('[data-gallery-navigation]');
    this.navScroller = this.el.querySelector('[data-gallery-scroller]');
    this.navScrollerButtons = this.el.querySelectorAll('[data-gallery-scroll-button]');
    this.figures = this.viewer.querySelectorAll('[data-gallery-figure]');
    this.thumbnails = this.navigation.querySelectorAll('[data-gallery-thumbnail]');
    this.zoomButton = this.viewer.querySelector('[data-gallery-expand]');
    this.selected = {
      figure: this.viewer.querySelector('[data-gallery-selected="true"]'),
      thumbnail: this.navigation.querySelector('[data-gallery-selected="true"]')
    };
    this.models = {};
    this.videos = {};
    this.selectedVideo = null;
    this.selectedModel = null;
    this.showingInitialSlide = true;
    this._setupSelectedVideo = this._setupSelectedVideo.bind(this);
    var features = [];

    if (this.el.querySelector('[data-media-type="video"]')) {
      features.push({
        name: 'video-ui',
        version: '1.0',
        onLoad: function onLoad() {
          return _this._setupSelectedVideo();
        }
      });
    }

    if (this.el.querySelector('[data-media-type="model"]')) {
      this.viewInYourSpaceEl = this.el.querySelector('[data-shopify-xr]');
      this.events.register(this.viewInYourSpaceEl, 'click', function () {
        return _this._onViewInYourSpaceClick();
      });
      features.push({
        name: 'model-viewer-ui',
        version: '1.0',
        onLoad: this._onModelLibraryLoad.bind(this)
      });
      features.push({
        name: 'shopify-xr',
        version: '1.0'
      });
    }

    if (features.length) {
      window.Shopify.loadFeatures(features);
    }

    if (this.isQuickshop) {
      index_es["a" /* default */].watch(this.el); // Because of the way the quickshop is animated to open, if a video is first in the
      // gallery the height of the slide will not be correct, so we need to wait until all the
      // transitions end. This will only fire once, as opposed to listening to transitionend.

      if (this.figures[0].dataset.mediaType === 'video') {
        setTimeout(function () {
          return _this._setSlideHeight();
        }, 800);
      }
    }

    this.events.register(this.navScroller, 'click', function (e) {
      return _this._onThumbnailClick(e);
    });
    this.events.register(this.navScroller, 'scroll', function () {
      return _this._handleScrollButtonVisibility();
    });
    this.events.register(this.navScrollerButtons[0], 'click', function () {
      return _this._onScrollButtonClick(true);
    });
    this.events.register(this.navScrollerButtons[1], 'click', function () {
      return _this._onScrollButtonClick(false);
    });

    if (this.settings.click_to_zoom !== 'disabled') {
      var onZoomButtonClick = function onZoomButtonClick(e) {
        e.stopPropagation();

        _this._openImageZoom();
      };

      this.events.register(this.zoomButton, 'click', function (e) {
        return onZoomButtonClick(e);
      });
      this.events.register(this.viewer, 'click', function (e) {
        return onZoomButtonClick(e);
      });
    }

    this._onResize = this._onResize.bind(this);
    this.events.register(window, 'resize', function () {
      return _this._onResize();
    });

    if (Layout["a" /* default */].isLessThanBreakpoint('S')) {
      this._setupFlickity();

      this._handleScrollButtonVisibility();
    }

    this._selectMediaByEl(this.selected.figure);
  }

  ProductGallery_createClass(ProductGallery, [{
    key: "selectMediaByVariant",
    value: function selectMediaByVariant(variant) {
      if (!variant.featured_media) return;
      var slide = this.viewer.querySelector("[data-media=\"".concat(variant.featured_media.id, "\"]"));

      this._selectMediaByEl(slide);
    }
  }, {
    key: "unload",
    value: function unload() {
      this.events.unregisterAll();

      for (var i; i < this.figures.length; i++) {
        if (this.models[i]) {
          this.models[i].destroy();
        }

        if (this.videos[i]) {
          this.videos[i].destroy();
        }
      }

      if (this.isQuickshop) {
        index_es["a" /* default */].unwatch(this.el);
      }

      this._closeImageZoom();

      this._disableHoverZoom();

      this._disableFlickity();
    }
  }, {
    key: "_onModelLibraryLoad",
    value: function _onModelLibraryLoad() {
      var _this2 = this;

      var onPlayListener = function onPlayListener() {
        if (_this2.flickity) {
          _this2.flickity.unbindDrag();
        }
      };

      var onPauseListener = function onPauseListener() {
        if (_this2.flickity) {
          _this2.flickity.bindDrag();
        }
      };

      this.el.querySelectorAll('.product-gallery--model').forEach(function (figureEl) {
        var modelEl = figureEl.querySelector('model-viewer');
        var galleryIndex = figureEl.dataset.galleryIndex;
        var controls = ['zoom-in', 'zoom-out'];
        if (document.fullscreenEnabled) controls.push('fullscreen');
        _this2.models[galleryIndex] = new Shopify.ModelViewerUI(modelEl, {
          controls: controls
        });

        _this2.events.register(modelEl, 'shopify_model_viewer_ui_toggle_play', onPlayListener);

        _this2.events.register(modelEl, 'shopify_model_viewer_ui_toggle_pause', onPauseListener);
      });
    }
  }, {
    key: "_onResize",
    value: function _onResize() {
      // If the resize was trigger by a fullscreen, do not do anything
      if (document.fullscreenElement) {
        return;
      }

      if (Layout["a" /* default */].isGreaterThanBreakpoint('S', true)) {
        this._disableFlickity();
      } else {
        this._setupFlickity();
      }

      if (Layout["a" /* default */].isGreaterThanBreakpoint('L', true) && !this.drift) {
        this._setupHoverZoom();
      } else if (Layout["a" /* default */].isLessThanBreakpoint('L')) {
        this._disableHoverZoom();
      }

      this._adjustGalleryPositioning();

      this._handleScrollButtonVisibility();
    }
  }, {
    key: "_onThumbnailClick",
    value: function _onThumbnailClick(e) {
      var button;
      this.showingInitialSlide = false; // The target will be the button itself if the user is using a keyboard to navigate, but
      // otherwise it will be the image that is clicked on.

      if (e.target.classList.contains('product-gallery--media-thumbnail')) {
        button = e.target;
      } else if (e.target.parentNode.parentNode.classList.contains('product-gallery--media-thumbnail')) {
        button = e.target.parentNode.parentNode;
      } else {
        return;
      }

      var selectedIndex = parseInt(button.dataset.galleryIndex, 10);

      if (this.flickity) {
        this.flickity.select(selectedIndex);
      } else {
        this._selectMediaByIndex(selectedIndex);
      }
    }
  }, {
    key: "_onViewInYourSpaceClick",
    value: function _onViewInYourSpaceClick(e) {
      var currentTarget = e.currentTarget;
      var figure = this.viewer.querySelector("[data-media=\"".concat(currentTarget.dataset.shopifyModel3dId, "\"]"));

      this._selectMediaByEl(figure);
    }
  }, {
    key: "_selectMediaByEl",
    value: function _selectMediaByEl(el) {
      this._selectMediaByIndex(parseInt(el.dataset.galleryIndex, 10));
    }
  }, {
    key: "_selectMediaByIndex",
    value: function _selectMediaByIndex(index) {
      var figure = this.figures[index];
      this.selected.figure.dataset.gallerySelected = false;
      this.selected.figure.setAttribute('aria-hidden', true);
      this.selected.figure = figure;
      this.selected.figure.dataset.gallerySelected = true;
      this.selected.figure.setAttribute('aria-hidden', false);
      var figureIndex = parseInt(this.selected.figure.dataset.galleryIndex, 10);
      this.selected.thumbnail.dataset.gallerySelected = false;
      this.selected.thumbnail = this.thumbnails[figureIndex];
      this.selected.thumbnail.dataset.gallerySelected = true;
      var _this$selected$figure = this.selected.figure.dataset,
          media = _this$selected$figure.media,
          mediaType = _this$selected$figure.mediaType;
      this.viewer.dataset.selectedMediaType = mediaType;

      this._disableHoverZoom();

      if (this.selectedModel) {
        this.selectedModel.pause();
      }

      if (this.models[figure.dataset.galleryIndex]) {
        this.selectedModel = this.models[figure.dataset.galleryIndex];

        if (!document.documentElement.classList.contains('has-touch') && !this.showingInitialSlide) {
          this.selectedModel.play();
        }
      }

      if (this.selectedVideo) {
        this.selectedVideo.pause();
      }

      if (this.viewInYourSpaceEl) {
        this.viewInYourSpaceEl.dataset.shopifyModel3dId = this.viewInYourSpaceEl.dataset.defaultModelId;
      }

      switch (mediaType) {
        case 'model':
          this.viewInYourSpaceEl.dataset.shopifyModel3dId = media;
          break;

        case 'video':
        case 'external_video':
          this._setupSelectedVideo();

          break;

        case 'image':
          this._setupHoverZoom();

          break;

        default:
          break;
      }

      if (this.flickity) {
        this.flickity.bindDrag();
        this.flickity.select(index);
      }

      this._adjustGalleryPositioning();
    }
  }, {
    key: "_setupSelectedVideo",
    value: function _setupSelectedVideo() {
      if (this.selectedVideo) {
        this.selectedVideo.pause();
      }

      var _this$selected$figure2 = this.selected.figure.dataset,
          mediaType = _this$selected$figure2.mediaType,
          galleryIndex = _this$selected$figure2.galleryIndex;
      var shouldAutoplay = Layout["a" /* default */].isGreaterThanBreakpoint('L', true) && this.settings.gallery_video_autoplay && !this.showingInitialSlide;

      if (mediaType === 'video' || mediaType === 'external_video') {
        var videoElement;

        if (this.videos[galleryIndex]) {
          this.selectedVideo = this.videos[galleryIndex];
          if (shouldAutoplay) this.selectedVideo.play();
        } else {
          if (mediaType === 'video') {
            // Plyr hasn't loaded yet, will be called again after loadFeatures
            if (!Shopify.Plyr) return;
            videoElement = this.selected.figure.querySelector('video');
            this.selectedVideo = new Shopify.Plyr(videoElement, {
              loop: {
                active: this.settings.gallery_video_looping
              }
            });
            if (shouldAutoplay) this.selectedVideo.play();
          } else {
            videoElement = this.selected.figure.querySelector('[data-video]');
            this.selectedVideo = new Video["a" /* default */](videoElement, {
              loop: this.settings.gallery_video_looping
            });
            if (shouldAutoplay) this.selectedVideo.play();
          }

          this.videos[galleryIndex] = this.selectedVideo;
        }

        this.selected.figure.focus();
      }
    }
  }, {
    key: "_setupHoverZoom",
    value: function _setupHoverZoom() {
      var _this3 = this;

      if (this.settings.hover_zoom === 'disabled' || !Layout["a" /* default */].isGreaterThanBreakpoint('L', true) || this.selected.figure.dataset.mediaType !== 'image' || document.documentElement.classList.contains('has-touch')) return;
      var selectedImage = this.selected.figure.querySelector('[data-rimg]');
      selectedImage.setAttribute('data-zoom', this.selected.figure.getAttribute('data-zoom'));
      this.drift = new Drift["a" /* default */](selectedImage, {
        paneContainer: this.settings.hover_zoom === 'separate' ? this.el.querySelector('[data-zoomed-image]') : this.selected.figure,
        inlinePane: false,
        hoverBoundingBox: this.settings.hover_zoom === 'separate',
        handleTouch: false,
        onShow: function onShow() {
          if (_this3.settings.hover_zoom === 'separate') {
            var productMain = document.querySelector('.product-main');
            var productAlt = document.querySelector('.product-form--alt');
            productMain.classList.add('product-gallery--fade');
            if (productAlt) productAlt.classList.add('product-gallery--fade');
          }
        },
        onHide: function onHide() {
          if (_this3.settings.hover_zoom === 'separate') {
            var productMain = document.querySelector('.product-main');
            var productAlt = document.querySelector('.product-form--alt');
            productMain.classList.remove('product-gallery--fade');
            if (productAlt) productAlt.classList.remove('product-gallery--fade');
          }
        }
      });
    }
  }, {
    key: "_disableHoverZoom",
    value: function _disableHoverZoom() {
      if (this.drift) {
        this.drift.disable();
        this.drift = null;
      }
    }
  }, {
    key: "_setupFlickity",
    value: function _setupFlickity() {
      var _this4 = this;

      if (this.flickity || !Layout["a" /* default */].isLessThanBreakpoint('S')) return;
      this.flickity = new js_default.a(this.viewer, {
        accessibility: false,
        adaptiveHeight: true,
        cellSelector: '.product-gallery--media',
        contain: true,
        friction: 0.5,
        freeScroll: false,
        initialIndex: parseInt(this.selected.figure.dataset.galleryIndex, 10),
        lazyLoad: false,
        percentPosition: false,
        prevNextButtons: false,
        pageDots: false,
        selectedAttraction: 0.1,
        setGallerySize: false,
        wrapAround: true
      });
      this.flickityEvent = this.events.register(this.viewer, 'rimg:load', function () {
        _this4._setSlideHeight();
      });
      this.flickity.on('change', function (index) {
        _this4.showingInitialSlide = false;

        _this4._selectMediaByEl(_this4.figures[index]);
      }); // Flickity controls the pointerdown event which prevents model-viewer-ui from
      // triggering .play() on mouseup. This returns this functionality.

      this.flickity.on('staticClick', function (event, pointer, cellElement) {
        var figure = cellElement.querySelector('.product-gallery--model');

        if (figure && _this4.models[figure.dataset.galleryIndex]) {
          var model = _this4.models[figure.dataset.galleryIndex];
          model.play();
        }
      });
      this.flickity.on('pointerDown', function () {
        // Removes the focus ring when swiping with touch device
        _this4.viewer.blur();
      }); // We need to disable the product zoom open if a user is swiping
      // This was an issue on mouse gestures, not on touch

      if (this.settings.click_to_zoom !== 'disabled' && document.documentElement.classList.contains('no-touch')) {
        this.flickity.on('dragEnd', function () {
          _this4.swiped = true;
        });
      }

      this._setSlideHeight();
    }
  }, {
    key: "_disableFlickity",
    value: function _disableFlickity() {
      if (this.flickity) {
        this.flickity.destroy();
        this.flickity = null;
        this.events.unregister(this.flickityEvent);
      }
    }
  }, {
    key: "_setSlideHeight",
    value: function _setSlideHeight() {
      this.navigation.classList.remove('loading'); // Use the stored image height for situations where the DOM is in a midway state.

      var containerHeight = this.storedImageHeight || this.selected.figure.getBoundingClientRect().height;
      this.storedImageHeight = null;
      this.viewer.style.height = "".concat(containerHeight, "px");
    }
  }, {
    key: "_adjustGalleryPositioning",
    value: function _adjustGalleryPositioning() {
      var _this5 = this;

      if (this.settings.thumbnail_position === 'left') {
        if (this.isQuickshop) {
          if (Layout["a" /* default */].isGreaterThanBreakpoint('L', true)) {
            this.el.dataset.productGalleryThumbs = 'left';
          } else {
            this.storedImageHeight = this.selected.figure.getBoundingClientRect().height;
            this.el.dataset.productGalleryThumbs = 'center';
          }
        } // We need to adjust the width of the thumbnails if they are positioned left
        // and they wrap into 2 columns. CSS flexbox does not cause the width of the
        // element to stretch. Looks like it's a problem with flexbox when wrapping columns:
        // https://stackoverflow.com/questions/33891709/when-flexbox-items-wrap-in-column-mode-container-does-not-grow-its-width


        if (Layout["a" /* default */].isGreaterThanBreakpoint('L', true) || Layout["a" /* default */].isGreaterThanBreakpoint('S', true) && !this.isQuickshop) {
          if (this.el.firstChild !== this.navigation) {
            var activeButton = document.activeElement;
            this.el.insertBefore(this.navigation, this.viewer);
            activeButton.focus(); // This prevents loss of focus if one of the thumbnails are selected
          } // When switching layouts in the editor sometimes we need to wait for a few milliseconds
          // before positioning the thumbs. The Quickshop is even a bit slower.


          setTimeout(function () {
            var leftmostBounds = _this5.thumbnails[0].getBoundingClientRect();

            var thumbStyle = _this5.thumbnails[0].currentStyle || window.getComputedStyle(_this5.thumbnails[0]);
            var thumbMargin = parseInt(thumbStyle.marginLeft, 10) * 2;
            var wrapped = Array.prototype.some.call(_this5.thumbnails, function (thumb) {
              return thumb.getBoundingClientRect().left > leftmostBounds.left;
            });

            if (wrapped) {
              _this5.navigation.style.width = "".concat((leftmostBounds.width + thumbMargin) * 2, "px");
              _this5.navigation.style.maxWidth = "".concat((leftmostBounds.width + thumbMargin) * 2, "px");
            }

            _this5._setSlideHeight();
          }, this.isQuickshop ? 500 : 100);
        } else {
          if (this.el.firstElementChild === this.navigation) {
            this.el.appendChild(this.navigation);
          }

          this.navigation.style.width = '';
          this.navigation.style.maxWidth = '';

          this._setSlideHeight();
        }

        if (Layout["a" /* default */].isLessThanBreakpoint('S')) {
          this._adjustMobileThumbnailPosition();
        }
      } else {
        this._setSlideHeight();

        this._adjustMobileThumbnailPosition();
      }
    }
  }, {
    key: "_adjustMobileThumbnailPosition",
    value: function _adjustMobileThumbnailPosition() {
      // This brings the thumbnail into view if it is not visible on the screen after
      // a user swipes to a slide that it is tied to. Only important on mobile.
      if (Layout["a" /* default */].isLessThanBreakpoint('S')) {
        var thumbBounds = this.selected.thumbnail.getBoundingClientRect();
        var thumbWrapperBounds = this.navScroller.getBoundingClientRect();

        if (this.selected.thumbnail.offsetLeft + thumbBounds.width + 30 - this.navScroller.scrollLeft > thumbWrapperBounds.width) {
          this.navScroller.scrollLeft = this.selected.thumbnail.offsetLeft + thumbBounds.width - thumbWrapperBounds.width + 35;
        } else if (this.selected.thumbnail.offsetLeft < this.navScroller.scrollLeft) {
          this.navScroller.scrollLeft = this.selected.thumbnail.offsetLeft - 35;
        }
      }
    }
  }, {
    key: "_handleScrollButtonVisibility",
    value: function _handleScrollButtonVisibility() {
      if (Layout["a" /* default */].isLessThanBreakpoint('S')) {
        // We use 4px here just to ensure the user has scrolled a little bit before
        // showing the buttons.
        if (this.navScroller.scrollLeft > 4) {
          this.navScrollerButtons[0].classList.add('visible');
        } else {
          this.navScrollerButtons[0].classList.remove('visible');
        }

        if (this.navScroller.scrollLeft < this.navScroller.scrollWidth - this.navScroller.clientWidth) {
          this.navScrollerButtons[1].classList.add('visible');
        } else {
          this.navScrollerButtons[1].classList.remove('visible');
        }
      } else {
        this.navScrollerButtons[0].classList.remove('visible');
        this.navScrollerButtons[1].classList.remove('visible');
      }
    }
  }, {
    key: "_onScrollButtonClick",
    value: function _onScrollButtonClick(scrollRight) {
      if (scrollRight) {
        this.navScroller.scrollLeft = this.navScroller.scrollLeft - 100;
      } else {
        this.navScroller.scrollLeft = this.navScroller.scrollLeft + 100;
      }
    }
  }, {
    key: "_closeImageZoom",
    value: function _closeImageZoom() {
      if (this.imageZoom) {
        this.imageZoom.unload();
        this.imageZoom = null;
      }
    }
  }, {
    key: "_openImageZoom",
    value: function _openImageZoom() {
      var _this6 = this;

      if (this.selected.figure.dataset.mediaType !== 'image' || Layout["a" /* default */].isGreaterThanBreakpoint('L') && this.settings.click_to_zoom === 'mobile' || Layout["a" /* default */].isLessThanBreakpoint('L') && this.settings.click_to_zoom === 'desktop') return;

      if (this.swiped) {
        this.swiped = false;
        return;
      }

      this._closeImageZoom();

      this.imageZoom = new ProductClickToZoom_ProductClickToZoom({
        settings: this.settings,
        slides: this.figures,
        originalThumbnails: this.thumbnails,
        startIndex: parseInt(this.selected.figure.dataset.galleryIndex, 10),
        selectGalleryIndex: function selectGalleryIndex(index) {
          return _this6._selectMediaByIndex(index);
        }
      });
    }
  }]);

  return ProductGallery;
}();


// CONCATENATED MODULE: ./source/scripts/components/ProductDetails.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetails_ProductDetails; });
function ProductDetails_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ProductDetails_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ProductDetails_createClass(Constructor, protoProps, staticProps) { if (protoProps) ProductDetails_defineProperties(Constructor.prototype, protoProps); if (staticProps) ProductDetails_defineProperties(Constructor, staticProps); return Constructor; }








var ProductDetails_ProductDetails =
/*#__PURE__*/
function () {
  function ProductDetails(options) {
    ProductDetails_classCallCheck(this, ProductDetails);

    this.$window = jquery_default()(window);
    this.$formArea = options.$formArea;
    this.$details = options.$details;
    this.context = options.context;
    this.settings = options.settings;
    this.product = options.product;
    this.useHistory = options.useHistory;
    this.sectionId = options.sectionId;
    this.initialVariant = options.initialVariant || null;
    this.variantHelper = null;
    this.atcCallbacks = options.atcCallbacks; // Form

    this.$form = this.$formArea.find('[data-product-form]');
    this.$productAtcButton = this.$formArea.find('[data-product-atc]');
    this.$productVariants = this.$form.find('[data-variants]');
    this.$productOptions = this.$form.find('[data-product-option]');
    this.detailsLink = this.$formArea[0].querySelector('[data-product-details-link]');

    if (this.detailsLink) {
      this.detailsBaseHref = this.detailsLink.getAttribute('href');
    }

    this.variantFields = {
      $price: this.$details.find('[data-price]'),
      $priceMoney: this.$details.find('[data-price] .money'),
      $compareAtPrice: this.$details.find('[data-price-compare-at]'),
      $compareAtPriceMoney: this.$details.find('[data-price-compare-at] .money'),
      $badge: this.$details.find('[data-badge-sales]'),
      $badgeMoneySaved: this.$details.find('[data-price-money-saved]'),
      $badgePercentSaved: this.$details.find('[data-price-percent-saved]'),
      $sku: this.$details.find('[data-product-sku]')
    };
    this.forms = new Forms["a" /* default */](this.$form);

    if (this.product && this.product.media.length) {
      this.gallery = new ProductGallery_ProductGallery({
        el: options.gallery,
        settings: this.settings,
        isQuickshop: options.isQuickshop
      });
    }

    this._bindEvents();

    this._initOptions();
  }

  ProductDetails_createClass(ProductDetails, [{
    key: "unload",
    value: function unload() {
      this.$form.off(".product-details-".concat(this.sectionId));
      this.$window.off(".product-details-".concat(this.sectionId));
      this.forms.unload();

      if (this.variantHelper) {
        this.variantHelper.unload();
      }

      if (this.gallery) {
        this.gallery.unload();
      }
    }
  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      var _this = this;

      this.$window.on("shopify-variants:switch-variant.product-details-".concat(this.sectionId), function (event, data) {
        return _this._switchVariant(event, data);
      });
      this.$form.on("submit.product-details-".concat(this.sectionId), function (event) {
        return _this._AddToCartFlyout(event);
      });
    }
  }, {
    key: "_initOptions",
    value: function _initOptions() {
      if (!this.$productVariants.length) return;
      this.variantHelper = new shopify_variants_es["a" /* default */](this.product, this.$productVariants, this.$productOptions, {
        mixedControls: true
      });
      this.variantHelper.selectVariant(this.initialVariant);
    }
  }, {
    key: "_switchVariant",
    value: function _switchVariant(event, data) {
      if (data.product !== this.product) return;
      var variant = data.variant,
          firstLoad = data.firstLoad;

      if (firstLoad) {
        return;
      } // Update main select


      this.$productVariants.val(data.variant.id);
      this.gallery.selectMediaByVariant(variant); // Update Variant information

      this._updatePrice(variant);

      this._updateSKU(variant);

      this._updateBadge(variant);

      this._updateButton(variant);

      this._updateSwatchLabel(variant);

      this._updateFullDetailsLink(variant);

      if (this.useHistory) {
        var url = "".concat(this.product.handle, "?").concat(jquery_default.a.param({
          variant: variant.id
        }));
        history.replaceState({}, 'variant', url);
      }
    }
  }, {
    key: "_updatePrice",
    value: function _updatePrice(variant) {
      // Update compare at price
      var hasComparePrice = !!variant.compare_at_price && variant.compare_at_price > variant.price;
      this.variantFields.$compareAtPrice.toggleClass('visible', hasComparePrice);
      this.variantFields.$compareAtPriceMoney.text(Shopify.formatMoney(variant.compare_at_price, this.settings.money_format));
      dist_default.a.update(this.variantFields.$compareAtPriceMoney[0]); // Update price

      this.variantFields.$priceMoney.text(Shopify.formatMoney(variant.price, this.settings.money_format));
      dist_default.a.update(this.variantFields.$priceMoney[0]);
    }
  }, {
    key: "_updateSKU",
    value: function _updateSKU(variant) {
      if (variant.sku === '') {
        this.variantFields.$sku.parent().addClass('product-sku--empty');
      } else {
        this.variantFields.$sku.parent().removeClass('product-sku--empty');
      }

      this.variantFields.$sku.text(variant.sku);
    }
  }, {
    key: "_updateBadge",
    value: function _updateBadge(variant) {
      var priceSaved = variant.compare_at_price ? variant.compare_at_price - variant.price : 0;
      this.variantFields.$badge.toggle(!!priceSaved);

      if (this.variantFields.$badgeMoneySaved.length) {
        // Update badge if it shows money saved
        this.variantFields.$badgeMoneySaved.text(Shopify.formatMoney(priceSaved, this.settings.money_format));
        dist_default.a.update(this.variantFields.$badgeMoneySaved[0]);
      }

      if (this.variantFields.$badgePercentSaved.length) {
        // Update badge if it shows percentiles
        var percentileSaved = Math.round(priceSaved * 100 / variant.compare_at_price);
        this.variantFields.$badgePercentSaved.text(percentileSaved);
      }
    }
  }, {
    key: "_updateButton",
    value: function _updateButton(variant) {
      if (variant.available) {
        this.$productAtcButton.html(this.context.product_available);
        this.$productAtcButton.removeClass('disabled').prop('disabled', false);
      } else {
        this.$productAtcButton.html(this.context.product_unavailable);
        this.$productAtcButton.addClass('disabled').prop('disabled', true);
      }
    }
  }, {
    key: "_updateSwatchLabel",
    value: function _updateSwatchLabel(variant) {
      if (this.settings.swatches_enable) {
        var swatchLabel = this.$form[0].querySelector('[data-option-swatch-value]');

        if (swatchLabel) {
          swatchLabel.innerText = variant.options[parseInt(swatchLabel.dataset.optionSwatchValue, 10)];
        }
      }
    }
  }, {
    key: "_updateFullDetailsLink",
    value: function _updateFullDetailsLink(variant) {
      if (this.detailsLink) {
        this.detailsLink.setAttribute('href', "".concat(this.detailsBaseHref, "?variant=").concat(variant.id));
      }
    }
  }, {
    key: "_AddToCartFlyout",
    value: function _AddToCartFlyout(event) {
      event.preventDefault();
      var formData = this.$form.serializeArray();
      var options = {
        $atcButton: this.$productAtcButton,
        settings: {
          moneyFormat: this.settings.money_format,
          cartRedirection: this.settings.cart_redirection
        }
      };
      AddToCartFlyout["a" /* default */].init(formData, options, this.atcCallbacks);
    }
  }]);

  return ProductDetails;
}();



/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(0);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);

// EXTERNAL MODULE: ./node_modules/shopify-currency-converter/dist/index.js
var dist = __webpack_require__(9);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// EXTERNAL MODULE: ./node_modules/@shopify/theme-a11y/theme-a11y.js
var theme_a11y = __webpack_require__(20);

// EXTERNAL MODULE: ./source/scripts/components/MessageBanner.js
var MessageBanner = __webpack_require__(23);

// CONCATENATED MODULE: ./source/scripts/helpers/Images.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Images =
/*#__PURE__*/
function () {
  function Images() {
    _classCallCheck(this, Images);
  }

  _createClass(Images, [{
    key: "preload",

    /**
     * Preloads an image in memory and uses the browsers cache to store it until needed.
     *
     * @param {Array} images - A list of image urls
     * @param {String} size - A shopify image size attribute
     */
    value: function preload(images, size) {
      var imageArray = images;

      if (typeof images === 'string') {
        imageArray = [images];
      }

      for (var i = 0; i < imageArray.length; i++) {
        this.loadImage(this.getSizedImageUrl(imageArray[i], size));
      }
    }
    /**
     * Loads and caches an image in the browsers cache.
     *
     * @param {string} path - An image url
     */

  }, {
    key: "loadImage",
    value: function loadImage(path) {
      var image = new Image();
      image.src = path;
      return image;
    }
    /**
     * Adds a Shopify size attribute to a URL
     *
     * @param src
     * @param size
     * @returns {*}
     */

  }, {
    key: "getSizedImageUrl",
    value: function getSizedImageUrl() {
      var src = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var size = arguments.length > 1 ? arguments[1] : undefined;

      if (!size) {
        return null;
      }

      if (size === 'master') {
        return this.removeProtocol(src);
      }

      var match = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);

      if (match) {
        var prefix = src.split(match[0]);
        var suffix = match[0];
        return this.removeProtocol("".concat(prefix[0], "_").concat(size).concat(suffix));
      }

      console.warn("No ".concat(size, " found for '").concat(src));
      return null;
    }
  }, {
    key: "removeProtocol",
    value: function removeProtocol(path) {
      return path.replace(/http(s)?:/, '');
    }
  }]);

  return Images;
}();


// CONCATENATED MODULE: ./source/scripts/components/AddToCartFlyout.js
function AddToCartFlyout_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AddToCartFlyout_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AddToCartFlyout_createClass(Constructor, protoProps, staticProps) { if (protoProps) AddToCartFlyout_defineProperties(Constructor.prototype, protoProps); if (staticProps) AddToCartFlyout_defineProperties(Constructor, staticProps); return Constructor; }







var AddToCartFlyout_AddToCartFlyout =
/*#__PURE__*/
function () {
  function AddToCartFlyout() {
    AddToCartFlyout_classCallCheck(this, AddToCartFlyout);

    this.formData = {};
    this.settings = {};
    this.events = [];
    this.Images = new Images();
    this.flyOutSelector = '[data-atc-banner]';
    this.$atcTemplate = jquery_default()("[data-templates] ".concat(this.flyOutSelector));
    this.activeElement = null;
    this.itemId = null;
    this.atcFlyOut = document.querySelector(this.flyOutSelector);
    this._onInit = this._onInit.bind(this);
    this._onError = this._onError.bind(this);
    this._onSuccess = this._onSuccess.bind(this);
    this._onCloseAll = this._onCloseAll.bind(this);
    this._handleDocumentClick = this._handleDocumentClick.bind(this);
    this._closeEsc = this._closeEsc.bind(this);
    this.messageBanner = new MessageBanner["a" /* default */]();
    this.header = document.querySelector('[data-site-header]');
    this.headerAnnouncement = document.querySelector('[data-site-header-announcement]');
    this.$header = jquery_default()(this.header);
    this.$body = jquery_default()(document.body);
  }

  AddToCartFlyout_createClass(AddToCartFlyout, [{
    key: "init",
    value: function init(formData, options) {
      var callbacks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.formData = formData; // Allows ATC Flow to be overridden

      this.callbacks = jquery_default.a.extend({
        onInit: this._onInit,
        onError: this._onError,
        onSuccess: this._onSuccess,
        onClose: this._onCloseAll
      }, callbacks);
      var $atcButton = options.$atcButton;
      this.settings = jquery_default.a.extend({
        moneyFormat: null,
        cartRedirection: false
      }, options.settings); // If any FlyOuts are fully open, close them

      this._closeFlyOuts();

      this.callbacks.onInit();
      this.activeElement = document.activeElement;

      this._disableButton($atcButton);

      this._updateCart($atcButton);
    }
  }, {
    key: "unload",
    value: function unload() {
      this.messageBanner.dismissBanners();

      this._removeFlyOuts();

      delete this.Images;
    }
  }, {
    key: "_updateCart",
    value: function _updateCart($atcButton) {
      var _this = this;

      var $flyOut = this.$atcTemplate.clone();
      var quantityField = this.formData.filter(function (data) {
        return data.name === 'quantity';
      });
      var quantity = quantityField[0].value;
      jquery_default.a.ajax({
        type: 'POST',
        url: '/cart/add.js',
        data: jquery_default.a.param(this.formData),
        dataType: 'json'
      }).done(function (response) {
        _this.itemId = response.id;

        if (response.image) {
          var imageUrl = _this.Images.getSizedImageUrl(response.image, '200x');

          _this.Images.loadImage(imageUrl);

          $flyOut.find('[data-atc-banner-product-image]').html("<img src=\"".concat(imageUrl, "\" alt=\"").concat(response.product_title, "\">"));
        }

        $flyOut.find('[data-atc-banner-product-title]').text(response.product_title);
        /*
          TODO: Bring in `variant.options`, iterate through to get option
            name for: <strong>Option name:</strong> Option
        */

        if (response.variant_options[0] !== 'Title' && response.variant_options[0] !== 'Default Title') {
          $flyOut.find('[data-atc-banner-product-options]').text(response.variant_options.join(', '));
        }
        /*
          TODO: Bring in variant, and use that to check compare_at_price
            to see if the item is on sale
        */


        var $productPriceQuantity = $flyOut.find('[data-atc-banner-product-price-quantity]');
        $productPriceQuantity.text("".concat(quantity, " \xD7 "));
        jquery_default.a.ajax({
          type: 'GET',
          url: '/cart.js',
          dataType: 'json'
        }).done(function (secondResponse) {
          if (_this.settings.cartRedirection) {
            location.href = "/cart";
            return;
          }

          _this.callbacks.onSuccess(); // Reset formData in case instance is never cleared


          _this.formData = {};
          var lineItem = null;
          secondResponse.items.forEach(function (item) {
            if (item.id === _this.itemId) {
              if (!lineItem) {
                lineItem = item;
              } else {
                // If there are 2 lineItems with the same id, it means that there is
                // likely a BOGO offer on the product. We need to grab the highest discounted
                // price (BOGO will be 0) while also combining with the different discounts on
                // the product in the discounts array.
                lineItem.line_level_discount_allocations = lineItem.line_level_discount_allocations.concat(item.line_level_discount_allocations);
                lineItem.final_price = lineItem.final_price > item.final_price ? lineItem.final_price : item.final_price;
                lineItem.quantity += item.quantity;
              }
            }
          });
          var $productPriceValue = $flyOut.find('[data-atc-banner-product-price-value]');
          $productPriceValue.text(Shopify.formatMoney(lineItem.original_price, _this.settings.moneyFormat)); // Update price to local currency

          dist_default.a.update($productPriceValue[0]);
          var $productPriceDiscounted = $flyOut.find('[data-atc-banner-product-price-discounted]');

          if (lineItem.final_price < lineItem.original_price) {
            $productPriceDiscounted.text(Shopify.formatMoney(lineItem.final_price, _this.settings.moneyFormat)); // Update price to local currency

            dist_default.a.update($productPriceDiscounted[0]);
            $productPriceDiscounted.show();
            $productPriceValue.addClass('original-price');
          } else {
            $productPriceDiscounted.hide();
            $productPriceValue.removeClass('original-price');
          }

          var $productDiscounts = $flyOut.find('[data-atc-banner-product-discounts]');

          if (lineItem.line_level_discount_allocations.length > 0) {
            var discountItemTemplate = $productDiscounts.children().first();
            $productDiscounts.empty();
            lineItem.line_level_discount_allocations.forEach(function (discount) {
              var $listItem = discountItemTemplate.clone();
              $listItem.find('.discount-title').html(discount.discount_application.title);
              var $amount = $listItem.find('.discount-amount');
              $amount.html(discount.amount);
              $productDiscounts.append($listItem);
              dist_default.a.update($amount[0]);
            });
            $productDiscounts.show();
          } else {
            $productDiscounts.hide();
          }

          var $subTotal = $flyOut.find('[data-atc-banner-cart-subtotal]');
          $subTotal.text(Shopify.formatMoney(secondResponse.total_price, _this.settings.moneyFormat));
          dist_default.a.update($subTotal[0]);
          $flyOut.find('[data-atc-banner-cart-button]').find('span').text(secondResponse.item_count);

          _this.$header.append($flyOut); // Notifiy Header of new cart count


          jquery_default()(window).trigger('cartcount:update', {
            response: secondResponse
          });

          _this._bindEvents($flyOut);

          _this._openFlyOut($flyOut, $atcButton);
        });
      }).fail(function (response) {
        var errorText;

        try {
          var responseText = JSON.parse(response.responseText);
          errorText = responseText.description;
        } catch (error) {
          errorText = "".concat(response.status, " ").concat(response.statusText);

          if (response.status === 401) {
            errorText = "".concat(errorText, ". Try refreshing and logging in.");
          }
        }

        _this._enableButton($atcButton);

        _this.callbacks.onError(errorText);
      });
    }
  }, {
    key: "_onError",
    value: function _onError(error) {
      this.messageBanner.message(error, 'error');
    }
  }, {
    key: "_onInit",
    value: function _onInit() {
      this.messageBanner.dismissBanners();
    }
  }, {
    key: "_onSuccess",
    value: function _onSuccess() {
      /*
        By default, the ATC Flyout doesn't need any additional success callbacks
         The `this.callbacks.onSuccess` is used to allow other views to initiate
        behaviour when a product has been added to the cart
       */
    }
  }, {
    key: "_onCloseAll",
    value: function _onCloseAll() {
      /*
        By default, the ATC Flyout doesn't need any additional close callbacks
         The `this.callbacks.onClose` is used to allow other views to initiate
        behaviour when the atc banner has been closed
       */
    }
  }, {
    key: "_bindEvents",
    value: function _bindEvents($flyOut) {
      var _this2 = this;

      this.events.push([$flyOut.on('click.atc-banner', '[data-atc-banner-close]', function (event) {
        event.preventDefault();

        _this2._closeFlyOut($flyOut);
      }), jquery_default()(document).on('touchstart.atc-banner, click.atc-banner', this._handleDocumentClick)]);
    }
    /**
     * Trigger any existing open FlyOuts to close
     *
     * @private
     */

  }, {
    key: "_closeFlyOuts",
    value: function _closeFlyOuts() {
      var _this3 = this;

      var $excludeFlyOut = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      jquery_default()(this.flyOutSelector).filter('[data-flyout-active]').each(function (index, el) {
        var $flyOut = jquery_default()(el);

        if ($excludeFlyOut && $flyOut.is($excludeFlyOut)) {
          return;
        }

        _this3._closeFlyOut($flyOut, index);
      });

      if (!$excludeFlyOut) {
        this.callbacks.onClose();
      }

      window.removeEventListener('keydown', this._closeEsc);
    }
  }, {
    key: "_openFlyOut",
    value: function _openFlyOut($flyOut, $atcButton) {
      var _this4 = this;

      /*
       If user has initiated a new ATC Flow before the first has finished,
       the first FlyOut could have opened after the first attempt to close open flyouts
      */
      this._closeFlyOuts($flyOut);

      $flyOut.addClass('animating animating-in').one('trend', function () {
        $flyOut.removeClass('animating animating-in').addClass('visible').off('trend');
        $flyOut.attr('data-flyout-active', true);
        Object(theme_a11y["b" /* trapFocus */])($flyOut[0]);
        window.addEventListener('keydown', _this4._closeEsc);

        _this4._enableButton($atcButton);
      });
    }
  }, {
    key: "_closeEsc",
    value: function _closeEsc(e) {
      if (e.key === 'Escape') {
        this._closeFlyOuts();
      }
    }
    /**
     * Close an open FlyOut
     *
     * @param $flyOut
     * @param index
     * @private
     */

  }, {
    key: "_closeFlyOut",
    value: function _closeFlyOut() {
      var _this5 = this;

      var $flyOut = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (!$flyOut) {
        return;
      }

      $flyOut.addClass('animating animating-out').one('trend', function () {
        $flyOut.removeClass('animating animating-out visible').one('trend', function () {
          $flyOut.off('trend');

          _this5._removeFlyOut($flyOut, index); // if the user clicked onto the search box, close the atc flyout and move focus
          // to the search instead of going to the previous active element.


          if (_this5.documentClickEventTarget && 'liveSearchInput' in _this5.documentClickEventTarget.dataset) {
            _this5.documentClickEventTarget.focus();
          } else if (_this5.activeElement) {
            _this5.activeElement.focus();
          }

          Object(theme_a11y["a" /* removeTrapFocus */])($flyOut[0]);

          _this5.callbacks.onClose();
        });
      });
    }
  }, {
    key: "_removeFlyOuts",
    value: function _removeFlyOuts() {
      var _this6 = this;

      jquery_default()(this.flyOutSelector).filter('[data-flyout-active]').each(function (index, el) {
        _this6._removeFlyOut(jquery_default()(el), index);
      });
    }
    /**
     * Remove the Flyout from the DOM, and clean up listeners
     *
     * @param $flyOut
     * @param index
     * @private
     */

  }, {
    key: "_removeFlyOut",
    value: function _removeFlyOut($flyOut, index) {
      if (this.events[index]) {
        this.events[index].forEach(function ($el) {
          return $el.off('.atc-banner');
        });
        this.events.splice(index, 1);
      }

      if ($flyOut) {
        $flyOut.remove();
      }
    }
  }, {
    key: "_disableButton",
    value: function _disableButton($atcButton) {
      $atcButton.addClass('processing').prop('disabled', true);
    }
  }, {
    key: "_enableButton",
    value: function _enableButton($atcButton) {
      $atcButton.prop('disabled', false).removeClass('processing');
    }
  }, {
    key: "_handleDocumentClick",
    value: function _handleDocumentClick(event) {
      var target = event.target;
      var $parent = jquery_default()(target).parents('[data-atc-banner]');

      if ($parent.length) {
        return;
      }

      this.documentClickEventTarget = target;

      this._closeFlyOuts();
    }
  }]);

  return AddToCartFlyout;
}();

/* harmony default export */ var components_AddToCartFlyout = __webpack_exports__["a"] = (new AddToCartFlyout_AddToCartFlyout());

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
//# sourceMappingURL=DynamicFeaturedCollection-DynamicProduct-StaticCollection-StaticProduct-StaticProductRecommendations-724f8050.bundle.js.map?1581358591380