"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _user = _interopRequireDefault(require("../model/user"));

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
      var username = _ref.username,
          password = _ref.password;
      return new Promise(function (resolve, reject) {
        _user.default.findOne({
          email: username
        }).then(function (user) {
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
      return new Promise(function (resolve, reject) {
        if (user == null) {
          reject('You did not provide a user to create');
        } else {
          _user.default.create(user).then(function (created) {
            resolve(created);
          }).catch(function (err) {
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
  }]);
  return UserController;
}();

var _default = new UserController();

exports.default = _default;