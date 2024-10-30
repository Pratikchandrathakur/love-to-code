// Write code below 💖
function binaryToDecimal(binaryString) {
    let decimal = 0;           // Start with a sum of 0
    let power = binaryString.length - 1; // Start from highest power

    for (let i = 0; i < binaryString.length; i++) {
        const digit = Number(binaryString[i]); // Convert character to number
        decimal += digit * Math.pow(2, power); // Multiply and add to sum
        power--; // Decrease power for next digit
    }

    return decimal;
}

console.log(binaryToDecimal("1011"))
