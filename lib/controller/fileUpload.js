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
}); // const upload = () => {
//   const d = multer({
//     storage,
//   });
//   return d;
// };


var upload = function upload(fieldName) {
  var d = (0, _multer.default)({
    storage: storage
  }).single(fieldName);
  return d;
};

var doSingleUpload = function doSingleUpload(req, res, fieldName) {
  return new Promise(function (resolve, reject) {
    var multerUpload = upload(fieldName);
    multerUpload(req, res, function (err) {
      if (err instanceof _multer.default.MulterError) {
        reject(err);
      } else if (err) {
        reject(err);
      } else {
        resolve(req);
      }
    });
  });
};

var _default = doSingleUpload;
exports.default = _default;