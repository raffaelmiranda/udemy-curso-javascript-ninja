console.log("OPERADORES DE ATRIBUIÇÃO");
//atribuição por adição
var a = 10;
console.log((a += 5));

//atribuição por subtração
var b = 10;
console.log((b -= 3));

//atribuição por multiplicação
var c = 4;
console.log((c *= 2));

//atribuição por divisão
var d = 20;
console.log((d /= 4));

//atribuição por resto (módulo)
var e = 10;
console.log((e %= 2));

//atribuição por exponenciação
var f = 2;
console.log((f **= 3));

//atribuição logica AND
//Se o primeiro valor for verdadeiro, o segundo valor é atribuído.
var x = true;
var y = (x &&= 10);
console.log(y);

//atribuição logica OR
//Se o primeiro valor for falso, o segundo valor é atribuído.
var x = true;
var y = (x ||= 7);
console.log(y);

//atribuição coalescência
//Se o primeiro valor for indefinido ou nulo, o segundo valor é atribuído.
var x = null;
var y = (x ??= 3);
console.log("valor de y" + y);
