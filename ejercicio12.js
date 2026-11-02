let abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
for (let i = 0; i < abecedario.length; i++) {
    console.log(abecedario.slice(0, i).split("").join(" "));
}