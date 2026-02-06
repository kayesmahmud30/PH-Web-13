function multiply(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Please provide numbers as value";
  }
  const mult = num1 * num2;
  return mult;
}

const result = multiply(5, "seven");
// console.log(result);

// ----------------------------------------------------------------
function fullName(firstName, lastName) {
  if (typeof firstName !== "string") {
    return "First Name should be string";
  } else if (typeof lastName !== "string") {
    return "Last Name should be string";
  }
  const fullName = firstName + " " + lastName;
  return fullName;
}

const full = fullName("Kayes");
// console.log(full);

// -----------------------------------------------------------------

function getPrice(product) {
  if (typeof product !== "object") {
    return "Please provide an object";
  }
  const price = product.price;
  return price;
}

// const price = getPrice({ name: "Chulkanir Dandi", price: 35, color: "Blue" });
const price = getPrice(5);
// console.log(price);

//----------------------------------------------------------------
function getSecond(numbers) {
  if (Array.isArray(numbers) === false) {
    return "Please provide an array";
  }

  const second = numbers[1];
  return second;
}

const second = getSecond([1, 2, 3, 4, 5]);
console.log(second);
