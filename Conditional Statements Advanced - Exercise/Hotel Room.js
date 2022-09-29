function hotelRoom(input) {
    let month = input[0];
    let numberOfNights = Number(input[1]);
    let studioPrice = 0;
    let apartmentPrice = 0;

    if(month == "May" || month == "October")  {
        if(numberOfNights <= 7) {
            studioPrice = numberOfNights * 50;
            apartmentPrice = numberOfNights * 65;
        } else if (numberOfNights > 7 && numberOfNights <= 14) {
            studioPrice = (numberOfNights * 50) * 0.95;
            apartmentPrice = numberOfNights * 65;
        } else {
            studioPrice = (numberOfNights * 50) * 0.70;
            apartmentPrice = (numberOfNights * 65) * 0.90;
        }
    } else if(month == "June" || month == "September") {
        if (numberOfNights > 14) {
            studioPrice = (numberOfNights * 75.20) * 0.80;
            apartmentPrice = (numberOfNights * 68.70) * 0.90;
        } else {
            studioPrice = numberOfNights * 75.20;
            apartmentPrice = numberOfNights * 68.70;
        }
    } else {
        if (numberOfNights > 14) {
            studioPrice = numberOfNights * 76;
            apartmentPrice = (numberOfNights * 77) * 0.90;
        } else {
            studioPrice = numberOfNights * 76;
            apartmentPrice = numberOfNights * 77;
        } 
    }

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
}

hotelRoom(["May", "15"])
