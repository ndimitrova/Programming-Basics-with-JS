function evenPowersOf2(input) {
    let end = Number(input[0]);

    for(let i = 0; i <= end; i+= 2) {
        console.log(Math.pow(2, i));
    }
}

evenPowersOf2(["4"])