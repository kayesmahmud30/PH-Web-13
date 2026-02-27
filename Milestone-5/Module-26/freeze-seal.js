const king = { name: "Mufasa", age: 55, Kingdom: "Pride Lands" };

// Object.freeze(king);
Object.seal(king);

delete king.age;
delete king.Kingdom;
king.queen = "Sarabi";
king.name = "King Simba";

console.log(king);
