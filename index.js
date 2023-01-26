const process = require("process");

let itemCostInput = null;
let paymentInput = null;

for (let i = 0; i < process.argv.length; i++) {
  if (process.argv[i] === "--item-cost") {
    itemCostInput = process.argv[i + 1];
  } else if (process.argv[i] === "--payment") {
    paymentInput = process.argv[i + 1];
  }
}

const itemCost = Number(itemCostInput) * 100;
if (isNaN(itemCost)) {
  console.log("--item-cost - number");
  process.exit(1);
}

const payment = Number(paymentInput) * 100;
if (isNaN(payment)) {
  console.log("--payment - number");
  process.exit(1);
}

const getChange = (cost = itemCost, payment = paymentInput) => {
  let remainingAmount = payment - cost;
  const coins = [25, 10, 5, 1];
  let receipt = {};
  for (let i = 0; i < coins.length; i++) {
    const coinValue = coins[i];
    receipt[coinValue] = Math.floor(remainingAmount / coinValue);
    remainingAmount = remainingAmount % coinValue;
  }
  return receipt;
};

module.exports = {
  getChange,
};
