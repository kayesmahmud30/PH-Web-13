console.log("Third JS");

//Get the parent.
const thirdList = document.getElementById("third-list");

//Create the child.
const li = document.createElement("li");
li.innerText = "Brand new list Item";

//Inject the child to the parent.
thirdList.appendChild(li)