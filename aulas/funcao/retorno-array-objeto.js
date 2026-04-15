//Retorno de valores primitivos
function myFunction1() {
  return 1;
}
console.log(myFunction1());

function myFunction2() {
  return "string";
}
console.log(myFunction2());

//Retorno
function myFunction3() {
  return [1, 2, 3];
}
console.log(myFunction3());
console.log(myFunction3()[0]);
console.log(myFunction3()[1]);
console.log(myFunction3()[5]);

function myFunction4() {
  return {
    prop1: 1,
    prop2: "Rafael",
    prop3: function () {
      return "prop3";
    },
  };
}
console.log(myFunction4().prop1);
console.log(myFunction4().prop3());
