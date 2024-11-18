"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    // Constructor para inicializar los atributos
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    // Método público para imprimir el nombre
    Person.prototype.printName = function () {
        console.log(this.name);
    };
    // Calcula y devuelve el año de nacimiento
    Person.prototype.yearOfBirth = function (currentYear) {
        var birthYear = currentYear - this.age;
        return "El año de nacimiento es: " + birthYear;
    };
    // Método getter para obtener la dirección
    Person.prototype.getAddress = function () {
        return this.address;
    };
    // Método setter para establecer una nueva dirección
    Person.prototype.setAddress = function (address) {
        this.address = address;
        console.log("Nueva dirección: " + this.address);
    };
    return Person;
}());
exports.Person = Person;
