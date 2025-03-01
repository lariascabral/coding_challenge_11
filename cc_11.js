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