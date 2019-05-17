"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

var userSchema = new _mongoose.Schema({
  contact: [String],
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  }
});

var User = _mongoose.default.model('User', userSchema);

userSchema.statics.isExisting = function (username) {
  return new Promise(function (resolve, reject) {
    User.find({
      username: username
    }).then(function (data) {
      if (data && data.length > 0) {
        resolve(data);
      }
    }).catch(function (err) {
      reject(err);
    });
  });
};

var seedUser = {
  username: 'admin',
  email: 'admin@email.com',
  contact: ['+233456787654']
};
var _default = User;
exports.default = _default;