webpackHotUpdate("home",{

/***/ "./babel/src/js/index.js":
/*!*******************************!*\
  !*** ./babel/src/js/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.css */ \"./babel/src/css/index.css\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.js */ \"./babel/src/js/search.js\");\n\n\nvar id = prompt('quien es ese pokemon');\n\n//# sourceURL=webpack:///./babel/src/js/index.js?");

/***/ }),

/***/ "./babel/src/js/search.js":
/*!********************************!*\
  !*** ./babel/src/js/search.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction search(_x) {\n  return _search.apply(this, arguments);\n}\n\nfunction _search() {\n  _search = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {\n    var response, pokemon;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(\"https://pokeapi.co/api/v2/pokemon/\".concat(id, \"/\"));\n\n          case 2:\n            response = _context.sent;\n            _context.next = 5;\n            return response.json();\n\n          case 5:\n            pokemon = _context.sent;\n            return _context.abrupt(\"return\", pokemon);\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _search.apply(this, arguments);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (search);\n\n//# sourceURL=webpack:///./babel/src/js/search.js?");

/***/ })

})