export class Person {
    // Atributos públicos
    public name: string;
    public age: number;
  
    // Atributo privado
    private address: string;
  
    // Constructor para inicializar los atributos
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
  
    // Método público para imprimir el nombre
    public printName(): void {
      console.log(this.name);
    }
  
    // Calcula y devuelve el año de nacimiento
    public yearOfBirth(currentYear: number): string {
      const birthYear = currentYear - this.age;
      return "El año de nacimiento es: " + birthYear;
    }
  
    // Método getter para obtener la dirección
    public getAddress(): string {
      return this.address;
    }
  
    // Método setter para establecer una nueva dirección
    public setAddress(address: string): void {
      this.address = address;
      console.log("Nueva dirección: " + this.address);
    }
  }
  




