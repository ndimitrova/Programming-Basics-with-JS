function walking(input) {
    let index = 0;
    let steps = input[index];
    
    let sumOfSteps = 0;

    while(steps !== "Going home") {
        sumOfSteps += Number(steps);
        if(sumOfSteps >= 10000) {
            console.log(`Goal reached! Good job!`);
            console.log(`${sumOfSteps - 10000} steps over the goal!`);
            break;
        }

        index++;
        steps = input[index];
    }

    if(steps === "Going home") {
        sumOfSteps += Number(input[index + 1]);

        if(sumOfSteps >= 10000) {
            console.log(`Goal reached! Good job!`);
            console.log(`${sumOfSteps - 10000} steps over the goal!`);
        } else {
            console.log(`${10000 - sumOfSteps} more steps to reach goal.`)
        }
    }
} 

walking(["125",
"250",
"4000",
"30",
"2678",
"4682"])



