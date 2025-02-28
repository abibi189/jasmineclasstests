function convertSquareFeetToAcres(squareFeet) {
    return squareFeet / 43560;
}

console.log(`1,000 square feet is ${convertSquareFeetToAcres(1000)} acres`);
console.log(`10,000 square feet is ${convertSquareFeetToAcres(10000)} acres`);
console.log(`43,560 square feet is ${convertSquareFeetToAcres(43560)} acres`);

export { convertSquareFeetToAcres };
