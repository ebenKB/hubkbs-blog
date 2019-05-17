import monngoose from 'mongoose';

const postSchema = new monngoose.Schema({
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

  likes: {
    type: Number,
    default: 0,
  },

  author: {
    type: monngoose.Schema.Types.ObjectId,
    ref: 'Author',
  },
});

const Post = monngoose.model('Post', postSchema);
export default Post;
