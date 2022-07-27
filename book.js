const library = []

function addBookToLibrary(book) {
    return library.push(book);
}

//add new book
addBookToLibrary(["id", "Title", "Auther", "price", "quntity"]);
addBookToLibrary([1, "A book", "Charlie Morton", 50, 12]);
addBookToLibrary([26, "Two book", "Charlie Morton", 200, 15]);
//console.log(library)
//     //id      //number,i  
// console.log(library[1][0], library[1][1], library[1][2], library[1][3], library[1][4], library[1][5])
//     //title          //str,i
// console.log(library[1][1], library[1][0], library[1][2], library[1][3], library[1][4], library[1][5])
//     //Auther                    //str,i
// console.log(library[1][2], library[1][0], library[1][1], library[1][3], library[1][4], library[1][5])
// find the book by 1
//example

function findIdBook(number) {
    for (let i = 0; i < library.length; i++) {
        if (library[i][0] == number) {
            //console.log(library[i]);
            return library[i];
        }
    }
    console.log("this book not found");
}
//findIdBook(1)

function getBookLibraryId(number) {
    for (let i = 0; i < library.length; i++) {
        if (library[i][0] == number) {
            console.log(i);
            return i;
        }
    }
}
//getBookLibraryId(26)


//findTitleBook

function findTitleBook(str) {
    for (let i = 0; i < library.length; i++) {
        if (library[i][1] == str) {
            console.log(library[i]);
            return;
        }
    }
    console.log("this book not found");
}
//findTitleBook('A book')

function getLibraryTitleBook(str) {
    for (let i = 0; i < library.length; i++) {
        if (library[i][1] == str) {
            console.log(library[i][1]);
            return library[i][1];
        }
    }
}
//getLibraryTitleBook('A book')//A book


//fundAutherBook

// function findAutherBook(str) {
//     for (let i = 0; i < library.length; i++) {
//         if (library[i][2] == str) {
//             console.log(library[i]);
//             return;
//         }
//     }
//     console.log("this book not found");
// }
//findAutherBook('Charlie Morton')


//console.log(library[1][4]);

//let number = 10
// if (library[1][4] > number) {
//     console.log('yes there are ');
//     library[1][4] -= 1;
// }

// console.log(library[1][4]);


// function findQuntity(arr) {
//     for (let i = 0; i < library.length; i++) {
//         if (library[i][4] < 20) {
//             console.log('yes there are ');
//             library[i][4] -= number;
//             break;
//         }
//     }
//     console.log('Sorry no book ')
// }
// findQuntity(findTitleBook('A book'), 10);

// let cart = []

// function addToCart(bookId, number) {
//     let book = findIdBook(bookId)
//     if (book && book[4] > number) {
//         cart.push([...book, number]);
//         library[getBookLibraryId(bookId)][4] -= number;
//     } else {
//         console.log('no quntity available');
//     }
// }
// addToCart(26, 1)





let bill = []

function checkoutBill(bookId, bookTitle, number, price) {
    let book = findIdBook(bookId)
        //number =10 
        //book[3]=50
    let priceBooks = book[3] * number
        //priceBook =500
    if (book && book[4] > number && priceBooks <= price) {
        //price = 600  
        //priceBook = 500
        let totlePrice = price - priceBooks //600-500
        bill.push([book[1], number, totlePrice]);
        console.log(bill);
    } else {
        console.log('No Price Available or No book Available or No Quntity Available ');
    }
}
checkoutBill(1, 'A book', 10, 600)