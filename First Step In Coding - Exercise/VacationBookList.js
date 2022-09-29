function VacationBookList(input){
    let numberOfPages = Number(input[0]);
    let pagesForOneHour = Number(input[1]);
    let numberOfDays = Number(input[2]);

    let commonTime = numberOfPages / pagesForOneHour;
    let hoursPerDay = commonTime / numberOfDays;

    console.log(hoursPerDay);

}

VacationBookList(["432","15","4"])