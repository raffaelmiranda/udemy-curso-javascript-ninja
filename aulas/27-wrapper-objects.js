/*
Em JavaScript, wrapper objects (ou objetos wrapper) são objetos que envolvem valores primitivos, permitindo que esses valores tenham propriedades e métodos.

Tipos primitivos:
string
number
boolean
null
undefined
symbol
bigint
(menos comuns) Symbol, BigInt

Quando você chama um método em um primitivo, o JavaScript faz isso automaticamente:
- Converte o valor primitivo em um objeto wrapper
- Executa o método
- Descarta o objeto wrapper e retorna o resultado

Esse processo é chamado de autoboxing.
*/

//Exemplo com String
var nome = "Rafael";
console.log(nome.length); // javascript cria um wrapper object para disponibilizar propriedades
console.log(nome.toUpperCase()); //por baixo dos panos faz new String("rafael").toUpperCase()

//função de conversão, retorna um valor primitivo
var nome2 = String("Rafael");
console.log(nome2);
var age2 = Number(30);
console.log(age2);
var ninja2 = Boolean(false);
console.log(ninja2);

//criar objeto
var nome1 = new String("Rafael");
console.log(nome1.length);
var age1 = new Number(30);
console.log(age1);
var ninja1 = new Boolean(false);
console.log(ninja1);
