var arr = [1, 2, 3, "Rafael", { bola: "azul" }];
console.log(arr);

arr.push({ carro: "BMW" });
console.log(arr);

arr.push(null);
console.log(arr);

arr.push(["a", "b", "c"]);
console.log(arr);

arr[12] = "12"; //adiciona pelo indice e cria posições vazias no array
console.log(arr);
console.log(arr[11]); //posição 11 é undefined pois não tem conteúdo

arr.pop();
console.log(arr);

//PUSH coloca o item no inicio
//POP  remove o item no final
