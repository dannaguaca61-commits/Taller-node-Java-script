const prompt = require("prompt-sync")();
let m = parseInt(prompt("Filas m:"));
let n = parseInt(prompt("Columnas n:"));
let car = prompt("Caracter: ");
for (let i = 0; i < m; i++) {
    let fila = "";
    for (let j = 0; j < n; j++) {
        fila += car + " ";
    }  
    console.log(fila);
}