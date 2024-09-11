/**
 * chair --> 3 cft
 * table --> 10 cft
 * bed -->50 cft
 */
function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
  const wc = 3;
  const wt = 10;
  const wb = 50;

  const chairTotalWood = wc * chairQuantity;
  const tableTotalWood = wt * tableQuantity;
  const bedTotalWood = wb * bedQuantity;
  const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;

  return totalWood;
}
const wood = woodQuantity(2, 6, 1);
console.log(wood);

/**
 * shirt --> 500;
 * pant price --> 300;
 * shoe price --> 900;
 */
function totalExpance(countShirt, countPant, countShoes) {
  const sP = 500;
  const pP = 300;
  const shoesP = 900;

  const totalShirtCost = sP * countShirt;
  const totalPantCost = pP * countPant;
  const totalShoesCost = shoesP * countShoes;

  const totalShoping = totalShirtCost + totalPantCost + totalShoesCost;

  return totalShoping;
}
const shoping = totalExpance(3, 2, 1);
console.log(shoping);
