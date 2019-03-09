"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonapiSerializer = _interopRequireDefault(require("jsonapi-serializer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = new _jsonapiSerializer.default.Serializer('users', {
  attributes: ['firstName', 'lastName', 'email', 'location', 'course', 'education_level']
});

exports.default = _default;