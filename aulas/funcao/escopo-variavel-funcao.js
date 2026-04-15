/*
escopo global
escopo local
    function cria escopo local
*/
var myvar = 1;
console.log(myvar);

function myFunction() {
  return myvar; //a variavel global myvar consegue ser acessada dentro de escopo locais
}
myFunction();

function otherFunction() {
  var otherVar = true;
  return otherVar;
}
otherFunction();
//console.log(otherVar); //a variavel local otherVar declarada dentro da função não consegue acessada fora

function newFunction() {
  newVar = true; //Pode-se criar um variavel sem a palavra var, ela passa ser global mesmo estando dentro de um função
  return newVar;
}
//console.log(newVar); //vai dar erro pois como a função newFunction não foi invocada ainda, a váriavel newVar não existe
newFunction();
console.log(newVar);

function outraFunction(a, b, c) {
  return a;
}
outraFunction(1);
outraFunction(1, 2);
//console.log(a); Erro pois o parametro 'a' da função é local dentro da função
