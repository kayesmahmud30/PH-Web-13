function firstSum(arr1, arr2) {
  arr1[0] = 100;
  arr2[0] = 200;
  const first = arr1[0];
  const second = arr2[0];
  return first + second;
}

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

console.log("Before the function call:", num1, num2);

const result = firstSum(num1, num2);

console.log("After the function call:", num1, num2);

// If we pass a Non-primitive data (array, object) as a function's parameter, and if we change the data inside the function, then our main data will replaced into the new data that we edited inside the function. It's called "Pass by Reference"

// Passing Primitive = Pass by Value
// Passing Non-Primitive = Pass by Reference
