export class Book {
  // Atributos privados
  private title: string;
  private nPages: number;
  private isbn: string;
  private author: string;
  private editorial: string;

  // Constructor para inicializar todos los atributos
  constructor(title: string, nPages: number, isbn: string, author: string, editorial: string) {
    this.title = title;
    this.nPages = nPages;
    this.isbn = isbn;
    this.author = author;
    this.editorial = editorial;
  }

  // Métodos getter y setter
  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
    console.log("Nuevo título: " + this.title);
  }

  public getNPages(): number {
    return this.nPages;
  }

  public setNPages(nPages: number): void {
    this.nPages = nPages;
    console.log("El número de páginas es: " + this.nPages);
  }

  public getIsbn(): string {
    return this.isbn;
  }

  public setIsbn(isbn: string): void {
    this.isbn = isbn;
    console.log("El ISBN es: " + this.isbn);
  }

  public getAuthor(): string {
    return this.author;
  }

  public setAuthor(author: string): void {
    this.author = author;
    console.log("El autor es: " + this.author);
  }

  public getEditorial(): string {
    return this.editorial;
  }

  public setEditorial(editorial: string): void {
    this.editorial = editorial;
    console.log("La editorial es: " + this.editorial);
  }

  // Método toString() para devolver toda la información del libro
  public toString(): string {
    return `Title - ${this.title}\nNumber of Pages - ${this.nPages}\nISBN - ${this.isbn}\nAuthor - ${this.author}\nEditorial - ${this.editorial}`;
  }
}

