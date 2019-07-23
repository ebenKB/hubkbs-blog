"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _user = _interopRequireDefault(require("../controller/user"));

var _user2 = _interopRequireDefault(require("../serializer/user"));

var _auth = _interopRequireDefault(require("../controller/auth"));

/* eslint-disable no-underscore-dangle */
var UserRoute =
/*#__PURE__*/
function () {
  function UserRoute(apiRouter) {
    (0, _classCallCheck2.default)(this, UserRoute);
    this.router = apiRouter;
    this.UserRoutes();
  }

  (0, _createClass2.default)(UserRoute, [{
    key: "UserRoutes",
    value: function UserRoutes() {
      this.router.get('/v1/users', function (req, res) {
        _user.default.getUsers().then(function (users) {
          // const jsonapiData = Serializer.serialize(data);
          res.status(200).send({
            users: users
          });
        }).catch(function (err) {
          res.status(500).json({
            error: err
          });
        });
      });
      this.router.post('/v1/users/confirm/:token', function (req, res) {
        var token = req.token;

        _auth.default.verifyToken(token).then(function () {
          console.log('the token has been verified');
        }).catch(function (err) {
          console.log('an eerror occured while verifying the token', err);
        });

        res.send({
          token: token
        });
      });
      this.router.get('/v1/users/confirm/:token',
      /*#__PURE__*/
      function () {
        var _ref = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee(req, res) {
          var token, _ref2, user;

          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  token = req.params.token;
                  _context.prev = 1;
                  _context.next = 4;
                  return _auth.default.verifyToken(token);

                case 4:
                  _ref2 = _context.sent;
                  user = _ref2.user;
                  user.status = 1; // update the user's account to confirmed

                  _user.default.updateUser(user._id, user).then(function () {
                    return res.redirect('https://hubkbs-blogs.herokuapp.com/login');
                  });

                  _context.next = 13;
                  break;

                case 10:
                  _context.prev = 10;
                  _context.t0 = _context["catch"](1);
                  console.log('an eerror occured while verifying the token', _context.t0.message);

                case 13:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[1, 10]]);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
      this.router.get('/v1/users/:id', function (req, res) {
        _user.default.getUser(req.params.id).then(function (user) {
          // const jsonapiData = Serializer.serialize(user);
          res.status(200).json({
            user: user
          });
        }).catch(function () {
          res.status(500).json('sorry! an error occured while fetching records');
        });
      });
      this.router.post('/v1/users', function (req, res) {
        var user = req.body.user;

        _user.default.createUser(user).then(function (data) {
          res.json({
            user: data
          });
        }).catch(function (err) {
          res.status(500).json({
            err: err
          });
        });
      });
      this.router.put('/v1/user', function (req, res) {
        var user = req.body.user;

        _user.default.updateUser(user).then(function (data) {
          var jsonapiData = _user2.default.serialize(data);

          res.status(200).send(jsonapiData);
        }).catch(function (err) {
          res.status(500).json({
            err: err
          });
        });
      });
      this.router.delete('/v1/user', function (req, res) {
        _user.default.deleteUser({
          req: req
        }).then(function (data) {
          var jsonapiData = _user2.default.serialize(data);

          res.status(200).json(jsonapiData);
        }).catch(function (err) {
          res.status(500).json({
            err: err
          });
        });
      });
    }
  }]);
  return UserRoute;
}();

var _default = UserRoute;
exports.default = _default;