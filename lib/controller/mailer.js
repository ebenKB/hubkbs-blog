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

var _mail = _interopRequireDefault(require("@sendgrid/mail"));

/* eslint-disable class-methods-use-this */
// import Nodemailer from 'nodemailer';
var Mailer =
/*#__PURE__*/
function () {
  function Mailer() {
    (0, _classCallCheck2.default)(this, Mailer);
  }

  (0, _createClass2.default)(Mailer, [{
    key: "sendGrid",
    // async sendEmail(clientEmail) {
    //   // send email to client
    //   const options = {
    //     port: '',
    //     host: '',
    //     auth: '',
    //     authMethod: '',
    //   };
    //   let transporter = Nodemailer.createTransport(options);
    // }
    value: function () {
      var _sendGrid = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(client, message) {
        var msg;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _mail.default.setApiKey(process.env.SENDGRID_API_KEY);

                msg = {
                  to: client,
                  from: 'hubkbs@gmail.com',
                  subject: 'Hub KB.S',
                  text: message
                };

                _mail.default.send(msg);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function sendGrid(_x, _x2) {
        return _sendGrid.apply(this, arguments);
      }

      return sendGrid;
    }()
  }]);
  return Mailer;
}();

var _default = new Mailer();

exports.default = _default;