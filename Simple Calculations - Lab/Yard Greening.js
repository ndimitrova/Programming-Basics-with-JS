function greenings(input) {
    let numberOfMetres = Number(input[0]);
    let price = numberOfMetres * 7.61;
    let discount = price * 0.18;
    let finalPrice = price - discount;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

greenings(["150"])