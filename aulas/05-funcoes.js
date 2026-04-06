//Funções são blocos de código javascript nomeados, e que podem ser invocados usando o operador ()*/
console.log("FUNÇÃO");
var x = 1;
function soma() {
  x = x + 1;
}

soma();
console.log(x);
console.log(soma);

//=============================================
console.log("FUNÇÃO COM ESCOPO");
function escopo() {
  var nome = "Rafael"; //nome esta dentro do escopo da função
}
//console.log(nome); //ERRO

//=============================================
console.log("FUNÇÃO COM RETURN");
function escopo2() {
  var nome = "Rafael";
  return nome;
}
console.log(escopo2());

//=============================================
console.log("FUNÇÃO COM ARGUMENTOS");
function soma(x, y) {
  return x + y;
}
console.log(soma());
console.log(soma(1, 2));
