const products = [
  { name: "Laptop", price: 45000 },
  { name: "Mobile", price: 16000 },
  { name: "Tablet", price: 30000 },
];

//---------------------------------------------------------------
products.forEach((product, index, productsArray) => console.log(product.name));

//----------------------------------------------------------------
let sum = 0;
products.forEach((product, index, productsArray) => {
  sum += product.price;
  console.log(product, index, productsArray);
});
console.log(sum);

//----------------------------------------------------------------
const arr = [1, 2, 3, 4, 5];

arr.forEach((value, index, arr) => {
  arr[index] += 5;
});

console.log(arr);
