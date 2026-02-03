// We need to remove duplicate items from an array.

const biryaniKhor = [
  "Abul",
  "Babul",
  "Kabul",
  "Babul",
  "Habib",
  "Kabir",
  "Habib",
  "Abul",
];

const numbers = [12, 12, 12, 23, 45, 67, 89, 34, 56, 87, 67, 56, 34, 67, 78];

function noDuplicate(array) {
  const unique = [];
  for (const item of array) {
    if (unique.includes(item) === false) {
      unique.push(item);
    }
  }
  return unique;
}

const uniqueArray = noDuplicate(biryaniKhor);
console.log(uniqueArray);

const uniqueArray2 = noDuplicate(numbers);
console.log(uniqueArray2);
