"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _faker = _interopRequireDefault(require("faker"));

var _post = _interopRequireDefault(require("../model/post"));

var _category = _interopRequireDefault(require("../model/category"));

var _subcategory = _interopRequireDefault(require("../model/subcategory"));

var _comment = _interopRequireDefault(require("../model/comment"));

var _user = _interopRequireDefault(require("../model/user"));

var _author = _interopRequireDefault(require("../model/author"));

var _post2 = _interopRequireDefault(require("../controller/post"));

/* eslint-disable no-underscore-dangle */
var Author = {
  username: _faker.default.name.firstName(),
  email: _faker.default.internet.email(),
  contact: '+233456787654',
  firstname: _faker.default.name.lastName(),
  lastname: _faker.default.name.firstName(),
  password: 'password'
};
var Post = {
  title: _faker.default.lorem.sentence(),
  body: _faker.default.lorem.paragraphs(5),
  image: _faker.default.internet.avatar()
};
var Category = {
  name: _faker.default.commerce.product()
}; // async function createSubCategory() {
//   return new Promise((resolve, reject) => {
//     const subcat = {
//       name: Faker.lorem.word(),
//     };
//     SubcatModel.create(subcat)
//       .then((data) => {
//         resolve(data);
//       })
//       .catch(err => reject(err));
//   });
// }

_category.default.create(Category).then(
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(data) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // const sub = await createSubCategory();
            // data.subcategories.push(sub.name);
            data.save();
            console.log('we have created a new category', data);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}()); // AuthorModel.create(Author)
//   .then((created) => {
//     Post.author = created._id;
//     PostModel.create(Post)
//       .then((createdPost) => {
//         console.log('we have created a new post', createdPost);
//       });
//   });
// create an author for a post


function createUser() {
  return _createUser.apply(this, arguments);
} // create an author for a post
// async function createAuthor() {
//   return new Promise((resolve, reject) => {
//     AuthorModel.create(Author)
//       .then((created) => {
//         resolve(created);
//       })
//       .catch(err => reject(err));
//   });
// }
// create comment and attach users to comments


function _createUser() {
  _createUser = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3() {
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", new Promise(function (resolve, reject) {
              _user.default.create(Author).then(function (created) {
                resolve(created);
              }).catch(function (err) {
                return reject(err);
              });
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _createUser.apply(this, arguments);
}

function createComment() {
  return _createComment.apply(this, arguments);
} // create post with author


function _createComment() {
  _createComment = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee4() {
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", new Promise(function (resolve, reject) {
              // find a user from the database
              _user.default.findOne().then(function (user) {
                var Comment = {
                  text: _faker.default.lorem.sentence(),
                  user: user
                };

                _comment.default.create(Comment).then(function (crcom) {
                  resolve(crcom._id);
                }).catch(function (err) {
                  return reject(err);
                });
              });
            }));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _createComment.apply(this, arguments);
}

function createPost() {
  return _createPost.apply(this, arguments);
} // create post and save comment to the post


function _createPost() {
  _createPost = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee6() {
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt("return", new Promise(
            /*#__PURE__*/
            function () {
              var _ref3 = (0, _asyncToGenerator2.default)(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee5(resolve, reject) {
                var Athr;
                return _regenerator.default.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.next = 2;
                        return createUser();

                      case 2:
                        Athr = _context5.sent;
                        Post.author = Athr._id; // create the post

                        _post.default.create(Post).then(function (cr) {
                          resolve(cr);
                        }).catch(function (err) {
                          return reject(err);
                        });

                      case 5:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));

              return function (_x3, _x4) {
                return _ref3.apply(this, arguments);
              };
            }()));

          case 1:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _createPost.apply(this, arguments);
}

createPost().then(
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(crPost) {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.t0 = crPost.comments;
            _context2.next = 3;
            return createComment();

          case 3:
            _context2.t1 = _context2.sent;

            _context2.t0.push.call(_context2.t0, _context2.t1);

            crPost.save().then(function (data) {
              console.log('we created a new post', data);
            });

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}()); // eslint-disable-next-line wrap-iife
// (function () {
//   PostModel.find()
//     .then((data) => {
//       // eslint-disable-next-line no-param-reassign
//       data.map((d) => {
//         // eslint-disable-next-line no-param-reassign
//         d.image = 'https://apostlite.s3.amazonaws.com/hubkbs-blog/1561631920226-ember-map.jpg';
//         d.save();
//       });
//     });
// })();