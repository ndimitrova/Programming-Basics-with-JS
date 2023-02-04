function examPreparation(input) {
    let numberOfFailedTasks = Number(input[0]);
    let index = 1;
    let goodMarks = 0;
    let badMarks = 0;
    let taskSum = 0;
    let finalTask;

    while (badMarks < numberOfFailedTasks) {
        let task = input[index];

        if(task === "Enough") {
            console.log(`Average score: ${(taskSum / (goodMarks + badMarks)).toFixed(2)}`);
            console.log(`Number of problems: ${goodMarks + badMarks}`);
            console.log(`Last problem: ${finalTask}`);
            break;
        }

        finalTask = task;
        index++;
        let grade = Number(input[index]);
        if(grade <= 4) {
            badMarks++;
        } else {
            goodMarks++;
        }
        index++;
        taskSum += grade;
    }

    if(badMarks >= numberOfFailedTasks) {
        console.log(`You need a break, ${badMarks} poor grades.`)
    }

}

examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])

