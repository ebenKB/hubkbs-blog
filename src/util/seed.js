/* eslint-disable no-underscore-dangle */
import Faker from 'faker';
import PostModel from '../model/post';
import AuthorModel from '../model/author';

const Author = {
  firstname: Faker.name.lastName(),
  lastname: Faker.name.firstName(),
};

const Post = {
  title: Faker.commerce.department(),
  body: Faker.lorem.paragraphs(5),
  image: Faker.internet.avatar(),
};

AuthorModel.create(Author)
  .then((created) => {
    Post.author = created._id;

    PostModel.create(Post)
      .then((createdPost) => {
        console.log('we have created a new post', createdPost);
      });
  });
