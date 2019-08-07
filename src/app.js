import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import cluster from 'cluster';
import os from 'os';
import db from './config/db';
import Router from '../lib/router';
import Seed from '../lib/util/seed';

// eslint-disable-next-line no-unused-expressions
Seed;

// check the number cpu cores
const numCPU = os.cpus().length;

// require('dotenv').config();
dotenv.config();
db.initDB()
  .catch((err) => {
    console.log(`init DB FAILURE ${err}`);
  });

if (cluster.isMaster) {
  // create a node worker process
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < numCPU; i++) {
    cluster.fork();
  }

  // listen to dead child process
  cluster.on('exit', () => {
    cluster.fork(); // replace any dead process
  });
} else {
  // set app defaults
  const app = express();

  const whitelist = ['http://localhost:4200', 'https://hubkbs-blogs.herokuapp.com', 'https://hubkbsblogs.herokuapp.com'];
  const corsOptions = {
    origin(origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        // callback(new Error('Not allowed by CORS'));
        callback('NOT ALLOWED BY CORS');
      }
    },
  };
  app.use(cors(corsOptions));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.static(path.join(__dirname, '/static')));

  app.get('/', (req, res) => {
    res.send('working api');
  });

  app.use('/api', Router);

  const port = process.env.PORT || 8080;
  // allow server to listen for requests
  app.listen(port, () => {
    console.log('the server has started on port : ', port);
  });
}
