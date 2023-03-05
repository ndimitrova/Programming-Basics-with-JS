function numberPyramid(input) {
    let n = Number(input[0]);
    let counter = 1;
    let isBigger = false;
    let printCurrentLine = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            if (counter > n) {
                isBigger = true;
                break;
            }
            
            printCurrentLine += counter + " ";
            counter++;
        }
        
        console.log(printCurrentLine);
        printCurrentLine = "";
        if(isBigger) {
            break;
        }
    }
}

numberPyramid(["12"])