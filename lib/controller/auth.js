"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Auth =
/*#__PURE__*/
function () {
  function Auth() {
    (0, _classCallCheck2.default)(this, Auth);
    this.Validator();
  }

  (0, _createClass2.default)(Auth, [{
    key: "Validator",
    value: function Validator() {
      this.isValid(function () {
        return false;
      });
      this.isAuthorized(function (user) {
        return false;
      });
      this.isAuthenticated(function (user) {
        return false;
      });
      this.Authenticate(function (user) {
        // authenticate the user for all requests and return the new Autheticated user
        console.log('we want to authenticate the users');
      });
    }
  }]);
  return Auth;
}();

var _default = new Auth();

exports.default = _default;