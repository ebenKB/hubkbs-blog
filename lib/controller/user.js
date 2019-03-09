"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _user = _interopRequireDefault(require("../model/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserController =
/*#__PURE__*/
function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, [{
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
    key: "createUser",
    value: function createUser(user) {
      return new Promise(function (resolve, reject) {
        if (user == null) {
          reject('No user to create');
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
    value: function updateUser(id, newUser) {
      return new Promise(function (resolve, reject) {
        if (id == null) {
          reject('Id cannot be empty');
        } else {
          _user.default.findByIdAndUpdate(id, newUser, {
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