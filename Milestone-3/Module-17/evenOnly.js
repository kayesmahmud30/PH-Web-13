// Create function that will return only the even numbers.

function evenNumbersOnly(numbers) {
  let evens = [];
  for (const number of numbers) {
    if (number % 2 === 0) {
      console.log(number);
      evens.push(number);
    }
  }
  return evens;
}

const numbers = [5, 6, 7, 8, 9, 10];
// const evens = evenNumbersOnly(numbers);
// console.log(evens);


// ----------------------------------------------------------------
// Create function that will return only the even numbers and sum of them.

function sumOfEvenNumbers(numbers) {
  let sum = 0;
  for (const number of numbers) {
    if (number % 2 === 0) {
      console.log(number);
      sum += number;
    }
  }
  return sum;
}

const sum = sumOfEvenNumbers(numbers);
console.log("Some of the even numbers is:", sum);
