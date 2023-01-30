function salary(input) {
    let numberOfTabs = Number(input[0]);
    let salary = Number(input[1]);
    let length = input.length;

    for(let i = 2; i < length; i++) {
        if(input[i] === "Facebook") {
            salary -= 150;
        } else if(input[i] === "Instagram") {
            salary -= 100;
        } else if(input[i] === "Reddit") {
            salary -= 50;
        }

        if(salary <= 0) {
            console.log(`You have lost your salary.`)
            break;
        }
    }

    if(salary > 0) {
        console.log(salary);
    }
}

salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])


