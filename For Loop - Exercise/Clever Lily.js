function cleverLily(input) {
    let ages = Number(input[0]);
    let washingMashinePrice = Number(input[1]);
    let toysPrice = Number(input[2]);
    let numberOfToys = 0;
    let sumOfMoney = 0;

    for(let i = 1; i <= ages; i++){
        if(i % 2 === 0) {
            sumOfMoney += (i/2) * 10 - 1;
        } else {
            numberOfToys++;
        }
    }

    sumOfMoney += numberOfToys * toysPrice;

    if(sumOfMoney >= washingMashinePrice) {
        console.log(`Yes! ${(sumOfMoney - washingMashinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMashinePrice - sumOfMoney).toFixed(2)}`);
    }
}

cleverLily(["21",
"1570.98",
"3"])

