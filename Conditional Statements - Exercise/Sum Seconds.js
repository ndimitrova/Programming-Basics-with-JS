function sumSecond(input) {
    let timeFirst = Number(input[0]);
    let timeSecond = Number(input[1]);
    let timeThird = Number(input[2]);

    let sum = timeFirst + timeSecond + timeThird;
    let minutes = Math.floor(sum / 60);
    let secоnds = sum % 60;
    if(secоnds < 10) {
        console.log(`${minutes}:0${secоnds}`) 
    } else {
        console.log(`${minutes}:${secоnds}`)
    }
}

sumSecond(["35","45","44"]);