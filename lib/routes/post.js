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
          var posts, jsonapiData;
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _post.default.getPosts();

                case 2:
                  posts = _context.sent;
                  jsonapiData = _post2.default.serialize(posts);
                  res.status(200).json(jsonapiData);

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
      this.router.get('/v1/post/:id',
      /*#__PURE__*/
      function () {
        var _ref2 = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee2(req, res) {
          var id, post, jsonapiData;
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  console.log('we are getting a post with an id ');
                  id = req.params.id;
                  _context2.next = 4;
                  return _post.default.getPost(id);

                case 4:
                  post = _context2.sent;
                  // serialize the response
                  jsonapiData = _post2.default.serialize(post);
                  res.status(200).json(jsonapiData);

                case 7:
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
          return _regenerator.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  console.log('we want to create a post');

                case 1:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
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
          return _regenerator.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  console.log('we want to edit a post');

                case 1:
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
                  console.log('we want to delete a post');

                case 1:
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