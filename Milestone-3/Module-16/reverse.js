const sentence = "I am learning Web Dev.";
//Reverse a string......

let reverse = "";
for (const letter of sentence) {
  //   console.log(letter);
  reverse = letter + reverse;
}
// console.log(reverse);


//.................Another way..................
let reverse2 = "";
for (let i = 0; i < sentence.length; i++) {
    //   console.log(i);
    //   console.log(sentence[i]);
    
    const letter = sentence[i];
    reverse2 = letter + reverse2;
}
// console.log(reverse2);


//.................Another way..................
const reversed = sentence.split('').reverse().join('')
console.log(reversed);
