const handleAddProduct = () => {
  const productEl = document.getElementById("product");
  const quantityEl = document.getElementById("quantity");
  const product = productEl.value;
  const quantity = quantityEl.value;
  //   console.log("Product add", product, quantity);

  displayProduct(product, quantity);
  addProductToCart(product, quantity);

  productEl.value = "";
  quantityEl.value = "";
};

const getCart = () => {
  const cart = {};
  return cart;
};

const addProductToCart = (product, quantity) => {
  const cart = getCart();
  cart[product] = quantity;
  console.log("cart", cart);
};

const displayProduct = (product, quantity) => {
  const li = document.createElement("li");
  li.innerHTML = `${product}: ${quantity}`;

  // Get the ul....
  const ul = document.getElementById("product-container");
  ul.append(li);
};
