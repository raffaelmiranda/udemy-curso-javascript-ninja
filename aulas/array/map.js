/*
O map é usado para transformar elementos de um array em um novo array, sem modificar o original.
map sempre retorna um novo array com o mesmo tamanho do array original.

Resumo
- map = transformar
- Retorna novo array
- Não altera o original
- Tamanho do array se mantém
- Muito usado com APIs e DTOs
*/

//============ Exemplo simples ============
const numeros = [1, 2, 3, 4];
const dobrados = numeros.map((n) => n * 2);

console.log(dobrados); // [2, 4, 6, 8]
console.log(numeros); // [1, 2, 3, 4] (inalterado)

//============ Converter uma lista de usuários para apenas nomes ============
const usuarios = [
  { id: 1, nome: "Rafael", ativo: true },
  { id: 2, nome: "Ana", ativo: false },
  { id: 3, nome: "João", ativo: true },
];

const nomes = usuarios.map((u) => u.nome);
console.log(nomes);

//========================= Criando novos objetos =========================
const respostaApi = [{ id_usuario: 1, nome_completo: "Rafael Miranda" }];

const usuariosAdapt = respostaApi.map((u) => ({
  id: u.id_usuario,
  nome: u.nome_completo,
}));

console.log(usuariosAdapt);

//=============== Exemplo combinando com filter (bem comum) ===============
const usuariosAtivos = usuarios.filter((u) => u.ativo).map((u) => u.nome);
console.log(usuariosAtivos);
