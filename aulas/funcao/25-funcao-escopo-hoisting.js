//Hoisting = içamento

function myFunction() {
  var number1 = 1;
  var number2 = 2;
  function sum() {
    return number1 + number2;
  }

  return sum();
}

console.log(myFunction());
//console.log(sum()); //sum é escopo local, então vai dar erro quando chamar

function myFunction2() {
  function sum() {
    return number1 + number2;
  }
  var number1 = 1;
  var number2 = 2;
  return sum();
}
console.log(myFunction2());

function myFunction3() {
  var number1 = 1;
  var number2 = 2;
  return sum();
  function sum() {
    return number1 + number2;
  }
}
console.log(myFunction3());
