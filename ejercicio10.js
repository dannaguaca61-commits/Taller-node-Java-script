let abecedario = "zyxwvutsrqponmlkjihgfedcba";
for (let i = 0; i < abecedario.length; i++) {
    let linea = " ";
    for (let j = 0; j <= i; j++) {
        linea += abecedario[j] + " ";
    }
    console.log(linea);
}