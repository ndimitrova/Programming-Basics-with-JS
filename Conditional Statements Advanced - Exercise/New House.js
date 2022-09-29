function newHouse(input) {
    let typeOfFlowers = input[0];
    let numberOfFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;

    if(typeOfFlowers == "Roses") {
        if(numberOfFlowers > 80) {
            price = 0.90 * numberOfFlowers * 5.00;
        } else {
            price = numberOfFlowers * 5.00;
        }
    } else if(typeOfFlowers == "Dahlias") {
        if(numberOfFlowers > 90) {
            price = 0.85 * numberOfFlowers * 3.80;
        } else {
            price = numberOfFlowers * 3.80;
        }
    } else if(typeOfFlowers == "Tulips") {
        if(numberOfFlowers > 80) {
            price = 0.85 * numberOfFlowers * 2.80;
        } else {
            price = numberOfFlowers * 2.80;
        }
    } else if(typeOfFlowers == "Narcissus") {
        if(numberOfFlowers < 120) {
            price = 1.15 * numberOfFlowers * 3.00;
        } else {
            price = numberOfFlowers * 3.00;
        }
    } else{
        if(numberOfFlowers < 80) {
            price = 1.20 * numberOfFlowers * 2.50;
        } else {
            price = numberOfFlowers * 2.50;
        }
    }

    if(budget >= price) {
        console.log(`Hey, you have a great garden with ${numberOfFlowers} ${typeOfFlowers} and ${(budget - price).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`)
    }
}

newHouse(["Narcissus", "119", "360"])


