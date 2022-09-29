function Shopping(input) {
    let budget = Number(input[0]);
    let commonPrice = 0.0;
    let numberOfVideoCards = Number(input[1]);
    let numberOfProcessors = Number(input[2]);
    let numberOfRAMMemories = Number(input[3]);

    let priceForVideoCards = numberOfVideoCards * 250;
    let priceForProcessors = numberOfProcessors * 0.35 * priceForVideoCards;
    let priceForRAMMemories = numberOfRAMMemories * 0.10 * priceForVideoCards;

    if(numberOfVideoCards > numberOfProcessors) {

        commonPrice = 0.85 * (priceForVideoCards + priceForProcessors + priceForRAMMemories);
    } else {
        commonPrice = priceForVideoCards + priceForProcessors + priceForRAMMemories;
    }

    if(commonPrice <= budget) {
        console.log(`You have ${(budget - commonPrice).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(commonPrice - budget).toFixed(2)} leva more!`)
    }
}

Shopping(["920.45","3","1","1"])

