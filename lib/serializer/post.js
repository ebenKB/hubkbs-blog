"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonapiSerializer = _interopRequireDefault(require("jsonapi-serializer"));

// const options = {
// }
// export default new JSONAPISerializer.Serializer('post', {
//   attributes: ['title', 'body', 'image', 'createdAt', 'updatedAt', 'likes'],
// relationshipMeta:
// });
var _default = new _jsonapiSerializer.default.Serializer('post', {
  attributes: ['title', 'body', 'image', 'createdAt', 'updatedAt', 'likes', 'user'],
  user: {
    included: false,
    ref: function ref(post, user) {
      return user.id;
    },
    attributes: ['firstname', 'lastname', 'email', 'contact', 'username'],
    relationshipLinks: ''
  }
});

exports.default = _default;