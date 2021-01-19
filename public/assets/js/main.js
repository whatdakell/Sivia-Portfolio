/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {
	var _ref;

	window.scroll(0, 0);

	$('body').addClass('loaded');
	setTimeout(function () {
		$('body').addClass('animate');
	}, 2000);
	var controller = new ScrollMagic.Controller(".wrapper");
	// new TweenMax.fromTo('body', 1, {backgroundColor: 'orange'}, {backgroundColor: 'purple'})
	var scene = new ScrollMagic.Scene((_ref = {
		triggerElement: ".wrapper",
		offset: 500
	}, _defineProperty(_ref, 'triggerElement', 0.1), _defineProperty(_ref, 'duration', "1000%"), _ref)).setTween("body", 1, { backgroundColor: "#e2d7cf", ease: Linear.easeNone }) // 
	.setTween($(".sunshine"), 1, { rotation: 360, ease: Linear.easeNone }) // trigger a TweenMax.to tween
	.addIndicators({ name: "1 (duration: 0)" }) // add indicators (requires plugin)
	.addTo(controller);

	$(".project-images .image").each(function () {
		var tl = new TimelineMax();
		var child = $(this).find("img");
		var scene = new ScrollMagic.Scene({
			triggerElement: this,
			offset: -100
		}).setClassToggle(this, 'animate').reverse(false).addTo(controller);
	});

	$(".side-img").each(function () {
		var tl = new TimelineMax();
		var child = $(this).find("img");
		tl.to($(this), 1, { y: -100, ease: Linear.easeNone });
		var scene = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: 1,
			duration: "80%",
			offset: 50
		}).setTween(tl).addTo(controller);
	});

	$(".fast").each(function () {
		var tl = new TimelineMax();
		var child = $(this).find("img");
		tl.to($(this), 1, { y: -100, ease: Linear.easeNone });
		var scene = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: 1,
			duration: "100%"
		}).setTween(tl).addTo(controller);
	});

	$(".faster").each(function () {
		var tl = new TimelineMax();
		var child = $(this).find("img");
		tl.to($(this), 1, { y: -200, ease: Linear.easeNone });
		var scene = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: 1,
			duration: "100%"
		}).setTween(tl).addTo(controller);
	});
	$(".slow").each(function () {
		var tl = new TimelineMax();
		var child = $(this).find("img");
		tl.to($(this), 1, { y: -60, ease: Linear.easeNone });
		var scene = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: 0.6,
			duration: "100%"
		}).setTween(tl).addTo(controller);
	});
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map