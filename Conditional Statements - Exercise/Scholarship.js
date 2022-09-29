function scolarship (income, averageSuccess, minSalary) {
    income = Number(income);
    averageSuccess = Number(averageSuccess);
    minSalary = Number(minSalary);
    let socialScolarship = 0.0;
    let scolarshipForSuccess = 0.0;

    if (income < minSalary & averageSuccess > 4.50) {
        socialScolarship = Math.floor(0.35 * minSalary);
    } 
    if (averageSuccess >= 5.50) {
        scolarshipForSuccess = Math.floor(averageSuccess * 25);
    }

    if (income < minSalary & averageSuccess > 4.50 & socialScolarship > scolarshipForSuccess) {
        console.log(`You get a Social scholarship ${socialScolarship} BGN`);
    } else if (averageSuccess >= 5.50 & income >= minSalary) {
        console.log(`You get a scholarship for excellent results ${scolarshipForSuccess} BGN`)
    } else if (averageSuccess >= 5.50 & income < minSalary & scolarshipForSuccess >= socialScolarship) {
        console.log(`You get a scholarship for excellent results ${scolarshipForSuccess} BGN`)
    } else if (averageSuccess < 4.50 || ((averageSuccess >= 4.50 && averageSuccess < 5.50) && income > minSalary)) {
        console.log("You cannot get a scholarship!");
    }
}

scolarship(300.00, 5.65, 420.00);