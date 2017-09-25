
<!--#echo json="package.json" key="name" underline="=" -->
safe-tostring-pmb
=================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
String(x) with fallback to Object.prototype.toString.call(x)
<!--/#echo -->


Usage
-----

from [test.usage.js](test.usage.js):

<!--#include file="test.usage.js" start="  //#u" stop="  //#r"
  outdent="  " code="javascript" -->
<!--#verbatim lncnt="24" -->
```javascript
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
```
<!--/include-->



<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
