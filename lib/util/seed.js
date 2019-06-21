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

/* eslint-disable no-underscore-dangle */
// const Author = {
//   firstname: Faker.name.lastName(),
//   lastname: Faker.name.firstName(),
// };
var Author = {
  username: _faker.default.name.firstName(),
  email: _faker.default.internet.email(),
  contact: '+233456787654',
  firstname: _faker.default.name.lastName(),
  lastname: _faker.default.name.firstName()
};
var Post = {
  title: _faker.default.lorem.sentence(),
  body: _faker.default.lorem.paragraphs(5),
  image: _faker.default.internet.avatar()
};
var Category = {
  name: _faker.default.commerce.product() // subcategories: ['Romance', 'Sports', 'Adventure', 'Biblical'],

}; // async function createSubCategory() {
//   return new Promise((resolve, reject) => {
//     const subcat = {
//       name: Faker.lorem.word(),
//     };
//     SubcatModel.create(subcat)
//       .then((data) => {
//         console.log('created a sub category', subcat);
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
            // data.save();
            console.log('we have created a new category', data);

          case 1:
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
  _regenerator.default.mark(function _callee2() {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              _user.default.create(Author).then(function (created) {
                resolve(created);
              }).catch(function (err) {
                return reject(err);
              });
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _createUser.apply(this, arguments);
}

function createComment() {
  return _createComment.apply(this, arguments);
} // create post with author
// async function createPost() {
//   return new Promise(async (resolve, reject) => {
//     const Athr = await createUser();
//     Post.author = Athr._id;
//     // create the post
//     PostModel.create(Post)
//       .then((cr) => {
//         resolve(cr);
//       })
//       .catch(err => reject(err));
//   });
// }
// create post and save comment to the post
// createPost()
//   .then(async (crPost) => {
//     crPost.comments.push(await createComment());
//     crPost.save()
//       .then((data) => {
//         console.log('we created a new post', data);
//       });
//   });


function _createComment() {
  _createComment = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3() {
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", new Promise(function (resolve, reject) {
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
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _createComment.apply(this, arguments);
}