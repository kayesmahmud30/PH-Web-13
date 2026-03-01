function multiply(a, b) {
  a = a - 5;
  b = b - 10;
  console.log(a, b);
  return a * b;
}

let x = 10;
let y = 20;
console.log("Before calling", x, y);

const result = multiply(x, y);
console.log(result);
console.log("After calling", x, y);

// If we pass a primitive data (array, object) as a function's parameter, and if we change the data inside the function, then our main data will replaced into the new data that we edited inside the function. It's called "Pass by Value"

// Passing Primitive = Pass by Value
// Passing Non-Primitive = Pass by Reference