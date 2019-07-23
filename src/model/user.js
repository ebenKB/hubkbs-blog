/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable prefer-promise-reject-errors */
import mongoose from 'mongoose';
import crypto from 'crypto';
// import config from '../config/config';

const userSchema = new mongoose.Schema({

  contact: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  firstname: {
    type: String,
  },

  lastname: {
    type: String,
  },

  password: {
    type: String,
  },

  salt: {
    type: String,
  },

  // this indicates whether the user is active or blocked 0 = blocked, 1 = active, 2 = pending
  status: {
    type: String,
    default: 2,
  },

  type: {
    type: String,
    default: 'regular',
  },

  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
  ],

  image: {
    type: String,
  },

});

userSchema.statics.isValidPassword = function (oldPass, newPass, salt) {
  const hash = crypto.pbkdf2Sync(newPass, salt, 1000, 64, 'sha512').toString('hex');
  // console.log('this is the new hash = ', hash, 'and this is the password', oldPass);
  return oldPass === hash;
};

userSchema.methods.setPassword = function (password) {
  const user = this;
  // create a unique salt for every user
  user.salt = crypto.randomBytes(16).toString('hex');

  // hash the user's password using the salt
  user.password = crypto.pbkdf2Sync(password, user.salt, 1000, 64, 'sha512').toString('hex');
};

// eslint-disable-next-line prefer-arrow-callback
userSchema.pre('save', async function (next) {
  const user = this;
  this.setPassword(user.password);
  next();
});

const User = mongoose.model('User', userSchema);
// User.create({
//   email: 'ebenk@useremail.com',
//   password: 'password',
//   firstname: 'Calvin',
//   lastname: 'Taylor',
//   contact: '34334343112',
//   salt: '',
// })
//   .then((u) => {
//     console.log('we have created the user', u);
//   });

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

export default User;
