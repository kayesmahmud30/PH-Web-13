const age = 24;
const price = 500;

if (age <= 12) {
  console.log("You can eat for free");
} else if (age >= 60) {
  //50% Discount....
  const discount = (price * 50) / 100;
  const payAmount = price - discount;
  console.log(payAmount);
} else if (age >= 50) {
  //25% Discount....
  const discount = (price * 25) / 100;
  const payAmount = price - discount;
} else if (age >= 40) {
  //10% Discount....
  const discount = (price * 10) / 100;
  const payAmount = price - discount;
} else {
  console.log(price);
}
