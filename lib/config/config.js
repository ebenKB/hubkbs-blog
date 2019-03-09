"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// import dotenv from 'dotenv'
// create the congiguration file for the system  critical data
var config = {
  port: process.env.port || 8000,
  db: process.env.MONGODB_URI,
  host: '127.0.0.1',
  secret: process.env.secret,
  accessKeyId: process.env.accessKeyId,
  secretAccessKey: process.env.secretAccessKey
};
var _default = config;
exports.default = _default;