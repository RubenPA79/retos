"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contacts = void 0;
var Contacts = /** @class */ (function () {
    // Creando constructor sin parámetros
    function Contacts() {
        this.people = []; // Inicializa el array vacío
    }
    // Método para imprimir todos los datos de las personas en la agenda
    Contacts.prototype.printCalendar = function () {
        this.people.forEach(function (person) {
            console.log("Nombre: ".concat(person.name, ", Edad: ").concat(person.age));
        });
    };
    return Contacts;
}());
exports.Contacts = Contacts;
