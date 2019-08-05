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

var _mailer = _interopRequireDefault(require("../controller/mailer"));

var PasswordRoute =
/*#__PURE__*/
function () {
  function PasswordRoute(apiRouter) {
    (0, _classCallCheck2.default)(this, PasswordRoute);
    this.router = apiRouter;
    this.PasswordRoutes();
  }

  (0, _createClass2.default)(PasswordRoute, [{
    key: "PasswordRoutes",
    value: function PasswordRoutes() {
      this.router.post('/v1/password/reset/:token',
      /*#__PURE__*/
      function () {
        var _ref = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee(req, res) {
          var token;
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  token = req.params.token;

                  _auth.default.verifyToken(token).then(function () {
                    res.redirect("http://localhost:4200/password/reset/:".concat(token));
                  });

                  res.send(token);

                case 3:
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
      this.router.post('/v1/password/reset',
      /*#__PURE__*/
      function () {
        var _ref2 = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee3(req, res) {
          var user;
          return _regenerator.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  user = {
                    email: req.body.email
                  }; // destructure params from req { req } and pass to the function
                  // fetch the user from the database and return a token from jwt

                  _user.default.getUserByEmail(user.email).then(
                  /*#__PURE__*/
                  function () {
                    var _ref3 = (0, _asyncToGenerator2.default)(
                    /*#__PURE__*/
                    _regenerator.default.mark(function _callee2(u) {
                      var token, msg;
                      return _regenerator.default.wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              _context2.next = 2;
                              return _auth.default.generateToken(u);

                            case 2:
                              token = _context2.sent;
                              msg = "Please follow this link to reset your password https://hubkbs-blogs.herokuapp.com/password/reset/".concat(token);

                              _mailer.default.sendGrid(user.email, msg).then(function () {
                                return res.status(200).json({
                                  msg: 'Confirmation sent to email'
                                });
                              }).catch(function () {
                                return res.status(501).json({
                                  err: 'could not send confirmation email'
                                });
                              });

                            case 5:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _callee2);
                    }));

                    return function (_x5) {
                      return _ref3.apply(this, arguments);
                    };
                  }());

                case 2:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function (_x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      }());
      this.router.post('/v1/password/reset/confirm',
      /*#__PURE__*/
      function () {
        var _ref4 = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee6(req, res) {
          var body;
          return _regenerator.default.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  body = req.body;

                  _auth.default.verifyToken(body.token).then(
                  /*#__PURE__*/
                  function () {
                    var _ref5 = (0, _asyncToGenerator2.default)(
                    /*#__PURE__*/
                    _regenerator.default.mark(function _callee5(user) {
                      return _regenerator.default.wrap(function _callee5$(_context5) {
                        while (1) {
                          switch (_context5.prev = _context5.next) {
                            case 0:
                              _user.default.getUserByEmail(user.email).then(
                              /*#__PURE__*/
                              function () {
                                var _ref6 = (0, _asyncToGenerator2.default)(
                                /*#__PURE__*/
                                _regenerator.default.mark(function _callee4(u) {
                                  return _regenerator.default.wrap(function _callee4$(_context4) {
                                    while (1) {
                                      switch (_context4.prev = _context4.next) {
                                        case 0:
                                          // eslint-disable-next-line no-param-reassign
                                          u.password = body.password;
                                          console.log('this is the use who has been updated', u);
                                          _context4.next = 4;
                                          return u.save();

                                        case 4:
                                        case "end":
                                          return _context4.stop();
                                      }
                                    }
                                  }, _callee4);
                                }));

                                return function (_x9) {
                                  return _ref6.apply(this, arguments);
                                };
                              }());

                              res.status(200).json('password has been changed');

                            case 2:
                            case "end":
                              return _context5.stop();
                          }
                        }
                      }, _callee5);
                    }));

                    return function (_x8) {
                      return _ref5.apply(this, arguments);
                    };
                  }());

                case 2:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));

        return function (_x6, _x7) {
          return _ref4.apply(this, arguments);
        };
      }());
    }
  }]);
  return PasswordRoute;
}();

var _default = PasswordRoute;
exports.default = _default;