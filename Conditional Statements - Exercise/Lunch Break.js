function LunchBreak(input) {
    let nameOfSeries = input[0];
    let timeForSeries = Number(input[1]);
    let timeForBreak = Number(input[2]);

    let timeForLunch = 1 / 8 * timeForBreak;
    let timeForRelaxation = 1 / 4 * timeForBreak;
    let restTime = timeForBreak - timeForLunch - timeForRelaxation;

    if(restTime >= timeForSeries) {
        let finalTime = Math.ceil(restTime - timeForSeries);
        console.log(`You have enough time to watch ${nameOfSeries} and left with ${finalTime} minutes free time.`);
    } else {
        let finalTime = Math.ceil(timeForSeries - restTime);
        console.log(`You don't have enough time to watch ${nameOfSeries}, you need ${finalTime} more minutes.`)
    }
}

LunchBreak(["Game of Thrones","60","96"]);