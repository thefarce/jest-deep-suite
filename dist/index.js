(function(a,b){if("function"==typeof define&&define.amd)define([],b);else if("undefined"!=typeof exports)b();else{b(),a.index={exports:{}}.exports}})("undefined"==typeof globalThis?"undefined"==typeof self?this:self:globalThis,function(){"use strict";define(["exports"],function(a){function b(a,c){1===a.length?describe(a.shift(),c):1<a.length&&describe(a.shift(),function(){b(a,c)})}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=b})});