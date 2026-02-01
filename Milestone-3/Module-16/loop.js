const mobile = {
  brand: "Samsung",
  price: 25000,
  color: "black",
  camera: "12 MP",
  isNew: true,
};

// for of loop: array
// for in loop: object

for (const prop in mobile) {
  //   console.log(prop);
  //   console.log(mobile[prop]);
}

const keys = Object.keys(mobile);
console.log(keys);

for (const key of keys) {
  console.log(key, ":", mobile[key]);
}
