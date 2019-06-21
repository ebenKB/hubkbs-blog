"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _post = _interopRequireDefault(require("./routes/post"));

var _comment = _interopRequireDefault(require("./routes/comment"));

var _user = _interopRequireDefault(require("./routes/user"));

var _category = _interopRequireDefault(require("./routes/category"));

var _auth = _interopRequireDefault(require("./routes/auth"));

var apiRouter = _express.default.Router(); // initialize the user routes


var postRoute = new _post.default(apiRouter);
var commentRoute = new _comment.default(apiRouter);
var userRoute = new _user.default(apiRouter);
var catRoute = new _category.default(apiRouter);
var authRoute = new _auth.default(apiRouter);
postRoute.PostRoutes();
commentRoute.CommentRoutes();
userRoute.UserRoutes();
catRoute.CategoryRoutes();
authRoute.AuthRoutes();
var _default = apiRouter;
exports.default = _default;