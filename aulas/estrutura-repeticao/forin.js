var car = {
  brand: "Volkswagem",
  model: "Gol",
  year: 2013,
};

for (const prop in car) {
  console.log(prop + " = " + car[prop]);
}

console.log("brand in car?", "brand" in car);
console.log("doors in car?", "doors" in car);
