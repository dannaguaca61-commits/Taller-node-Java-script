let n = 5;
for (let i = -n+1; i < n; i++) {
    let k = n - Math.abs(i);
    let espacios = " ".repeat(n - k);
    let estrellas = "*".repeat(2 * k - 1);
    console.log(espacios + estrellas);
}