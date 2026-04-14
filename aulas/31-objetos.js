//OBJETOS MUTAVEIS
var obj1 = {
  prop1: "prop1",
  prop2: "prop2",
};
console.log("objeto 1: ");
console.log(obj1);

var obj2 = {
  prop1: "prop1",
  prop2: "prop2",
};
console.log("objeto 2: ");
console.log(obj2);

delete obj2.prop1;
console.log("Prop1 do objeto 2 excluido: ");
console.log(obj2);

obj2.prop1 = "prop1";
console.log("Prop1 do objeto 2 criado: ");
console.log(obj2);

//MANIPULADOS POR REFERENCIA
console.log(obj1 === obj2);

var objCopy = obj1;
console.log(objCopy === obj1);

objCopy.prop1 = "valor modificado da prop1 no objCopy";
console.log(objCopy);
console.log(obj1);

//CRIANDO OBJETOS
//Literais
var obj = {
  prop1: "prop1",
  prop2: "prop2",
};

//============================== Construtor (new) ==============================
var newObj1 = new Object();

//=============================== Objet.create() ===============================
const animal = {
  vivo: true,
  respirar() {
    console.log("Respirando...");
  },
};

const cachorro = Object.create(animal);
cachorro.latir = function () {
  console.log("Au au!");
};

//cachorro não tem essas propriedades. Ele herda via protótipo
console.log(cachorro.vivo); // true
cachorro.respirar(); // "Respirando..."

console.log("cachorro tem propery vivo? " + cachorro.hasOwnProperty("vivo")); // false
console.log(
  "cachorro tem propery respirar? " + cachorro.hasOwnProperty("respirar"),
);
console.log("animal tem propery vivo? " + animal.hasOwnProperty("vivo")); // true
console.log(
  "animal tem propery respirar? " + animal.hasOwnProperty("respirar"),
);
//MÈTODOS
/*
Object.Keys(obj)
obj.isPrototypeOf(otherObj)
JSON.stringify(obj);
JSON.parse
http://json.org/json2.js
*/
