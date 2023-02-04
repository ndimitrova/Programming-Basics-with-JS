function sumNumbers(input) {
    let num = Number(input[0]);
    let otherNumbers = Number(input[1]);
    let index = 2;
    let sum = 0;

    while(sum < num) {
        sum += otherNumbers;
        otherNumbers = Number(input[index]);
        index++;
    }

    console.log(sum);
}

sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])

