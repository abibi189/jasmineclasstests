import { convertFahrenheitToCelsius } from '../convertFahrenheitToCelsius.js';

describe("Fahrenheit to Celsius Conversion", function() {
    it("converts freezing point (32°F) to Celsius", function() {
        expect(convertFahrenheitToCelsius(32)).toBeCloseTo(0, 2);
    });

    it("converts boiling point (212°F) to Celsius", function() {
        expect(convertFahrenheitToCelsius(212)).toBeCloseTo(100, 2);
    });

    it("converts room temperature (70°F) to Celsius", function() {
        expect(convertFahrenheitToCelsius(70)).toBeCloseTo(21.11, 2);
    });
});