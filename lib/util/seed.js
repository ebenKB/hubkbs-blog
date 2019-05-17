"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _faker = _interopRequireDefault(require("faker"));

var _post = _interopRequireDefault(require("../model/post"));

var _author = _interopRequireDefault(require("../model/author"));

/* eslint-disable no-underscore-dangle */
var Author = {
  firstname: _faker.default.name.lastName(),
  lastname: _faker.default.name.firstName()
};
var Post = {
  title: _faker.default.commerce.department(),
  body: _faker.default.lorem.paragraphs(5),
  image: _faker.default.internet.avatar()
};

_author.default.create(Author).then(function (created) {
  Post.author = created._id;

  _post.default.create(Post).then(function (createdPost) {
    console.log('we have created a new post', createdPost);
  });
});