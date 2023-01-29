function projectCreation (input) {
    let nameOfArhitect = input[0]; 
    let numberOfProjects = Number(input[1]);
    let numberOfHours = numberOfProjects * 3;
    console.log(`The architect ${nameOfArhitect} will need ${numberOfHours} hours to complete ${numberOfProjects} project/s.`);
}

projectCreation(["Sanya ", "9 "])