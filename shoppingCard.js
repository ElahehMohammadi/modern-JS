// exporting module
console.log("exporting module");

//Blocking  Code
console.log("strat fetching");
// const res = await fetch("https://jsonplaceholder.typicode.com/users");
// console.log("finished fetching");

const shippingCost = 10;
export const cart = [];

// named / defult exports
// it only works for top level codes
export const addToCard = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity}, ${product} added to cart`);
};
const totalPrice = 237;
const totalQuantity = 23;
export { totalPrice, totalQuantity as qt };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity}, ${product} added to cart`);
}
