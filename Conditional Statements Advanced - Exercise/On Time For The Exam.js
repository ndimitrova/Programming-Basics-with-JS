function onTimeForTheExam(input) {
    let hourOfTheExam = Number(input[0]);
    let minutesForTheExam = Number(input[1]);
    let hourOfArrival = Number(input[2]);
    let minutesOfArrival = Number(input[3]);

    if(hourOfTheExam == hourOfArrival && minutesForTheExam >= minutesOfArrival && minutesForTheExam - minutesOfArrival <= 30) {
        console.log("On time");
        if(minutesForTheExam != minutesOfArrival) {
            console.log(`${minutesForTheExam - minutesOfArrival} minutes before the start`)
        }
    } else if(hourOfTheExam == hourOfArrival && minutesForTheExam >= minutesOfArrival && minutesForTheExam - minutesOfArrival > 30) {
        console.log("Early");
        console.log(`${minutesForTheExam - minutesOfArrival} minutes before the start`);
    } else if(hourOfTheExam > hourOfArrival) {
        let commonForExam = hourOfTheExam * 60 + minutesForTheExam;
        let commonForArrival = hourOfArrival * 60 + minutesOfArrival;
        let diff = commonForExam - commonForArrival;
        let hours = parseInt(diff / 60);
        let minutes = diff % 60;
        if(hours < 1 && minutes <= 30) {
            console.log("On time")
        } else {
            console.log("Early");
        }
        if(minutes < 10 && hours >= 1) {
            console.log(`${hours}:0${minutes} hours before the start`)
        } else  if(hours >= 1){
            console.log(`${hours}:${minutes} hours before the start`)
        } else {
            console.log(`${minutes} minutes before the start`)
        }
    } else if(hourOfTheExam < hourOfArrival) {
        let commonForExam = hourOfTheExam * 60 + minutesForTheExam;
        let commonForArrival = hourOfArrival * 60 + minutesOfArrival;
        let diff = commonForArrival - commonForExam;
        let hours = parseInt(diff / 60);
        let minutes = diff % 60;
        console.log("Late");

        if(minutes < 10 && hours >= 1) {
            console.log(`${hours}:0${minutes} hours after the start`);
        } else if(hours >= 1) {
            console.log(`${hours}:${minutes} hours after the start`);
        } else {
            console.log(`${minutes} minutes after the start`);
        }
    } else if(hourOfTheExam == hourOfArrival && minutesForTheExam < minutesOfArrival) {
        console.log("Late");
        console.log(`${minutesOfArrival - minutesForTheExam} minutes after the start`)
    }
}

onTimeForTheExam(["9",
"00",
"8",
"30"])





