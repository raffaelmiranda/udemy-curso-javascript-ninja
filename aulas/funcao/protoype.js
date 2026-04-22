(function () {
  "use strict";

  function MyFunction(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }

  MyFunction.prototype.fullName = function () {
    return this.name + " " + this.lastName;
  };

  MyFunction.prototype.age = 30;
  var rafael = new MyFunction("Rafael", "Miranda");
  MyFunction.prototype.age = 20;
  console.log(rafael.fullName());

  console.log(rafael.age);
})();
