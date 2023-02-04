function oldBooks(input) {
    let favoriteBook = input[0];
    let searchedBook = input[1];
    let numberOfBooks = 0;
    let isBookFinded = false;
    let index = 2;

    while(searchedBook !== "No More Books") {
        if(searchedBook === favoriteBook) {
            console.log(`You checked ${numberOfBooks} books and found it.`);
            isBookFinded = true;
            break;
        }

        searchedBook = input[index];
        index++;
        numberOfBooks++;
    }

    if(isBookFinded === false) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${numberOfBooks} books.`)
    }
}

oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])


