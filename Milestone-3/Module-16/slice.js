const address = "Dhaka, Bangladesh";
const part = address.slice(0, 5);

// console.log(part);

const sentence = "I am good boy from Bangladesh";

// console.log(sentence.split(' '));
// console.log(sentence.split("a"));

const friendsStr = "Kayes,Mahmud,Tania,Shikder,Pipinul";

const friends = friendsStr.split(",");
console.log(friends);

const realFriends = ["Kayes", "Mahmud", "Tania", "Shikder", "Pipinul"];
console.log(realFriends.join("-"));
