function smallShop(input) {
    let product = input[0]; 
    let town = input[1];
    let quantity = Number(input[2]);
    let price = 0.0;

    if (product == "coffee") {
        if (town == "Sofia") {
            price = 0.50;
        }
        else if (town == "Plovdiv") {
            price = 0.40;
        }
        else {
            price = 0.45;
        }
    } else if (product == "water") {
        if (town == "Sofia") {
            price = 0.80;
        }
        else if (town == "Plovdiv") {
            price = 0.70;
        }
        else {
            price = 0.70;
        }
    } else if (product == "beer") {
        if (town == "Sofia") {
            price = 1.20;
        }
        else if (town == "Plovdiv") {
            price = 1.15;
        }
        else {
            price = 1.10;
        }
    } else if ( product == "sweets") {
        if (town == "Sofia") {
            price = 1.45;
        }
        else if (town == "Plovdiv") {
            price = 1.30;
        }
        else {
            price = 1.35;
        }  
    } else {
        if (town == "Sofia") {
            price = 1.60;
        }
        else if (town == "Plovdiv") {
            price = 1.50;
        }
        else {
            price = 1.55;
        }  
    }

    let commonPrice = price * quantity;
    console.log(commonPrice);
}

smallShop(["sweets", "Sofia", 2.23]);