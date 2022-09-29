function BasketballEquipment (input) {

    let tax = Number(input[0]);
    let trainers = 0.60 * tax;
    let suit = 0.80 * trainers;
    let ball = 0.25 * suit;
    let accessories = 0.20 * ball;

    let sum = tax + trainers + suit + ball + accessories;

    console.log(sum);
}

BasketballEquipment(["550 "]);