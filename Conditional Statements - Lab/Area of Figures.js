function areaOfFigures(input) {

    let typeOfFigures = input[0];
    let side = Number(input[1]);
    let sideB = Number(input[2]);
    let area = 0;

    if (typeOfFigures == "square") {
        area = side * side;
    } else if (typeOfFigures == "rectangle") {
        area = side * sideB;
    } else if(typeOfFigures == "circle") {
        area = side *side * Math.PI;
    } else {
        area = (side * sideB) / 2;
    }

    console.log(area.toFixed(3));
}

areaOfFigures(["triangle", "4.5", "20"]);