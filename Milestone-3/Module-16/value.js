const person = {
  name: "Kayes Mahmud",
  age: 21,
  profession: "Developer",
  salary: 25000,
  married: true,
  "favorite places": ["Bandarban", "Saintmartin", "Kuakata"],
};

person.salary = 30000;
person["age"] = 26;
person["favorite places"] = ["Maldives", "Bali", "Pataya"];
console.log(person);

const propName = "profession";
person[propName] = "DevOps";
console.log(person);
