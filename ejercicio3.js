for (let num =2; num <= 1000; num++){
    let Primo= true;
    for (let j = 2; j < num; j++){
        if (num % j === 0){
            Primo= false; 
            break; }
    }
    if (Primo ) {
        console.log(num);
    }
}