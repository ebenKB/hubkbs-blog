/* eslint-disable no-underscore-dangle */
import Faker from 'faker';
import PostModel from '../model/post';
import CategoryModel from '../model/category';
import SubcatModel from '../model/subcategory';
import CommentModel from '../model/comment';
import UserModel from '../model/user';
import AuthorModel from '../model/author';
import Auth from '../controller/auth';
import Mailer from '../controller/mailer';


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

async function _buildConfirmMsg(user) {
  return new Promise(async (resolve, reject) => {
    try {
      const token = await Auth.generateToken(user);
      const msg = 'Congratulations!!! You are almost done with your registration. Please follow this link to complete your'
                + `account https://046820f3.ngrok.io/api/v1/users/confirm/${token}`;
      resolve(msg);
    } catch (err) {
      reject(err);
    }
  });
}
