function operationsBetweenNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operators = input[2];

    if(operators == "+") {
        let result = n1 + n2;
        let evenOrOdd;
        if(result % 2 == 0) {
            evenOrOdd = "even"
        } else {
            evenOrOdd = "odd"
        }

        console.log(`${n1} ${operators} ${n2} = ${result} - ${evenOrOdd}`);
    } else if(operators == "-") {
        let result = n1 - n2;
        let evenOrOdd;
        if(result % 2 == 0) {
            evenOrOdd = "even"
        } else {
            evenOrOdd = "odd"
        }

        console.log(`${n1} ${operators} ${n2} = ${result} - ${evenOrOdd}`);
    } else if(operators == "*") {
        let result = n1 * n2;
        let evenOrOdd;
        if(result % 2 == 0) {
            evenOrOdd = "even"
        } else {
            evenOrOdd = "odd"
        }

        console.log(`${n1} ${operators} ${n2} = ${result} - ${evenOrOdd}`);
    } else if(operators == "/" && n2 != 0) {
        let result = n1 / n2;
        console.log(`${n1} ${operators} ${n2} = ${result.toFixed(2)}`);
    } else if(operators == "%" && n2 != 0) {
        let result = n1 % n2;
        console.log(`${n1} ${operators} ${n2} = ${result}`);
    } else {
        console.log(`Cannot divide ${n1} by zero`)
    }
}

operationsBetweenNumbers(["112", "0", "/"])


