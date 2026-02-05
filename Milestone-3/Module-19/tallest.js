const heights = [65, 66, 68, 78, 60, 98, 65, 45];

function getMax(numbers) {
  let max = numbers[0];
  for (const num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

const max = getMax(heights);
console.log("Max value is:", max);

//-----------------------------------------------------------------
// Task is make a function to get the smallest number form an array.
