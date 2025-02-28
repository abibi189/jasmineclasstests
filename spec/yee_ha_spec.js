import { yee_ha } from '../yee_ha.js';

describe("Yee Ha Function", function() {
    it("returns 'Yee' for numbers divisible by 3", function() {
        expect(yee_ha(9)).toBe("Yee");
    });

    it("returns 'Ha' for numbers divisible by 7", function() {
        expect(yee_ha(14)).toBe("Ha");
    });

    it("returns 'Yee Ha' for numbers divisible by both 3 and 7", function() {
        expect(yee_ha(21)).toBe("Yee Ha");
    });

    it("returns 'Nada' for numbers divisible by neither 3 nor 7", function() {
        expect(yee_ha(8)).toBe("Nada");
    });
});
