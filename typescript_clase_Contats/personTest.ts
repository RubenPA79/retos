// Archivo: personTest.ts
// Archivo: personTest.ts
import { Person } from "./Person"; // Importa la clase Person
import { Contacts } from "./contacts"; // Importa la clase Contacts



  // Crear una instancia de la clase Person
  const person1 = new Person("Rubén", 46, "Calle Ejemplo 123");
  const person2 = new Person("Ana", 30, "Avenida Principal 456");

  // Llamar a los métodos para que haya una salida en la consola
  person1.printName(); // Esto debería imprimir: Rubén
  console.log(person1.yearOfBirth(2024)); // Esto debería imprimir: El año de nacimiento es: 1978
  
  // Obtener y mostrar la dirección
  console.log(person1.getAddress()); // Esto debería imprimir: Calle Ejemplo 123
  
  // Establecer una nueva dirección y mostrarla
  person1.setAddress("Avenida Nueva 456"); // Esto debería imprimir: Nueva dirección: Avenida Nueva 456

  // Montrar caracteristicas de personas


// Crear una instancia de Contacts
const myContacts = new Contacts();
myContacts.people.push(person1, person2); // Añadir personas al array

// Imprimir los datos de todas las personas
myContacts.printCalendar();
