"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// establish a databse connection
// const uri = 'mongodb+srv://tester:ebentestdb@cluster0-qbc48.mongodb.net/test?retryWrites=true';
var uri = 'mongodb://hubkbs:*.*6095KBADJEi@ds159025.mlab.com:59025/regme';
var db = {};

db.initDB = function () {
  return new Promise(function (resolve, reject) {
    console.log('in the db with :', _config.default.db);

    _mongoose.default.connect(uri, {
      useNewUrlParser: true
    }).then(function (data) {
      console.log('Database Connection is successful...');
      resolve(data);
    }).catch(function (err) {
      console.log('An error occured while connecting to the database.');
      reject(new Error("Unable to connect to the database ".concat(err)));
    });
  });
};

var _default = db;
exports.default = _default;