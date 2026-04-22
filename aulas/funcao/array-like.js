(function () {
  "use strict";

  function myFunction() {
    for (var i = 0; i < arguments.length; i++) {
      console.log(arguments[i]);
    }

    Array.prototype.forEach.call(arguments, function (item) {
      console.log(item);
    });

    Array.prototype.forEach.apply(arguments, [
      function (item) {
        console.log(item);
      },
    ]);

    Array.prototype.reduce.call(
      arguments,
      function (acumulado, atual) {
        console.log(acumulado + atual);
        return acumulado + atual;
      },
      0,
    );
  }

  myFunction(1, 2, 3, 4, 5, 6, 7, 8);
})();
