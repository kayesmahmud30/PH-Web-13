const actor = {
  name: "Sakib Khan",
  id: 121,
  address: "Movie Cinema",
  isSingle: true,
  friends: ["Apu", "Raj", "Salman", "Amir"],
  movies: [
    { name: "No 1", year: 2015 },
    { name: "King Khan", year: 2018 },
  ],

  act: function () {
    console.log("Acting like Sakib Khan");
  },

  car: {
    brand: "Tesla",
    price: 5000000,
    made: 2025,
    manufacturer: {
      name: "Tesla",
      CEO: "Elon Mask",
      country: "USA",
    },
  },
};

// console.log(actor.car);
console.log(actor.act);
actor.act();
