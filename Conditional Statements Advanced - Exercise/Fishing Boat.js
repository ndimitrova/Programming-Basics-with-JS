function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let numberOfFishermen = Number(input[2]);

    let price = 0;

    if(season == "Spring") {
        if(numberOfFishermen <= 6) {
            if(numberOfFishermen % 2 == 0) {
                price = (0.90 * 3000) * 0.95;
            } else {
                price = 0.90 * 3000;
            }
        } else if(numberOfFishermen >= 7 && numberOfFishermen <= 11) {
            if(numberOfFishermen % 2 == 0) {
                price = (0.85 * 3000) * 0.95;
            } else {
                price = 0.85 * 3000;
            }
        } else {
            if(numberOfFishermen % 2 == 0) {
                price = (0.75 * 3000) * 0.95;
            } else {
                price = 0.75 * 3000;
            }
        }
    } else if(season == "Summer") {
        if(numberOfFishermen <= 6) {
            if(numberOfFishermen % 2 == 0) {
                price = (0.90 * 4200) * 0.95;
            } else {
                price = 0.90 * 4200;
            }
        } else if(numberOfFishermen >= 7 && numberOfFishermen <= 11) {
            if(numberOfFishermen % 2 == 0) {
                price = (0.85 * 4200) * 0.95;
            } else {
                price = 0.85 * 4200;
            }
        } else {
            if(numberOfFishermen % 2 == 0) {
                price = (0.75 * 4200) * 0.95;
            } else {
                price = 0.75 * 4200;
            }
        }
    } else if(season == "Autumn") {
        if(numberOfFishermen <= 6) {
            price = 0.90 * 4200;
        } else if(numberOfFishermen >= 7 && numberOfFishermen <= 11) {
            price = 0.85 * 4200;
        } else {
            price = 0.75 * 4200;
        }
    } else {
        if(numberOfFishermen <= 6) {
            if(numberOfFishermen % 2 == 0) {
                price = (0.90 * 2600) * 0.95;
            } else {
                price = 0.90 * 2600;
            }
        } else if(numberOfFishermen >= 7 && numberOfFishermen <= 11) {
            if(numberOfFishermen % 2 == 0) {
                price = (0.85 * 2600) * 0.95;
            } else {
                price = 0.85 * 2600;
            }
        } else {
            if(numberOfFishermen % 2 == 0) {
                price = (0.76 * 2600) * 0.95;
            } else {
                price = 0.75 * 2600;
            }
        }
    }

    if(budget >= price) {
        console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`)
    }
}

fishingBoat(["2000", "Winter", "13"])


