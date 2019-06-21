"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var subcatSchema = new _mongoose.default.Schema({
  name: {
    type: String
  }
});

var Subcategory = _mongoose.default.model('Subcategory', subcatSchema);

var _default = Subcategory;
exports.default = _default;