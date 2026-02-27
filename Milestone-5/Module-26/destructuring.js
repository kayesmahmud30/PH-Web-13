// const products = {
//   name: "iPhone",
//   price: 799,
//   description: "A smartphone by Apple",
// };

// const newPrice = products.price + 100;
// const phoneName = `This is ${products.name}`;

// const price = products.price;
// const name = products.name;

//-------------------Object destructuring----------------------
const price = 5555;
// const products = { name: "iPhone", price: 799, brand: "Apple" };
const {
  name,
  price: phonePrice,
  camera = "12MP",
} = { name: "iPhone", price: 799, brand: "Apple", camera: "48MP" };
// console.log(camera);

//------------------------Array destructuring---------------------
const [first, second] = [10, 20];
console.log(first, second);

// const [height, width] = numbers;
