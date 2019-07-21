"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _faker = _interopRequireDefault(require("faker"));

var _post = _interopRequireDefault(require("../model/post"));

var _category = _interopRequireDefault(require("../model/category"));

var _subcategory = _interopRequireDefault(require("../model/subcategory"));

var _comment = _interopRequireDefault(require("../model/comment"));

var _user = _interopRequireDefault(require("../model/user"));

var _author = _interopRequireDefault(require("../model/author"));

var _post2 = _interopRequireDefault(require("../controller/post"));

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
//   name: Faker.commerce.product(),
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
//     // const sub = await createSubCategory();
//     // data.subcategories.push(sub.name);
//     data.save();
//     console.log('we have created a new category', data);
//   });
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
//       .then((created) => {
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
(function () {
  _post.default.find().then(function (data) {
    // eslint-disable-next-line no-param-reassign
    data.map(function (d) {
      // eslint-disable-next-line no-param-reassign
      // d.image = 'https://apostlite.s3.amazonaws.com/hubkbs-blog/1561631920226-ember-map.jpg';
      d.isConfirmed = true;
      d.save();
    });
  });
})();