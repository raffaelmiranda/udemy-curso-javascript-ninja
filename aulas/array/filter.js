/*
O filter é um método dos arrays em JavaScript que cria um novo array contendo apenas os elementos que atendem a uma condição.
Ele não altera o array original.

filter não é para transformar dados, é para selecionar dados

Use filter quando quiser:
- Remover itens inválidos
- Buscar registros específicos
- Aplicar regras de negócio
- Substituir for + if de forma mais limpa

Resumo rápido
- filter retorna um novo array
- Não altera o original
- A condição precisa retornar true ou false
- Código mais limpo e funcional
*/

//=============== Exemplo simples ===============
const numeros = [1, 2, 3, 4, 5, 6];
const pares = numeros.filter((numero) => numero % 2 === 0);
console.log(pares); // [2, 4, 6]

//=============== Exemplo com objetos (muito comum no backend) ===============
const produtos = [
  { nome: "Teclado", preco: 100 },
  { nome: "Mouse", preco: 50 },
  { nome: "Monitor", preco: 900 },
];

const produtosCaros = produtos.filter((produto) => produto.preco > 100);
console.log(produtosCaros);

//=============== Exemplo com índice ===============
const letras = ["a", "b", "c", "d"];
const resultado = letras.filter((letra, index) => index > 1);
console.log(resultado);
