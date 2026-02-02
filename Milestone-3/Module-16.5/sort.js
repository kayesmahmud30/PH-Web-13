const persons = ["Kayes", "Taniya", "Mahmud", "Shikder", "Abul", "Babul"];
const sortedPersons = persons.sort();
console.log(sortedPersons);

/*
Sort........

const number = [4, , 7, 2, 8, 3, 6];

1. Ascending ----- Smaller to Larger: [2, 3, 4, 6, 7, 8]
2. Descending ----- Larger to Smaller: [8, 7, 6, 4, 3, 2]
*/

const number = [4, 7, 12, 8, 43, 6, 1];
// const numberAscending = number.sort(); //Not working properly.

const numberAscending = [...number].sort(function (a, b) {
  return a - b;
});

const numberDescending = [...number].sort(function (a, b) {
  return b - a;
});

console.log(numberAscending);
console.log(numberDescending);
