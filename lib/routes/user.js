"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _user = _interopRequireDefault(require("../controller/user"));

var _user2 = _interopRequireDefault(require("../serializer/user"));

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
        console.log('you want to create a user');

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