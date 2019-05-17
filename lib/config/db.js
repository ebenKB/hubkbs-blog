"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("./config"));

// establish a databse connection
var db = {};

db.initDB = function () {
  return new Promise(function (resolve, reject) {
    _mongoose.default.connect(_config.default.db, {
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