var Articulo = /** @class */ (function () {
    function Articulo(nombre, precio, unidades) {
        this.nombre = nombre;
        this.precio = precio;
        this.unidades = unidades;
    }
    Articulo.prototype.getUnidades = function () {
        return this.unidades;
    };
    Articulo.prototype.restarUnidad = function () {
        this.unidades--;
    };
    Articulo.prototype.getNombre = function () {
        return this.nombre;
    };
    Articulo.prototype.getPrecio = function () {
        return this.precio;
    };
    return Articulo;
}());
var polvorores = new Articulo('polvorones', 10, 5);
var pinguinos = new Articulo('pinguinos', 15, 1);
var MaquinaExpendedora = /** @class */ (function () {
    function MaquinaExpendedora(articulos) {
        this.ingreso = 0;
        this.vendidos = [];
        this.articulos = articulos;
    }
    MaquinaExpendedora.prototype.mostrarArticulos = function () {
        this.articulos.forEach(function (articulo, index) {
            console.log("".concat(index + 1, ". Nombre: ").concat(articulo.getNombre(), " | Precio: ").concat(articulo.getPrecio(), " | Unidades: ").concat(articulo.getUnidades()));
        });
    };
    MaquinaExpendedora.prototype.seleccionarArticulo = function (numero) {
        var articulo = this.articulos[numero - 1];
        if (articulo.getUnidades() > 0) {
            console.log("##### Ingresa $".concat(articulo.getPrecio(), " "));
            return numero;
        }
        else {
            console.log("##### Disculpa, No hay ".concat(articulo.getNombre(), " disponible"));
            return 0;
        }
    };
    MaquinaExpendedora.prototype.venderArticulo = function (numero, pago) {
        if (numero > 0) {
            var articulo_1 = this.articulos[numero - 1];
            if (pago >= articulo_1.getPrecio()) {
                articulo_1.restarUnidad();
                this.ingreso = this.ingreso + articulo_1.getPrecio();
                this.vendidos.push(articulo_1.getNombre());
                console.log("##### Venta de ".concat(articulo_1.getNombre(), " "));
                console.log("##### Tu cambio es: $".concat(pago - articulo_1.getPrecio(), ", Gracias por su compra"));
            }
            else {
                console.log("##### Pago insuficiente ");
            }
        }
    };
    MaquinaExpendedora.prototype.mostrarIngreso = function (permisos) {
        if (permisos == 1) { //Permisos 1 = Administrador
            console.log("#### Ventas del dia: $".concat(this.ingreso));
            console.log(this.vendidos);
        }
        else {
            console.log("#### No cuentas con los permisos necesarios");
        }
    };
    return MaquinaExpendedora;
}());
var maquinaExpendedora = new MaquinaExpendedora([polvorores, pinguinos]);
maquinaExpendedora.mostrarArticulos();
// Seleccionamos articulo y vendemos articulos
var articulo = maquinaExpendedora.seleccionarArticulo(1);
maquinaExpendedora.venderArticulo(articulo, 10);
articulo = maquinaExpendedora.seleccionarArticulo(2);
maquinaExpendedora.venderArticulo(articulo, 20);
// Volvemos a mostrar para validar la resta
maquinaExpendedora.mostrarArticulos();
var administrador = 1;
maquinaExpendedora.mostrarIngreso(administrador);
