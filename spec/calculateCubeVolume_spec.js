import { calculateCubeVolume } from '../calculateCubeVolume.js';

describe("Cube Volume Calculation", function() {
    it("calculates volume for a cube with height 2m", function() {
        expect(calculateCubeVolume(2)).toBeCloseTo(8, 2);
    });
    it("calculates volume for a cube with height 8m", function() {
        expect(calculateCubeVolume(8)).toBeCloseTo(512, 2);
    });
    it("calculates volume for a cube with height 8m", function() {
        expect(calculateCubeVolume(10)).toBeCloseTo(1000, 2);
    });
});
