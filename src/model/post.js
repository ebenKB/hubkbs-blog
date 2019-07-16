import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  body: {
    type: String,
    required: true,
  },

  image: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },

  updatedAt: {
    type: Date,
  },

  likes: [
    {
      type: String,
    },
  ],

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],

  category: {
    type: String,
    default: 'general',
  },

  // subcategory: {
  //   type: String,
  // },

  isActive: {
    type: Boolean,
    default: true,
  },

  isConfirmed: { // whether the post has been approved or not
    type: Boolean,
    default: false,
  },
});

const Post = mongoose.model('Post', postSchema);
export default Post;
