"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var userSchema = new _mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  contact: [String],
  email: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  education_level: {
    type: String,
    required: true
  },
  // find out what the user want to achieve at the end of the course
  // and the kind of applications that they want to build
  course: {
    type: String,
    required: true
  },
  objectives: [String]
});

var _default = _mongoose.default.model('User', userSchema);

exports.default = _default;