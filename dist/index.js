"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function suite(nodes, inner) {
  if (nodes.length === 1) {
    describe(nodes.shift(), inner);
  } else if (nodes.length > 1) {
    describe(nodes.shift(), function () {
      suite(nodes, inner);
    });
  }
}

var _default = suite;
exports["default"] = _default;