function Repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let numberOfHours = Number(input[3]);

    let sumForNylon = (nylon + 2) * 1.50;
    let sumForPaint = (paint + 0.10 * paint) * 14.50;
    let sumForThinner = thinner * 5;

    let commonSumForMaterials = sumForNylon + sumForPaint + sumForThinner + 0.40;
    let sumForMasters = commonSumForMaterials * 0.30 * numberOfHours;
    let commonSum = commonSumForMaterials + sumForMasters;

    console.log(commonSum);

}

Repainting(["5","10","10","1"])