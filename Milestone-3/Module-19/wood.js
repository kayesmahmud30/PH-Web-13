/*

 1. Chair - 3 CFT
 2. Table - 10 CFT
 3. Bed - 50 CFT

 */

function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedAWood = 50;

  const chairTotalWood = chairQuantity * perChairWood;
  const tableTotalWood = tableQuantity * perTableWood;
  const bedTotalWood = bedQuantity * perBedAWood;

  const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;

  return totalWood;
}

const wood = woodQuantity(1, 1, 4);
console.log("Wood needed:", wood, "CFT");

// Task is make the same function for a shop and shirt, pant , shoes prices.
