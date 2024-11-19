class Vector {
    // Atributo privado 
    private elements: number[];

    // Método constructor 
    constructor(n: number, k: number) {

        // Inicializar el array elements con n números aleatorios entre 0 y k

        this.elements = [];
        for (let i = 0; i < n; i++) {
            this.elements.push(Math.floor(Math.random() * (k + 1)));
        }
    }

    // Método que imprime los elementos

    print(): void {
        console.log(this.elements);
    }


    // Método que suma los elementos con otro vector

    add(v1: Vector): Vector {
        let result = new Vector(this.elements.length, 0); // Crear un nuevo Vector con longitud `n y valores iniciales en 0
        for (let i = 0; i < this.elements.length; i++) {
            result.elements[i] = this.elements[i] + v1.elements[i];
        }
        return result;
    }
}

// Ejemplo de uso
let vector1 = new Vector(5, 10); // Vector con 5 elementos aleatorios entre 0 y 10
let vector2 = new Vector(5, 10); // Otro vector con 5 elementos aleatorios entre 0 y 10

vector1.print(); // Imprime el primer vector
vector2.print(); // Imprime el segundo vector

let vectorSum = vector1.add(vector2); // Suma ambos vectores
vectorSum.print(); // Imprime el vector resultante
