/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../index.scss":
/*!*********************!*\
  !*** ../index.scss ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../scripts/collapse/index.js":
/*!************************************!*\
  !*** ../scripts/collapse/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((function () {
  jquery__WEBPACK_IMPORTED_MODULE_0__["fn"].collapse = function () {
    var timing = 300;

    var _this = this;

    var toggles = jquery__WEBPACK_IMPORTED_MODULE_0__(this.parent().find('.collapse__toggle'));
    jquery__WEBPACK_IMPORTED_MODULE_0__["each"](toggles, function (index, toggle) {
      jquery__WEBPACK_IMPORTED_MODULE_0__(toggle).click(function () {
        var $target = jquery__WEBPACK_IMPORTED_MODULE_0__(toggle).data('target') ? jquery__WEBPACK_IMPORTED_MODULE_0__(jquery__WEBPACK_IMPORTED_MODULE_0__(toggle).data('target')) : jquery__WEBPACK_IMPORTED_MODULE_0__(jquery__WEBPACK_IMPORTED_MODULE_0__(toggle).parent().find('.collapse'));

        if (!$target.hasClass('show')) {
          var height = getHeight($target);
          $target.addClass('collapsing');
          setTimeout(function () {
            $target.css('height', height);
          }, 1);
          setTimeout(function () {
            $target.removeClass('collapsing');
            $target.addClass('show');
            $target.removeAttr('style');
          }, timing + 1);
        } else {
          $target.removeClass('show');

          var _height = getHeight($target);

          $target.css('height', _height);
          $target.addClass('collapsing');
          setTimeout(function () {
            $target.css('height', 0);
          }, 1);
          setTimeout(function () {
            $target.removeClass('collapsing');
            $target.removeAttr('style');
          }, timing);
        }
      });
    });
  };

  function getHeight($target) {
    var $clone = $target.clone();
    $clone.css({
      'position': 'absolute',
      'display': 'block',
      'visibility': 'hidden',
      'height': 'auto'
    });
    jquery__WEBPACK_IMPORTED_MODULE_0__('body').append($clone);
    var height = $clone.innerHeight();
    $clone.remove();
    return height;
  }

  jquery__WEBPACK_IMPORTED_MODULE_0__('.collapse').collapse();
})());

/***/ }),

/***/ "../scripts/dropdown/index.js":
/*!************************************!*\
  !*** ../scripts/dropdown/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((function () {
  jquery__WEBPACK_IMPORTED_MODULE_0__["fn"].dropdown = function () {
    var timing = 300;

    var _this = this;

    var toggles = jquery__WEBPACK_IMPORTED_MODULE_0__(this.parent().find('.dropDown__toggle'));
    jquery__WEBPACK_IMPORTED_MODULE_0__["each"](toggles, function (index, toggle) {
      var _this2 = this;

      jquery__WEBPACK_IMPORTED_MODULE_0__(toggle).click(function () {
        var $target = jquery__WEBPACK_IMPORTED_MODULE_0__(_this[index]);

        if (window.innerWidth > 1024) {
          defaultDropdown(jquery__WEBPACK_IMPORTED_MODULE_0__(_this2), $target);
        } else {
          if (jquery__WEBPACK_IMPORTED_MODULE_0__(_this2).hasClass('mainMenu__link')) {
            menuDropdown($target);
          } else {
            defaultDropdown($target);
          }
        }
      });
    });

    function getHeight($target) {
      var $clone = $target.clone();
      $clone.css({
        'position': 'absolute',
        'display': 'block',
        'visibility': 'hidden',
        'height': 'auto'
      });
      jquery__WEBPACK_IMPORTED_MODULE_0__($target).parent().append($clone);
      var height = $clone.innerHeight();
      $clone.remove();
      return height;
    }

    function menuDropdown($target) {
      if ($target.hasClass('show')) {
        $target.removeClass('show');
      } else {
        $target.addClass('showing');
        $target.css('height', 0);
        setTimeout(function () {
          var height = getHeight($target);
          $target.css('height', height);
        }, 1);
        setTimeout(function () {
          $target.removeClass('showing');
          $target.addClass('show');
          $target.removeAttr('style');
        }, timing + 1);
      }
    }

    function defaultDropdown($toggle, $target) {
      if ($target.hasClass('show')) {
        $target.removeClass('show');
        $toggle.removeClass('active');
      } else {
        hideDropdown();
        $target.toggleClass('show');
        $toggle.toggleClass('active');

        if ($target.data('direct')) {
          switch ($target.data('direct')) {
            case 'up':
              $target.css('bottom', $toggle.innerHeight());
              break;
          }
        }
      }
    }

    function hideDropdown() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!index) {
        _this.each(function (i, dp) {
          jquery__WEBPACK_IMPORTED_MODULE_0__(dp).removeClass('show');
          jquery__WEBPACK_IMPORTED_MODULE_0__(jquery__WEBPACK_IMPORTED_MODULE_0__(dp).parent().find('.dropDown__toggle')).removeClass('active');
        });
      }
    }
  };

  jquery__WEBPACK_IMPORTED_MODULE_0__('.dropDown').dropdown();
})());

/***/ }),

