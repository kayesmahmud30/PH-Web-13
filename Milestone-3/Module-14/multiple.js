const salary = 21001;
const isBCS = true;
const height = 78;
const hasCar = false;

// if (salary > 20000 && height > 66) {
//   console.log("SU....patro.....");
// } else {
//   console.log("Onno patro khubji");
// }

if (salary > 25000 || height > 72) {
  console.log("Eso baba kobul");
} else {
  console.log("Bhag tui mokbul");
}

// //More and more conditions....

// if (salary > 25000 || height > 72 || isBCS == true) {
//   console.log("Eso baba kobul");
// } else {
//   console.log("Bhag tui mokbul");
// }

if (salary > 25000 && height > 72 && isBCS == true) {
  console.log("Eso baba kobul");
} else {
  console.log("Bhag tui mokbul");
}

//---------Complex condition----------

if ((salary > 25000 && hasCar == true) || isBCS == true) {
  console.log("Tomar 14 gosti raji");
}

if ((salary > 25000 || hasCar == true) && isBCS == true) {
  console.log("Tomar 14 gosti raji");
}
