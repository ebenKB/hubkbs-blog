/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable class-methods-use-this */
import User from '../model/user';
import Mailer from './mailer';
import Auth from './auth';

class UserController {
  getUsers() {
    return new Promise((resolve, reject) => {
      User.find()
        .then((users) => {
          resolve(users);
        })
        .catch((err) => {
          reject('Could not fetch users', err);
        });
    });
  }

  getUser(_id) {
    return new Promise((resolve, reject) => {
      if (_id == null) {
        reject('ID cannot be empty');
      } else {
        User.find({ _id })
          .then((user) => {
            resolve(user);
          })
          .catch((err) => {
            reject('Could not get user', err);
          });
      }
    });
  }

  getOneUser() {
    return new Promise((resolve, reject) => {
      User.findOne()
        .then((user) => {
          resolve(user);
        })
        .catch(err => reject(err));
    });
  }

  getUserByEmail(email) {
    return new Promise((resolve, reject) => {
      User.findOne({ email })
        .then(user => resolve(user))
        .catch(err => reject(err));
    });
  }

  getAuthuser({ email, password }) {
    console.log('trying to find an auth user', email, password);
    return new Promise((resolve, reject) => {
      User.findOne({ email }, '_id firstname lastname password status type email salt')
        .then((user) => {
          if (user) {
            if (User.isValidPassword(user.password, password, user.salt)) {
              resolve(user);
            } else {
              reject('invalid credentials');
            }
          } else reject('credentials do not match');
        }).catch(err => reject(err));
    });
  }

  createUser(user) {
    return new Promise((resolve, reject) => {
      if (user == null) {
        reject('You did not provide a user to create');
      } else {
        User.create(user)
          .then(async (created) => {
            // send a confirmation link to the user
            // eslint-disable-next-line no-underscore-dangle
            const msg = await this._buildConfirmMsg(created);
            Mailer.sendGrid(created.email, msg);
            resolve(created);
          })
          .catch((err) => {
            reject(err);
          });
      }
    });
  }

  deleteUser(id) {
    return new Promise((resolve, reject) => {
      if (id == null) {
        reject('Id cannot be empty');
      } else {
        User.findByIdAndDelete(id)
          .then((data) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      }
    });
  }

  updateUser(_id, newUser) {
    return new Promise((resolve, reject) => {
      if (_id == null) {
        reject('Id cannot be empty');
      } else {
        User.findByIdAndUpdate(_id, newUser, { new: true })
          .then((data) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      }
    });
  }

  _buildConfirmMsg(user) {
    return new Promise(async (resolve, reject) => {
      try {
        const token = await Auth.generateToken(user);
        const msg = 'Congratulations!!! You are almost done with your registration. Please follow this link to complete your'
                  + `account https://ebb6f6fc.ngrok.io/api/v1/users/confirm/${token}`;
        resolve(msg);
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default new UserController();
