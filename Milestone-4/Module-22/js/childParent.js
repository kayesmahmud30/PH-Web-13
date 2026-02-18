
// -------------------Important---------(childNodes)------------
const childParents =
  document.getElementById("players-container").childNodes[3].childNodes[1]
    .parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;

// console.log(childParents);

/* -------------------Important---------(createElement)------------

    1. Create element.
    2. Add innerText or innerHTML.
    3. Find the parent, where you want to add the child.
    4. Append the chiel to the  parents.

*/

const newChild = document.createElement("li");
newChild.innerText = "New born baby footballer";

const playersList = document.getElementById("players-list");
playersList.appendChild(newChild);
