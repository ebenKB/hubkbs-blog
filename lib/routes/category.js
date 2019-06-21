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

var _category = _interopRequireDefault(require("../controller/category"));

var CatRoute =
/*#__PURE__*/
function () {
  function CatRoute(apiRouter) {
    (0, _classCallCheck2.default)(this, CatRoute);
    this.router = apiRouter;
    this.CategoryRoutes();
  }

  (0, _createClass2.default)(CatRoute, [{
    key: "CategoryRoutes",
    value: function CategoryRoutes() {
      this.router.get('/v1/categories',
      /*#__PURE__*/
      function () {
        var _ref = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee(req, res) {
          var categories;
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _category.default.getCategories();

                case 2:
                  categories = _context.sent;
                  res.status(200).json({
                    categories: categories
                  });

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
      this.router.get('/v1/categories/:id',
      /*#__PURE__*/
      function () {
        var _ref2 = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee2(req, res) {
          var id, categories;
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  id = req.params.id;
                  _context2.next = 3;
                  return _category.default.getCategory(id);

                case 3:
                  categories = _context2.sent;
                  res.status(200).json({
                    categories: categories
                  });

                case 5:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  }]);
  return CatRoute;
}();

console.log('calling the categoery function');
var _default = CatRoute;
exports.default = _default;