"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _post = _interopRequireDefault(require("../controller/post"));

var _post2 = _interopRequireDefault(require("../serializer/post"));

var _fileUpload = _interopRequireDefault(require("../util/fileUpload"));

var _s3Uploader = _interopRequireDefault(require("../util/s3Uploader"));

var _auth = _interopRequireDefault(require("../controller/auth"));

/* eslint-disable no-underscore-dangle */
var PostRoute =
/*#__PURE__*/
function () {
  function PostRoute(apiRouter) {
    (0, _classCallCheck2.default)(this, PostRoute);
    this.router = apiRouter;
    this.PostRoutes();
  }

  (0, _createClass2.default)(PostRoute, [{
    key: "PostRoutes",
    value: function PostRoutes() {
      this.router.get('/v1/posts',
      /*#__PURE__*/
      function () {
        var _ref = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee(req, res) {
          var options, _req$query, page, limit, isConfirmed, post;

          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  options = {
                    page: 1,
                    limit: 10,
                    isConfirmed: true
                  }; // get the paging options from the req query params

                  _req$query = req.query, page = _req$query.page, limit = _req$query.limit, isConfirmed = _req$query.isConfirmed;

                  if (limit && parseInt(limit) > 10) {
                    options.limit = parseInt(limit);
                  }

                  if (page && parseInt(page) > 1) {
                    options.page = parseInt(page);
                  }

                  if (isConfirmed) {
                    options.isConfirmed = isConfirmed;
                  } // fetch the posts


                  _context.prev = 5;
                  _context.next = 8;
                  return _post.default.getPosts(options);

                case 8:
                  post = _context.sent;
                  res.status(200).json({
                    post: post
                  });
                  _context.next = 15;
                  break;

                case 12:
                  _context.prev = 12;
                  _context.t0 = _context["catch"](5);
                  res.status(501).json({
                    err: _context.t0
                  });

                case 15:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[5, 12]]);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
      this.router.get('/v1/posts/:id',
      /*#__PURE__*/
      function () {
        var _ref2 = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee2(req, res) {
          var id, post;
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  id = req.params.id;
                  _context2.next = 3;
                  return _post.default.getPost(id);

                case 3:
                  post = _context2.sent;
                  // serialize the response
                  // const jsonapiData = Serializer.serialize(posts);
                  res.status(200).json({
                    post: post
                  });

                case 5:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      }());
      this.router.post('/v1/posts',
      /*#__PURE__*/
      function () {
        var _ref3 = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee3(req, res) {
          var reqData, newPost, data;
          return _regenerator.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return _auth.default.isAuthorized(req);

                case 2:
                  if (!_context3.sent) {
                    _context3.next = 20;
                    break;
                  }

                  _context3.prev = 3;
                  _context3.next = 6;
                  return (0, _fileUpload.default)(req, res, 'post[image]');

                case 6:
                  reqData = _context3.sent;
                  newPost = reqData.body.post;
                  _context3.next = 10;
                  return _s3Uploader.default.uploadToS3(reqData.file.path, reqData.file.filename);

                case 10:
                  data = _context3.sent;
                  newPost.image = data.Location; // creat a new post

                  _post.default.createPost(newPost).then(function (post) {
                    res.status(200).send({
                      post: post
                    });
                  }).catch(function (err) {
                    res.status(501).json({
                      err: err
                    });
                  });

                  _context3.next = 18;
                  break;

                case 15:
                  _context3.prev = 15;
                  _context3.t0 = _context3["catch"](3);
                  res.status(501).json({
                    err: _context3.t0
                  });

                case 18:
                  _context3.next = 21;
                  break;

                case 20:
                  res.status(401).json('Access denied');

                case 21:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, null, [[3, 15]]);
        }));

        return function (_x5, _x6) {
          return _ref3.apply(this, arguments);
        };
      }());
      this.router.put('/v1/posts/:id',
      /*#__PURE__*/
      function () {
        var _ref4 = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee4(req, res) {
          var reqData, post, data;
          return _regenerator.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return _auth.default.isAuthorized(req);

                case 2:
                  if (!_context4.sent) {
                    _context4.next = 16;
                    break;
                  }

                  _context4.next = 5;
                  return (0, _fileUpload.default)(req, res, 'post[image]');

                case 5:
                  reqData = _context4.sent;
                  post = reqData.body.post;

                  if (!post.likes) {
                    post.likes = [];
                  }

                  if (!reqData.file) {
                    _context4.next = 13;
                    break;
                  }

                  _context4.next = 11;
                  return _s3Uploader.default.uploadToS3(reqData.file.path, reqData.file.filename);

                case 11:
                  data = _context4.sent;
                  post.image = data.Location;

                case 13:
                  _post.default.updatePost(req.params.id, post).then(function (created) {
                    res.status(200).json({
                      post: created
                    });
                  }).catch(function (err) {
                    res.status(501).json({
                      err: err
                    });
                  });

                  _context4.next = 17;
                  break;

                case 16:
                  res.status(401).json('Access Denied');

                case 17:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        return function (_x7, _x8) {
          return _ref4.apply(this, arguments);
        };
      }());
      this.router.delete('/v1/posts/:id',
      /*#__PURE__*/
      function () {
        var _ref5 = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee5(req, res) {
          return _regenerator.default.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return _auth.default.isAuthorized(req);

                case 2:
                  if (!_context5.sent) {
                    _context5.next = 6;
                    break;
                  }

                  console.log('deleting post');
                  _context5.next = 7;
                  break;

                case 6:
                  res.status(401).json('Access Denied');

                case 7:
                  console.log('we want to delete a post');

                case 8:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function (_x9, _x10) {
          return _ref5.apply(this, arguments);
        };
      }());
    }
  }], [{
    key: "sendSuccess",
    value: function sendSuccess(data, res) {
      var jsonapiData = _post2.default.serialize(data);

      res.status(200).json(jsonapiData);
    }
  }, {
    key: "reportError",
    value: function reportError(msg, res) {
      res.status(500).json(msg);
    }
  }]);
  return PostRoute;
}();

var _default = PostRoute;
exports.default = _default;