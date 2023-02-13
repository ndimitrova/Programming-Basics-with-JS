function combinations (input) {
    let n = Number(input[0]);
    let numberOfCombinations = 0;

    for(let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            for(let k = 0; k <= n; k++) {
                if (i + j + k === n) {
                    numberOfCombinations++;
                }
            }
        }
    }

    console.log(numberOfCombinations);
}

combinations(["5"])