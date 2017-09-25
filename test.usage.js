/* -*- tab-width: 2 -*- */
'use strict';

var eq = require('assert').deepStrictEqual;

(function readmeDemo() {
  //#u
  var toStr = require('safe-tostring-pmb'),
    obj0 = Object.create(null),
    noes = new TypeError('Oh noes!'),
    iter = Symbol.iterator;

  eq(toStr(),       'undefined');
  eq(toStr(null),   'null');
  eq(toStr(23.42),  '23.42');
  eq(toStr('foo'),  'foo');
  eq(toStr(true),   'true');
  eq(toStr({}),     '[object Object]');
  eq(toStr(obj0),   '[object Object]');
  eq(toStr(noes),   'TypeError: Oh noes!');
  eq(toStr([ 1, {}, 2 ]),     '1,[object Object],2');
  eq(toStr([ 1, obj0, 2 ]),   '[object Array]');

  eq(toStr(Symbol('foo')),            'Symbol(foo)');
  eq(toStr(iter),          'Symbol(Symbol.iterator)');
  eq(toStr(Object(iter)),  '[object Symbol]');
  eq(toStr([ 1, Symbol('foo'), 2 ]),      '[object Array]');
  eq(toStr([ 1, iter, 2 ]),    '[object Array]');
  eq(toStr([ 1, Object(iter), 2 ]),  '[object Array]');
  //#r
}());









console.log("+OK usage test passed.");    //= "+OK usage test passed."
