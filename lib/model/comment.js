"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var commentSchema = new _mongoose.default.Schema({
  text: {
    type: String,
    required: true
  },
  user: {
    type: _mongoose.default.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now()
  }
});

var Comment = _mongoose.default.model('Comment', commentSchema);

var _default = Comment;
exports.default = _default;