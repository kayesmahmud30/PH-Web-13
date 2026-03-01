function add(num1, num2) {
  console.log("Arguments are:", arguments, arguments[2]);

  const args = [...arguments];
  //   const args = Array.from(arguments);
  console.log(args);

  return num1 + num2;
}

add(2, 5, 4, 5, 3, 7, 9, 6);

// We get a array like object inside all function with the collection of all the arguments that we passed into the function as parameters. We also  can covert the object into a array bu using "Spread operator" or "Array.from(arguments)"
