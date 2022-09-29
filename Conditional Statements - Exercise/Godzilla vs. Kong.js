function godzilaKong(input) {
    let budget = Number(input[0]);
    let numberOfExtras = Number(input[1]);
    let priceForClothes = Number(input[2]);

    let sumForDecor = 0.10 * budget;
    let sumForClothes = numberOfExtras * priceForClothes;
    if (numberOfExtras > 150) {
        sumForClothes -= sumForClothes * 0.10;
    }
    let commonSum = sumForDecor + sumForClothes;

    if (commonSum <= budget) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - commonSum).toFixed(2)} leva left.`);
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(commonSum - budget).toFixed(2)} leva more.`)
    }
}

godzilaKong(["9587.88","222","55.68"]);