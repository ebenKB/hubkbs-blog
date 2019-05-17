"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _post = _interopRequireDefault(require("./routes/post"));

var apiRouter = _express.default.Router(); // initialize the user routes


var postRoute = new _post.default(apiRouter);
postRoute.PostRoutes(apiRouter);
var _default = apiRouter;
exports.default = _default;