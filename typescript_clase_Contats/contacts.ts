import { Person } from "./Person"; // Importa la clase Person

export class Contacts {
  // Atributos públicos
  public people: Person[]; // Define people como un array de objetos Person

  // Creando constructor sin parámetros
  constructor() {
    this.people = []; // Inicializa el array vacío
  }

  // Método para imprimir todos los datos de las personas en la agenda
  public printCalendar(): void {
    this.people.forEach((person) => {
      console.log(`Nombre: ${person.name}, Edad: ${person.age}`);
    });
  }
}







