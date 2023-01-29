function tailoringWarkchop(numberOfTables, length, width) {
    numberOfTables = Number(numberOfTables);
    length = Number(length);
    width = Number(width);
    let areaOfTablecloth = numberOfTables * (length + 2 * 0.30) * (width + 2 * 0.30);
    let areaOfSquare = numberOfTables * (length / 2) * (length / 2);
    let priceInDolars = areaOfTablecloth * 7 + areaOfSquare * 9;
    let priceInLevas = priceInDolars * 1.85;

    console.log(`${priceInDolars.toFixed(2)} USD`);
    console.log(`${priceInLevas.toFixed(2)} BGN`)
}

tailoringWarkchop(10, 1.20, 0.65);