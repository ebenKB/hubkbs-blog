/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable class-methods-use-this */
import jwt from 'jsonwebtoken';
import fs from 'fs';
import UserController from "./user";
import User from '../model/user';

class Auth {
  generateToken(user) {
    return new Promise(async (resolve, reject) => {
      try {
        // const user = await UserController.getAuthuser(u);
        const privateKey = fs.readFileSync('./private.pem', 'utf8');
        const token = jwt.sign({ user }, privateKey, { algorithm: 'HS256', expiresIn: '1hr' });
        resolve(token);
      } catch (err) {
        reject(err);
      }
    });
  }

  verifyToken(token) {
    return new Promise((resolve, reject) => {
      const privateKey = fs.readFileSync('./private.pem', 'utf8');
      jwt.verify(token, privateKey, { algorithm: 'HS256', ignoreExpiration: false }, (err, user) => {
        if (err) {
          reject(err);
        } else {
          resolve(user);
        }
      });
    });
  }

  // isAuthorized(token) {
  //   return new Promise(async (resolve, reject) => {
  //     // verfiy whether the token coming from the front end is valid
  //     const user = await this.verifyToken(token);

  //     // check if the user with the token is a valid user
  //     UserController.getAuthuser(user)
  //       .then((data) => {
  //         if (data) {
  //           resolve(true);
  //         }
  //       }).catch(() => reject(false));
  //   });
  // }

  isAuthorized(req) {
    return new Promise(async (resolve, reject) => {
      const { authorization } = req.headers;
      if (authorization === null || authorization === 'undefined') {
        reject(false);
      } else {
        const token = authorization.split(' ')[1];

        if (token === 'undefined' || token == null) {
          reject(false);
        } else {
          // verfiy whether the token coming from the front end is valid
          const { user } = await this.verifyToken(token);
          console.log('result from the async verify method', user);

          // check if the user with the token is a valid user
          User.findOne({ email: user.email, password: user.password })
            .then(() => {
              resolve(true);
            })
            .catch(() => reject(false));
        }
      }
    });
  }
}
export default new Auth();
