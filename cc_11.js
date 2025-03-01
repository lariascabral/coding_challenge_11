// Task 1 - Created Book Class

class Book {
    constructor (title, author, isbn, copies) {
        this.title = title,
        this.author = author, 
        this.isbn = isbn, 
        this.copies = copies
    } ;                                             // Creation of the Book class
    getDetails() {                                  // Creates a method that returns details
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`
    } ;                                             // Function retuns the each of the properties individually with titles
    
    updateCopies(quantity) {                        // Method to 
        if (this.copies >= quantity) {              // First, checks if the copies available are greater than the quantity requested
            this.copies += quantity ;               // Reduce the copies' quantity by copies borrowed
    } else {
        console.log("Invalid request. Not enough copies available.") ;      // If no copies available, returns the message
        }
    }
}

// Test Data
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"


// Task 2 - Created Borrower Class

class Borrower {
    constructor(name, borrowerId)
    {
        this.name = name,
        this.borrowerId = borrowerId, 
        this.borrowedBooks = []                     // Array that will contain the borrowed books
    } ;

    borrowBook(book) {                              // Method to add borrowed books into the array
        this.borrowedBooks.push(book);              // Each new borrowed book will be push to the end of the list
    } ;

    returnBook(book) {                              // Method to take out each returned book of the array
    this.borrowedBooks = this.borrowedBooks.filter(copy => copy !== book);
    }                                               // Filters list of borrowed books to eliminated a returned copy
}

// Test Data
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: []


// Task 3 - Created Library Class

class Library {
    constructor() {
        this.books = [],                            // Creating of books array instances
        this.borrowers  = []                        // Creation of borrowers array
    } ;                                             // Creating Library class

    addBook(book) {                                 // Method to add new books into the Library class
        this.books.push(book);                      // Each new book will be push to the end of the list
    } ;

    addBorrower(borrower) {
        this.borrowers.push(borrower) ;             // So Task 4 can work by adding it to the list
    }

    listBooks() {                                   // Listing method of all books in the console separately using forEach
        this.books.forEach(book => {
        console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}, Copies: ${book.copies}`) ;
      })                                            // Each book will be listed with all the above properties
    }

// Task 4 - Implemented Book Borrowing

    lendBook(borrowerId, isbn) {                    // Method that records the books borrewed by the library
        const book = this.books.find(copy => copy.isbn === isbn) ;
        const borrower = this.borrowers.find(copy => copy.borrowerId === borrowerId) ;
        // Both of the methods above, use .find to pinpoint the corret borrowing transaction

        if(!book) {
            console.log(`Invalid selection. This book has not been found in the library.`) ;
            return
        }                                           // If book is not in library, return this message
        
        if(!borrower) {
            console.log(`Borrower not found in database. Please try again.`)
            return
        }                                           // If the borrower is invalid, return the message
        
        if (book.copies > 0) {                      // Checks availability of the book
            book.copies -= 1 ;
            borrower.borrowBook(book.title) ;
        console.log(`"${book.title}" has been successfully lent to ${borrower.name}.`) ;
        }                                           // If the past checks are passed, and there are existencies, record the lend.
        
        else {
            console.log(`There are no copies available for ${book.title}. Try again later on.`) ;
        }                                           // If not available, return this message
        
    }
    
}

// Test Data --- Task 3
const library = new Library();
library.addBook(book1);
library.listBooks();
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"


// Test Data --- Task 4
library.lendBook(201, 123456);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]
