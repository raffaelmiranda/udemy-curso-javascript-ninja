var arr = [1, 2, 3, 4, 5, 6, 7];

//testa todos os items, todos os itens deve ser true
var every = arr.every(function (item) {
  return item < 5;
});
console.log(every);

//testa todos os items, pelo meno um item deve ser true
var some = arr.some(function (item) {
  return item % 2 === 0;
});
console.log(some);
