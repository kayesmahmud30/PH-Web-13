const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8000;

//Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from users World");
});

app.post("/users", (req, res) => {
  console.log("Data in the request", req.body);

  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);

  res.send({
    success: true,
    data: newUser,
    massage: "User added successfully",
  });
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
