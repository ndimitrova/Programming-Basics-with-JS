function sumOfTwoNumbers(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let magicNumber = Number(input[2]);
    let counter = 0;

    for(let i = firstNumber; i <= secondNumber; i++) {

        for(let j = firstNumber; j <= secondNumber; j++) {
            counter++;
            if (i + j == magicNumber) {
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNumber})`);
                return;
            }
        }
    }

    console.log(`${counter} combinations - neither equals ${magicNumber}`)
}

sumOfTwoNumbers(["1",
"10",
"5"])
