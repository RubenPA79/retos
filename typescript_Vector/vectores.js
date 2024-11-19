"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    // Constructor que crea el array con números aleatorios
    function Vector(n, k) {
        this.elements = [];
        for (var i = 0; i < n; i++) {
            this.elements.push(Math.floor(Math.random() * (k + 1)));
        }
    }
    // Método para imprimir el vector
    Vector.prototype.print = function () {
        console.log(this.elements);
    };
    // Método para sumar dos vectores
    Vector.prototype.add = function (v1) {
        var resultElements = this.elements.map(function (value, index) { return value + v1.elements[index]; });
        var result = new Vector(0, 0);
        result.elements = resultElements;
        return result;
    };
    // Método para restar dos vectores
    Vector.prototype.subs = function (v1) {
        var resultElements = this.elements.map(function (value, index) { return value - v1.elements[index]; });
        var result = new Vector(0, 0);
        result.elements = resultElements;
        return result;
    };
    // Método para multiplicar elemento a elemento
    Vector.prototype.mult = function (v1) {
        var resultElements = this.elements.map(function (value, index) { return value * v1.elements[index]; });
        var result = new Vector(0, 0);
        result.elements = resultElements;
        return result;
    };
    // Método para multiplicar el vector por un número
    Vector.prototype.multNumber = function (n) {
        var resultElements = this.elements.map(function (value) { return value * n; });
        var result = new Vector(0, 0);
        result.elements = resultElements;
        return result;
    };
    return Vector;
}());
exports.Vector = Vector;
