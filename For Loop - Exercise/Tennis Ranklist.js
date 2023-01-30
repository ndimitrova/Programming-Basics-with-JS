function tennisRanklist(input) {
    let numberOfTurnirs = Number(input[0]);
    let numberOfPoints = Number(input[1]);
    let startPoints = numberOfPoints;
    let length = input.length;
    let numberOfWins = 0;

    for(let i = 2; i < length; i++) {
        let result = input[i];
        if(result === "W") {
            numberOfPoints += 2000;
            numberOfWins++;
        } else if(result === "F") {
            numberOfPoints += 1200;
        } else {
            numberOfPoints += 720;
        }
    }

    console.log(`Final points: ${numberOfPoints}`);
    console.log(`Average points: ${Math.floor((numberOfPoints - startPoints) / numberOfTurnirs)}`);
    console.log(`${((numberOfWins / numberOfTurnirs) * 100).toFixed(2)}%`)
}

tennisRanklist(["4",
"750",
"SF",
"W",
"SF",
"W"])

