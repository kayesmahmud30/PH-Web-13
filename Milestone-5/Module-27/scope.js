let pi = 3.14;
add(2, 5);

function add(a, b) {
  const factor = 0.5;
  const result = (a + b) * factor + pi;
  const total = doubleIt(result);
  const value = addTow(total);

  function addTow(num) {
    num = num + pi;
    return num + 2;
  }

  return value;
}

function doubleIt(num) {
  return num * 2;
}

add(5, 10);

// addTow(5);
// console.log(factor, pi);

//--------------------------------------------------
const multiply = (a, b) => {
  console.log(result);

  // TDZ: Temporal Dead Zone.

  const result = a * b;
  return result;
};
multiply(2, 5);

if (true) {
  // Created a block.
}

while (true) {
  //   Created another block.
}

const age = 21;

// Child scope can access parent scope and grandparent scope and it's moving up to the higher and higher scope. But parents cannot access the chields scope.
