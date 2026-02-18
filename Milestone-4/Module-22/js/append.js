// 1. Find parent node.
const mainContainer = document.getElementById("main-container");

// Create child node.
const placesSection = document.createElement("section");

//Create h1
const h1 = document.createElement("h1");
h1.innerText = "Places I want to visit";
placesSection.appendChild(h1);

const ul = document.createElement("ul");

const li1 = document.createElement("li");
li1.innerText = "Bandarban";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "Sundorban";
ul.appendChild(li2);

placesSection.appendChild(ul);

// Append placeSection to the main container.
mainContainer.append(placesSection);

//-------------------Easy way to create HTML----------------------
const booksSection = document.createElement("section");
booksSection.innerHTML = `
<h1>Books I need to red</h1>
<ul>
    <li>Physics</li>
    <li>Chemistry</li>
    <li>Mathematics</li>
    <li>Biology</li>
</ul>
`;

//Connect with mainContainer.
mainContainer.appendChild(booksSection);
