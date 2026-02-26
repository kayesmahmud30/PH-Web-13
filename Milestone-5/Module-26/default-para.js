function add(num1, num2) {
  const total = num1 + num2;
  console.log(num1, num2, total);
}

// Nan --> Not a Number.
// add(10);

//---------------------------------------
function add2(num1, num2 = 0) {
  const total = num1 + num2;
  console.log(num1, num2, total);
}

add2(10);
add2(10, 60);

function fullName(firstName, lastName = "") {
  const name = firstName + " " + lastName;
  console.log(name);
}

fullName("Kayes", "Mahmud");
fullName("Kayes");

//------------------------------------------
function multiply(num1, num2 = 1) {
  const result = num1 * num2;
  console.log(result);
}

multiply(5, 10);
multiply(2);

// Thus we can use default value in our function's parament, that works only when user not gives a data.
