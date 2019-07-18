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

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _fs = _interopRequireDefault(require("fs"));

var _user = _interopRequireDefault(require("../controller/user"));

/* eslint-disable prefer-promise-reject-errors */

/* eslint-disable class-methods-use-this */
var Auth =
/*#__PURE__*/
function () {
  function Auth() {
    (0, _classCallCheck2.default)(this, Auth);
  }

  (0, _createClass2.default)(Auth, [{
    key: "generateToken",
    value: function generateToken(user) {
      return new Promise(
      /*#__PURE__*/
      function () {
        var _ref = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee(resolve, reject) {
          var privateKey, token;
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  try {
                    // const user = await UserController.getAuthuser(u);
                    privateKey = _fs.default.readFileSync('./private.pem', 'utf8');
                    token = _jsonwebtoken.default.sign({
                      user: user
                    }, privateKey, {
                      algorithm: 'HS256'
                    }, {
                      expiresIn: '1h'
                    });
                    resolve(token);
                  } catch (err) {
                    reject(err);
                  }

                case 1:
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
  }, {
    key: "verifyToken",
    value: function verifyToken(token) {
      return new Promise(function (resolve, reject) {
        var privateKey = _fs.default.readFileSync('./private.pem', 'utf8');

        _jsonwebtoken.default.verify(token, privateKey, {
          algorithm: 'HS256'
        }, function (err, user) {
          if (err) {
            reject(err);
          } else {
            resolve(user);
          }
        });
      });
    }
  }, {
    key: "isAuthorized",
    value: function isAuthorized(token) {
      var _this = this;

      return new Promise(
      /*#__PURE__*/
      function () {
        var _ref2 = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee2(resolve, reject) {
          var user;
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return _this.verifyToken(token);

                case 2:
                  user = _context2.sent;

                  // check if the user with the token is a valid user
                  _user.default.getAuthuser(user).then(function (data) {
                    if (data) {
                      resolve(true);
                    }
                  }).catch(function () {
                    return reject(false);
                  });

                case 4:
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
  return Auth;
}();

var _default = new Auth();

exports.default = _default;