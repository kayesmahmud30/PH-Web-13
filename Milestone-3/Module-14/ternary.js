// Ternary Operator....

const age = 17;

// if (age >= 18) {
//   console.log("You can vote");
// } else {
//   console.log("No voting");
// }

age >= 18 ? console.log("You can Vote") : console.log("No voting");

let price = 500;
const isLeader = false;

// if (isLeader === true) {
//   price = 0;
// } else {
//   price = price + 100;
// }

price = isLeader === true ? 0 : price + 100; //Ternary in variable!

console.log(price);

// if (isLeader === true) {
//   if (price >= 1000) {
//     price = price / 2;
//   } else {
//     price = 0;
//   }
// } else {
//   price = price + 1000;
// }

price = isLeader === true ? (price >= 1000 ? price / 2 : 0) : price + 1000;

console.log(price);
