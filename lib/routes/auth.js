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

var _auth = _interopRequireDefault(require("../controller/auth"));

var _user = _interopRequireDefault(require("../controller/user"));

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
        _regenerator.default.mark(function _callee2(req, res) {
          var user;
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  user = {
                    username: req.body.username,
                    password: req.body.password
                  }; // destructure params from req { req } and pass to the function
                  // fetch the user from the database and return a token from jwt

                  _user.default.getAuthuser(user).then(
                  /*#__PURE__*/
                  function () {
                    var _ref2 = (0, _asyncToGenerator2.default)(
                    /*#__PURE__*/
                    _regenerator.default.mark(function _callee(aUser) {
                      var token;
                      return _regenerator.default.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              _context.next = 2;
                              return _auth.default.generateToken(aUser);

                            case 2:
                              token = _context.sent;
                              res.status(200).send({
                                access_token: token,
                                user: user
                              });

                            case 4:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }));

                    return function (_x3) {
                      return _ref2.apply(this, arguments);
                    };
                  }()).catch(function () {
                    return res.status(401);
                  });

                case 2:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }]);
  return AuthRoute;
}();

var _default = AuthRoute;
exports.default = _default;