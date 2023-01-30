function sumOfNumbers(input) {
    let currentNumber = input[0];
    let sum = 0;

    for(let i = 0; i < currentNumber.length; i++) {
        sum += Number(currentNumber[i]);
    }

    console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers(["564891"])