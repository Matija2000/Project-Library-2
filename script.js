const container = document.querySelector(".container");

const myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(object) {
  myLibrary.push(object);
}

let Book1 = new Book("Harry Potter", "J.K.Rowling", 220);
let Book2 = new Book("Bitcoin", "Unknown", 160);
addBookToLibrary(Book1);
addBookToLibrary(Book2);

function loopThroughArray() {
  for (let i = 0; i < myLibrary.length; i++) {
    const div = document.createElement("div");
    const title = document.createElement("div");
    const author = document.createElement("div");
    const pages = document.createElement("div");
    title.textContent = myLibrary[i].title;
    author.textContent = myLibrary[i].author;
    pages.textContent = myLibrary[i].pages;
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(pages);
    container.appendChild(div);
  }
}

loopThroughArray();
