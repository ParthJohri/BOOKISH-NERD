var menuList = document.getElementById("menuList");
            
var home = document.getElementById("home");
var books = document.getElementById("books");
var book_page = document.getElementById("book");
var bookCont = document.getElementById("book-list-container")
var currentBook = {}

var bookList = {
    "Mistborn Era 1": {
        type: "series",
        genres: ["novel", "fantasy", "fiction", "high fantasy"],
        author: "Brandon Sanderson",
        img: "https://miro.medium.com/max/602/0*QbZ4O-ZiY_I5YHct",
        links: []
    },
    "Mistborn Era 2": {
        type: "series",
        genres: ["novel", "fantasy", "fiction", "high fantasy"],
        author: "Brandon Sanderson",
        img: "https://somethingofthebook.files.wordpress.com/2020/01/d021c-20190806_120411.jpg?w=1024&h=514",
        links: []
    },
    "Harry Potter": {
        type:"series",
        genres: ["fantasy", "fiction", "adventure"],
        author: "J. K. Rowling",
        img: "https://bjs.scene7.com/is/image/bjs/260936?$bjs-Zoom$",
        links: []
    },
    "Lord of the Rings": {
        type: "series",
        genres: ["fantasy", "fiction", "high fantasy", "heroic fantasy"],
        author: "J. R. R. Tolkien",
        img: "https://media.newyorker.com/photos/590957adebe912338a373ad0/master/w_2560%2Cc_limit/LOTRcovers_opt.jpg",
        links: []
    },
    "The Hobbit": {
        type: "single",
        genres: [],
        author: "J. R. R. Tolkien",
        img: "https://www.thoughtco.com/thmb/e-CNNgdlzVR6L3cecKWIZeA75YQ=/735x0/ScreenShot2019-03-06at2.19.49PM-5c8049af46e0fb00011bf42b.jpg",
        links: []
    },
    "Chronicles of Narnia": {
        type:"series",
        genres: [],
        author: "C. S. Lewis",
        img: "https://images.booksense.com/images/880/244/9780060244880.jpg",
        links: []
    }
};

books.style.display = "none";
book_page.style.display = "none";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}  

function homePage(){
    books.style.display = "none";
    book_page.style.display = "none";
    home.style.display = "block";
}

function bookListPage(){
    home.style.display = "none";
    book_page.style.display = "none";
    books.style.display = "block";
    bookCont.innerHTML=""
    
    for(let book in bookList){
        let el = document.createElement("div")
        el.className = "info-card"
        el.onclick = bookPage
        el.addEventListener("mouseover", function(){
            currentBook = bookList[book]
            currentBook.title = book
        })
        el.innerHTML = `
        <div class = "flex-spacer"></div>
        <div class = "info-card-title"> ${ book } </div>
        <div class = "flex-spacer"></div>
        <div class = "info-card-img-container"><img class = "info-card-img" src = "${ bookList[book].img }"></div>
        <div class = "flex-spacer"></div>
        <div class = "info-card-author"> ${ bookList[book].type === "series" ? "Series" : "Book" } by ${ bookList[book].author.slice(0, 19) } </div>
        <div class = "flex-spacer"></div>
        `
        bookCont.appendChild(el)
    }   
}

function bookPage(){
    home.style.display = "none";
    books.style.display = "none";
    book_page.style.display = "block";

    let bookTitle = document.getElementById('book-title')
    let bookInfo = document.getElementById('book-info')
    let bookImg = document.getElementById('book-img')
    bookTitle.textContent = currentBook.title
    bookImg.src = currentBook.img
    bookInfo.innerHTML = ""

    for(let i in currentBook){
        if(i === "img" || i === "links"){
            continue;
        }

        bookInfo.innerHTML += `
        <div class="book-info-item"> ${ capitalizeFirstLetter(i) }: ${ currentBook[i]} </div>
        `
    }
}

menuList.style.maxHeight="0px";

function toggleClick(){
    if( menuList.style.maxHeight=="0px")
    {
        menuList.style.maxHeight="130px";
    }
    else
    {
        menuList.style.maxHeight="0px";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const username = urlParams.get('username');

    // Verify if the username is correctly retrieved
    // console.log(username);

    // Update the content of the <p> tag
    let p=document.getElementById('Username');
    // console.log(p);
    if (username) {
        p.innerHTML = `Hello ${username}`;
    } else {
        p.innerHTML = "Hello";
    }
});
