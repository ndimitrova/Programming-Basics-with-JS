function charityCampaign( numberOfDays, numberOfPastryCooks, numberOfCakes, numberOfWaffles, numberOfPancakes) {
    numberOfDays = Number(numberOfDays);
    numberOfPastryCooks = Number(numberOfPastryCooks);
    numberOfCakes = Number(numberOfCakes);
    numberOfWaffles = Number(numberOfWaffles);
    numberOfPancakes = Number(numberOfPancakes);

    let cakesSum = numberOfCakes * 45;
    let wafflesSum = numberOfWaffles * 5.80;
    let pancakesSum = numberOfPancakes * 3.20;
    let commonSumForOneDay = (cakesSum + wafflesSum + pancakesSum) * numberOfPastryCooks;
    let commonSum = commonSumForOneDay * numberOfDays;
    let commmonSumWithoutCosts = commonSum - ((1 / 8) * commonSum);

    console.log(commmonSumWithoutCosts.toFixed(2));
}

charityCampaign(131, 5, 9, 33, 46);