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

  salt: {
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

// const hashPass = pass => new Promise((resolve, reject) => {
//   if (pass == null || pass === 'undefined') {
//     reject('Nothing provided to hash function');
//   }
//   // const secret = 'abcdef';
//   // const hash = crypto.createHmac('sha256', secret).update(pass).digest('hex');
//   resolve(hash);
// });

userSchema.statics.isValidPassword = function (oldPass, newPass, salt) {
  // const secret = 'abcdef';
  // const hash = crypto.createHmac('sha256', secret).update(pass).digest('hex');
  // console.log('this is the new hash', hash);
  // if (this.password === hash) {
  //   console.log('the two hashes are the same');
  // } else {
  //   console.log('the hashes are not the sames');
  // }
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

  // const newPass = await hashPass(user.password);
  // user.password = newPass;
  // console.log('we have to check your password in pre...', user);
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

// userSchema.statics.validatePassword = pass => new Promise((resolve, reject) => {

// });

// eslint-disable-next-line no-shadow
// userSchema.statics.validatePassword = function (hashPass) {
//   return new Promise((resolve, reject) => {
//     if (hashPass == null) {
//       reject('no password provided to decode');
//     }
//     const pass = this.password;
//   });
// };

export default User;
