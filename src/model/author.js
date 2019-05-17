import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
  firstname: {
    type: String,
  },

  lastname: {
    type: String,
  },
});

const Author = mongoose.model('Author', authorSchema);
export default Author;
