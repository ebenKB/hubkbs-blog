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

var _user = _interopRequireDefault(require("../model/user"));

var _mailer = _interopRequireDefault(require("./mailer"));

var _auth = _interopRequireDefault(require("./auth"));

/* eslint-disable prefer-promise-reject-errors */

/* eslint-disable class-methods-use-this */
var UserController =
/*#__PURE__*/
function () {
  function UserController() {
    (0, _classCallCheck2.default)(this, UserController);
  }

  (0, _createClass2.default)(UserController, [{
    key: "getUsers",
    value: function getUsers() {
      return new Promise(function (resolve, reject) {
        _user.default.find().then(function (users) {
          resolve(users);
        }).catch(function (err) {
          reject('Could not fetch users', err);
        });
      });
    }
  }, {
    key: "getUser",
    value: function getUser(_id) {
      return new Promise(function (resolve, reject) {
        if (_id == null) {
          reject('ID cannot be empty');
        } else {
          _user.default.find({
            _id: _id
          }).then(function (user) {
            resolve(user);
          }).catch(function (err) {
            reject('Could not get user', err);
          });
        }
      });
    }
  }, {
    key: "getOneUser",
    value: function getOneUser() {
      return new Promise(function (resolve, reject) {
        _user.default.findOne().then(function (user) {
          resolve(user);
        }).catch(function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "getAuthuser",
    value: function getAuthuser(_ref) {
      var email = _ref.email,
          password = _ref.password;
      console.log('trying to find an auth user', email, password);
      return new Promise(function (resolve, reject) {
        _user.default.findOne({
          email: email
        }, '_id firstname lastname password status type email salt').then(function (user) {
          if (user) {
            if (_user.default.isValidPassword(user.password, password, user.salt)) {
              resolve(user);
            } else {
              reject('invalid credentials');
            }
          } else reject('credentials do not match');
        }).catch(function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "createUser",
    value: function createUser(user) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        if (user == null) {
          reject('You did not provide a user to create');
        } else {
          _user.default.create(user).then(
          /*#__PURE__*/
          function () {
            var _ref2 = (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee(created) {
              var msg;
              return _regenerator.default.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return _this._buildConfirmMsg(created);

                    case 2:
                      msg = _context.sent;

                      _mailer.default.sendGrid(created.email, msg);

                      resolve(created);

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }()).catch(function (err) {
            reject(err);
          });
        }
      });
    }
  }, {
    key: "deleteUser",
    value: function deleteUser(id) {
      return new Promise(function (resolve, reject) {
        if (id == null) {
          reject('Id cannot be empty');
        } else {
          _user.default.findByIdAndDelete(id).then(function (data) {
            resolve(data);
          }).catch(function (err) {
            reject(err);
          });
        }
      });
    }
  }, {
    key: "updateUser",
    value: function updateUser(_id, newUser) {
      return new Promise(function (resolve, reject) {
        if (_id == null) {
          reject('Id cannot be empty');
        } else {
          _user.default.findByIdAndUpdate(_id, newUser, {
            new: true
          }).then(function (data) {
            resolve(data);
          }).catch(function (err) {
            reject(err);
          });
        }
      });
    }
  }, {
    key: "_buildConfirmMsg",
    value: function _buildConfirmMsg(user) {
      return new Promise(
      /*#__PURE__*/
      function () {
        var _ref3 = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee2(resolve, reject) {
          var token, msg;
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return _auth.default.generateToken(user);

                case 3:
                  token = _context2.sent;
                  msg = 'Congratulations!!! You are almost done with your registration. Please follow this link to complete your' + "account https://ebb6f6fc.ngrok.io/api/v1/users/confirm/".concat(token);
                  resolve(msg);
                  _context2.next = 11;
                  break;

                case 8:
                  _context2.prev = 8;
                  _context2.t0 = _context2["catch"](0);
                  reject(_context2.t0);

                case 11:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[0, 8]]);
        }));

        return function (_x2, _x3) {
          return _ref3.apply(this, arguments);
        };
      }());
    }
  }]);
  return UserController;
}();

var _default = new UserController();

exports.default = _default;