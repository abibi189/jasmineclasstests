import { convertSquareFeetToAcres } from '../squareFeetToAcres.js';

describe("Square Feet to Acres Conversion", function() {
    it("convert 1,000 square feet", function() {
        let acres = convertSquareFeetToAcres(1000);
        expect(acres).toBeCloseTo(0.02296, 4);
    });

    it("convert 10,000 square feet", function() {
        let acres = convertSquareFeetToAcres(10000);
        expect(acres).toBeCloseTo(0.22957, 4);
    });

    it("convert 43,560 square feet", function() {
        let acres = convertSquareFeetToAcres(43560);
        expect(acres).toBeCloseTo(1, 0);
    });
});