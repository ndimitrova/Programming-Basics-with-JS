function greaterNumber(input) {
    firstNumber = Number(input[0]);
    secondNumber = Number(input[1]);

    if (firstNumber > secondNumber) {
        console.log(firstNumber);
    } else {
        console.log(secondNumber);
    }
}

greaterNumber(["5", "3"]);