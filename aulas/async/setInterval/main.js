(function () {
  "use strict";

  var counter = 0;
  var $button = document.querySelector("[data-js='button']");
  var temporizador;

  function timer() {
    console.log("Passaram-se " + ++counter + " segundos!");
  }

  temporizador = setInterval(timer, 1000);

  $button.addEventListener(
    "click",
    function () {
      clearInterval(temporizador);
      console.log("Cronômetro parado!");
    },
    false,
  );
})(window, document);
