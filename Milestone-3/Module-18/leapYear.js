/*

// Year will be a leap year if the year is divisible by 4.

*/

function isLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

const isLipi = isLeapYear(2052);
// console.log(isLipi);

// Year will be a leap year if the year is divisible by 4 and not divisible by 100. But if the year is dividable by 400, then it's a leap year. Otherwise it's not leap year.
// --------------------------------------------------------------

function isLeapYear2(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  } else if (year % 100 === 0 && year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

const isLeap1 = isLeapYear2(2100);
const isLeap2 = isLeapYear2(2400);
const isLeap3 = isLeapYear2(1900);
const isLeap4 = isLeapYear2(2052);

console.log(isLeap1, isLeap2, isLeap3, isLeap4);
