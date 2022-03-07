//Stores the books.
let myLibrary = [
  {
    name: 'book',
    author: 'author',
    page: 15
  },
];

//Constructor.
function Book(name, author, page) {
  this.name = name;
  this.author = author;
  this.page = page;
}

//Add the users input into the library array and then display it.
function addBooks(name, author, page) {
  myLibrary.push(new Book(name, author, page))
}

function displayTheBooks() {
    const title = document.querySelector('#name');
    const writer = document.querySelector('#author');
    const numPages = document.querySelector('#pages')
    myLibrary.forEach((book) => {
    title.innerHTML = (book.name)
    writer.innerHTML = (book.author)
    numPages.innerHTML = (book.page)
  })
}

addBooks('Trial', 'Trial', 54)

displayTheBooks()