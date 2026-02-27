const employee = {
  name: "John Doe",
  1: "desk1",
  "home-address": "123 Main St",
  salary: 50000,
  family: {
    father: "Reachar Doe",
    mother: {
      name: "Monika Doe",
      age: 55,
    },
  },
  position: "Software Engineer",
};

const value = employee.name;
console.log(employee.family?.mother?.age);
