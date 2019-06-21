"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

var _fs = _interopRequireDefault(require("fs"));

var _config = _interopRequireDefault(require("../config/config"));

/* eslint-disable prefer-promise-reject-errors */

/* eslint-disable class-methods-use-this */
var Uploader =
/*#__PURE__*/
function () {
  function Uploader() {
    (0, _classCallCheck2.default)(this, Uploader);
    this.params = {
      accessKeyId: _config.default.accessKeyId,
      secretAccessKey: _config.default.secretAccessKey
    };
    this.S3 = new _awsSdk.default.S3(this.params);
  }

  (0, _createClass2.default)(Uploader, [{
    key: "uploadToS3",
    value: function uploadToS3(filePath, filename) {
      var s3 = this.S3;
      return new Promise(function (resolve, reject) {
        var file = _fs.default.readFileSync(filePath);

        var options = {
          Bucket: _config.default.bucketName,
          Key: "hubkbs-blog/".concat(filename),
          Body: file
        };
        s3.upload(options, function (err, data) {
          if (err) {
            console.log('an error occured while uploading the file', err);
          } else {
            console.log('the file has been uploaded', data); // remove the file from the direcotry

            try {
              _fs.default.unlinkSync(filePath);

              resolve(data);
            } catch (error) {
              console.log('This is the error', error);
              reject("an error occured while deleting the file ".concat(error));
            }
          }
        });
      });
    }
  }]);
  return Uploader;
}();

var _default = new Uploader();

exports.default = _default;