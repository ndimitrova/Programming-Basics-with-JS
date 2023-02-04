function vacation(input) {
    let vacationMoney = Number(input[0]);
    let availableMoney = Number(input[1]);
    let index = 2;
    let commonDays = 0;
    let spendingDays = 0;

    while(true) {
        let action = input[index];
        index++;
        let sum = Number(input[index]);

        if(action === "save") {
            availableMoney += sum;
            spendingDays = 0;
        }else {
            if(sum >= availableMoney){
                availableMoney = 0;
            } else {
                availableMoney -= sum;
            }
            spendingDays++;
        }

        commonDays++;

        if(spendingDays === 5) {
            console.log(`You can't save the money.`);
            console.log(`${commonDays}`);
            break;
        }

        if(availableMoney >= vacationMoney) {
            console.log(`You saved the money for ${commonDays} days.`)
            break;
        }

        index++;
    }
}

vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])