/***/ "../scripts/home-slider/index.js":
/*!***************************************!*\
  !*** ../scripts/home-slider/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_js_swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/js/swiper */ "../../node_modules/swiper/js/swiper.js");
/* harmony import */ var swiper_js_swiper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_js_swiper__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((function () {
  var swiper = new swiper_js_swiper__WEBPACK_IMPORTED_MODULE_0___default.a('.homeSlider', {
    slidesPerView: 1,
    spaceBetween: 30,
    lazyload: true,
    navigation: {
      nextEl: '.homeSlider__navigation--next',
      prevEl: '.homeSlider__navigation--prev'
    },
    pagination: {
      el: '.homeSlider__pagination',
      type: 'bullets'
    }
  });
  console.log(swiper);
})());

/***/ }),

/***/ "../scripts/index.js":
/*!***************************!*\
  !*** ../scripts/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _message_banner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-banner */ "../scripts/message-banner/index.js");
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown */ "../scripts/dropdown/index.js");
/* harmony import */ var _collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collapse */ "../scripts/collapse/index.js");
/* harmony import */ var _quality__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quality */ "../scripts/quality/index.js");
/* harmony import */ var _platform_description__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./platform-description */ "../scripts/platform-description/index.js");
/* harmony import */ var _home_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-slider */ "../scripts/home-slider/index.js");
/* harmony import */ var _product_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-slider */ "../scripts/product-slider/index.js");








/***/ }),

/***/ "../scripts/message-banner/index.js":
/*!******************************************!*\
  !*** ../scripts/message-banner/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jQuery */ "../../node_modules/jQuery/dist/jquery.js");
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jQuery__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((function () {
  jQuery__WEBPACK_IMPORTED_MODULE_0__('#messageBanner__closeButton').on('click', function () {
    jQuery__WEBPACK_IMPORTED_MODULE_0__('#messageBanner').addClass('hide');
  });
})());

/***/ }),

/***/ "../scripts/platform-description/index.js":
/*!************************************************!*\
  !*** ../scripts/platform-description/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((function () {
  jquery__WEBPACK_IMPORTED_MODULE_0__('.platformDescription__contentItem').click(function () {
    if (!jquery__WEBPACK_IMPORTED_MODULE_0__(this).hasClass('active')) {
      var screenIndex = jquery__WEBPACK_IMPORTED_MODULE_0__(this).attr('data-screenIndex');
      var $screenImage = jquery__WEBPACK_IMPORTED_MODULE_0__('#platformDescription__screen--' + screenIndex);
      jquery__WEBPACK_IMPORTED_MODULE_0__('.platformDescription__contentItem').each(function (index, item) {
        jquery__WEBPACK_IMPORTED_MODULE_0__(item).removeClass('active');
      });
      jquery__WEBPACK_IMPORTED_MODULE_0__('.platformDescription__screen').each(function (index, screen) {
        jquery__WEBPACK_IMPORTED_MODULE_0__(screen).removeClass('active');
      });
      jquery__WEBPACK_IMPORTED_MODULE_0__(this).addClass('active');
      $screenImage.addClass('active');
    }
  });
})());

/***/ }),

