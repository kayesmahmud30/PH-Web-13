const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8008;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
];

app.get("/products", (req, res) => {
  res.send(products);
});

app.post("/products", (req, res) => {
  console.log(`Data in the request ${req.body}`);

  const newProduct = req.body;
  newProduct.id = products.length + 1;
  products.push(newProduct);

  res.send({
    success: true,
    data: newProduct,
    massage: "Product added successfully",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
