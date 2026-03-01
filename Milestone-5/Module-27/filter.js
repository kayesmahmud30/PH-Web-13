const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

//----------------------------------------------------------------
const friends = ["Kayes", "Taniya", "Shikder", "Taohid", "Tarek"];

const tFriends = friends.filter((value) => value[0] === "T");
console.log(tFriends);

//----------------------------------------------------------------
const students = [
  { name: "Kayes", age: 20 },
  { name: "Mahmud", age: 13 },
  { name: "Hasib", age: 17 },
  { name: "Ahnaf", age: 21 },
  { name: "Karim", age: 31 },
  { name: "Rahim", age: 34 },
  { name: "Kabir", age: 45 },
];

const olderStudents = students.filter((student) => student.age >= 30);

console.log(olderStudents);
