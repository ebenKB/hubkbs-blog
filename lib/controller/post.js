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

var _post = _interopRequireDefault(require("../model/post"));

/* eslint-disable prefer-promise-reject-errors */

/* eslint-disable class-methods-use-this */
var PostController =
/*#__PURE__*/
function () {
  function PostController() {
    (0, _classCallCheck2.default)(this, PostController);
  }

  (0, _createClass2.default)(PostController, [{
    key: "getPosts",
    // retrieve all posts from the database
    value: function () {
      var _getPosts = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  // const include = ['author', 'comments'];
                  _post.default.find().populate('author').populate({
                    path: 'comments',
                    // fetch the user for the comment
                    populate: {
                      path: 'user'
                    }
                  }).exec().then(function (posts) {
                    resolve(posts);
                  }).catch(function (err) {
                    reject('an error occured while fetching posts', err);
                  });
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getPosts() {
        return _getPosts.apply(this, arguments);
      }

      return getPosts;
    }() // find a single post using the post id

  }, {
    key: "getPost",
    value: function () {
      var _getPost = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(_id) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                  // const include = ['comments', 'author'];
                  _post.default.find({
                    _id: _id
                  }).populate('author').populate({
                    path: 'comments',
                    // fetch the user for the comment
                    populate: {
                      path: 'user'
                    }
                  }).exec().then(function (post) {
                    resolve(post);
                  }).catch(function (err) {
                    reject('an error occured while fetching the post', err);
                  });
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getPost(_x) {
        return _getPost.apply(this, arguments);
      }

      return getPost;
    }() // create a new post

  }, {
    key: "createPost",
    value: function () {
      var _createPost = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(post) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", new Promise(function (resolve, reject) {
                  if (post == null) {
                    reject('You cannot create an empty post');
                  }

                  _post.default.create(post).then(function (createdPost) {
                    resolve(createdPost);
                  }).catch(function (err) {
                    console.log(err);
                    reject('an error occured while creating the post', err);
                  });
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function createPost(_x2) {
        return _createPost.apply(this, arguments);
      }

      return createPost;
    }() // update an existing post

  }, {
    key: "updatePost",
    value: function () {
      var _updatePost = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(_id, newPost) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", new Promise(function (resolve, reject) {
                  if (newPost == null) {
                    reject('Sorry new post is empty');
                  }

                  _post.default.findByIdAndUpdate({
                    _id: _id
                  }, newPost, {
                    new: true
                  }).then(function (updatedPost) {
                    resolve(updatedPost);
                  }).catch(function (err) {
                    reject('sorry an error occured while updating the post', err);
                  });
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function updatePost(_x3, _x4) {
        return _updatePost.apply(this, arguments);
      }

      return updatePost;
    }() // delete one post

  }, {
    key: "deletePost",
    value: function () {
      var _deletePost = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(_id) {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", new Promise(function (resolve, reject) {
                  if (_id == null) {
                    reject('Id is empty or not defined');
                  }

                  _post.default.findByIdAndDelete({
                    _id: _id
                  }).then(function (deletedPost) {
                    resolve(deletedPost);
                  }).catch(function () {
                    reject('an error occured while deleting the post');
                  });
                }));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function deletePost(_x5) {
        return _deletePost.apply(this, arguments);
      }

      return deletePost;
    }()
  }]);
  return PostController;
}();

var _default = new PostController();

exports.default = _default;