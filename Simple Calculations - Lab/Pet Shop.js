function petShop(input) {
    let numberOfDogs = Number(input[0]); 
    let otherAnimals = Number(input[1]);
    let foodForDogs = numberOfDogs * 2.50;
    let foodForOtherAnimals = otherAnimals * 4;
    let commonSum = foodForDogs + foodForOtherAnimals;

    console.log(`${commonSum.toFixed(1)} lv.`);
}

petShop(["13","9"])