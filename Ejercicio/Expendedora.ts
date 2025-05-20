class Articulo {
    private nombre: string;
    private precio: number;
    private unidades: number
    
    constructor(nombre: string, precio: number, unidades: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.unidades = unidades;
    }

    getUnidades(): number {
        return this.unidades;
    }

    restarUnidad(): void {
        this.unidades--
    }

    getNombre() {
        return this.nombre;
    }

    getPrecio() {
        return this.precio;
    }

}

const polvorores = new Articulo('polvorones', 10,5);
const pinguinos = new Articulo('pinguinos',15,1);


class MaquinaExpendedora {

    private articulos: Articulo[];
    private ingreso: number = 0;
    private vendidos: string[] = [];

    constructor(articulos: Articulo[]) {
        this.articulos = articulos;
    }

    mostrarArticulos(): void {
        this.articulos.forEach( (articulo,index) => {
            console.log(`${index+1}. Nombre: ${articulo.getNombre()} | Precio: ${articulo.getPrecio()} | Unidades: ${articulo.getUnidades()}`)
        })
    }

    seleccionarArticulo(numero:number): number {
        const articulo =  this.articulos[numero-1];
        if(articulo.getUnidades() > 0){
            console.log(`##### Ingresa $${articulo.getPrecio()} `);
            return numero;
        }else{
            console.log(`##### Disculpa, No hay ${articulo.getNombre()} disponible`);
            return 0;
        }
    }

    venderArticulo(numero:number, pago:number) {
        if(numero > 0){
            const articulo =  this.articulos[numero-1];
            if(pago >= articulo.getPrecio()){
                articulo.restarUnidad()
                this.ingreso = this.ingreso + articulo.getPrecio();
                this.vendidos.push(articulo.getNombre());
                console.log(`##### Venta de ${articulo.getNombre()} `);
                console.log(`##### Tu cambio es: $${pago - articulo.getPrecio()}, Gracias por su compra`);
            }else{
                console.log(`##### Pago insuficiente `);
            }
        }
    }

    mostrarIngreso(permisos:number) {
        if (permisos == 1) { //Permisos 1 = Administrador
            console.log(`#### Ventas del dia: $${this.ingreso}`);    
            console.log(this.vendidos);
        } else {
            console.log(`#### No cuentas con los permisos necesarios`)
        }
    }



}

const maquinaExpendedora = new MaquinaExpendedora([polvorores,pinguinos])
maquinaExpendedora.mostrarArticulos();

// Seleccionamos articulo y vendemos articulos
let articulo: number = maquinaExpendedora.seleccionarArticulo(1);
maquinaExpendedora.venderArticulo(articulo, 10);

articulo = maquinaExpendedora.seleccionarArticulo(2);
maquinaExpendedora.venderArticulo(articulo, 20);

// Volvemos a mostrar para validar la resta
maquinaExpendedora.mostrarArticulos();
let administrador: number = 1; 
maquinaExpendedora.mostrarIngreso(administrador);