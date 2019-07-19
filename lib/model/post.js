"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _mongooseSlugGenerator = _interopRequireDefault(require("mongoose-slug-generator"));

// inject slug into mongoose
_mongoose.default.plugin(_mongooseSlugGenerator.default);

var postSchema = new _mongoose.default.Schema({
  slug: {
    type: String,
    slug: 'title',
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date
  },
  likes: [{
    type: String
  }],
  author: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: 'User'
  },
  comments: [{
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  category: {
    type: String,
    default: 'general',
    unique: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isConfirmed: {
    // whether the post has been approved or not
    type: Boolean,
    default: false
  }
});

var Post = _mongoose.default.model('Post', postSchema);

var _default = Post;
exports.default = _default;