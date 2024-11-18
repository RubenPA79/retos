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
// Crear una instancia de la clase Person
var person = new Person("Rubén", 46, "Calle Ejemplo 123");
// Llamar a los métodos para que haya una salida en la consola
person.printName(); // Esto debería imprimir: Rubén
console.log(person.yearOfBirth(2024)); // Esto debería imprimir: El año de nacimiento es: 1978
// Obtener y mostrar la dirección
console.log(person.getAddress()); // Esto debería imprimir: Calle Ejemplo 123
// Establecer una nueva dirección y mostrarla
person.setAddress("Avenida Nueva 456"); // Esto debería imprimir: Nueva dirección: Avenida Nueva 456
