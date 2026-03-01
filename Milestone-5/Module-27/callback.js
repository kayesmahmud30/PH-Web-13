// If we send a function as another function's parameter, then we can call it callback function.

// document.getElementById("btn").addEventListener("click", function (event) {});

//---------------------------------------------------------
function SettleLife(name, isBCS, marriage, patri) {
  if (isBCS) {
    marriage(patri);
  }
}

function boloKobul(patri) {
  console.log("Kobul", patri);
}

SettleLife("Tomal", true, boloKobul, "Nari");

// boloKobul("Pori");
