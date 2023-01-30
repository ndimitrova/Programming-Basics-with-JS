function numbers1ToNWithStep3(input) {
    let end = Number(input[0]);
    for(let i = 1; i <= end; i+= 3) {
        console.log(i);
    }
}

numbers1ToNWithStep3(["15"])