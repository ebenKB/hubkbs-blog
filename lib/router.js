"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("./routes/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apiRouter = _express.default.Router(); // initialize the user routes


var userRoute = new _user.default(apiRouter);
userRoute.UserRoutes();
var _default = apiRouter;
exports.default = _default;