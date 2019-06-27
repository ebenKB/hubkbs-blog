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

var _comment = _interopRequireDefault(require("../controller/comment"));

var _fileUpload = _interopRequireDefault(require("../util/fileUpload"));

var CommentRoute =
/*#__PURE__*/
function () {
  function CommentRoute(apiRouter) {
    (0, _classCallCheck2.default)(this, CommentRoute);
    this.router = apiRouter;
    this.CommentRoutes();
  }

  (0, _createClass2.default)(CommentRoute, [{
    key: "CommentRoutes",
    value: function CommentRoutes() {
      this.router.get('/v1/comments',
      /*#__PURE__*/
      function () {
        var _ref = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee(req, res) {
          var comments;
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _comment.default.getComments();

                case 2:
                  comments = _context.sent;
                  res.status(200).json({
                    comments: comments
                  });

                case 4:
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
      this.router.get('/v1/comments/:id',
      /*#__PURE__*/
      function () {
        var _ref2 = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee2(req, res) {
          var id, comment;
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  id = req.params.id;
                  _context2.next = 3;
                  return _comment.default.getComment(id);

                case 3:
                  comment = _context2.sent;
                  res.status(200).json({
                    comment: comment
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
      this.router.post('/v1/comments',
      /*#__PURE__*/
      function () {
        var _ref3 = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee3(req, res) {
          var comment;
          return _regenerator.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  comment = req.body.comment;

                  _comment.default.createComment(comment).then(function (created) {
                    res.status(200).json({
                      comment: created
                    });
                  });

                case 2:
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
    }
  }]);
  return CommentRoute;
}();

var _default = CommentRoute;
exports.default = _default;