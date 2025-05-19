// Nivel 1: Clase base Vehiculo
class Vehiculo {
    public marca: string;
    public modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    public arrancar(): void {
        console.log(`${this.marca} ${this.modelo} está arrancando.`);
    }

    public detener(): void {
        console.log(`${this.marca} ${this.modelo} está detenido`);
    }
}