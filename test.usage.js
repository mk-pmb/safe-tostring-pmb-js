/* -*- tab-width: 2 -*- */
'use strict';

var eq = require('assert').deepStrictEqual;

(function readmeDemo() {
  //#u
  var toStr = require('safe-tostring-pmb');
  eq(toStr(),       'undefined');
  eq(toStr(null),   'null');
  eq(toStr(23.42),  '23.42');
  eq(toStr('foo'),  'foo');
  eq(toStr(true),   'true');
  eq(toStr(Object.create(null)),      '[object Object]');
  eq(toStr(new TypeError('noes')),    'TypeError: noes');
  eq(toStr(Symbol('foo')),            'Symbol(foo)');
  eq(toStr(Symbol.iterator),          'Symbol(Symbol.iterator)');
  eq(toStr(Object(Symbol.iterator)),  '[object Symbol]');
  //#r
}());









console.log("+OK usage test passed.");    //= "+OK usage test passed."
