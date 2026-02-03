// 12 inch = 1 Feet.

function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}

//-------------------------------------------------------------
function inchToFeet2(inch) {
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction);
  const inchRemaining = inch % 12;
  const result = feetNumber + " Feet, " + inchRemaining + " Inch";
  return result;
}

const shuvoHeight = inchToFeet(75);
// console.log(shuvoHeight);

const shuvoHeight2 = inchToFeet2(75);
// console.log(shuvoHeight2);

// ------------------------------------------------------------
function mileToKilometer(mile) {
  const kilo = mile * 1.60934;
  return kilo;
}
// ------------------------------------------------------------
function KilometerToMile(kilo) {
  const mile = kilo * 0.621371;
  return mile;
}

// console.log(mileToKilometer(100));
// console.log(KilometerToMile(50));
