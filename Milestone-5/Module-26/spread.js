const max = Math.max(3, 4, 5, 7, 6, 4);
// console.log(max);

//-------------------------------------------------------
const numbers = [3, 4, 44, 55, 66, 77, 88, 55, 44];
const max2 = Math.max(...numbers);
console.log(max2);
console.log(...numbers);

//-----------------------------------------------------------
const params = [45, 12, 3];
function sum(x, y, z) {
  return x + y + z;
}

sum