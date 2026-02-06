const mobiles = [
  { name: "Samsung", prices: 20000, camera: "12 MP", color: "black" },
  { name: "Xoami", prices: 18000, camera: "12 MP", color: "black" },
  { name: "Oppo", prices: 30000, camera: "12 MP", color: "black" },
  { name: "Iphone", prices: 100000, camera: "12 MP", color: "black" },
  { name: "Walton", prices: 310000, camera: "12 MP", color: "black" },
  { name: "HTC", prices: 27000, camera: "12 MP", color: "black" },
];

function getCheapestPhone(phones) {
  let min = phones[0];
  for (const phone of phones) {
    if (phone.prices < min.prices) {
      min = phone;
    }
  }
  return min;
}

const cheap = getCheapestPhone(mobiles);
console.log(cheap.name, "is the cheapest phone:", cheap.prices);
