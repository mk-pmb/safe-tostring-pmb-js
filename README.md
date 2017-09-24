
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
<!--#verbatim lncnt="13" -->
```javascript
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
