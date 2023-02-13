function building(input) {
    let numberOfFloors = Number(input[0]);
    let numberOfRooms = Number(input[1]);
    let rooms = "";

    for(let i = numberOfFloors; i >= 1; i--) {
        if(numberOfFloors == 1 || i == numberOfFloors) {
            for(let j = 0; j < numberOfRooms; j++) {
                if(j == numberOfRooms - 1) {
                    rooms += `L${i}${j}`;
                } else {
                    rooms += `L${i}${j} `;
                }
            }

            console.log(rooms);
            rooms = "";
        } else {
            if (i % 2 == 0) {
                for (let j = 0; j < numberOfRooms; j++) {
                    if(j == numberOfRooms - 1) {
                        rooms += `O${i}${j}`;
                    } else {
                        rooms += `O${i}${j} `;
                    }
                }
                console.log(rooms);
                rooms = "";
            }
            else {
                for (let j = 0; j < numberOfRooms; j++) {
                    if(j == numberOfRooms - 1) {
                        rooms += `A${i}${j}`;
                    } else {
                        rooms += `A${i}${j} `;
                    }
                }

                console.log(rooms);
                rooms = "";
            }
        }
    }
}

building(["6", "4"])