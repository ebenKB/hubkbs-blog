"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cluster = _interopRequireDefault(require("cluster"));

var _os = _interopRequireDefault(require("os"));

var _db = _interopRequireDefault(require("./config/db"));

var _router = _interopRequireDefault(require("../lib/router"));

// import '@babel/polyfill';
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
// import 'regenerator-runtime/runtime';
// import path from 'path';
// import Seed from '../lib/util/seed';
// eslint-disable-next-line no-unused-expressions
// Seed;
// check the number cpu cores
var numCPU = _os.default.cpus().length; // require('dotenv').config();


_dotenv.default.config();

_db.default.initDB().then(function () {
  console.log('Init DB success');
}).catch(function (err) {
  console.log("init DB FAILURE ".concat(err));
});

if (_cluster.default.isMaster) {
  // create a node worker process
  // eslint-disable-next-line no-plusplus
  for (var i = 0; i < numCPU; i++) {
    _cluster.default.fork();
  } // listen to dead child process


  _cluster.default.on('exit', function () {
    _cluster.default.fork(); // replace any dead process

  });
} else {
  // set app defaults
  var app = (0, _express.default)();
  app.use(_bodyParser.default.json());
  app.use('/api', _router.default);
  app.use((0, _cors.default)()); // allow server to listen for requests

  app.listen(8080, function () {
    console.log('the server has started on port : ', 8080, 'CPU cores : ', numCPU);
  });
}