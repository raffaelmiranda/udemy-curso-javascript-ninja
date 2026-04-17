/*
Em JavaScript, arguments é um objeto especial disponível dentro de funções tradicionais (funções declaradas com function) 
que contém todos os valores passados como argumentos, independentemente de a função ter parâmetros definidos ou não.
*/

(function () {
  function myFunction() {
    return arguments;
  }
  console.log(myFunction(1, 2, 3));

  //========================================================
  // Mesmo sem parâmetros definidos, a função consegue acessar todos os valores via arguments.
  function soma() {
    let total = 0;

    for (let i = 0; i < arguments.length; i++) {
      total += arguments[i];
    }

    return total;
  }
  console.log(soma(1, 2, 3, 4)); // 10
  //========================================================

  function exemplo() {
    console.log(arguments[0]); // primeiro argumento
    console.log(arguments.length); // quantidade de argumentos

    //convertendo arguments para um array
    console.log(Array.from(arguments));
    console.log([...arguments]);
  }
  exemplo("a", "b", "c"); // length = 3
})();
/*
A forma recomendada de lidar com múltiplos argumentos é usar parâmetros rest.
Vantagens do ...rest:

É um array real
Funciona com arrow functions
Código mais limpo e moderno

arguments       ->  ...restObjeto 
array-like      ->  Array de verdade
Só em function  ->  Funciona em qualquer função
Mais antigo     ->  Padrão moderno (ES6+)
Menos legível   ->  Mais claro e recomendado
*/
