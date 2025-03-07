function calculateCubeVolume(height) {
    return Math.pow(height, 3);
}

console.log(`Cube with height 2m has volume ${calculateCubeVolume(2)} m³`);
console.log(`Cube with height 8m has volume ${calculateCubeVolume(8)} m³`);
console.log(`Cube with height 10m has volume ${calculateCubeVolume(10)} m³`);

export { calculateCubeVolume };
