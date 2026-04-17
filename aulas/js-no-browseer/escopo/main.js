var nome = "Global 1";
(function () {
  var nome = "Local 1";
  console.log(nome);
})();
console.log(nome);
