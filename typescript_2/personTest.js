"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Archivo: personTest.ts
// Archivo: personTest.ts
var Person_1 = require("./Person"); // Elimina la extensión
// Crear una instancia de la clase Person
var person = new Person_1.Person("Rubén", 46, "Calle Ejemplo 123");
// Llamar a los métodos para que haya una salida en la consola
person.printName(); // Esto debería imprimir: Rubén
console.log(person.yearOfBirth(2024)); // Esto debería imprimir: El año de nacimiento es: 1978
// Obtener y mostrar la dirección
console.log(person.getAddress()); // Esto debería imprimir: Calle Ejemplo 123
// Establecer una nueva dirección y mostrarla
person.setAddress("Avenida Nueva 456"); // Esto debería imprimir: Nueva dirección: Avenida Nueva 456