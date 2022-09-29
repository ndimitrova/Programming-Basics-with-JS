function DepositCalculator(input) {
    let sumOfDeposit = Number(input[0]);
    let months = Number(input[1]);
    let increase = Number(input[2]);
    
    let sum = sumOfDeposit + months * ((sumOfDeposit * increase /100) / 12);
    console.log(sum);

}

DepositCalculator(["2350","6","7 "]);