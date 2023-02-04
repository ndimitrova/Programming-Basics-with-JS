function cake(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let commonPieces = width * length;

    let index = 2;
    let command = input[index];

    while(command != "STOP") {
        let numberOfPiece = Number(command);
        commonPieces -= numberOfPiece;

        if(commonPieces <= 0) {
            console.log(`No more cake left! You need ${Math.abs(commonPieces)} pieces more.`);
            break;
        }

        index++;
        command = input[index];
    }

    if(command === "STOP") {
        console.log(`${commonPieces} pieces are left.`)
    }
}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])