/***/ "../scripts/product-slider/index.js":
/*!******************************************!*\
  !*** ../scripts/product-slider/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_js_swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/js/swiper */ "../../node_modules/swiper/js/swiper.js");
/* harmony import */ var swiper_js_swiper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_js_swiper__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((function () {
  var productSlider = new swiper_js_swiper__WEBPACK_IMPORTED_MODULE_0___default.a('.product__slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    lazyload: true,
    navigation: {
      nextEl: '.product__navigation--next',
      prevEl: '.product__navigation--prev'
    },
    pagination: {
      el: '.product__pagination',
      type: 'bullets'
    }
  });
})());

/***/ }),

/***/ "../scripts/quality/index.js":
/*!***********************************!*\
  !*** ../scripts/quality/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((function () {
  jquery__WEBPACK_IMPORTED_MODULE_0__('.quality__cardHeader').click(function () {
    var showed = jquery__WEBPACK_IMPORTED_MODULE_0__(this).attr('data-show');
    console.log(showed);

    if (showed == 'false') {
      show(jquery__WEBPACK_IMPORTED_MODULE_0__(this));
    } else if (showed == 'true') {
      hide(jquery__WEBPACK_IMPORTED_MODULE_0__(this));
    }
  });

  function show($this) {
    hide(jquery__WEBPACK_IMPORTED_MODULE_0__('.quality__cardHeader[data-show="true"]'));
    jquery__WEBPACK_IMPORTED_MODULE_0__('.quality__image').each(function (i, img) {
      jquery__WEBPACK_IMPORTED_MODULE_0__(img).removeClass('show');
    });
    var $image = jquery__WEBPACK_IMPORTED_MODULE_0__('#quality-image-' + $this.data('imageindex'));
    $image.addClass('show');
    var $body = jquery__WEBPACK_IMPORTED_MODULE_0__($this.parent().find('.quality__cardBody'));
    var $content = jquery__WEBPACK_IMPORTED_MODULE_0__($body.find('.quality__innerBody'));
    $body.addClass('showing');
    var height = $content.innerHeight();
    setTimeout(function () {
      $body.css('height', height);
    }, 1);
    setTimeout(function () {
      $this.attr('data-show', 'true');
      $body.addClass('show');
      $body.removeClass('showing');
      $body.removeAttr('style');
    }, 300);
  }

  function hide($this) {
    var $body = jquery__WEBPACK_IMPORTED_MODULE_0__($this.parent().find('.quality__cardBody'));
    var $content = jquery__WEBPACK_IMPORTED_MODULE_0__($body.find('.quality__innerBody'));
    var height = $content.innerHeight();
    $body.css('height', height);
    $body.addClass('showing');
    $body.removeClass('show');
    setTimeout(function () {
      $body.css('height', 0);
    }, 1);
    setTimeout(function () {
      $this.attr('data-show', 'false');
      $body.removeClass('showing');
      $body.removeAttr('style');
    }, 300);
  }
})());

/***/ }),

/***/ "./":
/*!*********!*\
  !*** . ***!
  \*********/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts */ "../scripts/index.js");



