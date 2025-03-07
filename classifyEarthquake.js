function classifyEarthquake(intensity) {
    if (intensity < 5) return "Little or no damage";
    if (intensity >= 5 && intensity < 5.5) return "Some damage";
    if (intensity >= 5.5 && intensity < 6.5) return "Serious damage: walls may crack or fall";
    if (intensity >= 6.5 && intensity < 7.5) return "Disaster: buildings may collapse";
    return "Catastrophe: most buildings destroyed"; 
}
console.log(`Richter 4.0: ${classifyEarthquake(4.0)}`);
console.log(`Richter 5.2: ${classifyEarthquake(5.2)}`);
console.log(`Richter 6.0: ${classifyEarthquake(6.0)}`);
console.log(`Richter 7.5: ${classifyEarthquake(7.5)}`);
console.log(`Richter 8.0: ${classifyEarthquake(8.0)}`);

export { classifyEarthquake };