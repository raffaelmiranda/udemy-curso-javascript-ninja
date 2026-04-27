(function () {
  "use strict";

  /*function sum() {
    return Array.prototype.reduce.call(
      arguments,
      function (accumulated, actual) {
        return accumulated + actual;
      },
      0,
    );
  }

  console.log(sum(1, 2, 3, 4, 5));*/

  console.time("Calculando o tempo do for");
  for (let i = 0; i < 10000; i++) {
    console.log("calculando...");
  }
  console.timeEnd("Calculando o tempo do for");

  var arr = [
    { item: "arroz", price: 10.0 },
    { item: "feijão", price: 7.0 },
    { item: "macarrão", price: 3.0 },
  ];

  console.table(arr);
})();
