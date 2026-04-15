console.log("IF");
var hora = 17;
if (hora < 18) {
  saudacao = "Bom dia";
} else {
  saudacao = "Boa noite";
}
console.log(saudacao);

//==========================================
console.log("IF aninhado");
var idade = 16;
var pais = "BR";
var texto = "";

if (pais == "BR") {
  if (idade >= 16) {
    texto = "Você pode dirigir!";
  } else {
    texto = "Você não pode dirigir!";
  }
  console.log(texto);
}

//==========================================
var hora = 0;
var acao = "";
if (hora <= 10) {
  acao = "Tomar café";
} else if (hora >= 12 && hora <= 15) {
  acao = "Almoçar";
} else {
  acao = "Jantar";
}
console.log(acao);
