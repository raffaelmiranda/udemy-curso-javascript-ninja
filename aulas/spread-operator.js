//=========================== Spread operator com arrays ===========================
//Exemplo: copiar um array
const nums = [1, 2, 3];
const copia = [...nums]; //cria um novo array, não uma referência.

console.log(copia); // [1, 2, 3]

//Exemplo: juntar arrays
const a = [1, 2];
const b = [3, 4];

const juntos = [...a, ...b];
console.log(juntos); // [1, 2, 3, 4]

//=========================== Spread operator com objetos ===========================

//Exemplo: copiar um objeto
const pessoa = { nome: "Rafael", idade: 25 };
const copia = { ...pessoa };

console.log(copia);

//Exemplo: sobrescrever propriedades
const pessoa2 = { nome: "Rafael", idade: 25 };
const copia2 = { ...pessoa2, idade: 30 }; //A última propriedade vence se houver conflito.

console.log(copia2); // { nome: "Rafael", idade: 30 }

//=========================== Spread operator em parâmetros de função ===========================
function soma(a, b, c) {
  return a + b + c;
}

const valores = [1, 2, 3];
console.log(soma(...valores)); // 6

//=========================== Spread operator com strings ===========================
const palavra = "JS";
const letras = [...palavra];

console.log(letras); // ["J", "S"]

//=========================== Atenção: cópia rasa (shallow copy) ===========================
const obj = {
  nome: "Rafael",
  endereco: { cidade: "Assis" },
};

const copia = { ...obj };
copia.endereco.cidade = "São Paulo";

console.log(obj.endereco.cidade); // "São Paulo"
