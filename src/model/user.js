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

  // username: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },

  firstname: {
    type: String,
  },

  lastname: {
    type: String,
  },

  password: {
    type: String,
  },

  // this indicates whether the user is active or blocked 0 = blocked, 1 = active
  status: {
    type: String,
    default: 1,
  },

  type: {
    type: String,
    default: 'regular',
  },
});

const hashPass = pass => new Promise((resolve, reject) => {
  if (pass == null || pass === 'undefined') {
    reject('Nothing provided to hash function');
  }
  const secret = 'abcdef';
  const hash = crypto.createHmac('sha256', secret).update(pass).digest('hex');
  resolve(hash);
  console.log('we are done hashing', hash);
});

// eslint-disable-next-line prefer-arrow-callback
userSchema.pre('save', async function (next) {
  const user = this;
  const newPass = await hashPass('sada');
  user.password = newPass;
  console.log('we have to check your password in pre...', user);
  next();
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

// userSchema.statics.validatePassword = pass => new Promise((resolve, reject) => {

// });

// eslint-disable-next-line no-shadow
userSchema.statics.validatePassword = function (hashPass) {
  return new Promise((resolve, reject) => {
    if (hashPass == null) {
      reject('no password provided to decode');
    }
    const pass = this.password;
  });
};

export default User;
