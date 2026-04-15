var arr = [1, 2, 3];
function myFunction1(arg) {
  return arg;
}
console.log(myFunction1(arr));
console.log(myFunction1(["Rafael", false, 34]));

function myFunction2(arg) {
  return arg[1];
}
console.log(myFunction2(arr));
console.log(myFunction2([1, 2, 3]));

var obj = {
  prop: "Rafael",
  curso: "javascript",
  cidade: "Assis",
};
function myFunction3(arg) {
  return arg;
}
console.log(myFunction3(obj));
console.log(myFunction3(obj).prop);
