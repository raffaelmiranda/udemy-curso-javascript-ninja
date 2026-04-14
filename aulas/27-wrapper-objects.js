/*
valores primitivos não são objetos

*/
var nome = "Rafael";
console.log(nome.length); // javascript cria um wrapper object para disponibilizar propriedades

var nome1 = new String("Rafael");
console.log(nome1.length);
var age1 = new Number(30);
console.log(age1);
var ninja1 = new Boolean(false);
console.log(ninja1);

var nome2 = String("Rafael");
console.log(nome2);
var age2 = Number(30);
console.log(age2);
var ninja2 = Boolean(false);
console.log(ninja2);
