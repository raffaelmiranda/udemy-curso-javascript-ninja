var nome = "Global 2";
(function () {
  var nome = "Local 2";
  console.log(nome);
})();
console.log(nome);
