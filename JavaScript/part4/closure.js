function createTeaMaker(name) {
  return function (teaType) {
    return `${name} is making ${teaType}`;
  };
}

let teaMaker = createTeaMaker("Nitish");
let result = teaMaker("green tea");
console.log(result); // Output: Nitish is making green tea
