// exporting module
console.log("exporting module");

const shippingCost = 10;
const cart = [];

// named / defult exports
// it only works for top level codes
export const addToCard = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity}, ${product} added to cart`);
};
const totalPrice = 237;
const totalQuantity = 23;
export { totalPrice, totalQuantity };
