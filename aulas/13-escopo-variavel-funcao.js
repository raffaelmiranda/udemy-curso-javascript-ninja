/*
escopo global
escopo local
    function cria escopo local
*/
var myvar = 1;
console.log(myvar);

function myFunction() {
  return myvar; //consegue acessar dentro de escopo locais
}
myFunction();

function otherFunction() {
  var otherVar = true;
  return otherVar;
}
otherFunction();
//console.log(otherVar); //não consegue acessar dentro de escopo local pois não existe fora da função

//Pode-se criar um variavel sem a palavra var, ela passa ser global mesmo estando dentro de um função
function newFunction() {
  newVar = true;
  return newVar;
}
//console.log(newVar); //vai dar erro pois como a função não foi invocada ainda, a váriavel newVar não existe
newFunction();
console.log(newVar);

function outraFunction(a, b, c) {
  return a;
}
outraFunction(1);
outraFunction(1, 2);
//console.log(a); Erro pois a váriavel a é local dentro da função
