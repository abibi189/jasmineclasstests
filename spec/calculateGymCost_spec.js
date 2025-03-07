import { calculateGymCost } from '../calculateGymCost.js';

describe("Gym Membership Cost Calculation", function() {
    it("applies 5% discount for 1 friend", function() {
        expect(calculateGymCost(120, 1)).toBeCloseTo(114, 2);
    });
    it("applies 10% discount for 1 friend", function() {
        expect(calculateGymCost(120, 2)).toBeCloseTo(108, 2);
    });
    it("applies 5% discount for 1 friend", function() {
        expect(calculateGymCost(120, 3)).toBeCloseTo(102, 2);
    });
    it("applies 5% discount for 1 friend", function() {
        expect(calculateGymCost(120, 4)).toBeCloseTo(102, 2);
    });
});   