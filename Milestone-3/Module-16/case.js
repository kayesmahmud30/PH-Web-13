const school = "RAJ UK Uttara Model School";

console.log(school);
console.log(school.toLocaleLowerCase());
console.log(school.toUpperCase());

//Uppercase....A B C D...
//Lowercase....a b c d...

const subject = "Chemistry";
const book = "ChemIsTry";

if (subject.toLowerCase() === book.toLocaleLowerCase()) {
  console.log("I will make a good result");
} else {
  console.log("Nothing good at all, Just eat & sleep");
}

const drink = "water ";
const liquid = "   water     ";

if (drink.trim() === liquid.trim()) {
  console.log("Water is life");
} else {
  console.log("See water is not drinkable");
}
