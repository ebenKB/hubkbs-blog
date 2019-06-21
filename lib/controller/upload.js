"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

var _multer = _interopRequireDefault(require("multer"));

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _config = _interopRequireDefault(require("../config/config"));

/* eslint-disable prefer-template */

/* eslint-disable no-shadow */

/* eslint-disable prefer-promise-reject-errors */

/* eslint-disable class-methods-use-this */
var options = {
  // region: "US East (Ohio)",
  accessKeyId: _config.default.accessKeyId,
  secretAccessKey: _config.default.secretAccessKey
};
var s3 = new _awsSdk.default.S3(options);
var newDest = 'static/upload';

var storage = _multer.default.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, newDest);
  },
  filename: function filename(req, file, cb) {
    var ext = _path.default.extname(file.originalname);

    cb(null, file.originalname.substr(0, 15) + ext);
  }
});

var uploadToS3 = function uploadToS3(file, filename) {
  return new Promise(function (resolve, reject) {
    console.log('called function to upload tp s3');
    var params = {
      Bucket: 'apostlite',
      Key: filename,
      Body: file
    };
    s3.upload(params, function (err, data) {
      if (err) {
        reject(err);
      } else {
        try {
          _fs.default.unlinkSync("static/upload/".concat(filename));
        } catch (err) {
          reject('an error occured while deleting the file' + err);
        }

        resolve(data);
      }
    });
  });
};

var initMulter = function initMulter(fieldName) {
  var upload = (0, _multer.default)({
    storage: storage,
    limits: {
      fileSize: 10 * 1024 * 1024
    },
    fileFilter: function fileFilter(req, file, cb) {
      console.log('this is the file in multer', file);

      var ext = _path.default.extname(file.originalname);

      if (ext === '.pdf') {
        return cb('Only image files are allowed', null);
      }

      return cb(null, true);
    }
  }).single(fieldName);
  return upload;
};

var doUpload = function doUpload(req, res, fieldName) {
  return new Promise(function (resolve, reject) {
    var upload = initMulter(fieldName);
    upload(req, res, function () {
      if (!req.file) {
        console.log('there is no file');
        resolve({
          data: 'There is no file',
          body: req.body,
          hasFile: Boolean(false)
        });
      } else {
        console.log('uploading to s3');

        var file = _fs.default.readFileSync(req.file.path, 'UTF8');

        uploadToS3(file, req.file.filename).then(function (data) {
          resolve({
            data: data,
            body: req.body,
            hasFile: Boolean(true)
          });
        });
      }
    });
  });
};

var S3Obj = {
  doUpload: doUpload
};
var _default = S3Obj;
exports.default = _default;