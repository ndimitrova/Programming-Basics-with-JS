function worldSwimmingRecord(input) {

    let recordInSeconds = Number(input[0]);
    let distanceInMetre = Number(input[1]);
    let timeInSeconds = Number(input[2]);

    let time = distanceInMetre * timeInSeconds;
    let delay = Math.floor((distanceInMetre / 15)) * 12.5;
    let commonTime = time + delay;

    if (commonTime < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${commonTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(commonTime - recordInSeconds).toFixed(2)} seconds slower.`);
    }   

}

worldSwimmingRecord(["55555.67","3017","5.03"]);