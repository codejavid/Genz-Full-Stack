

class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class Storage{

    getBooks(){

        let books;

        if(localStorage.getItem("books") === null){
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem("books"));
        }

        return books;

    }

    addBooks(book){

        // Get a books array
        const books = this.getBooks();

        // Add book to array

        books.push(book);

        // Set in local storage
        localStorage.setItem("books", JSON.stringify(books));

    }

    displayBook(){

        const books = this.getBooks();

        const ui = new UI();

        books.forEach(function(book){
            ui.addBookToList(book);
        })
    }

    deleteBook(isbn){

        const books = this.getBooks();

        books.forEach(function(book, index){

            if(book.isbn === isbn){
                books.splice(index, 1);
            }

        });

        // Set in local storage
        localStorage.setItem("books", JSON.stringify(books));

    }

    clearBooks(){
        localStorage.removeItem("books");
    }


}



class UI{

    addBookToList(book) {

        const list = document.querySelector("#book-list");

        // Create a tr element
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td class="delete">
             <span class="btn btn-danger">X</span>
            </td>
        `;

        list.appendChild(row);
        

    }

    showAlert(message, className){

        self = this;

        if (self.alertTimeout) {
            clearTimeout(self.alertTimeout);
        }

        self.clearAlert();
        

        // Create a div element

        const div = document.createElement("div");

        // Add class name
        div.className = `alert ${className}`;

        // Add inner text
        div.innerText = message;

        document.querySelector(".show-alert").appendChild(div);

       // Store timeout ID so it can be cleared later
        self.alertTimeout = setTimeout(function() {
            self.clearAlert();
            self.alertTimeout = null;
        }, 3000);

    }

    clearAlert(){
        const currentAlert = document.querySelector(".alert");

        if(currentAlert){
            currentAlert.remove();
        }
    }

    deleteBook(targetElement){
        if(targetElement.className === "delete"){
            targetElement.parentElement.remove();
        }
    }

    clearField(){
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#ISBN").value = "";
    }

    clearTasks(){
        document.querySelector("#book-list").innerHTML = "";
    }


}


const storage = new Storage();

document.addEventListener("DOMContentLoaded", storage.displayBook());

// Event listener for submit

document.querySelector("#book-form").addEventListener("submit", function (e) {

    e.preventDefault();


    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#ISBN").value;

    const book = new Book(title, author, isbn);
    const ui = new UI();
 


    if (title === "" || author === "" || isbn === "") {
        ui.showAlert("Please fill the form", "alert-danger");
    } else {
        // Add book to list

        ui.addBookToList(book);

        // Add to the storage
        storage.addBooks(book);

        // clear fileds
        ui.clearField();

        ui.showAlert("Added successfully", "alert-success");

    }

});

// Delete event listener

document.querySelector("#book-list").addEventListener("click", function(e){

   if(e.target.parentElement.className === "delete"){
    
    const ui = new UI();

    const isbn = e.target.parentElement.previousElementSibling.innerText;

    
    // Delete Book
    ui.deleteBook(e.target.parentElement);

    storage.deleteBook(isbn);

    ui.showAlert("Deleted successfully", "alert-success");


   }

})

// clear element

document.querySelector(".clear").addEventListener("click", function(e){

    const ui = new UI();

    ui.clearTasks();

    storage.clearBooks();

    ui.showAlert("Cleared successfully", "alert-success");

});