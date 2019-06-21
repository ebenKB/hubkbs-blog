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
}); // initialize multer
// const upload = (fieldName) => {
//   const d = multer({
//     storage,
//   }).single(fieldName);
//   console.log('this is the d ', d);
//   return d;
// };
// upload a file and return the new req from multer


var doSingleUpload = function doSingleUpload(req, res, fieldName) {
  return new Promise(function (resolve, reject) {
    // const multerUpload = upload(fieldName); // call multer to initialize itself.
    // multerUpload(req, res, (err) => {
    //   if (err instanceof multer.MulterError) {
    //     reject(err);
    //   } else if (err) {
    //     reject(err);
    //   } else {
    //     // console.log('this is request we are resolving: ', req);
    //     resolve(req);
    //   }
    // });
    var upload = (0, _multer.default)({
      storage: storage,
      limits: {
        fileSize: 10 * 1024 * 1024
      }
    }).single(fieldName);
    upload(req, res, function (err) {
      console.log('this is the request', req.body);
      resolve(req);
    });
  });
}; // const uploadToS3 = () => {
//   console.log('uploading');
// };


var _default = doSingleUpload;
exports.default = _default;