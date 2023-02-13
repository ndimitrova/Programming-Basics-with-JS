function traveling(input) {
    let destination = input[0];
    let index = 1;

    while(destination != "End") {
        let minSum = Number(input[index]);
        index++;

        while(minSum > 0) {
            let sum = Number(input[index]);
            minSum -= sum;
            index++;
        }

        if(minSum <= 0) {
            console.log(`Going to ${destination}!`);
        }

        destination = input[index];
        index++;
    }
}

traveling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])

traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])

