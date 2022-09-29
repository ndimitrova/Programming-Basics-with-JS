function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination;
    let typeOfVacation;
    let sum = 0;

    if(budget <= 100) {
        destination = "Bulgaria"
        if(season == "summer") {
            typeOfVacation = "Camp";
            sum = 0.30 * budget;
        } else {
            typeOfVacation = "Hotel";
            sum = 0.70 * budget;
        }
    } else if(budget <= 1000) {
        destination = "Balkans"
        if(season == "summer") {
            typeOfVacation = "Camp";
            sum = 0.40 * budget;
        } else {
            typeOfVacation = "Hotel";
            sum = 0.80 * budget;
        }
    } else {
        destination = "Europe";
        typeOfVacation = "Hotel";
        sum = 0.90 * budget;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${typeOfVacation} - ${sum.toFixed(2)}`);
}

journey(["50", "summer"])