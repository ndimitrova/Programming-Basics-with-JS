function histogram(input) {
    let count = Number(input[0]);
    let length = input.length;
    let numbersTo199 = 0;
    let numbersFrom200To399 = 0;
    let numbersFrom400To599 = 0;
    let numbersFrom600To799 = 0;
    let numbersFrom800 = 0;

        for (let i = 1; i < length; i++) {
            let number = input[i]
        if(number < 200) {
            numbersTo199++;
        } else if(number >= 200 && number < 400) {
            numbersFrom200To399++;
        } else if(number >= 400 && number < 600) {
            numbersFrom400To599++;
        } else if(number >= 600 && number < 800) {
            numbersFrom600To799++;
        } else {
            numbersFrom800++;
        }
    }

    let percentNumbersTo199 = numbersTo199 / count * 100;
    let percentNumbersFrom200To399 = numbersFrom200To399 / count * 100;;
    let percentNumbersFrom400To599 = numbersFrom400To599 / count * 100;
    let percentNumbersFrom600To799 = numbersFrom600To799 / count * 100;
    let percentNumbersFrom800 = numbersFrom800 / count * 100;

    console.log(`${percentNumbersTo199.toFixed(2)}%`);
    console.log(`${percentNumbersFrom200To399.toFixed(2)}%`);
    console.log(`${percentNumbersFrom400To599.toFixed(2)}%`);
    console.log(`${percentNumbersFrom600To799.toFixed(2)}%`);
    console.log(`${percentNumbersFrom800.toFixed(2)}%`);
}

histogram(["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"])

