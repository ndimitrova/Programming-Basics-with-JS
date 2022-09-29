function metricConverter(number, enteredUnit, endUnit) {
    number = Number(number);
    let result = 0.0;

    if (enteredUnit == "mm" & endUnit == "cm") {
        result = number / 10;
    } else if (enteredUnit == "mm" & endUnit == "m") {
        result = number / 1000; 
    } else if (enteredUnit == "cm" & endUnit == "mm") {
        result = number * 10;
    } else if (enteredUnit == "cm" & endUnit == "m") {
        result = number / 100;
    } else if (enteredUnit == "m" & endUnit == "cm") {
        result = number * 100;
    } else if (enteredUnit == "m" & endUnit == "mm") {
        result = number * 1000;
    }

    console.log(result.toFixed(3));
}

metricConverter(45, "cm", "mm");