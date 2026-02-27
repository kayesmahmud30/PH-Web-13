const max = Math.max(3, 4, 5, 7, 6, 4);
// console.log(max);

//----------------------------------------------------------------
const numbers = [3, 4, 44, 55, 66, 77, 88, 55, 44];
const max2 = Math.max(...numbers);
// console.log(max2);
// console.log(...numbers);

//----------------------------------------------------------------
const params = [45, 12, 3];
function sum(x, y, z) {
  console.log(x, y, z);
  return x + y + z;
}

// const result = sum(params);

// const result = sum(...params);
// console.log(result);

//------------------------------------------------------------

// const arr1 = [1, 2, 3];
// const arr2 = arr1;
// arr2.push(4);
// console.log(arr1);
// console.log(arr2);

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 55, 77, 56, 54];
arr2.push(4);
console.log(arr1);
console.log(arr2);

//---------------------------------------------------------
const person = { name: "Kayes Mahmud", age: 21 };

// const person2 = person;
const person2 = { ...person, designation: "Developer" };

person.salary = 36000;

console.log(person);
console.log(person2);

//----------------------------------------------------------------
const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [one, tow, three, ...rest] = numberArr;

console.log(one);
console.log(tow);
console.log(three);
console.log(rest);

