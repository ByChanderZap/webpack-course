webpackHotUpdate("home",{

/***/ "./babel/src/js/search.js":
/*!********************************!*\
  !*** ./babel/src/js/search.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction search(_x) {\n  return _search.apply(this, arguments);\n}\n\nfunction _search() {\n  _search = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {\n    var response;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(\"https://pokeapi.co/api/v2/pokemon/\".concat(id, \"/\"));\n\n          case 2:\n            response = _context.sent;\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _search.apply(this, arguments);\n}\n\n//# sourceURL=webpack:///./babel/src/js/search.js?");

/***/ })

})