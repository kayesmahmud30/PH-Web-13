const handleAddProduct = () => {
  const productEl = document.getElementById("product");
  const quantityEl = document.getElementById("quantity");
  const product = productEl.value;
  const quantity = parseInt(quantityEl.value);
  //   console.log("Product add", product, quantity);

  displayProduct(product, quantity);
  addProductToCart(product, quantity);

  productEl.value = "";
  quantityEl.value = "";
};

const getCart = () => {
  let cart = {};
  const cartJSON = localStorage.getItem("cart");
  if (cartJSON) {
    cart = JSON.parse(cartJSON);
  }

  return cart;
};

const addProductToCart = (product, quantity) => {
  const cart = getCart();

  if (cart[product]) {
    cart[product] = cart[product] + quantity;
  } else {
    cart[product] = quantity;
  }

  console.log("cart", cart);
  const cartJSON = JSON.stringify(cart);
  localStorage.setItem("cart", cartJSON);
};

const displayProduct = (product, quantity) => {
  const li = document.createElement("li");
  li.innerHTML = `${product}: ${quantity}`;

  // Get the ul....
  const ul = document.getElementById("product-container");
  ul.appendChild(li);
};

//Display products from stored local storage.
const displayStoredProduct = () => {
  const cart = getCart();
  for (const product in cart) {
    const quantity = cart[product];
    console.log(product, quantity);
    displayProduct(product, quantity);
  }
};

displayStoredProduct();

/*
----> To save Object/Array in the local storage.
    1. Covert the object  to JSON string by using JSON.stringify()
    2. localStorage.setItem()
*/

/*
----> To get Object/Array from the local storage.
    1. Get the item from the local storage and it will be in JSON string.
    2. Convert the JSON string to JS object by using JSON.parse().
*/
