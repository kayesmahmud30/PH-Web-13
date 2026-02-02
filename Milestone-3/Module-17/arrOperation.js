/*
----Objective: Write a function to give me the sum of all numbers in an array.
*/

function sumOfNumbers(numbers) {
  let sum = 0;
  for (const number of numbers) {
    // console.log(number);
    sum += number;
  }
  return sum;
}

const nums = [12, 34, 56, 78, 98, 87];
const sum = sumOfNumbers(nums);
console.log("Sum of numbers is:", sum);
