"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _user = _interopRequireDefault(require("../controller/user"));

var _user2 = _interopRequireDefault(require("../serializer/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserRoute =
/*#__PURE__*/
function () {
  function UserRoute(apiRouter) {
    _classCallCheck(this, UserRoute);

    this.router = apiRouter;
    this.UserRoutes();
  }

  _createClass(UserRoute, [{
    key: "UserRoutes",
    value: function UserRoutes() {
      this.router.get('/v1/user', function (req, res) {
        _user.default.getUsers().then(function (data) {
          // res.send(data);
          var jsonapi = _user2.default.serialize(data);

          res.send(jsonapi);
        });
      }); // START -- use these routes for server rendering only

      this.router.get('/new', function (req, res) {
        res.render('user/new');
      });
      this.router.post('/user', function (req, res) {
        var user = req.body.user;

        _user.default.createUser(user).then(function () {
          console.log('your account has been creatd...');
          res.redirect('/');
        });
      }); // END server routes

      this.router.post('/v1/user', function (req, res) {
        var user = req.body.user;

        _user.default.createUser(user).then(function (data) {
          res.json(data);
        }).catch(function (err) {
          console.log('an error has occured..');
        });
      });
      this.router.put('/v1/user', function (req, res) {
        _user.default.updateUser({
          req: req
        }).then(function (data) {}).catch(function (err) {});
      });
      this.router.delete('/v1/user', function (req, res) {
        _user.default.deleteUser({
          req: req
        }).then(function (data) {}).catch(function (err) {});
      });
    }
  }]);

  return UserRoute;
}();

var _default = UserRoute;
exports.default = _default;