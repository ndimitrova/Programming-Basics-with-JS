function FoodDelivery(input) {
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegeterianMenu = Number(input[2]);

    let sum = chickenMenu * 10.35 + fishMenu * 12.40 + vegeterianMenu * 8.15;
    let totalSum = sum + sum * 0.20 + 2.50;

    console.log(totalSum);
}

FoodDelivery(["9 ",
"2 ",
"6 "]

)