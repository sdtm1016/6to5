(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "module"], factory);
  } else if (typeof exports !== "undefined" && typeof module !== "undefined") {
    factory(exports, module);
  }
})(function (exports, module) {
  "use strict";

  module.exports = foo;
  module.exports = 42;
  module.exports = {};
  module.exports = [];
  module.exports = foo;
  module.exports = function () {};

  var _default = function _default() {};

  module.exports = _default;
  function foo() {}
  var Foo = function Foo() {};

  module.exports = Foo;
});