"use strict";

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var Test = (function (Foo) {
  function Test() {
    Foo.prototype.test;
    Foo.prototype.test.whatever;
  }

  _inherits(Test, Foo);

  return Test;
})(Foo);