function outerFunction() {
  function innerFunction() {
    console.log("This id the inner function");
  }
  return innerFunction;
}

const result = outerFunction();
// result()
// outerFunction()();
// console.log("In the outside", result);

function counter(owner) {
  let count = 0;
  function increment() {
    count = count + 1;
    console.log("Value of count is", owner, count);
  }
  return increment;
}

//-----------------------------------------
const rahimCounter = counter("Rahim");
rahimCounter();
rahimCounter();
rahimCounter();
rahimCounter();

//-----------------------------------------
const karimCounter = counter("Karim");
karimCounter();
karimCounter();

//-----------------------------------------
rahimCounter();
rahimCounter();
