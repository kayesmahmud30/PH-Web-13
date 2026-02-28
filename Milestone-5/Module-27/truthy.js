let data;
data = 0;
data = "";
data = "0";
data = " ";
data = false;
data = true;
data = null;
data = undefined;
data = NaN;
data = {};
data = [];

if (data) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

//----------------------------------------------------------
let price = 0;

// if (price) {
//   console.log("Price is Truthy");
// }

if (!price) {
  console.log("Price is Falsy");
}

//--------------------To convert into Boolean----------------
let value = 0;
if (!!value) {
  console.log("Truthy");
}
