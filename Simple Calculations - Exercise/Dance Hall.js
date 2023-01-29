function danceHall(length, width, wardrobe) {
    length = Number(length);
    width = Number(width);
    wardrobeSide = Number(wardrobe);

    let areaOfHall = (length * 100) * (width * 100);
    let areaOfWardrobe = (wardrobeSide * 100) * (wardrobeSide * 100);
    let areaOfBench = areaOfHall / 10;

    let freeSpace = areaOfHall - areaOfWardrobe - areaOfBench;
    let numberOfDancers = Math.floor(freeSpace / 7040); 

    console.log(numberOfDancers);
}

danceHall(50, 25, 2)