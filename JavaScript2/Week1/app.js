'use strict';

const booksId = [
    '1984',
    'crime_punishment',
    'last_wish',
    'sword_destiny',
    'blood_elves',
    'time_contempt',
    'baptism_fire',
    'tower_swallow',
    'lady_lake',
    'season_storms', 
  ];


class Book {
    constructor(id, title, language, author) {
        this.id = id;
        this.title = title;
        this.language = language;
        this.author = author;
    }
}
const book1 = new Book('1984', '1984', 'english', 'George Orwell');
const book2 = new Book('crime_punishment', 'Crime And Punishment', 'russian', 'Fyodor Dostoevsky');
const book3 = new Book('last_wish', 'The Last Wish', 'polish', 'Andrzej Sapkowski');
const book4 = new Book('sword_destiny', 'Sword of Destiny', 'polish','Andrzej Sapkowski' );
const book5 = new Book('blood_elves', 'Blood of Elves', 'polish', 'Andrzej Sapkowski');
const book6 = new Book('time_contempt', 'Time of Contempt', 'polish', 'Andrzej Sapkowski');
const book7 = new Book('baptism_fire', 'Baptism of Fire', 'polish', 'Andrzej Sapkowski');
const book8 = new Book( 'tower_swallow', 'The tower of Swallow', 'polish', 'Andrzej Sapkowski');
const book9 = new Book('lady_lake', 'The Lady of the Lake', 'polish', 'Andrzej Sapkowski');
const book10 = new Book('season_storms', 'Season of Storms', 'polish', 'Andrzej Sapkowski');

const booksArray = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10];

const listOfBooks = {
    books: booksArray,
}

function createListWithBooks() {
    let list = document.createElement('ul');
    let booksLength = listOfBooks.books.length;

    for (let i = 0; i < booksLength; i++) {
        let listElement = document.createElement('li');
        listElement.setAttribute('id', `${listOfBooks.books[i].id}`);
        list.appendChild(listElement);
        let title = `<h3 id="title"> ${listOfBooks.books[i].title} </h3>`;
        let author = `<p id="author"> ${listOfBooks.books[i].author} </p>`;
        let language = `<p id="language"> Language: ${listOfBooks.books[i].language} </p>`;
        listElement.innerHTML = title;
        listElement.innerHTML += author;
        listElement.innerHTML += language;
        
    }
    document.getElementById('books').appendChild(list);
}
//calling function
createListWithBooks();

const booksImages = {
    1984: './images/1984.jpg',
    crime_punishment:  './images/crime.jpg',
    last_wish: './images/last.jpg',
    sword_destiny: './images/sword.jpg',
    blood_elves: './images/blood.jpg',
    time_contempt: './images/time.jpg',
    baptism_fire: './images/baptism.jpg',
    tower_swallow: './images/tower.jpg',
    lady_lake: './images/lady.jpg',
    season_storms: './images/season.jpg',
}

function addImgToList() {
    let imagesIds = Object.keys(booksImages);
    let imagesSources = Object.values(booksImages);
    for(let i = 0; i < imagesSources.length; i++) {
        let image = `<img src="${imagesSources[i]}" alt="${imagesIds[i]}">`;
        let li = document.getElementById(`${imagesIds[i]}`);
        li.innerHTML += image;
    }
}
//calling function
addImgToList();