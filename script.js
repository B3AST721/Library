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
    const cardContainer = document.querySelector('.card-container')
    const card = document.createElement('div');
    const nameDisplay = document.createElement('div');
    const authorDisplay = document.createElement('div');
    const pageDisplay = document.createElement('div');

    card.className = 'card';
    nameDisplay.innerHTML = 'Name: ' + book.name;
    authorDisplay.innerHTML = 'Author: ' + book.author;
    pageDisplay.innerHTML = 'Page: ' + book.page;

    cardContainer.appendChild(card)
    card.appendChild(nameDisplay);
    card.appendChild(authorDisplay);
    card.appendChild(pageDisplay);
  })
}

//Popup form
document.querySelector('.popup-button').addEventListener('click', () => {
  document.querySelector('.popup').style.display = 'flex';
})

//Button that adds books.
const nameInput = document.getElementById('input-name');
const authorInput = document.getElementById('input-author');
const pageInput = document.getElementById('input-page');
const formButton = document.getElementById('form');

formButton.addEventListener('submit', (e) => {
  
  document.querySelector('.popup').style.display = 'none';
})


addBooks('Diary of a Wimpy Kid', 'Hansel Warrior', 542)
addBooks('hw', 'hw', 20)
addBooks('hw', 'hw', 20)
addBooks('hw', 'hw', 20)


displayTheBooks()