var pessoa = { nome: "Rafael", idade: 30, peso: 85, altura: 1.85 };
console.log(pessoa);

pessoa.cor = "branco";
console.log(pessoa);

pessoa.andar = function () {
  return "Pessoas andando";
};
console.log(pessoa);
console.log(pessoa.andar());

pessoa.aniversario = function () {
  pessoa.idade++;
};

console.log(pessoa);
console.log(pessoa.aniversario());
console.log(pessoa);

pessoa.sobrenome = "Miranda";

pessoa.nomeCompleto = function () {
  return pessoa.nome + " " + pessoa.sobrenome;
};

console.log(pessoa);
console.log(pessoa.nomeCompleto());
console.log(pessoa);
