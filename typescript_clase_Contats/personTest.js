"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Archivo: personTest.ts
// Archivo: personTest.ts
var Person_1 = require("./Person"); // Importa la clase Person
var contacts_1 = require("./contacts"); // Importa la clase Contacts
// Crear una instancia de la clase Person
var person1 = new Person_1.Person("Rubén", 46, "Calle Ejemplo 123");
var person2 = new Person_1.Person("Ana", 30, "Avenida Principal 456");
// Llamar a los métodos para que haya una salida en la consola
person1.printName(); // Esto debería imprimir: Rubén
console.log(person1.yearOfBirth(2024)); // Esto debería imprimir: El año de nacimiento es: 1978
// Obtener y mostrar la dirección
console.log(person1.getAddress()); // Esto debería imprimir: Calle Ejemplo 123
// Establecer una nueva dirección y mostrarla
person1.setAddress("Avenida Nueva 456"); // Esto debería imprimir: Nueva dirección: Avenida Nueva 456
// Montrar caracteristicas de personas
// Crear una instancia de Contacts
var myContacts = new contacts_1.Contacts();
myContacts.people.push(person1, person2); // Añadir personas al array
// Imprimir los datos de todas las personas
myContacts.printCalendar();
