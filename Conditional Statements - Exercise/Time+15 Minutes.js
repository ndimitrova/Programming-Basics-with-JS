function time(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    if (minutes + 15 >= 60) {  
        if (minutes + 15 - 60 > 9 & hours + 1 < 23) { 
            console.log(`${hours + 1}:${minutes + 15 - 60}`);
        } else if (minutes + 15 - 60 > 9 & hours == 23) {
            console.log(`0:${minutes + 15 - 60}`);
        } else if (minutes + 15 - 60 < 9 & hours + 1 < 23) {
            console.log(`${hours + 1}:0${minutes + 15 - 60}`) 
        } else {
            console.log(`0:0${minutes + 15 - 60}`);
        }
    } else { 
        console.log(`${hours}:${minutes + 15}`);
    }
}

time(["23", "59"]);