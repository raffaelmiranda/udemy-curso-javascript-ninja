/*
Funções são "Cidadão" ou Objetos de primeira classe
As função tem o mesmo tratamento de obnjetos do javascript

Então por exemplo tudo aquilo que você consegue fazer com objetos no JavaScript.
Você também consegue fazer com funções então basicamente essa ideia de objetos de primeira classe de funções 
e de cidadãos de primeira classe está tudo aquilo que você consegue fazer com objetos em JavaScript.

Digamos que é a parte mais importante do JavaScript.
*/
//=======================================================
function adder(x) {
  return function (y) {
    return x + y;
  };
}

var add = adder(2);
console.log(add(3));
console.log(adder(10)(5));

//=======================================================
var car = {
  color: "amarelo",
};
function gerCarColor(mycar) {
  return mycar.color;
}
console.log(gerCarColor(car));

//=======================================================
function showOtherFunction(func) {
  return func();
}

function returnedFunction() {
  return "Returned function";
}

console.log(showOtherFunction(returnedFunction));
