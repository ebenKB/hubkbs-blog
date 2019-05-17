"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var authorSchema = new _mongoose.default.Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  }
});

var Author = _mongoose.default.model('Author', authorSchema);

var _default = Author;
exports.default = _default;