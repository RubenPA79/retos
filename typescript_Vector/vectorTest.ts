import { Vector } from "./vectores";

// Crear dos objetos de la clase Vector
let vector1 = new Vector(5, 10); // Vector con 5 elementos y valores de 0 a 10
let vector2 = new Vector(5, 10); // Otro vector con 5 elementos y valores de 0 a 10

// Probar todos los métodos
console.log("Vector 1:");
vector1.print();

console.log("Vector 2:");
vector2.print();

console.log("Suma de Vector 1 y Vector 2:");
vector1.add(vector2).print();

console.log("Resta de Vector 1 y Vector 2:");
vector1.subs(vector2).print();

console.log("Multiplicación de Vector 1 y Vector 2:");
vector1.mult(vector2).print();

console.log("Multiplicación de Vector 1 por un número (2):");
vector1.multNumber(2).print();
