function equalSumsEvenOddPosition(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let exitNumbers = "";

    for (let i = firstNumber; i <= secondNumber; i++) {
        let number = i;
        let sixthSign = number % 10;
        number = Math.floor(number / 10);
        let fifthSign = number % 10;
        number = Math.floor(number / 10);
        let fourthSign = number % 10;
        number = Math.floor(number / 10);
        let thirdSign = number % 10;
        number = Math.floor(number / 10);
        let secondSign = number % 10;
        number = Math.floor(number / 10);
        let firstSign = number % 10;

        if (firstSign + thirdSign + fifthSign == secondSign + fourthSign + sixthSign) {
            exitNumbers += firstSign;
            exitNumbers += secondSign;
            exitNumbers += thirdSign;
            exitNumbers += fourthSign;
            exitNumbers += fifthSign;
            exitNumbers += sixthSign + " ";
        }
    }

    console.log(exitNumbers);
}

equalSumsEvenOddPosition(["100000",
"100050"])