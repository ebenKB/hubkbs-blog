"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var postSchema = new _mongoose.default.Schema({
  slug: {
    type: String // unique: true,

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
  // subcategory: {
  //   type: String,
  // },
  isActive: {
    type: Boolean,
    default: true
  },
  isConfirmed: {
    // whether the post has been approved or not
    type: Boolean,
    default: false
  }
}); // eslint-disable-next-line func-names
// postSchema.pre('save', function () {
//   // const post = this;
//   // post.slug = post.title.toLowercase().replace(' ', '-').tirm().replace('_', '-');
//   console.log('we are in the pre save of post and this is the slug');
// });

var Post = _mongoose.default.model('Post', postSchema);

postSchema.pre('save', function () {
  // const post = this;
  // post.slug = post.title.toLowercase().replace(' ', '-').tirm().replace('_', '-');
  console.log('we are in the pre save of post and this is the slug');
});
var _default = Post;
exports.default = _default;