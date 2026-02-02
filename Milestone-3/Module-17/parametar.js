function eatRice() {
  console.log("Wash your hand");
  console.log("Sit down");
  console.log("Take food");
  console.log("Gop Gop ,Eat");
}
// eatRice();

// Writing a function to get square......
function square(number) {
  console.log("Value of the number parameter is:", number);
  const square = number * number;
  console.log("Square of the given number is:", square);
}

square(4);
square(12);
square(5);

// -------------------Addition By Function----------------------
function add(num1, num2) {
  const sum = num1 + num2;
  console.log(sum);
}
add(5, 71);
add(65, 31);

//--------------------------------------------------------------
function addAll(a, b, c, d, e) {
  const total = a + b + c + d + e;
  console.log(a, b, c, d, e);
  console.log(total);
}

// addAll(3, 4, 6, 7, 1);
addAll(3, 4, 6, 7, 1);
addAll(3, 4, 6, 7);
