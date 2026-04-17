/*
reduceRight percorre o array da direita para a esquerda (do último elemento para o primeiro) e reduz todos os valores a um único resultado, aplicando uma função acumuladora.

A reduceRight é um método de arrays em JavaScript muito parecido com o reduce.
A principal diferença entre eles é a direção em que o array é percorrido.
*/

//================= Exemplo 1: Exemplo básico =================
const numeros = [1, 2, 3, 4];
const soma = numeros.reduceRight((acc, numero) => acc + numero, 0);

console.log(soma); // 10

//=========== Exemplo onde reduceRight faz diferença ==========
const palavra = "javascript";

const invertida = palavra
  .split("")
  .reduceRight((acc, letra) => acc + letra, "");

console.log(invertida); // "tpircsavaj"
