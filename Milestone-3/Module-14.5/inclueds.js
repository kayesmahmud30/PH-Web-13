const friends = ["Balam", "Kalam", "Salam", "Kayes", "Nayem"];

console.log(friends.includes("Kayes"));
console.log(friends.includes("Khailam"));

if (friends.includes("Salam")) {
  console.log("Party");
} else {
  console.log("No food, we are fasting");
}
