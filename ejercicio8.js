
const prompt = require("prompt-sync")();
let numero= parseInt(prompt("Ingrese numero:"));
for(let i = 1; i <= numero; i++){
    let linea = " ".repeat (numero-i);
    for (let j = 1; j <= i; j++) {
        linea += j + "";
    }
console.log (linea);
}
