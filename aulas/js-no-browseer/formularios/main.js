(function (win, doc) {
  "use strict";

  var $inputUsername = doc.querySelector("#username");
  var $inputPassword = doc.querySelector("#password");
  var $button = doc.querySelector("#button");

  console.log($inputUsername.value);
  console.log($inputPassword.value);

  $inputUsername.value = "Rafael Miranda";
  $inputPassword.value = "123456";

  console.log($inputUsername.value);
  console.log($inputPassword.value);

  $button.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Clickou no botão!");
  });

  $inputUsername.addEventListener("click", function () {
    console.log("Clickou no input username!");
  });
})(window, document);
