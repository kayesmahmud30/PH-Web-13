/*
----Looping Technique.....

1. for loop
2. while
3. do while ---- ignore
4. for of ---- for array looping
5. for in ---- for object looping

*/
// --------------------------------------------------------------
const friends = ["Elon", "Bill", "Mark", "Waren"];

for (const friend of friends) {
  //   console.log(friend);
}
// --------------------------------------------------------------
for (let i = 0; i < friends.length; i++) {
  //   console.log(i);
  //   console.log(friends[i]);
}
// --------------------------------------------------------------
const numbers = [4, 6, 7, 87, 98, 67, 56, 45, 34, 54, 656, 4, 6];

for (let i = 0; i < numbers.length; i++) {
  //   console.log(numbers[i]);
}
// --------------------------------------------------------------
let i = 0;
while (i < friends.length) {
  //   console.log(friends[i]);
  i++;
}
// --------------------------------------------------------------
let n = 0;
while (n < numbers.length) {
    console.log(numbers[n]);
  n++;
}
