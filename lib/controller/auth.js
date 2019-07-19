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

var _user = _interopRequireDefault(require("./user"));

var _user2 = _interopRequireDefault(require("../model/user"));

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
      console.log('in the function to generat token');
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
                    console.log('this is  the token the function generated', token);
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
    } // isAuthorized(token) {
    //   return new Promise(async (resolve, reject) => {
    //     // verfiy whether the token coming from the front end is valid
    //     const user = await this.verifyToken(token);
    //     // check if the user with the token is a valid user
    //     UserController.getAuthuser(user)
    //       .then((data) => {
    //         if (data) {
    //           resolve(true);
    //         }
    //       }).catch(() => reject(false));
    //   });
    // }

  }, {
    key: "isAuthorized",
    value: function isAuthorized(req) {
      var _this = this;

      return new Promise(
      /*#__PURE__*/
      function () {
        var _ref2 = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee2(resolve, reject) {
          var authorization, token, _ref3, user;

          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  authorization = req.headers.authorization;

                  if (!(authorization === null || authorization === 'undefined')) {
                    _context2.next = 5;
                    break;
                  }

                  reject(false);
                  _context2.next = 11;
                  break;

                case 5:
                  token = authorization.split(' ')[1]; // verfiy whether the token coming from the front end is valid

                  _context2.next = 8;
                  return _this.verifyToken(token);

                case 8:
                  _ref3 = _context2.sent;
                  user = _ref3.user;

                  // check if the user with the token is a valid user
                  _user2.default.findOne({
                    email: user.email,
                    password: user.password
                  }).then(function () {
                    resolve(true);
                  }).catch(function () {
                    return reject(false);
                  });

                case 11:
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