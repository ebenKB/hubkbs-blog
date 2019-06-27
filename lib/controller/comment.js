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

var _comment = _interopRequireDefault(require("../model/comment"));

/* eslint-disable prefer-promise-reject-errors */

/* eslint-disable class-methods-use-this */
var CommentController =
/*#__PURE__*/
function () {
  function CommentController() {
    (0, _classCallCheck2.default)(this, CommentController);
  }

  (0, _createClass2.default)(CommentController, [{
    key: "getComments",
    // retrieve all comments
    value: function () {
      var _getComments = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  _comment.default.find().then(function (c) {
                    resolve(c);
                  }).catch(function () {
                    reject('an error occured while fetching comments');
                  });
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getComments() {
        return _getComments.apply(this, arguments);
      }

      return getComments;
    }()
  }, {
    key: "getComment",
    value: function () {
      var _getComment = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(_id) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                  if (_id == null || _id === 'undefined') {
                    reject('ID cannot be empty');
                  }

                  _comment.default.findById(_id) // .populate('user')
                  // .exec()
                  .then(function (c) {
                    resolve(c);
                  }).catch(function () {
                    return reject('an errored while fetching comment');
                  });
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getComment(_x) {
        return _getComment.apply(this, arguments);
      }

      return getComment;
    }()
  }, {
    key: "createComment",
    value: function () {
      var _createComment = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(comment) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", new Promise(function (resolve, reject) {
                  if (comment == null || comment === 'undefined') {
                    reject('Comment cannot be empty. Provide a comment to create');
                  }

                  _comment.default.create(comment).then(function (d) {
                    resolve(d);
                  }).catch(function () {
                    return reject('an error occured while creating comment');
                  });
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function createComment(_x2) {
        return _createComment.apply(this, arguments);
      }

      return createComment;
    }()
  }, {
    key: "deleteComment",
    value: function () {
      var _deleteComment = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(_id) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", new Promise(function (resolve, reject) {
                  if (_id == null || _id === 'undefine') {
                    reject('ID cannot be empty.');
                  }

                  _comment.default.findByIdAndDelete(_id).then(function (d) {
                    resolve(d);
                  }).catch(function () {
                    return reject('an error occured while deleting the record');
                  });
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function deleteComment(_x3) {
        return _deleteComment.apply(this, arguments);
      }

      return deleteComment;
    }()
  }, {
    key: "updateComment",
    value: function () {
      var _updateComment = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(_id, newComment) {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", new Promise(function (resolve, reject) {
                  if (_id == null || _id === 'undefined' || newComment == null || newComment === 'undefined') {
                    reject(function () {
                      return 'invalid parameters. Please make sure you provide all the params';
                    });
                  }

                  _comment.default.findByIdAndUpdate(_id, newComment).then(function (d) {
                    resolve(d);
                  }).catch(function () {
                    return 'an error occured while update the comment';
                  });
                }));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function updateComment(_x4, _x5) {
        return _updateComment.apply(this, arguments);
      }

      return updateComment;
    }()
  }]);
  return CommentController;
}();

var _default = new CommentController();

exports.default = _default;