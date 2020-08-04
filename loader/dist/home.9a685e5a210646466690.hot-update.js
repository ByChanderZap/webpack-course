webpackHotUpdate("home",{

/***/ "./babel/src/js/index.js":
/*!*******************************!*\
  !*** ./babel/src/js/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.css */ \"./babel/src/css/index.css\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.js */ \"./babel/src/js/search.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render.js */ \"./babel/src/js/render.js\");\n\n\n\nvar id = prompt('quien es ese pokemon');\nObject(_search_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id).then(function (data) {\n  Object(_render_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data);\n})[\"catch\"](function () {\n  console.log('Pokemon doesnt exist');\n});\n\n//# sourceURL=webpack:///./babel/src/js/index.js?");

/***/ })

})