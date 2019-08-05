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

var _auth = _interopRequireDefault(require("../controller/auth"));

var _mailer = _interopRequireDefault(require("../controller/mailer"));

/* eslint-disable no-underscore-dangle */
// start comment
// const Author = {
//   username: Faker.name.firstName(),
//   email: Faker.internet.email(),
//   contact: '+233456787654',
//   firstname: Faker.name.lastName(),
//   lastname: Faker.name.firstName(),
//   password: 'password',
// };
// const Post = {
//   title: Faker.lorem.sentence(),
//   body: Faker.lorem.paragraphs(5),
//   image: Faker.internet.avatar(),
// };
// const Category = {
//   name: 'General',
// };
// // async function createSubCategory() {
// //   return new Promise((resolve, reject) => {
// //     const subcat = {
// //       name: Faker.lorem.word(),
// //     };
// //     SubcatModel.create(subcat)
// //       .then((data) => {
// //         resolve(data);
// //       })
// //       .catch(err => reject(err));
// //   });
// // }
// CategoryModel.create(Category)
//   .then(async (data) => {
// const sub = await createSubCategory();
// data.subcategories.push(sub.name);
//   data.save();
//   console.log('we have created a new category', data);
// });
// // AuthorModel.create(Author)
// //   .then((created) => {
// //     Post.author = created._id;
// //     PostModel.create(Post)
// //       .then((createdPost) => {
// //         console.log('we have created a new post', createdPost);
// //       });
// //   });
// // create an author for a post
// async function createUser() {
//   return new Promise((resolve, reject) => {
//     UserModel.create(Author)
//       .then(async (created) => {
//         const msg = await _buildConfirmMsg(created);
//         Mailer.sendGrid('unveilface@gmail.com', msg)
//           .catch((err) => {
//             console.log(err);
//           });
//         resolve(created);
//       })
//       .catch(err => reject(err));
//   });
// }
// // create an author for a post
// // async function createAuthor() {
// //   return new Promise((resolve, reject) => {
// //     AuthorModel.create(Author)
// //       .then((created) => {
// //         resolve(created);
// //       })
// //       .catch(err => reject(err));
// //   });
// // }
// // create comment and attach users to comments
// async function createComment() {
//   return new Promise((resolve, reject) => {
//     // find a user from the database
//     UserModel.findOne()
//       .then((user) => {
//         const Comment = {
//           text: Faker.lorem.sentence(),
//           user,
//         };
//         CommentModel.create((Comment))
//           .then((crcom) => {
//             resolve(crcom._id);
//           })
//           .catch(err => reject(err));
//       });
//   });
// }
// // create post with author
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
// // create post and save comment to the post
// createPost()
//   .then(async (crPost) => {
//     crPost.comments.push(await createComment());
//     crPost.save()
//       .then((data) => {
//         console.log('we created a new post', data);
//       });
//   });
// end comment
// eslint-disable-next-line wrap-iife
// (function () {
//   PostModel.find()
//     .then((data) => {
//       // eslint-disable-next-line no-param-reassign
//       data.map((d) => {
//         // eslint-disable-next-line no-param-reassign
//         // d.image = 'https://apostlite.s3.amazonaws.com/hubkbs-blog/1561631920226-ember-map.jpg';
//         d.isConfirmed = true
//         d.save();
//       });
//     });
// })();
function _buildConfirmMsg(_x) {
  return _buildConfirmMsg2.apply(this, arguments);
}

function _buildConfirmMsg2() {
  _buildConfirmMsg2 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(user) {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", new Promise(
            /*#__PURE__*/
            function () {
              var _ref = (0, _asyncToGenerator2.default)(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee(resolve, reject) {
                var token, msg;
                return _regenerator.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return _auth.default.generateToken(user);

                      case 3:
                        token = _context.sent;
                        msg = 'Congratulations!!! You are almost done with your registration. Please follow this link to complete your' + "account https://046820f3.ngrok.io/api/v1/users/confirm/".concat(token);
                        resolve(msg);
                        _context.next = 11;
                        break;

                      case 8:
                        _context.prev = 8;
                        _context.t0 = _context["catch"](0);
                        reject(_context.t0);

                      case 11:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, null, [[0, 8]]);
              }));

              return function (_x2, _x3) {
                return _ref.apply(this, arguments);
              };
            }()));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _buildConfirmMsg2.apply(this, arguments);
}