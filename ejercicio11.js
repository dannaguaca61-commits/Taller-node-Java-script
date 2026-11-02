const prompt = require("prompt-sync")();
let n= parseInt(prompt("Ingrese n > 6:"));
for (let i = 6; i <= n; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}