import { getAirQualityCategory } from '../getAirQualityCategory.js';

describe("Air Quality Classification", function() {
    it("returns 'Good' for AQI 30", function() {
        expect(getAirQualityCategory(30)).toBe("Good");
    });

    it("returns 'Moderate' for AQI 78", function() {
        expect(getAirQualityCategory(78)).toBe("Moderate");
    });

    it("returns 'Unhealthy for Sensitive Groups' for AQI 122", function() {
        expect(getAirQualityCategory(122)).toBe("Unhealthy for Sensitive Groups");
    });

    it("returns 'Unhealthy' for AQI 185", function() {
        expect(getAirQualityCategory(185)).toBe("Unhealthy");
    });

    it("returns 'Very Unhealthy' for AQI 250", function() {
        expect(getAirQualityCategory(250)).toBe("Very Unhealthy");
    });

    it("returns 'Hazardous' for AQI 350", function() {
        expect(getAirQualityCategory(350)).toBe("Hazardous");
    });
});