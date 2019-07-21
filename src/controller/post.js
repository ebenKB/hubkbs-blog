/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable class-methods-use-this */

import Post from '../model/post';

class PostController {
  // retrieve all posts from the database
  async getPosts(options) {
    return new Promise((resolve, reject) => {
      Post.find({ isConfirmed: options.isConfirmed })
        .skip((options.page - 1) * options.limit)
        .limit(options.limit)
        .then((posts) => {
          resolve(posts);
        })
        .catch((err) => {
          reject('an error occured while fetching posts', err);
        });
    });
  }

  // find a single post using the post id
  async getPost(_id) {
    return new Promise((resolve, reject) => {
      Post.find({ _id })
        .then((post) => {
          resolve(post);
        })
        .catch((err) => {
          reject('an error occured while fetching the post', err);
        });
    });
  }

  // create a new post
  async createPost(post) {
    return new Promise((resolve, reject) => {
      if (post == null) {
        reject('You cannot create an empty post');
      }
      Post.create(post)
        .then((createdPost) => {
          resolve(createdPost);
        })
        .catch((err) => {
          reject('an error occured while creating the post', err);
        });
    });
  }

  // update an existing post
  async updatePost(_id, newPost) {
    return new Promise((resolve, reject) => {
      if (newPost == null) {
        reject('Sorry new post is empty');
      }
      Post.findByIdAndUpdate(_id, newPost, { new: true })
        .then((updatedPost) => {
          resolve(updatedPost);
        })
        .catch((err) => {
          reject('sorry an error occured while updating the post', err);
        });
    });
  }

  // delete one post
  async deletePost(_id) {
    return new Promise((resolve, reject) => {
      if (_id == null) {
        reject('Id is empty or not defined');
      }
      Post.findByIdAndDelete({ _id })
        .then((deletedPost) => {
          resolve(deletedPost);
        })
        .catch(() => {
          reject('an error occured while deleting the post');
        });
    });
  }
}

export default new PostController();
