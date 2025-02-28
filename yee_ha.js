function yee_ha(num) {
    if (num % 3 === 0 && num % 7 === 0) return "Yee Ha";
    if (num % 3 === 0) return "Yee";
    if (num % 7 === 0) return "Ha";
    return "Nada";
}

console.log(`21 -> ${yee_ha(21)}`); 
console.log(`9 -> ${yee_ha(9)}`); 
console.log(`14 -> ${yee_ha(14)}`);
console.log(`8 -> ${yee_ha(8)}`); 

export { yee_ha };
