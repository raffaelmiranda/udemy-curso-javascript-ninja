(function () {
  //"use strict"; //Não pode usar WITH no Strict mode, pois ele torna o código mais difícil de entender e depurar,
  // além de causar problemas de desempenho. O uso do WITH é desencorajado em geral, e é recomendado evitar seu uso em código moderno.
  var obj = {
    prop1: {
      prop2: {
        prop3: {
          prop31: "value3.1",
          prop32: "value3.2",
          prop33: "value3.3",
        },
      },
    },
  };

  with (obj.prop1.prop2.prop3) {
    console.log(prop31);
    console.log(prop32);
    console.log(prop33);
  }
})();
