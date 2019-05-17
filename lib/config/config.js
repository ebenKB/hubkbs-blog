"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// create the congiguration file for the system  critical data
var config = {
  port: process.env.port || 8000,
  db: process.env.MONGODB_URI,
  host: process.env.host
};
var _default = config;
exports.default = _default;