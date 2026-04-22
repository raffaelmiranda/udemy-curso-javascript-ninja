(function (win, doc) {
  "use strict";

  console.log(doc.getElementById("my-link1"));
  console.log(doc.getElementsByClassName("my-link"));
  console.log(doc.getElementsByTagName("a"));
  console.log(doc.getElementsByTagName("p"));

  console.log(doc.getElementsByName("username"));

  console.log(doc.querySelectorAll(".input"));
  console.log(doc.querySelector("#username"));
})(window, document);
