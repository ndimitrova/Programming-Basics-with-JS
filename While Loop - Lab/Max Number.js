function maxNumber(input) {
    let index = 0;
    let currentNumber = input[index];
    let maxNumber = Number.MIN_SAFE_INTEGER;

    while (currentNumber != "Stop") {
        if (Number(currentNumber) > maxNumber) {
            maxNumber = Number(currentNumber);
        }

        index++;
        currentNumber = input[index];
    }

    console.log(maxNumber);
}

maxNumber(["-1",
    "-2",
    "Stop"])



