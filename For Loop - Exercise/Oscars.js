function oscars(input) {
    let nameOfActor = input[0];
    let academyPoints = Number(input[1]);
    let numberOfEvaluators = Number(input[2]);
    let length = input.length;

    for(let i = 3; i < length; i+=2) {
        academyPoints += (input[i].length * Number(input[i + 1])) / 2;

        if(academyPoints >= 1250.5) {
            console.log(`Congratulations, ${nameOfActor} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
            break;
        }
    }

    if(academyPoints < 1250.5) {
        console.log(`Sorry, ${nameOfActor} you need ${(1250.5 - academyPoints).toFixed(1)} more!`)
    }
}

oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])

