// Reference to book container
let booksContainer = document.querySelector("#books-container");

// Variables declaration
const myLibrary = [
  
];


// Contructor
function Book (title, author, pages, read) {
    this.title = title
    this.author = author 
    this.pages = pages 
    this.read = read 
}


// Adding book to DOM
let addButton = document.querySelector('.add-book');
addButton.addEventListener('click', function(e) {
    title = prompt("Title of the book");
    author = (prompt("Author of the book"));
    pages = (prompt("Number of pages"));
    read = (prompt("Have you read it or not?"));

    addBookToLibrary()
    displayBooks()
}) 


// Add book to Array
function addBookToLibrary() {
    books = new Book(title, author, pages, read); 
    myLibrary.push(books);
    return myLibrary;
}

console.log(myLibrary)



// loop through array to display each book
function displayBooks () {
    myLibrary.forEach(Book => {
        newBook = document.createElement('div');
        newBook.classList.add('book-card');

        newBookTitle = document.createElement('div');
        newBookTitle.classList.add('book-title');

        newBookAuthor = document.createElement('div');
        newBookPages = document.createElement('div');
        newBookAuthor.classList.add('author-pages');
        newBookPages.classList.add('author-pages')

        newBookRead = document.createElement('button');

        newBookRemove = document.createElement('button');
        newBookRemove.classList.add('remove-btn');

        newBookTitle.textContent = Book.title;
        newBookAuthor.textContent = Book.author;
        newBookPages.textContent = Book.pages + " pages";  
        newBookRead.textContent = Book.read ;
        newBookRemove.textContent = "Remove" 


        newBook.appendChild(newBookTitle);
        newBook.appendChild(newBookAuthor);
        newBook.appendChild(newBookPages);
        newBook.appendChild(newBookRead);
        newBook.appendChild(newBookRemove);

        booksContainer.appendChild(newBook);
    });
}














