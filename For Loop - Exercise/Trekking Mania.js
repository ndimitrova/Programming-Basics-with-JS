function trekkingMania(input) {
    let numberOfGroups = Number(input[0]);
    let length = input.length;
    let commonNumberOfPeople = 0;
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;

    for(let i = 1; i < length; i++) {
        let numberOfPeople = Number(input[i]);
        commonNumberOfPeople += numberOfPeople;
        if(numberOfPeople <= 5) {
            musala += numberOfPeople;
        } else if(numberOfPeople >= 6 && numberOfPeople <= 12) {
            monblan += numberOfPeople;
        } else if(numberOfPeople >= 13 && numberOfPeople <= 25) {
            kilimandjaro += numberOfPeople;
        } else if(numberOfPeople >= 26 && numberOfPeople <= 40) {
            k2 += numberOfPeople;
        } else {
            everest +=numberOfPeople;
        }
    }
    
    console.log(`${((musala / commonNumberOfPeople) * 100).toFixed(2)}%`);
    console.log(`${((monblan / commonNumberOfPeople) * 100).toFixed(2)}%`);
    console.log(`${((kilimandjaro / commonNumberOfPeople) * 100).toFixed(2)}%`);
    console.log(`${((k2 / commonNumberOfPeople) * 100).toFixed(2)}%`);
    console.log(`${((everest / commonNumberOfPeople) * 100).toFixed(2)}%`);

}

trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
