/*

1. 1st 100 --> 100
2. 101 to 200 --> 90
3. Above 200 --> 70

*/

function layeredDiscount(quantity) {
  const first100Price = 100;
  const second100Price = 90;
  const above200Price = 70;

  if (quantity <= 100) {
    const total = quantity * first100Price;
    return total;
  } else if (quantity <= 200) {
    const first100Total = 100 * first100Price;
    const remainingQuantity = quantity - 100;
    const remainingTotal = remainingQuantity * second100Price;
    const total = first100Total + remainingTotal;
    return total;
  } else {
    const first100Total = 100 * first100Price;
    const second100Total = 100 * second100Price;
    const remainingQuantity = quantity - 100;
    const remainingTotal = remainingQuantity * above200Price;
    const total = first100Total + second100Total + remainingTotal;
    return total;
  }
}

console.log(layeredDiscount(50));
console.log(layeredDiscount(100));
console.log(layeredDiscount(200));
console.log(layeredDiscount(450));
