/*
----For a given history. Tell me whether it has even numbers of characters or not.
*/

function evenSizedString(str) {
  const size = str.length;
  console.log(str, size);

  if (size % 2 === 0) {
    console.log("Even size");
    return true;
  } else {
    console.log("Odd sized");
    return false;
  }
}

// evenSizedString("Dhaka");
// evenSizedString("Faka");

// ----------------------------------------------------------------
function doubleOrTriple(number, doDouble) {
  if (doDouble) {
    const result = number * 2;
    return result;
  } else {
    const result = number * 3;
    return result;
  }
}

// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));

// -----------------------------------------------------------------
function numberOfElements(numbers) {
  const len = numbers.length;
  return len;
}

// numberOfElements([12, 23, 34, 45, 56, 67, 78, 89, 90]);

// --------------------------------------------------------------
function getAge(person) {
  const age = person.age;
  return age;
}
