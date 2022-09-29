function SuppliesFOrSchool(input) {
    let numberOfPenPacks = Number(input[0]);
    let numberOfMarkersPacks = Number(input[1]);
    let litresOfPreparatıon = Number(input[2]);
    let decrease  = Number(input[3]);

    let priceForPens = numberOfPenPacks * 5.80;
    let priceForMarkers = numberOfMarkersPacks * 7.20;
    let priceForPreparation = litresOfPreparatıon * 1.20;

    let commonPrice = priceForPens + priceForMarkers + priceForPreparation;
    let priceWithDearease = commonPrice - (commonPrice * decrease / 100);

    console.log(priceWithDearease);
}

SuppliesFOrSchool(["4","2","5","13"]);