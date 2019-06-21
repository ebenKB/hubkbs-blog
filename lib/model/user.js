"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _crypto = _interopRequireDefault(require("crypto"));

/* eslint-disable func-names */

/* eslint-disable no-console */

/* eslint-disable prefer-promise-reject-errors */
// import config from '../config/config';
var userSchema = new _mongoose.default.Schema({
  contact: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  // username: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  password: {
    type: String
  },
  // this indicates whether the user is active or blocked 0 = blocked, 1 = active
  status: {
    type: String,
    default: 1
  },
  type: {
    type: String,
    default: 'regular'
  }
});

var hashPass = function hashPass(pass) {
  return new Promise(function (resolve, reject) {
    if (pass == null || pass === 'undefined') {
      reject('Nothing provided to hash function');
    }

    var secret = 'abcdef';

    var hash = _crypto.default.createHmac('sha256', secret).update(pass).digest('hex');

    resolve(hash);
    console.log('we are done hashing', hash);
  });
}; // eslint-disable-next-line prefer-arrow-callback


userSchema.pre('save',
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(next) {
    var user, newPass;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            user = this;
            _context.next = 3;
            return hashPass('sada');

          case 3:
            newPass = _context.sent;
            user.password = newPass;
            console.log('we have to check your password in pre...', user);
            next();

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

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

userSchema.statics.validatePassword = function (pass) {
  return new Promise(function (resolve, reject) {});
}; // eslint-disable-next-line no-shadow


userSchema.statics.validatePassword = function (hashPass) {
  var _this = this;

  return new Promise(function (resolve, reject) {
    if (hashPass == null) {
      reject('no password provided to decode');
    }

    var pass = _this.password;
  });
};

var _default = User;
exports.default = _default;