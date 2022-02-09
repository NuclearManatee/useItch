"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useItch;

var _react = require("react");

var _ItchContext = _interopRequireDefault(require("./ItchContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useItch() {
  return (0, _react.useContext)(_ItchContext.default);
}