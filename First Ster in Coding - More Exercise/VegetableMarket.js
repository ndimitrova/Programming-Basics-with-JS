function VegetableMarket(input) {

    let priceForVegetables = Number(input[0]);
    let priceForFruits = Number(input[1]);
    let kfOfVegetabes = Number(input[2]);
    let kgOfFruits = Number(input[3]);

    let commonSum = priceForVegetables * kfOfVegetabes + priceForFruits * kgOfFruits;
    let sumInEuro = commonSum / 1.94;

    console.log(sumInEuro.toFixed(2));

}

VegetableMarket([1.5, 2.5, 10, 10]);