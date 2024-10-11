
alert("Loaded Basket JS")
function calculateTotalCost(basket, prices) {
    let totalCost = 0;

    for (const product in basket) {
        if (prices[product]) {
            totalCost += basket[product] * prices[product];
        }
    }

    return totalCost;
}


const basket = {
    apples: 2,
    bananas: 3,
    oranges: 1
};

const prices = {
    apples: 1.5,
    bananas: 0.5,
    oranges: 2
};

const total = calculateTotalCost(basket, prices);
console.log(total); 