(window["wpJsonpPaskit"] = window["wpJsonpPaskit"] || []).push([[18],{

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

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DynamicVideo; });
/* harmony import */ var _components_Video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var DynamicVideo =
/*#__PURE__*/
function () {
  function DynamicVideo(section) {
    _classCallCheck(this, DynamicVideo);

    this.el = section.el;
    this.autoplay = section.data.autoplay;
    this.init();
  }

  _createClass(DynamicVideo, [{
    key: "init",
    value: function init() {
      var _this = this;

      var videoEl = this.el.querySelector('[data-video]');
      this.hasPlayed = false;

      if (videoEl) {
        this.video = new _components_Video__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](videoEl);
      }

      if (this.video && this.autoplay) {
        var thresholds = {
          play: 0.5,
          pause: 0.2
        };
        this.playPauseObserver = new IntersectionObserver(function (entries) {
          var _entries$ = entries[0],
              intersectionRatio = _entries$.intersectionRatio,
              isIntersecting = _entries$.isIntersecting;

          if (intersectionRatio >= thresholds.play && isIntersecting && !_this.hasPlayed) {
            // videoEl has just scrolled into view and is at least 50% visible: play video
            _this.video._autoplay();

            _this.hasPlayed = true;
          } else if (intersectionRatio <= thresholds.pause && isIntersecting === false) {
            // videoEl has scrolled out of view and is less than 20% visible: pause video
            _this.video._onPauseClick();
          }
        }, {
          threshold: [thresholds.pause, thresholds.play]
        });
        this.playPauseObserver.observe(videoEl);
      }
    }
  }, {
    key: "onSectionUnload",
    value: function onSectionUnload() {
      if (this.video) {
        this.video.unload();
      }

      if (this.playPauseObserver) {
        this.playPauseObserver.disconnect();
      }
    }
  }]);

  return DynamicVideo;
}();



/***/ })

}]);
//# sourceMappingURL=DynamicVideo.bundle.js.map?1581358591380