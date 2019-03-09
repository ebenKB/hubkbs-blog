"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _path = _interopRequireDefault(require("path"));

var _db = _interopRequireDefault(require("./config/db"));

var _router = _interopRequireDefault(require("../lib/router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import ejs from 'ejs';
// require('dotenv').config();
_dotenv.default.config();

_db.default.initDB().then(function () {
  console.log('Init DB success');
}).catch(function (err) {
  console.log("init DB FAILURE ".concat(err));
});

var app = (0, _express.default)(); // eslint-disable-next-line no-bitwise

var port = process.env.PORT || 9000; // parse application/json
// app.use(bodyParser.json());

app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs'); // app.use(express.static(__dirname + '/public'));
// app.use(express.static(path.join(__dirname, '/static')));

app.use(_express.default.static(_path.default.join(__dirname, '../static')));
app.use('/api', _router.default); // app.use('/u', Router);

app.get('/', function (req, res) {
  res.render('../views/index');
});
app.listen(port, function () {
  console.log('The server has started on port: ', port);
});