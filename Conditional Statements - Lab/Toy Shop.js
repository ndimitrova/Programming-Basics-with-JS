function toyShop(input) {

    let priceForExcursion = Number(input[0]);
    let numberOfPuzzle = Number(input[1]);
    let numberOfDolls = Number(input[2]);
    let numberOfBears = Number(input[3]);
    let numberOfMinions = Number(input[4]);
    let numberOfTrucks = Number(input[5]);

    let sum = numberOfPuzzle * 2.60 + numberOfDolls * 3 + numberOfBears * 4.10 + numberOfMinions * 8.20 + numberOfTrucks * 2;
    let numberOfToys = numberOfPuzzle + numberOfDolls + numberOfBears + numberOfTrucks + numberOfMinions;

    if (numberOfToys >= 50) {
        sum = sum * 0.75;
    }
    let rent = sum * 0.10;
    let profit = sum - rent;
    
    if (profit >= priceForExcursion) {
        console.log(`Yes! ${(profit - priceForExcursion).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(priceForExcursion - profit).toFixed(2)} lv needed.`)
    }
}

toyShop(["40.8","20","25","30","50","10"]);