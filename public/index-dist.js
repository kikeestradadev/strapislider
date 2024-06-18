/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var basSlider = function basSlider() {
  document.addEventListener("DOMContentLoaded", function () {
    var basSliderElement = document.querySelector('.bas-slider');
    if (basSliderElement) {
      var _basSlider = new Swiper('.bas-slider', {
        // Optional parameters
        effect: "fade",
        speed: 800,
        autoHeight: true,
        fadeEffect: {
          crossFade: true
        },
        watchOverflow: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        // Accessibility options
        a11y: {
          enabled: true,
          slideLabelMessage: "Slide {{index}} of {{slidesLength}}",
          slideRole: null // Custom role for slide
        }
      });
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (basSlider);

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_modules_basSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

(function () {
  (0,_internal_modules_basSlider__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();
}();
/******/ })()
;
//# sourceMappingURL=index-dist.js.map