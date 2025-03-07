import { classifyEarthquake } from '../classifyEarthquake.js';

describe("Earthquake Damage Classification", function() {
    it("classifies Richter 4.0 as 'Little or no damage'", function() {
        expect(classifyEarthquake(4.0)).toBe("Little or no damage");
    });
    it("classifies Richter 5.2 as 'Some damage'", function() {
        expect(classifyEarthquake(5.2)).toBe("Some damage");
    });
    it("classifies Richter 6.0 as 'Serious damage: walls may crack or fall'", function() {
        expect(classifyEarthquake(6.0)).toBe("Serious damage: walls may crack or fall");
    });

    it("classifies Richter 7.5 as 'Catastrophe: most buildings destroyed'", function() {
        expect(classifyEarthquake(7.5)).toBe("Catastrophe: most buildings destroyed");
    });

    it("classifies Richter 8.0 as 'Catastrophe: most buildings destroyed'", function() {
        expect(classifyEarthquake(8.0)).toBe("Catastrophe: most buildings destroyed");
    });
});
