function accountBalance(input) {

    let sum = input[0];
    let index = 1;
    let totalSum = 0;

    while(sum !== "NoMoreMoney") {

        if(sum >= 0) {
            totalSum += Number(sum);
            console.log(`Increase: ${Number(sum).toFixed(2)}`);
            sum = input[index];
            index++;
        } else {
            console.log(`Invalid operation!`);
            break;
        }
    }

    console.log(`Total: ${totalSum.toFixed(2)}`)
}

accountBalance
(["120",
"45.55",
"-150"])

