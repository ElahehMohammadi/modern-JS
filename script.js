/*
// importing module
// import { addToCard, totalPrice as price, qt } from "./shoppingCard.js";
// addToCard("bread", 5);
// console.log(price, qt);
*/
console.log("importing module");
/*
import * as shoppinCart from "./shoppingCard.js";
shoppinCart.addToCard("bread", 5);
// dont do this : importing defult and named exports
// import add, { addToCard, totalPrice as price, qt } from "./shoppingCard.js";
// console.log(price);
*/
import add, { cart } from "./shoppingCard.js";
add("pizza", 2);
add("appels", 2);
add("berger", 2);
add("fries", 2);
// imports are the live version of exports
// they are not the copy of them
// they point to the same thing
console.log(cart);
/*
//////////// SECTION TOP LEVEL AWAIT

// console.log("start fetching");
// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);
// console.log("somethiing");

const getLastPost = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};
const lastPost = getLastPost();

// not clean
// lastPost.then((res) => console.log(res));

const lastPost2 = await getLastPost();
console.log(lastPost2);

const shoppingcart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;
  const addToCard = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity}, ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };
  const ordeedStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity}, ${product} ordered from supplier`);
  };
  return {
    addToCard,
    cart,
    totalPrice,
    totalQuantity,
  };
})();
shoppingcart2.addToCard("appeles", 2);
*/
// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
import cloneDeep from "lodash-es";

const state = {
  cart: [
    { product: "bread", quantity: 5 },
    { product: "pizza", quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
console.log(stateClone);

const stateCloneDeep = cloneDeep(state);

state.user.loggedIn = false;

console.log(stateCloneDeep);

if (module.hot) {
  module.hot.accept();
}
class person {
  #greeding = "Hey";
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeding},${this.name}`);
  }
}
const Evie = new person("Evie");

console.log("Evie" ?? null);

console.log(cart.find((el) => el.quantity >= 2));
Promise.resolve("test").then((x) => console.log(x));

import "core-js/stable";
// pollyfilling async functions
import "regenerator-runtime/runtime";
