"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cluster = _interopRequireDefault(require("cluster"));

var _os = _interopRequireDefault(require("os"));

var _db = _interopRequireDefault(require("./config/db"));

var _router = _interopRequireDefault(require("../lib/router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import path from 'path';
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
  app.listen(4040, function () {
    console.log('the server has started on port : ', 4040, 'CPU cores : ', numCPU);
  });
}