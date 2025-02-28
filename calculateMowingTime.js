function calculateMowingTime(width, length, rate) {
    let area = width * length;
    return area / rate;
}

console.log(`Lawn (10m x 20m) takes ${calculateMowingTime(10, 20, 5)} minutes to mow`);
console.log(`Lawn (15m x 30m) takes ${calculateMowingTime(15, 30, 7)} minutes to mow`);
console.log(`Lawn (25m x 50m) takes ${calculateMowingTime(25, 50, 10)} minutes to mow`);

export { calculateMowingTime };
