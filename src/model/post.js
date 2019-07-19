import mongoose from 'mongoose';
import slug from 'mongoose-slug-generator';

// inject slug into mongoose
mongoose.plugin(slug);

const postSchema = new mongoose.Schema({
  slug: {
    type: String,
    slug: 'title',
    unique: true,
  },

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
    unique: true,
  },

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
