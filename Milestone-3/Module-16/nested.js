const college = {
  name: "VNC",
  class: ["10", "12"],
  events: ["Science Fair", "Victory Day", "21 February"],
  unique: {
    color: "blue",
    result: {
      gpa: 5,
      merit: "Top",
    },
  },
};

// console.log(college.unique.color);
college.unique.result.merit = "Top Top Top Most";
console.log(college.unique.result.merit);

college.events[1] = "16 December";
console.log(college.events[1]);

delete college.class;
console.log(college);
