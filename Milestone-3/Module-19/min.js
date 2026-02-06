const prices = [15000, 30000, 100000, 20000, 12000];

function getMin(numbers) {
  let min = numbers[0];
  for (const num of numbers) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}

const cheap = getMin(prices);
console.log("Cheapest one is:", cheap);
