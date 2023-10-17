const container = document.querySelector(".container");
const newBook = document.querySelector(".new_book");
const dialog = document.querySelector("dialog");
const submit = document.querySelector(".submit");
const form = document.querySelector("form");

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

const myBook = new Book(
  "Harry Potter and the Order of the Phoenix",
  "JK Rowling",
  766,
  true
);
addBookToLibrary(myBook);

let startingPoint = 0;
function loopThroughArray() {
  for (let i = startingPoint; i < myLibrary.length; i++) {
    const div = document.createElement("div");
    const title = document.createElement("div");
    const author = document.createElement("div");
    const pages = document.createElement("div");
    const h2 = document.createElement("h2");
    h2.textContent = myLibrary[i].title;
    title.textContent = myLibrary[i].title;
    author.textContent = myLibrary[i].author;
    pages.textContent = myLibrary[i].pages;
    div.appendChild(h2);
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(pages);
    const remove = document.createElement("button");
    remove.classList.toggle("remove");
    remove.textContent = "delete";
    remove.addEventListener("click", () => {
      myLibrary.splice(i, 1);
      startingPoint--;
      div.remove();
    });
    div.appendChild(remove);
    const read = document.createElement("button");
    if (myLibrary[i].isRead === true) {
      read.textContent = "read";
      read.classList.toggle("read");
    } else {
      read.textContent = "not read";
      read.classList.toggle("not_read");
    }
    read.addEventListener("click", () => {
      myLibrary[i].toggleReadStatus();
      if (myLibrary[i].isRead === true) {
        read.textContent = "read";
        read.classList.replace("not_read", "read");
      } else {
        read.textContent = "not read";
        read.classList.replace("read", "not_read");
      }
    });
    div.appendChild(read);
    container.appendChild(div);
    startingPoint += 1;
  }
}

loopThroughArray();

submit.addEventListener("click", () => {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const isRead = document.querySelector("#checkbox").checked;
  const userBook = new Book(title, author, pages, isRead);
  addBookToLibrary(userBook);
  loopThroughArray();
  form.reset();
});

Book.prototype.toggleReadStatus = function () {
  if (this.isRead === true) {
    this.isRead = false;
  } else {
    this.isRead = true;
  }
};
