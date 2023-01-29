function alcoholMarket(priceOfwhiskey, quantityOfBeer, quantityOfWine, quantityOfRakia, quantityOfWhiskey) {
    priceOfwhiskey = Number(priceOfwhiskey);
    quantityOfBeer = Number(quantityOfBeer);
    quantityOfWine = Number(quantityOfWine);
    quantityOfRakia = Number(quantityOfRakia);
    quantityOfWhiskey = Number(quantityOfWhiskey);

    let priceOfRakia = priceOfwhiskey / 2;
    let priceOfWine = priceOfRakia - (0.40 * priceOfRakia);
    let priceOfBeer = priceOfRakia - (0.8 * priceOfRakia);

    let commonSum = (priceOfwhiskey * quantityOfWhiskey) + (priceOfBeer * quantityOfBeer) + (priceOfWine * quantityOfWine) + (priceOfRakia * quantityOfRakia);

    console.log(commonSum.toFixed(2));

}

alcoholMarket(63.44, 3.57, 6.35, 8.15, 2.5);