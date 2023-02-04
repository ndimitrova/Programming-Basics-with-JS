function WeatherForecastPart2(input) {

    let degree = input[0];

    if(degree >= 5 & degree <= 11.9) {
        console.log("Cold");
    } else if(degree >= 12 & degree <= 14.9) {
        console.log("Cool");
    }
}

WeatherForecastPart2([12])