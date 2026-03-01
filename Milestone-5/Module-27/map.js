const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// const doubled = [];
// for (const num of numbers) {
//   doubled.push(num * 2);
// }

//-------------------------------------------------------------
// const doubleIt = (num) => num * 2;
// const doubled = numbers.map(doubleIt);

//-------------------------------------------------------------
const doubled = numbers.map((number) => number * 2);
console.log(doubled);

//-------------------------------------------------------------
const squared = numbers.map((number) => number * number);
console.log(squared);

//-------------------------------------------------------------
const friends = ["Kayes", "Mahmud", "Taniya", "Shikder"];

// const firstLetters = friends.map((name) => name.substring(0, 1));
const firstLetters = friends.map((name) => name[0]);
console.log(firstLetters);

//-------------------------------------------------------------
const products = [
  { name: "Laptop", price: 45000 },
  { name: "Mobile", price: 16000 },
  { name: "Tablet", price: 30000 },
];

const prices = products.map((product) => product.price * 2);
console.log(prices);

//-------------------------------------------------------------
const names = products.map((product, index, productArray) => {
  const upperCaseName = product.name.toUpperCase();

  console.log(index, upperCaseName, productArray);

  return upperCaseName;
});

console.log(names);
