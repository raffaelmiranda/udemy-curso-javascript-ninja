//Truthy
/*Em JavaScript, um valor truthy é um valor que se traduz em verdadeiro quando 
avaliado em um contexto Booleano. Todos os valores são truthy a menos que eles 
sejam definidos como falsy (ou seja., exceto para false, 0, "", null, undefined, e NaN).

if (true)
if ({})
if ([])
if (42)
if ("foo")
if (new Date())
if (-42)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)*/

if ("0") {
  teste = true;
} else {
  teste = false;
}
console.log(teste); //true

if ("Rafael") {
  teste = true;
} else {
  teste = false;
}
console.log(teste); //true

//FALSY
/*
Um valor falsy é um valor que se traduz em falso quando avaliado em um contexto Boolean

if (false) {
  // Não acessível
}

if (null) {
  // Não acessível
}

if (undefined) {
  // Não acessível
}

if (0) {
  // Não acessível
}

if (-0) {
  // Não acessível
}

if (0n) {
  // Não acessível
}

if (NaN) {
  // Não acessível
}

if ("") {
  // 
}
if (document.all) {
  // [1], not reachable
}
*/

var teste;
if ("") {
  teste = true;
} else {
  teste = false;
}
console.log(teste); //false

if (undefined) {
  teste = true;
} else {
  teste = false;
}
console.log(teste); //false

//Para descobrir um valor se é Truthy ou Falsy deve colocar o operador !!
console.log(!!NaN);
console.log(!!"Rafael");
