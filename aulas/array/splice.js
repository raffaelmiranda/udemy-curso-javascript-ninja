var arr = [1, 2, 3, 4, 5, 6];

console.log(arr); //[ 1, 2, 3, 4, 5, 6 ]
console.log(arr.splice(3)); //[ 4, 5, 6 ]

arr.push(4, 5, 6);
console.log(arr); //[ 1, 2, 3, 4, 5, 6 ]
console.log(arr.splice(1, 3)); //[ 2, 3, 4 ]

arr.splice(1, 0, "a", "b", "c", "d");
console.log(arr); //[ 1, 'a', 'b', 'c', 5, 6 ]

console.log(arr.splice(1, 4, 2, 3, 4)); //[ 'a', 'b', 'c', 'd' ]
