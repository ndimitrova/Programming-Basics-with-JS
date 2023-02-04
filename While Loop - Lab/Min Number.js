function minNumber(input) {
    let index = 0;
    let currentNumber = input[index];
    let minNumber = Number.MAX_SAFE_INTEGER;

    while (currentNumber != "Stop") {
        if (Number(currentNumber) < minNumber) {
            minNumber = Number(currentNumber);
        }

        index++;
        currentNumber = input[index];
    }

    console.log(minNumber);
}

minNumber(["45",
"-20",
"7",
"99",
"Stop"])

