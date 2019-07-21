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

/* eslint-disable class-methods-use-this */
var Mailer =
/*#__PURE__*/
function () {
  function Mailer() {
    (0, _classCallCheck2.default)(this, Mailer);
  }

  (0, _createClass2.default)(Mailer, [{
    key: "sendEmail",
    value: function () {
      var _sendEmail = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(clientEmail) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function sendEmail(_x) {
        return _sendEmail.apply(this, arguments);
      }

      return sendEmail;
    }()
  }]);
  return Mailer;
}();

var _default = new Mailer();

exports.default = _default;