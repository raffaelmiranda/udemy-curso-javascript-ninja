(function () {
  "use strict";
  var obj = {
    prop1: "prop1",
    prop2: "prop2",
    prop3: "prop3",
  };

  console.log(obj);

  delete obj.prop2; //true
  console.log(obj);

  //delete obj; //Delete of an unqualified identifier in strict mode.
})();
