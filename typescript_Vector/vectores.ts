export class Vector {
    // Atributo privado
    private elements: number[];
  
    // Constructor que crea el array con números aleatorios
    constructor(n: number, k: number) {
      this.elements = [];
      for (let i = 0; i < n; i++) {
        this.elements.push(Math.floor(Math.random() * (k + 1)));
      }
    }
  
    // Método para imprimir el vector
    print(): void {
      console.log(this.elements);
    }
  
    // Método para sumar dos vectores
    add(v1: Vector): Vector {
      let resultElements: number[] = this.elements.map(
        (value, index) => value + v1.elements[index]
      );
      let result = new Vector(0, 0);
      result.elements = resultElements;
      return result;
    }
  
    // Método para restar dos vectores
    subs(v1: Vector): Vector {
      let resultElements: number[] = this.elements.map(
        (value, index) => value - v1.elements[index]
      );
      let result = new Vector(0, 0);
      result.elements = resultElements;
      return result;
    }
  
    // Método para multiplicar elemento a elemento
    mult(v1: Vector): Vector {
      let resultElements: number[] = this.elements.map(
        (value, index) => value * v1.elements[index]
      );
      let result = new Vector(0, 0);
      result.elements = resultElements;
      return result;
    }
  
    // Método para multiplicar el vector por un número
    multNumber(n: number): Vector {
      let resultElements: number[] = this.elements.map(value => value * n);
      let result = new Vector(0, 0);
      result.elements = resultElements;
      return result;
    }
  }
  