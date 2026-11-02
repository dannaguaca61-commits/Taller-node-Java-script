let n = 5; 
for (let i = 1; i<= n; i++){
    let espacios = " ".repeat(n-i);
    let estrellas = "*".repeat (2*i-1);
    console.log(espacios + estrellas);
} 
for (let i=n - 1; i >= 1; i--){
    let espacios = " ".repeat (n-i);
    let estrellas = "*".repeat(2*i-1);
console.log(espacios + estrellas);
}
