const products = [
  { name: "Shampoo", price: 300 },
  { name: "Chirumi", price: 100 },
  { name: "Shirt", price: 700 },
  { name: "Pant", price: 1200 },
];

function getShoppingTotal(products) {
  let total = 0;

  for (const product of products) {
    total += product.price;
  }
  return total;
}

const total = getShoppingTotal(products);
console.log("Total ajke khosabe", total);
