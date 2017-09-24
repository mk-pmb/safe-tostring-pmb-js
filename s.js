/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';
module.exports = (function () {
  var ops = Object.prototype.toString;
  function toString(x) {
    try {
      return String(x);
    } catch (e) {
      if (e instanceof TypeError) { return ops.call(x); }
      throw e;
    }
  }
  return toString;
}());
