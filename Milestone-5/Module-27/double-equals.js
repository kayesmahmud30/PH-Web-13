// Double equals does type coercion.

// Compare the value after converting them to a common type. If the values are equal after type coercion, it returns true. If the values are not equal after type coercion, it returns false.

console.log(2 == 2);
console.log(2 == "2"); // Convert the string '2' to number 2, and that compares. Then returns true.

console.log(1 == true);
console.log(0 == false);
console.log(true == "1");
console.log(false == "0");
console.log(null == undefined);

//If there are minimum one primitive type data, then it (==) try to convert. But if both data are Non-primitive, It don't try to convert.

console.log(NaN == NaN);

console.log([5] == "5");
console.log([5].toString());

console.log({} == {});
console.log([] == []);

console.log([5].toString());
