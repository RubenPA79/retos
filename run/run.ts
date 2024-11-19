// library.ts

class Book {
    constructor(
      public title: string,
      public numberOfPages: number,
      public ISBN: string,
      public author: string,
      public editorial: string
    ) {}
  }
  
  class Library {
    private books: Book[];
    private address: string;
    private manager: string;
  
    constructor(books: Book[], address: string, manager: string) {
      this.books = books;
      this.address = address;
      this.manager = manager;
    }
  
    getAddress(): string {
      return this.address;
    }
  
    setAddress(address: string): void {
      this.address = address;
    }
  
    getManager(): string {
      return this.manager;
    }
  
    setManager(manager: string): void {
      this.manager = manager;
    }
  
    listAllBooks(): string {
        let allBooksInfo = ""; // Inicializamos una cadena vacía para almacenar la información de todos los libros
      
        // Recorremos el array de libros y añadimos la información de cada uno a la cadena
        for (let i = 0; i < this.books.length; i++) {
          const book = this.books[i];
          allBooksInfo += `Libro ${i + 1}:\n`;
          allBooksInfo += `Título: ${book.title}\n`;
          allBooksInfo += `Páginas: ${book.numberOfPages}\n`;
          allBooksInfo += `ISBN: ${book.ISBN}\n`;
          allBooksInfo += `Autor: ${book.author}\n`;
          allBooksInfo += `Editorial: ${book.editorial}\n\n`;
        }
      
        return allBooksInfo; // Devolvemos la cadena con la información de todos los libros
      }
      
  
    getNumberOfBooks(): number {
      return this.books.length;
    }
  
    findByAuthor(author: string): Book[] {
      return this.books.filter(book => book.author === author);
    }
  }
  
  // Pruebas de la clase Library
  const books = [
    new Book("Introducción a JavaScript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions"),
    new Book("TypeScript Avanzado", 350, "1234567-TS76543", "Jane Doe", "Pro Editions")
  ];
  
  const library = new Library(books, "123 Main Street", "Mr. Manager");
  
  console.log(library.toString());
  console.log("Número de libros:", library.getNumberOfBooks());
  console.log("Libros de Joseph Smith:", library.findByAuthor("Joseph Smith"));
  