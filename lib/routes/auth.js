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

// import AuthController from '../controller/auth';
var AuthRoute =
/*#__PURE__*/
function () {
  function AuthRoute(apiRouter) {
    (0, _classCallCheck2.default)(this, AuthRoute);
    this.router = apiRouter;
    this.AuthRoutes();
  }

  (0, _createClass2.default)(AuthRoute, [{
    key: "AuthRoutes",
    value: function AuthRoutes() {
      // this.router.get('/v1/login', async (req, res) => {
      // });
      this.router.post('/v1/login',
      /*#__PURE__*/
      function () {
        var _ref = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee(req, res) {
          var headers, body;
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  console.log('we want to login');
                  headers = req.headers;
                  body = req.body;
                  console.log('these are the headers', headers);
                  console.log('this is the body', body);
                  res.status(200).send({
                    access_token: 'success'
                  });

                case 6:
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
    }
  }]);
  return AuthRoute;
}();

console.log('calling the auth routes');
var _default = AuthRoute;
exports.default = _default;