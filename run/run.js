// library.ts
var Book = /** @class */ (function () {
    function Book(title, numberOfPages, ISBN, author, editorial) {
        this.title = title;
        this.numberOfPages = numberOfPages;
        this.ISBN = ISBN;
        this.author = author;
        this.editorial = editorial;
    }
    return Book;
}());
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    Library.prototype.getAddress = function () {
        return this.address;
    };
    Library.prototype.setAddress = function (address) {
        this.address = address;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    Library.prototype.setManager = function (manager) {
        this.manager = manager;
    };
    Library.prototype.listAllBooks = function () {
        var allBooksInfo = ""; // Inicializamos una cadena vacía para almacenar la información de todos los libros
        // Recorremos el array de libros y añadimos la información de cada uno a la cadena
        for (var i = 0; i < this.books.length; i++) {
            var book = this.books[i];
            allBooksInfo += "Libro ".concat(i + 1, ":\n");
            allBooksInfo += "T\u00EDtulo: ".concat(book.title, "\n");
            allBooksInfo += "P\u00E1ginas: ".concat(book.numberOfPages, "\n");
            allBooksInfo += "ISBN: ".concat(book.ISBN, "\n");
            allBooksInfo += "Autor: ".concat(book.author, "\n");
            allBooksInfo += "Editorial: ".concat(book.editorial, "\n\n");
        }
        return allBooksInfo; // Devolvemos la cadena con la información de todos los libros
    };
    Library.prototype.getNumberOfBooks = function () {
        return this.books.length;
    };
    Library.prototype.findByAuthor = function (author) {
        return this.books.filter(function (book) { return book.author === author; });
    };
    return Library;
}());
// Pruebas de la clase Library
var books = [
    new Book("Introducción a JavaScript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions"),
    new Book("TypeScript Avanzado", 350, "1234567-TS76543", "Jane Doe", "Pro Editions")
];
var library = new Library(books, "123 Main Street", "Mr. Manager");
console.log(library.toString());
console.log("Número de libros:", library.getNumberOfBooks());
console.log("Libros de Joseph Smith:", library.findByAuthor("Joseph Smith"));
