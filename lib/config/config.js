"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// create the congiguration file for the system  critical data
var config = {};

if (process.env.NODE_ENV === 'development') {
  config = {
    port: 8000,
    db: process.env.MONGODB_URI,
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
    bucketName: 'apostlite',
    dirName: 'test',
    region: 'US East (Ohio)'
  };
} else if (process.env.NODE_ENV === 'production') {
  config = {
    port: process.env.port,
    db: process.env.MONGODB_URI,
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
    bucketName: '',
    dirName: 'test',
    region: ''
  };
} else {
  console.log('using default settings');
  config = {
    port: process.env.port,
    db: process.env.MONGODB_URI,
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
    bucketName: 'apostlite',
    dirName: 'test',
    region: 'US East (Ohio)'
  };
}

var _default = config;
exports.default = _default;