"strict mode";
const budget = Object.freeze([
  { value: 250, description: "Sold old TV 📺", user: "jonas" },
  { value: -45, description: "Groceries 🥑", user: "jonas" },
  { value: 3500, description: "Monthly salary 👩‍💻", user: "jonas" },
  { value: 300, description: "Freelancing 👩‍💻", user: "jonas" },
  { value: -1100, description: "New iPhone 📱", user: "jonas" },
  { value: -20, description: "Candy 🍭", user: "matilda" },
  { value: -125, description: "Toys 🚂", user: "matilda" },
  { value: -1800, description: "New Laptop 💻", user: "jonas" },
]);
// make the spendingLimits immutiable
// first level freeze ( not deep ) only for adding(pushing) and deleting
const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});
// spendingLimits.jay = 200;

const getLimit = (limits, user) => limits?.[user] ?? 0;
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = "jonas"
) {
  // if (!user) user = "jonas";
  // user = user.toLowerCase();
  const cleanUser = user.toLowerCase();

  // let lim;
  // if (spendingLimits[user]) {
  //   lim = spendingLimits[user];
  // } else {
  //   lim = 0;
  // }

  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;

  // const limit = spendingLimits?.[user] ?? 0;

  // const limit = getLimit(user);

  // if (value <= getLimit(cleanUser)) {
  //   budget.push({ value: -value, description, user : cleanUser});
  // }
  //it has side effect ( pushing )

  // if (value <= getLimit(cleanUser)) {
  //   return [...state, { value: -value, description, user: cleanUser }];
  // }
  // return budget;
  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
  //pure function !!
};
const newBudget1 = addExpense(budget, spendingLimits, 10, "Pizza 🍕");
const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  "Going to movies 🍿",
  "Matilda"
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, "Stuff", "Jay");

console.log(budget);
console.log(newBudget1);
console.log(newBudget2);
console.log(newBudget3);

// const checkExpenses = function (state, limits) {
//   // for (const entry of newBudget3) {
//   //   // let lim;
//   //   // if (spendingLimits[entry.user]) {
//   //   //   lim = spendingLimits[entry.user];
//   //   // } else {
//   //   //   lim = 0;
//   //   // }
//   //   // const limit = spendingLimits?.[entry.user] ?? 0;

//   //   if (entry.value < -getLimit(limits, entry.user)) entry.flag = "limit";
//   // }

//   return state.map((entry) => {
//     return entry.value < -getLimit(limits, entry.user)
//       ? { ...entry, flag: "limit" }
//       : entry;
//   });
// };
const checkExpenses = (state, limits) =>
  state.map((entry) =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: "limit" }
      : entry
  );

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

// console.log(budget);

const logBigExpenses = function (state, bigLimit) {
  // let output = "";
  // for (const entry of budget)
  //   output +=
  //     entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : "";
  // // if (entry.value <= -bigLimit) {
  // //   output += `${entry.description.slice(-2)} / `; // Emojis are 2 chars

  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
  const BigExpenses = state
    .filter((entry) => entry.value <= -bigLimit)
    .map((entry) => entry.description.slice(-2))
    .join(" / ");
  //   .reduce((str, cur) => `${str} / ${cur.description.slice(-2)}`, "");
  console.log(BigExpenses);
};
// console.log(budget);
logBigExpenses(finalBudget, 1000);
