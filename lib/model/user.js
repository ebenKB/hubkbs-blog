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
  username: {
    type: String,
    required: true,
    unique: true
  },
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  password: {
    type: String
  },
  salt: {
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
  } // followers: [
  //   {
  //     type: String,
  //     ref: mongoose.Types.ObjectId('user'),
  //   },
  // ],

});

userSchema.statics.isValidPassword = function (oldPass, newPass, salt) {
  var hash = _crypto.default.pbkdf2Sync(newPass, salt, 1000, 64, 'sha512').toString('hex'); // console.log('this is the new hash = ', hash, 'and this is the password', oldPass);


  return oldPass === hash;
};

userSchema.methods.setPassword = function (password) {
  var user = this; // create a unique salt for every user

  user.salt = _crypto.default.randomBytes(16).toString('hex'); // hash the user's password using the salt

  user.password = _crypto.default.pbkdf2Sync(password, user.salt, 1000, 64, 'sha512').toString('hex');
}; // eslint-disable-next-line prefer-arrow-callback


userSchema.pre('save',
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(next) {
    var user;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            user = this;
            this.setPassword(user.password);
            next();

          case 3:
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

var User = _mongoose.default.model('User', userSchema); // User.create({
//   email: 'ebenk@useremail.com',
//   password: 'password',
//   firstname: 'Calvin',
//   lastname: 'Taylor',
//   contact: '34334343112',
//   salt: '',
// })
//   .then((u) => {
//     console.log('we have created the user', u);
//   });


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

var _default = User;
exports.default = _default;