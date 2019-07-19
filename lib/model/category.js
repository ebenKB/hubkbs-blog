"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var catSchema = new _mongoose.default.Schema({
  name: {
    type: String // unique: true,

  },
  subcategories: [{
    type: String,
    unique: true
  }]
});

var Category = _mongoose.default.model('Category', catSchema);

var _default = Category;
exports.default = _default;