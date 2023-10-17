const container = document.querySelector(".container");
const newBook = document.querySelector(".new_book");
const dialog = document.querySelector("dialog");
const submit = document.querySelector(".submit");

newBook.addEventListener("click", () => {
  dialog.showModal();
});

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

let startingPoint = 0;
function loopThroughArray() {
  for (let i = startingPoint; i < myLibrary.length; i++) {
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
    startingPoint += 1;
  }
}

submit.addEventListener("click", () => {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const userBook = new Book(title, author, pages);
  addBookToLibrary(userBook);
  loopThroughArray();
});
