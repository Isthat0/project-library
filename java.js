let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    /*this.info = function (){
        return(this.title + ' by ' + author + ', ' + pages + ' pages,' + read);
    }*/
} 

function addBookToLibrary(title, author, pages, read){
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

addBookToLibrary('hey','what',22,'no');
addBookToLibrary('yes','sir',3212,'yee');
console.log(myLibrary)

