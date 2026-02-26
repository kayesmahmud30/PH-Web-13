const firstName = "Kamruzzaman";
const lastName = "Shuvo";

const aboutMe = `My name is ${firstName}`;
const giveMe = `Give me some money ${(10 + 20) * 2 + 500}`;
console.log(aboutMe);
console.log(giveMe);

const fullName = firstName + " " + lastName;
const fullName2 = `${firstName} ${lastName} `;

console.log(fullName);
console.log(fullName2);

function getCardHTML(name, description, price) {
  const div = `
    <div class= "card">
        <h2> ${name.toUpperCase()} Borolox</h2>
        <p>Price: $${price}</p>
        <p>${description}</p>
    </div>
    `;
  console.log(div);
}

getCardHTML("iPhone 12", " This is the latest iPhone model", 999);
