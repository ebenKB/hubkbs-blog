"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _category = _interopRequireDefault(require("../model/category"));

/* eslint-disable prefer-promise-reject-errors */

/* eslint-disable class-methods-use-this */
var CatController =
/*#__PURE__*/
function () {
  function CatController() {
    (0, _classCallCheck2.default)(this, CatController);
  }

  (0, _createClass2.default)(CatController, [{
    key: "getCategories",
    value: function () {
      var _getCategories = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  _category.default.find().then(function (c) {
                    resolve(c);
                  }).catch(function () {
                    reject('an error occured while fetching comments');
                  });
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getCategories() {
        return _getCategories.apply(this, arguments);
      }

      return getCategories;
    }()
  }, {
    key: "getCategory",
    value: function () {
      var _getCategory = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(_id) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                  if (_id == null || _id === 'undefined') {
                    reject('ID cannot be empty');
                  }

                  _category.default.findById(_id).then(function (cat) {
                    resolve(cat);
                  }).catch(function () {
                    return reject('an error occured while fetching comment');
                  });
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getCategory(_x) {
        return _getCategory.apply(this, arguments);
      }

      return getCategory;
    }()
  }, {
    key: "createCategory",
    value: function () {
      var _createCategory = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(cat) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", new Promise(function (resolve, reject) {
                  if (cat == null || cat === 'undefinded') {
                    reject('Category cannot be empty. Provide a category to create');
                  }

                  _category.default.create(cat).then(function (created) {
                    resolve(created);
                  }).catch(function () {
                    return reject('an error occured while creating the category');
                  });
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function createCategory(_x2) {
        return _createCategory.apply(this, arguments);
      }

      return createCategory;
    }()
  }, {
    key: "deleteCatgory",
    value: function () {
      var _deleteCatgory = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(_id) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", new Promise(function (resolve, reject) {
                  if (_id == null || _id === 'undefined') {
                    reject('ID cannot be empty.');
                  }

                  _category.default.findByIdAndDelete(_id).then(function (d) {
                    resolve(d);
                  }).catch(function () {
                    return reject('an error occured while deleting the category');
                  });
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function deleteCatgory(_x3) {
        return _deleteCatgory.apply(this, arguments);
      }

      return deleteCatgory;
    }()
  }, {
    key: "updateCategory",
    value: function () {
      var _updateCategory = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(_id, newCat) {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", new Promise(function (resolve, reject) {
                  if (_id == null || _id === 'undefined') {
                    reject('ID cannot be empty.');
                  }

                  _category.default.findByIdAndUpdate(_id, newCat, {
                    new: true
                  }).then(function (d) {
                    resolve(d);
                  }).catch(function () {
                    return reject('an error occured while updating the record');
                  });
                }));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function updateCategory(_x4, _x5) {
        return _updateCategory.apply(this, arguments);
      }

      return updateCategory;
    }()
  }]);
  return CatController;
}();

var _default = new CatController();

exports.default = _default;