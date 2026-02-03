// Function takes an array as parameter. Gives me the average of the odd numbers in the array.

function oddAverage(numbers) {
  const odds = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      odds.push(number);
    }
  }
  //"odds" is the array that contains only odd numbers.
  //   console.log(odds);
  let sum = 0;
  for (const number of odds) {
    sum += number;
  }
  const count = odds.length;
  console.log(sum, count);
  const avg = sum / count;
  return avg;
}

const numbers = [43, 23, 68, 96, 77, 33, 24, 12, 21, 5];
const avg = oddAverage(numbers);
console.log("Average of the odd number is:", avg);
