console.log("External file");

//Option 2 for event handler.....
function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}

function makeRed() {
  document.body.style.backgroundColor = "red";
}

//Option 3 for event handler.....
const btnMakeBlue = document.getElementById("btn-make-blue");
//   console.log(btnMakeBlue);
btnMakeBlue.onclick = function makeBlue() {
  document.body.style.backgroundColor = "blue";
};

// Option 3: another version.......
const btnMakePurple = document.getElementById("btn-make-purple");
// console.log(btnMakePurple);
btnMakePurple.onclick = MakePurple;

function MakePurple() {
  document.body.style.backgroundColor = "purple";
}

// Option 4: addEventListener....(Most used method)

// document.ElementBuId('id').addEventListener('event type', handler)
document
  .getElementById("btn-make-green")
  .addEventListener("click", function makeGreen() {
    document.body.style.backgroundColor = "green";
  });

//---------------------------------------------------------------
document.getElementById("btn-make-gold").addEventListener("click", function () {
  document.body.style.backgroundColor = "gold";
});
