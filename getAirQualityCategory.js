function getAirQualityCategory(aqi) {
    if (aqi >= 0 && aqi <= 50) return "Good";
    if (aqi >= 51 && aqi <= 100) return "Moderate";
    if (aqi >= 101 && aqi <= 150) return "Unhealthy for Sensitive Groups";
    if (aqi >= 151 && aqi <= 200) return "Unhealthy";
    if (aqi >= 201 && aqi <= 300) return "Very Unhealthy";
    return "Hazardous"; 
}

console.log(`AQI 30 is ${getAirQualityCategory(30)}`);
console.log(`AQI 75 is ${getAirQualityCategory(78)}`);
console.log(`AQI 120 is ${getAirQualityCategory(122)}`);
console.log(`AQI 180 is ${getAirQualityCategory(182)}`);
console.log(`AQI 250 is ${getAirQualityCategory(250)}`);
console.log(`AQI 350 is ${getAirQualityCategory(350)}`);

export { getAirQualityCategory };
