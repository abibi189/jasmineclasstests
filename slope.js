function slope(x1, y1, x2, y2) {
    if (x1 === x2) {
        throw new Error("Undefined slope (vertical line)");
    }
    return (y2 - y1) / (x2 - x1);
}

console.log(`Slope of (1,2) to (3,6) is ${slope(1, 2, 3, 6)}`);
console.log(`Slope of (-2,4) to (2,8) is ${slope(-2, 4, 2, 8)}`);
console.log(`Slope of (5,10) to (10,15) is ${slope(5, 10, 10, 15)}`);

export { slope };
