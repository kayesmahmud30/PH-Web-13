// console.log(add(10, 20));
// Function declaration....
function add(num1, num2) {
  return num1 + num2;
}

// console.log(add2(30, 40));
// Function expression....
const add2 = function (num1, num2) {
  return num1 + num2;
};
// console.log(add2(30, 40));

//--------------------------------------------------------------
// Arrow function....
const add3 = (num1, num2) => num1 + num2;
console.log(add3(50, 60));

const multiply = (a, b) => a * b;
// console.log(multiply(5, 7));

// We can ignore the parentheses if our parameter is only one
// const tenTimes2 = x => x * 10;
const tenTimes = (x) => x * 10;
const getPI = () => 3.1416;
const addAll = (a, b, c, d, e, f) => a + b + c + d + e + f;
const isEvent = (num) => num % 2 === 0;

const doMath = (x, y) => {
  const add = x + y;
  const multiply = add * add;
  const subtraction = multiply - add;
  const result = subtraction + y;
  return result;
};

const divide = (p, q) => p / q;

// A real world use case of arrow function....

// document.getElementById("btn").addEventListener("click", () => {});
document.getElementById("btn").addEventListener("click", (event) => {});