function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function () {
  console.log('Start Website 3DHubs');
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL2luZGV4LnNjc3M/NmE1MyIsIndlYnBhY2s6Ly8vLi4vc2NyaXB0cy9jb2xsYXBzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc2NyaXB0cy9kcm9wZG93bi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc2NyaXB0cy9ob21lLXNsaWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc2NyaXB0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc2NyaXB0cy9tZXNzYWdlLWJhbm5lci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc2NyaXB0cy9wbGF0Zm9ybS1kZXNjcmlwdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc2NyaXB0cy9wcm9kdWN0LXNsaWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc2NyaXB0cy9xdWFsaXR5L2luZGV4LmpzIiwid2VicGFjazovLy8uIl0sIm5hbWVzIjpbIiQiLCJjb2xsYXBzZSIsInRpbWluZyIsIl90aGlzIiwidG9nZ2xlcyIsInBhcmVudCIsImZpbmQiLCJpbmRleCIsInRvZ2dsZSIsImNsaWNrIiwiJHRhcmdldCIsImRhdGEiLCJoYXNDbGFzcyIsImhlaWdodCIsImdldEhlaWdodCIsImFkZENsYXNzIiwic2V0VGltZW91dCIsImNzcyIsInJlbW92ZUNsYXNzIiwicmVtb3ZlQXR0ciIsIiRjbG9uZSIsImNsb25lIiwiYXBwZW5kIiwiaW5uZXJIZWlnaHQiLCJyZW1vdmUiLCJkcm9wZG93biIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJkZWZhdWx0RHJvcGRvd24iLCJtZW51RHJvcGRvd24iLCIkdG9nZ2xlIiwiaGlkZURyb3Bkb3duIiwidG9nZ2xlQ2xhc3MiLCJlYWNoIiwiaSIsImRwIiwic3dpcGVyIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImxhenlsb2FkIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsInBhZ2luYXRpb24iLCJlbCIsInR5cGUiLCJjb25zb2xlIiwibG9nIiwib24iLCJzY3JlZW5JbmRleCIsImF0dHIiLCIkc2NyZWVuSW1hZ2UiLCJpdGVtIiwic2NyZWVuIiwicHJvZHVjdFNsaWRlciIsInNob3dlZCIsInNob3ciLCJoaWRlIiwiJHRoaXMiLCJpbWciLCIkaW1hZ2UiLCIkYm9keSIsIiRjb250ZW50IiwicmVhZHkiLCJmbiIsImRvY3VtZW50IiwicmVhZHlTdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxn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O0FBQ0wsR0FGRCxNQUVPO0FBQ0hDLFlBQVEsQ0FBQ0UsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDSCxFQUE5QztBQUNIO0FBQ0o7O0FBRURELEtBQUssQ0FBQyxZQUFNO0FBQ1JqQixTQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUNILENBRkksQ0FBTCxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vXCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSc7XHJcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoKSB7XHJcbiAgICAkLmZuLmNvbGxhcHNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHRpbWluZyA9IDMwMDtcclxuICAgICAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGxldCB0b2dnbGVzID0gJCh0aGlzLnBhcmVudCgpLmZpbmQoJy5jb2xsYXBzZV9fdG9nZ2xlJykpO1xyXG4gICAgICAgICQuZWFjaCh0b2dnbGVzLCBmdW5jdGlvbiAoaW5kZXgsIHRvZ2dsZSkge1xyXG4gICAgICAgICAgICAkKHRvZ2dsZSkuY2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0ICR0YXJnZXQgPSAoJCh0b2dnbGUpLmRhdGEoJ3RhcmdldCcpKSA/ICQoJCh0b2dnbGUpLmRhdGEoJ3RhcmdldCcpKSA6ICQoJCh0b2dnbGUpLnBhcmVudCgpLmZpbmQoJy5jb2xsYXBzZScpKTtcclxuICAgICAgICAgICAgICAgIGlmICghJHRhcmdldC5oYXNDbGFzcygnc2hvdycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhlaWdodCA9IGdldEhlaWdodCgkdGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0LmFkZENsYXNzKCdjb2xsYXBzaW5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7ICR0YXJnZXQuY3NzKCdoZWlnaHQnLCBoZWlnaHQpOyB9LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgJHRhcmdldC5yZW1vdmVDbGFzcygnY29sbGFwc2luZycpOyAkdGFyZ2V0LmFkZENsYXNzKCdzaG93Jyk7ICR0YXJnZXQucmVtb3ZlQXR0cignc3R5bGUnKTsgfSwgdGltaW5nICsgMSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICR0YXJnZXQucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaGVpZ2h0ID0gZ2V0SGVpZ2h0KCR0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICR0YXJnZXQuY3NzKCdoZWlnaHQnLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICR0YXJnZXQuYWRkQ2xhc3MoJ2NvbGxhcHNpbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHRhcmdldC5jc3MoJ2hlaWdodCcsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0LnJlbW92ZUNsYXNzKCdjb2xsYXBzaW5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR0YXJnZXQucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCB0aW1pbmcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRIZWlnaHQoJHRhcmdldCkge1xyXG4gICAgICAgIGxldCAkY2xvbmUgPSAkdGFyZ2V0LmNsb25lKCk7XHJcbiAgICAgICAgJGNsb25lLmNzcyh7XHJcbiAgICAgICAgICAgICdwb3NpdGlvbic6ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICdkaXNwbGF5JzogJ2Jsb2NrJyxcclxuICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgJ2hlaWdodCc6ICdhdXRvJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJGNsb25lKTtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gJGNsb25lLmlubmVySGVpZ2h0KCk7XHJcbiAgICAgICAgJGNsb25lLnJlbW92ZSgpO1xyXG4gICAgICAgIHJldHVybiBoZWlnaHQ7XHJcbiAgICB9XHJcbiAgICAkKCcuY29sbGFwc2UnKS5jb2xsYXBzZSgpO1xyXG59KCkpOyIsImltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5JztcclxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uICgpIHtcclxuICAgICQuZm4uZHJvcGRvd24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHRpbWluZyA9IDMwMDtcclxuICAgICAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGxldCB0b2dnbGVzID0gJCh0aGlzLnBhcmVudCgpLmZpbmQoJy5kcm9wRG93bl9fdG9nZ2xlJykpO1xyXG4gICAgICAgICQuZWFjaCh0b2dnbGVzLCBmdW5jdGlvbiAoaW5kZXgsIHRvZ2dsZSkge1xyXG4gICAgICAgICAgICAkKHRvZ2dsZSkuY2xpY2soICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCAkdGFyZ2V0ID0gJChfdGhpc1tpbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTAyNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHREcm9wZG93bigkKHRoaXMpLCAkdGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ21haW5NZW51X19saW5rJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVudURyb3Bkb3duKCR0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHREcm9wZG93bigkdGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0SGVpZ2h0KCR0YXJnZXQpIHtcclxuICAgICAgICAgICAgbGV0ICRjbG9uZSA9ICR0YXJnZXQuY2xvbmUoKTtcclxuICAgICAgICAgICAgJGNsb25lLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgJ2Rpc3BsYXknOiAnYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgICAgICdoZWlnaHQnOiAnYXV0bydcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoJHRhcmdldCkucGFyZW50KCkuYXBwZW5kKCRjbG9uZSk7XHJcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSAkY2xvbmUuaW5uZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgJGNsb25lLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBtZW51RHJvcGRvd24oJHRhcmdldCkge1xyXG4gICAgICAgICAgICBpZiAoJHRhcmdldC5oYXNDbGFzcygnc2hvdycpKSB7IFxyXG4gICAgICAgICAgICAgICAgJHRhcmdldC5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJHRhcmdldC5hZGRDbGFzcygnc2hvd2luZycpO1xyXG4gICAgICAgICAgICAgICAgJHRhcmdldC5jc3MoJ2hlaWdodCcsIDApO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhlaWdodCA9IGdldEhlaWdodCgkdGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0LmNzcygnaGVpZ2h0JywgaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIH0sIDEpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRhcmdldC5yZW1vdmVDbGFzcygnc2hvd2luZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICR0YXJnZXQuYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0LnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAgICAgICAgICAgICB9LCB0aW1pbmcgKyAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBkZWZhdWx0RHJvcGRvd24oJHRvZ2dsZSwgJHRhcmdldCkge1xyXG4gICAgICAgICAgICBpZiAoJHRhcmdldC5oYXNDbGFzcygnc2hvdycpKSB7XHJcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgICAgICAgICAkdG9nZ2xlLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGhpZGVEcm9wZG93bigpO1xyXG4gICAgICAgICAgICAgICAgJHRhcmdldC50b2dnbGVDbGFzcygnc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgJHRvZ2dsZS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoJHRhcmdldC5kYXRhKCdkaXJlY3QnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCgkdGFyZ2V0LmRhdGEoJ2RpcmVjdCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3VwJzogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR0YXJnZXQuY3NzKCdib3R0b20nLCAkdG9nZ2xlLmlubmVySGVpZ2h0KCkgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGhpZGVEcm9wZG93bihpbmRleCA9IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGlmICghaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmVhY2goIGZ1bmN0aW9uIChpLCBkcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoZHApLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgkKGRwKS5wYXJlbnQoKS5maW5kKCcuZHJvcERvd25fX3RvZ2dsZScpKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICQoJy5kcm9wRG93bicpLmRyb3Bkb3duKCk7XHJcbn0oKSk7IiwiaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXIvanMvc3dpcGVyJztcclxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuaG9tZVNsaWRlcicsIHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgICAgbGF6eWxvYWQ6IHRydWUsXHJcbiAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICBuZXh0RWw6ICcuaG9tZVNsaWRlcl9fbmF2aWdhdGlvbi0tbmV4dCcsXHJcbiAgICAgICAgICAgIHByZXZFbDogJy5ob21lU2xpZGVyX19uYXZpZ2F0aW9uLS1wcmV2J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICBlbDogJy5ob21lU2xpZGVyX19wYWdpbmF0aW9uJyxcclxuICAgICAgICAgICAgdHlwZTogJ2J1bGxldHMnXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhzd2lwZXIpO1xyXG59KCkpO1xyXG4iLCJpbXBvcnQgJy4vbWVzc2FnZS1iYW5uZXInO1xyXG5pbXBvcnQgJy4vZHJvcGRvd24nO1xyXG5pbXBvcnQgJy4vY29sbGFwc2UnO1xyXG5pbXBvcnQgJy4vcXVhbGl0eSc7XHJcbmltcG9ydCAnLi9wbGF0Zm9ybS1kZXNjcmlwdGlvbic7XHJcbmltcG9ydCAnLi9ob21lLXNsaWRlcic7XHJcbmltcG9ydCAnLi9wcm9kdWN0LXNsaWRlcic7IiwiaW1wb3J0ICogYXMgJCBmcm9tICdqUXVlcnknO1xyXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI21lc3NhZ2VCYW5uZXJfX2Nsb3NlQnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJyNtZXNzYWdlQmFubmVyJykuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuICAgIH0pO1xyXG59KCkpOyIsImltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcucGxhdGZvcm1EZXNjcmlwdGlvbl9fY29udGVudEl0ZW0nKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICB2YXIgc2NyZWVuSW5kZXggPSAkKHRoaXMpLmF0dHIoJ2RhdGEtc2NyZWVuSW5kZXgnKTtcclxuICAgICAgICAgICAgdmFyICRzY3JlZW5JbWFnZSA9ICQoJyNwbGF0Zm9ybURlc2NyaXB0aW9uX19zY3JlZW4tLScgKyBzY3JlZW5JbmRleCk7XHJcbiAgICAgICAgICAgICQoJy5wbGF0Zm9ybURlc2NyaXB0aW9uX19jb250ZW50SXRlbScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAkKGl0ZW0pLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoJy5wbGF0Zm9ybURlc2NyaXB0aW9uX19zY3JlZW4nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgc2NyZWVuKSB7XHJcbiAgICAgICAgICAgICAgICAkKHNjcmVlbikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICRzY3JlZW5JbWFnZS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0oKSk7IiwiaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXIvanMvc3dpcGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcHJvZHVjdFNsaWRlciA9IG5ldyBTd2lwZXIoJy5wcm9kdWN0X19zbGlkZXInLCB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICAgIGxhenlsb2FkOiB0cnVlLFxyXG4gICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgbmV4dEVsOiAnLnByb2R1Y3RfX25hdmlnYXRpb24tLW5leHQnLFxyXG4gICAgICAgICAgICBwcmV2RWw6ICcucHJvZHVjdF9fbmF2aWdhdGlvbi0tcHJldidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgZWw6ICcucHJvZHVjdF9fcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICAgIHR5cGU6ICdidWxsZXRzJ1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KCkpIiwiaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xyXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLnF1YWxpdHlfX2NhcmRIZWFkZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHNob3dlZCA9ICgkKHRoaXMpLmF0dHIoJ2RhdGEtc2hvdycpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzaG93ZWQpO1xyXG4gICAgICAgIGlmIChzaG93ZWQgPT0gJ2ZhbHNlJykge1xyXG4gICAgICAgICAgICBzaG93KCQodGhpcykpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2hvd2VkID09ICd0cnVlJyl7XHJcbiAgICAgICAgICAgIGhpZGUoJCh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBmdW5jdGlvbiBzaG93KCR0aGlzKSB7XHJcbiAgICAgICAgaGlkZSgkKCcucXVhbGl0eV9fY2FyZEhlYWRlcltkYXRhLXNob3c9XCJ0cnVlXCJdJykpO1xyXG4gICAgICAgICQoJy5xdWFsaXR5X19pbWFnZScpLmVhY2goIGZ1bmN0aW9uIChpLCBpbWcpIHsgJChpbWcpLnJlbW92ZUNsYXNzKCdzaG93Jyl9KTtcclxuICAgICAgICB2YXIgJGltYWdlID0gJCgnI3F1YWxpdHktaW1hZ2UtJyArICR0aGlzLmRhdGEoJ2ltYWdlaW5kZXgnKSk7XHJcbiAgICAgICAgJGltYWdlLmFkZENsYXNzKCdzaG93Jyk7XHJcblxyXG4gICAgICAgIHZhciAkYm9keSA9ICQoJHRoaXMucGFyZW50KCkuZmluZCgnLnF1YWxpdHlfX2NhcmRCb2R5JykpO1xyXG4gICAgICAgIHZhciAkY29udGVudCA9ICQoJGJvZHkuZmluZCgnLnF1YWxpdHlfX2lubmVyQm9keScpKTtcclxuICAgICAgICAkYm9keS5hZGRDbGFzcygnc2hvd2luZycpO1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSAkY29udGVudC5pbm5lckhlaWdodCgpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkYm9keS5jc3MoJ2hlaWdodCcsIGhlaWdodCk7XHJcbiAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICR0aGlzLmF0dHIoJ2RhdGEtc2hvdycsICd0cnVlJyk7XHJcbiAgICAgICAgICAgICRib2R5LmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgICAgICRib2R5LnJlbW92ZUNsYXNzKCdzaG93aW5nJyk7XHJcbiAgICAgICAgICAgICRib2R5LnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAgICAgfSwgMzAwKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoaWRlKCR0aGlzKSB7XHJcbiAgICAgICAgdmFyICRib2R5ID0gJCgkdGhpcy5wYXJlbnQoKS5maW5kKCcucXVhbGl0eV9fY2FyZEJvZHknKSk7XHJcbiAgICAgICAgdmFyICRjb250ZW50ID0gJCgkYm9keS5maW5kKCcucXVhbGl0eV9faW5uZXJCb2R5JykpO1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSAkY29udGVudC5pbm5lckhlaWdodCgpO1xyXG4gICAgICAgICRib2R5LmNzcygnaGVpZ2h0JywgaGVpZ2h0KTtcclxuICAgICAgICAkYm9keS5hZGRDbGFzcygnc2hvd2luZycpO1xyXG4gICAgICAgICRib2R5LnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRib2R5LmNzcygnaGVpZ2h0JywgMCk7XHJcbiAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICR0aGlzLmF0dHIoJ2RhdGEtc2hvdycsICdmYWxzZScpO1xyXG4gICAgICAgICAgICAkYm9keS5yZW1vdmVDbGFzcygnc2hvd2luZycpO1xyXG4gICAgICAgICAgICAkYm9keS5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgICAgIH0sIDMwMCk7XHJcbiAgICB9XHJcbn0oKSk7IiwiaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xyXG5cclxuaW1wb3J0ICcuL3NjcmlwdHMnO1xyXG5mdW5jdGlvbiByZWFkeShmbikge1xyXG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT0gJ2xvYWRpbmcnKSB7XHJcbiAgICAgICAgZm4oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZuKTtcclxuICAgIH1cclxufVxyXG5cclxucmVhZHkoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ1N0YXJ0IFdlYnNpdGUgM0RIdWJzJyk7XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=