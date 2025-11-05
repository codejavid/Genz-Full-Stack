
// Book contructor

function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI

function UI() {

    // Add book to list

    UI.prototype.addBookToList = function (book) {

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

    UI.prototype.showAlert = function(message, className){

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

    UI.prototype.clearAlert = function(){
        const currentAlert = document.querySelector(".alert");

        if(currentAlert){
            currentAlert.remove();
        }
    }

    UI.prototype.deleteBook = function(targetElement){
        if(targetElement.className === "delete"){
            targetElement.parentElement.remove();
        }
    }

    UI.prototype.clearField = function(){
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#ISBN").value = "";
    }

    UI.prototype.clearTasks = function(){
        document.querySelector("#book-list").innerHTML = "";
    }

}



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

        // clear fileds
        ui.clearField();

        ui.showAlert("Added successfully", "alert-success");

    }

});

// Delete event listener

document.querySelector("#book-list").addEventListener("click", function(e){

   if(e.target.parentElement.className === "delete"){
    
     const ui = new UI();

    // Delete Book
    ui.deleteBook(e.target.parentElement);

    ui.showAlert("Deleted successfully", "alert-success");


   }

})

// clear element

document.querySelector(".clear").addEventListener("click", function(e){

    const ui = new UI();

    ui.clearTasks();

    ui.showAlert("Cleared successfully", "alert-success");

});




