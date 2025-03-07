function calculateTotalCoins(nickels, dimes, quarters, loonies, toonies) {
    return (nickels * 0.05) + (dimes * 0.10) + (quarters * 0.25) + (loonies * 1.00) + (toonies * 2.00);
}

console.log(`Total for (1,2,3,4,5): $${calculateTotalCoins(1,2,3,4,5)}`);
console.log(`Total for (0,0,0,0,0): $${calculateTotalCoins(0,0,0,0,0)}`);
console.log(`Total for (5,10,2,1,4): $${calculateTotalCoins(5,10,2,1,4)}`);

export { calculateTotalCoins };
