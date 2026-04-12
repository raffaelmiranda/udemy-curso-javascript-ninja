function sum1() {
  return 1 + 2;
}
console.log(sum1());

var sum2 = function () {
  return 3 + 2;
};
console.log(sum2());

var sum3 = function otherSum() {
  return 8 + 2;
};
console.log(sum3());
//console.log(otherSum());

//=============== IIFE ===============
//Expressão
(function () {
  console.log(50 + 2);
})();
