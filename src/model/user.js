import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({

  contact: [String],

  email: {
    type: String,
    required: true,
    unique: true,
  },

  username: {
    type: String,
    required: true,
    unique: true,
  },
});

const User = mongoose.model('User', userSchema);

userSchema.statics.isExisting = username => new Promise((resolve, reject) => {
  User.find({ username })
    .then((data) => {
      if (data && data.length > 0) {
        resolve(data);
      }
    })
    .catch((err) => {
      reject(err);
    });
});

const seedUser = {
  username: 'admin',
  email: 'admin@email.com',
  contact: ['+233456787654'],
};
export default User;
