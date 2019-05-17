// establish a databse connection

import mongoose from 'mongoose';

import config from './config';

const db = {};
db.initDB = () => new Promise((resolve, reject) => {
  mongoose.connect(config.db, { useNewUrlParser: true })
    .then((data) => {
      console.log('Database Connection is successful...');
      resolve(data);
    })
    .catch((err) => {
      console.log('An error occured while connecting to the database.');
      reject(new Error(`Unable to connect to the database ${err}`));
    });
});

export default db;
