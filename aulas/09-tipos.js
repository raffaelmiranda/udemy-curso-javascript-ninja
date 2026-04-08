//TIPOS PRIMITIVOS
/*
number
string
boolean
null undefined
*/

//TIPOS DE OBJETOS
//todos os outros que não for pimitivos
var objeto = { propriedade1: "valor", propriedade2: 10, propriedade3: true };
console.log(objeto);
console.log(objeto.propriedade1);

var pessoa = { nome: "Fernando", idade: 30, peso: 85, altura: 1.85 };
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.peso);
console.log(pessoa.altura);

var carro = { cor: "vermelho", motor: 2.0, portas: 4 };
console.log(carro.cor);
console.log(carro.motor);
console.log(carro.portas);

var myvar = function () {
  return "variável myvar";
};

console.log(myvar);
console.log(myvar()); //para invocar a função
