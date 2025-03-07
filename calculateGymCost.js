function calculateGymCost(cost, friends) {
    let discount = 0;

    if (friends === 1) discount = 0.05;
    else if (friends === 2) discount = 0.10;
    else if (friends >= 3) discount = 0.15;

    return cost * (1 - discount);
}

console.log(`Base cost $100 with 1 friend: $${calculateGymCost(120, 1)}`);
console.log(`Base cost $100 with 2 friends: $${calculateGymCost(120, 2)}`);
console.log(`Base cost $100 with 3 friends: $${calculateGymCost(120, 3)}`);
console.log(`Base cost $100 with 4 friends: $${calculateGymCost(120, 4)}`);

export { calculateGymCost };
