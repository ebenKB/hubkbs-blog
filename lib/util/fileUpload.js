"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _multer = _interopRequireDefault(require("multer"));

// set upload options
var dest = 'static/upload';

var storage = _multer.default.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, dest);
  },
  filename: function filename(req, file, cb) {
    cb(null, "".concat(Date.now(), "-").concat(file.originalname.replace(' ', '-').substr(0, 15)));
  },
  limits: {
    fieldSize: '1MB'
  }
}); // const initMulter = () => new Promise((resolve, reject) => {
//   try {
//     const upload = multer({
//       storage,
//       limits: { fileSize: 10 * 1024 * 1024 },
//     });
//     resolve(upload);
//   } catch (err) {
//     reject(err);
//   }
// });
// upload a file and return the new req from multer


var doSingleUpload = function doSingleUpload(req, res, fieldName) {
  return new Promise(function (resolve, reject) {
    var upload = (0, _multer.default)({
      storage: storage,
      limits: {
        fileSize: 10 * 1024 * 1024
      }
    }).single(fieldName); // check if there is a file and then process file for upload

    console.log('before multer, this is the req ', req);
    upload(req, res, function (err) {
      if (err) {
        console.log('there is an error');
        reject(err);
      } else resolve(req);
    });
  });
}; // const uploadToS3 = () => {
//   console.log('uploading');
// };


var _default = doSingleUpload;
exports.default = _default;