// Reference to book container
let booksContainer = document.querySelector("#books-container");

// Variables for 
const myLibrary = [];
let title, 
    author,
    pages,
    read;

// Variables for Dialog
const addBookDialog = document.getElementById("addBookDialog");
const form = document.getElementById("form");
const confirmBook = addBookDialog.querySelector("#confirmBook");
const focusTitle = addBookDialog.querySelector('.formTitle');

// Calling on dialog box
let addButton = document.querySelector('.add-book');
addButton.addEventListener('click', () => {
    addBookDialog.showModal();
    focusTitle.focus();
}) 


// Confirm to add book
confirmBook.addEventListener("click", (event) => { 
    event.preventDefault(); 
  
    // Variables for the form 
    let formTitle = addBookDialog.querySelector(".formTitle");
    let formAuthor = addBookDialog.querySelector(".formAuthor");
    let formPages = addBookDialog.querySelector(".formPages");
    let checkbox = addBookDialog.querySelector(".checkbox");

    // Check if forms are filled
    if (!formTitle.checkValidity() || !formAuthor.checkValidity() ) {
        alert("Please enter valid inputs")
        return
    }

    if (!formPages.checkValidity()){
        alert("Please input a number between 1 and 9999")
        return
    }

    // Assigning form values to book Obj properties
    title = formTitle.value;
    author = formAuthor.value;
    pages = formPages.value;
    if (checkbox.checked) {
        read = "Read"
    } else read = "Not Read"

    // calling upon functions
    addBookDialog.close();
    addBookToLibraryArray();
    displayBooks(); 

    // Preparing for next dialog
    formTitle.value = '';
    formAuthor.value = '';
    formPages.value = '';
    checkbox.checked = false;
});

// Preventing Enter key error
form.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
    }
});
  

// code for close button
closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener ('click', (event) => {
    event.preventDefault(); 
    addBookDialog.close();
});


// Obj Contructor
class Book {
    constructor(title, author, pages, read) {
    this.title = title
    this.author = author 
    this.pages = pages 
    this.read = read 
};
}
// Add book to Array
function addBookToLibraryArray() {
    let newBookObj = new Book(title, author, pages, read); 
    myLibrary.push(newBookObj);  
};



// Display newest Book to Library
function displayBooks () {
    myLibrary.forEach((Book, index) => {

        if (index === myLibrary.length - 1) {
            // create divs for the book and details and their classes
            let newBook = document.createElement('div');
            newBook.classList.add('book-card');

            let newBookTitle = document.createElement('div');
            newBookTitle.classList.add('book-title');

            let newBookAuthor = document.createElement('div');
            newBookAuthor.classList.add('author');

            let newBookPages = document.createElement('div');
            newBookPages.classList.add('pages')

            let newBookRead = document.createElement('button');
            if(read === "Read") {
                newBookRead.classList.add('readBtn')
            } else  newBookRead.classList.add('notReadBtn')
            
            let newBookRemove = document.createElement('button');
            newBookRemove.classList.add('remove-btn');

            // Assign valid inputs to book details
            newBookTitle.textContent = Book.title;
            newBookAuthor.textContent = Book.author;
            newBookPages.textContent = Book.pages + " pages";  
            newBookRead.textContent = Book.read;
            newBookRemove.textContent = "Remove" 

            // add book and its details to DOM
            newBook.appendChild(newBookTitle);
            newBook.appendChild(newBookAuthor);
            newBook.appendChild(newBookPages);
            newBook.appendChild(newBookRead);
            newBook.appendChild(newBookRemove);
            booksContainer.appendChild(newBook);

            // code for changing read btn
            newBookRead.addEventListener('click', () => {
                if (newBookRead.classList.contains('readBtn')) {
                    newBookRead.classList.remove('readBtn');
                    newBookRead.classList.add('notReadBtn');
                    newBookRead.textContent = "Not Read";
                } else {
                    newBookRead.classList.remove('notReadBtn');
                    newBookRead.classList.add('readBtn');
                    newBookRead.textContent = "Read";
                }
            })

            // code for removing btn
            newBookRemove.addEventListener('click', () => {
                newBook.removeChild(newBookTitle);
                newBook.removeChild(newBookAuthor);
                newBook.removeChild(newBookPages);
                newBook.removeChild(newBookRead);
                newBook.removeChild(newBookRemove);
                booksContainer.removeChild(newBook);
                delete myLibrary[index];
            })
        } 
    });
}


















