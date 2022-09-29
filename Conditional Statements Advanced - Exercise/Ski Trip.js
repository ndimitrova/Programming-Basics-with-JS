function skiTrip(input) {
    let numberOfDays = Number(input[0]);
    let typeOfRoom = input[1];
    let rating = input[2];
    let price = 0;

    if(typeOfRoom === "room for one person") {
        price = (numberOfDays - 1) * 18;
    } else if(typeOfRoom === "apartment") {
        if(numberOfDays < 10) {
            price = ((numberOfDays - 1) * 25) * 0.70;
        } else if(numberOfDays <= 15) {
            price = ((numberOfDays - 1) * 25) * 0.65;
        } else {
            price = ((numberOfDays - 1) * 25) * 0.50;
        }
    } else {
        if(numberOfDays < 10) {
            price = ((numberOfDays - 1) * 35) * 0.90;
        } else if(numberOfDays <= 15) {
            price = ((numberOfDays - 1) * 35) * 0.85;
        } else {
            price = ((numberOfDays - 1) * 35) * 0.80;
        }
    }

    if(rating === "positive") {
        price = price * 1.25;
    } else {
        price = price * 0.90;
    }

    console.log(price.toFixed(2));
}

skiTrip(["2",
"apartment",
"positive"])



