(function () {
  "use strict";

  var counter = 0;
  var $button = document.querySelector("[data-js='button']");
  var temporizador;

  function timer() {
    console.log("Passaram-se " + ++counter + " segundos!");

    if (counter > 20) return;

    temporizador = setTimeout(timer, 1000);
  }
  timer();

  $button.addEventListener(
    "click",
    function () {
      clearTimeout(temporizador);
      console.log("Cronômetro parado!");
    },
    false,
  );
})(window, document);
