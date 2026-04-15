/*Sempre nomear função

Ao invés disso:
var func = function () {};

Prefira isso:
var func = function func() {};


Facilita  o debug
Consegue obter o nome


var func = function () {
  return "Olá";
};

func(); //Retorna "Olá"
func.name; // Retorna o nome da váriavel pois a função não tem nome
*/

var myFunc1 = function () {
  return "Olá";
};

console.log(myFunc1());
console.log(myFunc1.name);

var myFunc2 = function MyFuncTeste() {
  return "Olá";
};

console.log(myFunc2());
console.log(myFunc2.name);
