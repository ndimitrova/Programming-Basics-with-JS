function fishTank(input) {
    let length = Number(input[0]); 
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);
    let volume = length * width * height;
    let commonLitres = volume * 0.001;
    let percentForOtherComponents = percent * 0.01;
    let litres = commonLitres*(1-percentForOtherComponents);
    console.log(litres); 
}

fishTank(["105 ","77 ","89 ","18.5 "])