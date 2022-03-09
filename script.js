//Stores the books.
let myLibrary = [];

//Constructor.
class Book{
  constructor(name, author, page){
    this.name = name;
    this.author = author;
    this.page = page;
  }
}
//Add the users input into the library array and then display it.
function addBooks(name, author, page) {
  myLibrary.push(new Book(name, author, page))
}

const displayTheBooks = () => {
  myLibrary.forEach((book) => {
    const card = document.createElement('div');
    const nameDisplay = document.createElement('div');
    const authorDisplay = document.createElement('div');
    const pageDisplay = document.createElement('div');

    card.className = 'card';
    nameDisplay.innerHTML = 'Name: ' + book.name;
    authorDisplay.innerHTML = 'Author: ' + book.author;
    pageDisplay.innerHTML = 'Page: ' + book.page;

    document.body.appendChild(card)
    card.appendChild(nameDisplay);
    card.appendChild(authorDisplay);
    card.appendChild(pageDisplay);
  })
}

addBooks('Trial', 'Trial', 54)
addBooks('hw', 'hw', 20)

displayTheBooks()