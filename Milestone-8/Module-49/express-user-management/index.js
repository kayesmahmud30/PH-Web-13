const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello from users World");
});

const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/products", (req, res) => {
  res.send("Products are jumping up");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
