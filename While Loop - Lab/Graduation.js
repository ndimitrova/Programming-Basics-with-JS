function graduation(input) {
    let nameOfStudent = input[0];
    let index = 1;
    let rating = Number(input[index]);
    let grade = 0;
    let sumOfRatings = 0;
    let counterForTearing = 0;

    while(grade < 12) {
        if(rating >= 4) {
            sumOfRatings += rating;
            grade++;
            index++;
            rating = Number(input[index]);
        }
        else {
            counterForTearing++;
            if(counterForTearing >= 1) {
                console.log(`${nameOfStudent} has been excluded at ${grade + 1} grade`);
                break;
            }
        }
    }

    if(grade >= 12) {
        console.log(`${nameOfStudent} graduated. Average grade: ${(sumOfRatings / 12).toFixed(2)}`)
    }
}

graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
