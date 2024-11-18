var Book = /** @class */ (function () {
    // Constructor para inicializar todos los atributos
    function Book(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    // Métodos getter y setter
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.setTitle = function (title) {
        this.title = title;
        console.log("Nuevo título: " + this.title);
    };
    Book.prototype.getNPages = function () {
        return this.nPages;
    };
    Book.prototype.setNPages = function (nPages) {
        this.nPages = nPages;
        console.log("El número de páginas es: " + this.nPages);
    };
    Book.prototype.getIsbn = function () {
        return this.isbn;
    };
    Book.prototype.setIsbn = function (isbn) {
        this.isbn = isbn;
        console.log("El ISBN es: " + this.isbn);
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.setAuthor = function (author) {
        this.author = author;
        console.log("El autor es: " + this.author);
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    Book.prototype.setEditorial = function (editorial) {
        this.editorial = editorial;
        console.log("La editorial es: " + this.editorial);
    };
    // Método toString() para devolver toda la información del libro
    Book.prototype.toString = function () {
        return "Title - ".concat(this.title, "\nNumber of Pages - ").concat(this.nPages, "\nISBN - ").concat(this.isbn, "\nAuthor - ").concat(this.author, "\nEditorial - ").concat(this.editorial);
    };
    return Book;
}());
// Ejemplo de uso
var Book1 = new Book("Introducción a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");
console.log(Book1.toString());
