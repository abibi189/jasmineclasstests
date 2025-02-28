import { calculateMowingTime } from '../calculateMowingTime.js';

describe("Lawn Mowing Time Calculation", function() {
    it("calculates time for 10m x 20m lawn", function() {
        expect(calculateMowingTime(10, 20, 5)).toBeCloseTo(40, 0);
    });

    it("calculates time for 15m x 30m lawn", function() {
        expect(calculateMowingTime(15, 30, 7)).toBeCloseTo(64.29, 2);
    });

    it("calculates time for 25m x 50m lawn", function() {
        expect(calculateMowingTime(25, 50, 10)).toBeCloseTo(125, 0);
    });
});