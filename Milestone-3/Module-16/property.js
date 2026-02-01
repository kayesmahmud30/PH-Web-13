const person = {
  name: "Kayes Mahmud",
  age: 21,
  profession: "Developer",
  salary: 25000,
  married: true,
  "favorite places": ["Bandarban", "Saintmartin", "Kuakata"],
};

// console.log(person);

// Dot Notation.
// console.log(person.profession);
const income = person.salary;
// console.log(income);

//Bracket Notation.
//Using Third Bracket like array

console.log(person["age"]);
const boyos = person["age"];
console.log(boyos);

console.log(person["favorite places"]);

const keyName = "profession";
console.log(person[keyName]);
