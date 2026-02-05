const jim = 56;
const tim = 89;
const kim = 308;

if (jim > tim && jim < tim) {
  console.log("Jim is the ultimate boss");
} else if (tim > jim && tim > kim) {
  console.log("Tim is the ultimate boss");
} else {
  console.log("Kim is the ultimate boss");
}

// ----------------------------------------------------------------
function maxOfThree(num1, num2, num3) {
  if (num1 > num2 && num3 < num1) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}

console.log(maxOfThree(50, 70, 40));

// -----------------------------------------------------------------
const max = Math.max(12, 1, 45, 65, 77, 98, 90, 99);
console.log("Max isuing Math.max", max);
