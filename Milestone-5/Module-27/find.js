const students = [
  { name: "Kayes", age: 21 },
  { name: "Kabir", age: 45 },
  { name: "Mahmud", age: 13 },
  { name: "Hasib", age: 17 },
  { name: "Ahnaf", age: 21 },
  { name: "Karim", age: 31 },
  { name: "Rahim", age: 34 },
  { name: "Akmal", age: 34 },
];

//------------------------------------------------------------------
const studentKayes = students.find((student) => student.name === "Kayes");
console.log(studentKayes);

//------------------------------------------------------------------
const studentA = students.find((student) => student.name[0] === "A");
console.log(studentA);
