"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _path = _interopRequireDefault(require("path"));

var _cluster = _interopRequireDefault(require("cluster"));

var _os = _interopRequireDefault(require("os"));

var _db = _interopRequireDefault(require("./config/db"));

var _router = _interopRequireDefault(require("../lib/router"));

var _seed = _interopRequireDefault(require("../lib/util/seed"));

// eslint-disable-next-line no-unused-expressions
_seed.default; // check the number cpu cores

var numCPU = _os.default.cpus().length; // require('dotenv').config();


_dotenv.default.config();

_db.default.initDB().catch(function (err) {
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
  var whitelist = ['http://localhost:4200', 'https://hubkbs-blogs.herokuapp.com'];
  var corsOptions = {
    origin: function origin(_origin, callback) {
      if (whitelist.indexOf(_origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  };
  app.use((0, _cors.default)(corsOptions));
  app.use(_bodyParser.default.json());
  app.use(_bodyParser.default.urlencoded({
    extended: false
  }));
  app.use(_express.default.static(_path.default.join(__dirname, '/static')));
  app.get('/', function (req, res) {
    res.send('working api');
  });
  app.use('/api', _router.default);
  var port = process.env.PORT || 8080; // allow server to listen for requests

  app.listen(port, function () {
    console.log('the server has started on port : ', port);
  });
}