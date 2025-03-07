import { calculateTotalCoins } from '../calculateTotalCoins.js';

describe("Total Coin Value Calculation", function() {
    it("calculates total for (1,2,3,4,5)", function() {
        expect(calculateTotalCoins(1,2,3,4,5)).toBeCloseTo(15.00, 2);
    });

    it("calculates total for (0,0,0,0,0)", function() {
        expect(calculateTotalCoins(0,0,0,0,0)).toBeCloseTo(0.00, 2);
    });

    it("calculates total for (5,10,2,1,4)", function() {
        expect(calculateTotalCoins(5,10,2,1,4)).toBeCloseTo(10.75, 2);
    });
});