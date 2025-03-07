function convertFahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}
console.log(`32°F is ${convertFahrenheitToCelsius(32)}°C`);
console.log(`212°F is ${convertFahrenheitToCelsius(212)}°C`);
console.log(`70°F is ${convertFahrenheitToCelsius(70)}°C`);

export { convertFahrenheitToCelsius };