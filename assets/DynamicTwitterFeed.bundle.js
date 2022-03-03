(window["wpJsonpPaskit"] = window["wpJsonpPaskit"] || []).push([[17],{

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*********************************************************************
*  #### Twitter Post Fetcher v17.0.3 ####
*  Coded by Jason Mayes 2015. A present to all the developers out there.
*  www.jasonmayes.com
*  Please keep this disclaimer with my code if you use it. Thanks. :-)
*  Got feedback or questions, ask here:
*  http://www.jasonmayes.com/projects/twitterApi/
*  Github: https://github.com/jasonmayes/Twitter-Post-Fetcher
*  Updates will be posted to this site.
*********************************************************************/
!function(e,t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(0,function(){var e="",t=20,a=!0,i=[],n=!1,s=!0,l=!0,r=null,o=!0,c=!0,d=null,m=!0,u=!1,p=!1,g=!0,h="en",w=!0,f=!1,v=null;function b(e){return e.replace(/<b[^>]*>(.*?)<\/b>/gi,function(e,t){return t}).replace(/class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,"")}function _(e){for(var t=e.getElementsByTagName("a"),a=t.length-1;a>=0;a--)t[a].setAttribute("target","_blank")}function y(e,t){for(var a=[],i=new RegExp("(^| )"+t+"( |$)"),n=e.getElementsByTagName("*"),s=0,l=n.length;s<l;s++)i.test(n[s].className)&&a.push(n[s]);return a}function T(e){if(void 0!==e&&e.innerHTML.indexOf("data-image")>=0){var t=e.innerHTML.split('data-image="')[1].split('"')[0];return decodeURIComponent(t)+".jpg"}}var k={fetch:function(o){if(void 0===o.maxTweets&&(o.maxTweets=20),void 0===o.enableLinks&&(o.enableLinks=!0),void 0===o.showUser&&(o.showUser=!0),void 0===o.showTime&&(o.showTime=!0),void 0===o.dateFunction&&(o.dateFunction="default"),void 0===o.showRetweet&&(o.showRetweet=!0),void 0===o.customCallback&&(o.customCallback=null),void 0===o.showInteraction&&(o.showInteraction=!0),void 0===o.showImages&&(o.showImages=!1),void 0===o.useEmoji&&(o.useEmoji=!1),void 0===o.linksInNewWindow&&(o.linksInNewWindow=!0),void 0===o.showPermalinks&&(o.showPermalinks=!0),void 0===o.dataOnly&&(o.dataOnly=!1),n)i.push(o);else{n=!0,e=o.domId,t=o.maxTweets,a=o.enableLinks,l=o.showUser,s=o.showTime,c=o.showRetweet,r=o.dateFunction,d=o.customCallback,m=o.showInteraction,u=o.showImages,p=o.useEmoji,g=o.linksInNewWindow,w=o.showPermalinks,f=o.dataOnly;var b=document.getElementsByTagName("head")[0];null!==v&&b.removeChild(v),(v=document.createElement("script")).type="text/javascript",void 0!==o.list?v.src="https://syndication.twitter.com/timeline/list?callback=__twttrf.callback&dnt=false&list_slug="+o.list.listSlug+"&screen_name="+o.list.screenName+"&suppress_response_codes=true&lang="+(o.lang||h)+"&rnd="+Math.random():void 0!==o.profile?v.src="https://syndication.twitter.com/timeline/profile?callback=__twttrf.callback&dnt=false&screen_name="+o.profile.screenName+"&suppress_response_codes=true&lang="+(o.lang||h)+"&rnd="+Math.random():void 0!==o.likes?v.src="https://syndication.twitter.com/timeline/likes?callback=__twttrf.callback&dnt=false&screen_name="+o.likes.screenName+"&suppress_response_codes=true&lang="+(o.lang||h)+"&rnd="+Math.random():v.src="https://cdn.syndication.twimg.com/widgets/timelines/"+o.id+"?&lang="+(o.lang||h)+"&callback=__twttrf.callback&suppress_response_codes=true&rnd="+Math.random(),b.appendChild(v)}},callback:function(h){if(void 0===h||void 0===h.body)return n=!1,void(i.length>0&&(k.fetch(i[0]),i.splice(0,1)));p||(h.body=h.body.replace(/(<img[^c]*class="Emoji[^>]*>)|(<img[^c]*class="u-block[^>]*>)/g,"")),u||(h.body=h.body.replace(/(<img[^c]*class="NaturalImage-image[^>]*>|(<img[^c]*class="CroppedImage-image[^>]*>))/g,"")),l||(h.body=h.body.replace(/(<img[^c]*class="Avatar"[^>]*>)/g,""));var v=document.createElement("div");function C(e){var t=e.getElementsByTagName("img")[0];return t&&t.length&&(t.src=t.getAttribute("data-src-2x")),e}v.innerHTML=h.body,void 0===v.getElementsByClassName&&(o=!1);var x=[],E=[],N=[],A=[],I=[],B=[],L=[],M=0;if(o)for(var H=v.getElementsByClassName("timeline-Tweet");M<H.length;)H[M].getElementsByClassName("timeline-Tweet-retweetCredit").length>0?I.push(!0):I.push(!1),(!I[M]||I[M]&&c)&&(x.push(H[M].getElementsByClassName("timeline-Tweet-text")[0]),B.push(H[M].getAttribute("data-tweet-id")),l&&E.push(C(H[M].getElementsByClassName("timeline-Tweet-author")[0])),N.push(H[M].getElementsByClassName("dt-updated")[0]),L.push(H[M].getElementsByClassName("timeline-Tweet-timestamp")[0]),void 0!==H[M].getElementsByClassName("timeline-Tweet-media")[0]?A.push(H[M].getElementsByClassName("timeline-Tweet-media")[0]):A.push(void 0)),M++;else for(H=y(v,"timeline-Tweet");M<H.length;)y(H[M],"timeline-Tweet-retweetCredit").length>0?I.push(!0):I.push(!1),(!I[M]||I[M]&&c)&&(x.push(y(H[M],"timeline-Tweet-text")[0]),B.push(H[M].getAttribute("data-tweet-id")),l&&E.push(C(y(H[M],"timeline-Tweet-author")[0])),N.push(y(H[M],"dt-updated")[0]),L.push(y(H[M],"timeline-Tweet-timestamp")[0]),void 0!==y(H[M],"timeline-Tweet-media")[0]?A.push(y(H[M],"timeline-Tweet-media")[0]):A.push(void 0)),M++;x.length>t&&(x.splice(t,x.length-t),E.splice(t,E.length-t),N.splice(t,N.length-t),I.splice(t,I.length-t),A.splice(t,A.length-t),L.splice(t,L.length-t));var R=[],j=(M=x.length,0);if(f)for(;j<M;)R.push({tweet:x[j].innerHTML,author:E[j]?E[j].innerHTML:"Unknown Author",author_data:{profile_url:E[j]?E[j].querySelector('[data-scribe="element:user_link"]').href:null,profile_image:E[j]?E[j].querySelector('[data-scribe="element:avatar"]').getAttribute("data-src-1x"):null,profile_image_2x:E[j]?E[j].querySelector('[data-scribe="element:avatar"]').getAttribute("data-src-2x"):null,screen_name:E[j]?E[j].querySelector('[data-scribe="element:screen_name"]').title:null,name:E[j]?E[j].querySelector('[data-scribe="element:name"]').title:null},time:N[j].textContent,timestamp:N[j].getAttribute("datetime").replace("+0000","Z").replace(/([\+\-])(\d\d)(\d\d)/,"$1$2:$3"),image:T(A[j]),rt:I[j],tid:B[j],permalinkURL:void 0===L[j]?"":L[j].href}),j++;else for(;j<M;){if("string"!=typeof r){var q=N[j].getAttribute("datetime"),P=new Date(N[j].getAttribute("datetime").replace(/-/g,"/").replace("T"," ").split("+")[0]),S=r(P,q);if(N[j].setAttribute("aria-label",S),x[j].textContent)if(o)N[j].textContent=S;else{var U=document.createElement("p"),F=document.createTextNode(S);U.appendChild(F),U.setAttribute("aria-label",S),N[j]=U}else N[j].textContent=S}var O="";a?(g&&(_(x[j]),l&&_(E[j])),l&&(O+='<div class="user">'+b(E[j].innerHTML)+"</div>"),O+='<p class="tweet">'+b(x[j].innerHTML)+"</p>",s&&(O+=w?'<p class="timePosted"><a href="'+L[j]+'">'+N[j].getAttribute("aria-label")+"</a></p>":'<p class="timePosted">'+N[j].getAttribute("aria-label")+"</p>")):(x[j].textContent,l&&(O+='<p class="user">'+E[j].textContent+"</p>"),O+='<p class="tweet">'+x[j].textContent+"</p>",s&&(O+='<p class="timePosted">'+N[j].textContent+"</p>")),m&&(O+='<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to='+B[j]+'" class="twitter_reply_icon"'+(g?' target="_blank">':">")+'Reply</a><a href="https://twitter.com/intent/retweet?tweet_id='+B[j]+'" class="twitter_retweet_icon"'+(g?' target="_blank">':">")+'Retweet</a><a href="https://twitter.com/intent/favorite?tweet_id='+B[j]+'" class="twitter_fav_icon"'+(g?' target="_blank">':">")+"Favorite</a></p>"),u&&void 0!==A[j]&&void 0!==T(A[j])&&(O+='<div class="media"><img src="'+T(A[j])+'" alt="Image from tweet" /></div>'),u?R.push(O):!u&&x[j].textContent.length&&R.push(O),j++}!function(t){if(null===d){for(var a=t.length,i=0,n=document.getElementById(e),s="<ul>";i<a;)s+="<li>"+t[i]+"</li>",i++;s+="</ul>",n.innerHTML=s}else d(t)}(R),n=!1,i.length>0&&(k.fetch(i[0]),i.splice(0,1))}};return window.__twttrf=k,window.twitterFetcher=k,k});


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

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DynamicTwitterFeed; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var twitter_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51);
/* harmony import */ var twitter_fetcher__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(twitter_fetcher__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var just_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var just_debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(just_debounce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flickity__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var DynamicTwitterFeed =
/*#__PURE__*/
function () {
  function DynamicTwitterFeed(section) {
    _classCallCheck(this, DynamicTwitterFeed);

    this.$el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(section.el);
    this.settings = section.data;

    this._load();
  }

  _createClass(DynamicTwitterFeed, [{
    key: "_load",
    value: function _load() {
      var _this = this;

      this.$window = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window);
      this.flickity = null;
      this.$content = this.$el.find('[data-twitter-content]');
      this.$wrapper = this.$el.find('[data-twitter-wrapper]');
      this.$tweets = this.$el.find('[data-tweet-content]');
      this.$template = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.settings.template);
      var _this$settings = this.settings,
          onboarding = _this$settings.onboarding,
          username = _this$settings.username,
          retweets = _this$settings.retweets,
          images = _this$settings.images;
      var locale = this.settings.locale || 'en'; // Activate flickity on mobile

      this._mobileSlider = this._mobileSlider.bind(this);
      _Layout__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].onBreakpointChange(this._mobileSlider);

      this._mobileSlider();

      if (onboarding || !username) {
        return;
      }

      twitter_fetcher__WEBPACK_IMPORTED_MODULE_1___default.a.fetch({
        profile: {
          screenName: username
        },
        maxTweets: 3,
        enableLinks: true,
        showUser: true,
        showTime: true,
        dataOnly: false,
        useEmoji: true,
        showImages: images,
        showRetweet: retweets,
        lang: locale,
        customCallback: function customCallback(tweets) {
          return _this._renderTweets(tweets);
        },
        showInteraction: false
      });
    }
    /**
     * Unbind events when section is re-drawn
     */

  }, {
    key: "onSectionUnload",
    value: function onSectionUnload() {
      this.$window.off('.twitter');
      this.$content.off('.twitter');
      _Layout__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].offBreakpointChange(this._mobileSlider);

      this._destroyFlickity();
    }
  }, {
    key: "_initFlickity",
    value: function _initFlickity() {
      this.flickity = new flickity__WEBPACK_IMPORTED_MODULE_3___default.a(this.$content[0], {
        cellSelector: '[data-tweet-content]',
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

      this.flickity.destroy();
      this.flickity = null;
    }
  }, {
    key: "_mobileSlider",
    value: function _mobileSlider() {
      // If is Large layout, attempt to destroy flickity
      if (_Layout__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].isGreaterThanBreakpoint('M')) {
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
      var _this2 = this;

      var $slider = this.$content.find('.flickity-slider');
      this.$window.on('resize.twitter', just_debounce__WEBPACK_IMPORTED_MODULE_2___default()(function () {
        _this2.$content.trigger('heightUpdate.twitter');
      }));
      this.flickity.on('cellSelect', function () {
        _this2.$content.trigger('heightUpdate.twitter');
      });
      this.$content.on('heightUpdate.twitter', function () {
        if (!_this2.flickity) {
          return;
        }

        $slider.height(Math.ceil(_this2.flickity.maxCellHeight));
      }); // Sets the Slider to the height of the first slide

      this.$content.trigger('heightUpdate.twitter');
    }
    /**
     * Retrieve information about user who tweeted
     *
     * @param el
     * @returns {{$avatar: *, link: *, name, screenName}}
     * @private
     */

  }, {
    key: "_extractAuthor",
    value: function _extractAuthor(el) {
      var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
      var link = $el.find('a').attr('href');
      var name = $el.find('[data-scribe="element:name"]').text();
      var screenName = $el.find('[data-scribe="element:screen_name"]').text();
      var $avatar = $el.find('img');
      return {
        $avatar: $avatar,
        link: link,
        name: name,
        screenName: screenName
      };
    }
    /**
     * Retrieve link to tweet, and when it was tweeted
     *
     * @param el
     * @returns {{link: *, postedAt: *}}
     * @private
     */

  }, {
    key: "_extractMeta",
    value: function _extractMeta(el) {
      var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
      var link = $el.find('a').attr('href');
      var postedAt = $el.text();
      return {
        link: link,
        postedAt: postedAt
      };
    }
  }, {
    key: "_extractWrapperClass",
    value: function _extractWrapperClass() {
      var wrapperClass = this.$wrapper.attr('class').match(/tweet--count-\d+$/);

      if (wrapperClass) {
        return wrapperClass[0];
      }

      return '';
    }
  }, {
    key: "_renderTweets",
    value: function _renderTweets(tweets) {
      var _this3 = this;

      var tweetsLength = tweets.length;
      if (!tweets || !tweetsLength) return;
      var tweetsArray = [];
      var wrapperClass = "tweet--count-".concat(tweetsLength);
      tweets.forEach(function (tweet) {
        var $tweet = jquery__WEBPACK_IMPORTED_MODULE_0___default()(tweet);

        var $template = _this3.$template.clone();

        var authorInfo = _this3._extractAuthor($tweet[0]);

        var meta = _this3._extractMeta($tweet[2]);

        var content = $tweet[1]; // Render header

        $template.find('.tweet--header').attr('href', authorInfo.link);
        $template.find('.tweet--header-image').html(authorInfo.$avatar);
        $template.find('.tweet--header-name').text(authorInfo.name);
        $template.find('.tweet--header-screenname').text(authorInfo.screenName); // Render content

        $template.find('.tweet--content').append($tweet[3] ? $tweet[3] : null).append(content); // Render footer

        $template.find('.tweet--footer').attr('href', meta.link).find('.tweet--footer--posted').text(meta.postedAt);
        tweetsArray.push($template);
      });
      this.$wrapper.css('min-height', this.$wrapper.height());
      this.$tweets.fadeOut().promise().then(function () {
        _this3._destroyFlickity();

        _this3.$tweets.remove();

        _this3.$content.append(tweetsArray);

        _this3.$wrapper.removeClass(_this3._extractWrapperClass()).addClass(wrapperClass).css('min-height', '');

        _this3.$tweets = _this3.$el.find('[data-tweet-content]');

        _this3._mobileSlider();
      });
    }
  }]);

  return DynamicTwitterFeed;
}();



/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = debounce

function debounce (fn, delay, at_start, guarantee) {
  var timeout
  var args
  var self

  return function debounced () {
    self = this
    args = Array.prototype.slice.call(arguments)

    if (timeout && (at_start || guarantee)) {
      return
    } else if (!at_start) {
      clear()

      timeout = setTimeout(run, delay)
      return timeout
    }

    timeout = setTimeout(clear, delay)
    fn.apply(self, args)

    function run () {
      clear()
      fn.apply(self, args)
    }

    function clear () {
      clearTimeout(timeout)
      timeout = null
    }
  }
}


/***/ })

}]);
//# sourceMappingURL=DynamicTwitterFeed.bundle.js.map?1581358591380