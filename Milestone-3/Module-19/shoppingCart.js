const products = [
  { name: "Shampoo", price: 300, quantity: 2 },
  { name: "Chirumi", price: 100, quantity: 3 },
  { name: "Shirt", price: 700, quantity: 5 },
  { name: "Pant", price: 1200, quantity: 1 },
];

function cartTotal(products) {
  let total = 0;
  for (const product of products) {
    // const thisProductCost = product.price * product.quantity;
    total += product.price * product.quantity;
  }
  return total;
}

const shoppingCost = cartTotal(products);
console.log(shoppingCost);
