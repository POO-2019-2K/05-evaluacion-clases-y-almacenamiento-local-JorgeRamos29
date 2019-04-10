export default class Producto{
    constructor(objProducto){
        this._codigo = objProducto.codigo;
        this._nombre = objProducto.nombre;
        this._costo = objProducto.costo;
        this._cantidad = objProducto.cantidad;
        console.log("");
    }

    get codigo(){
        return this._codigo;
    }

    get nombre(){
        return this._nombre;
    }

    get costo(){
        return this._costo;
    }

    get cantidad(){
        return this._cantidad;
    }
}