import { slope } from '../slope.js';

describe("Slope Calculation", function() {
    it("calculates slope of (1,2) to (3,6)", function() {
        expect(slope(1, 2, 3, 6)).toBeCloseTo(2, 0);
    });

    it("calculates slope of (-2,4) to (2,8)", function() {
        expect(slope(-2, 4, 2, 8)).toBeCloseTo(1, 0);
    });

    it("calculates slope of (5,10) to (10,15)", function() {
        expect(slope(5, 10, 10, 15)).toBeCloseTo(1, 0);
    });

    it("throws error for vertical line (undefined slope)", function() {
        expect(() => slope(3, 4, 3, 10)).toThrowError("Undefined slope (vertical line)");
    });
});
