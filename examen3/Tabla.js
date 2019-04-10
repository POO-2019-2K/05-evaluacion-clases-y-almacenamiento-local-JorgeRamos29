import Producto from "./Inventario.js";

export default class Tabla{
    constructor(tabla){
        this._tabla = tabla;
        this._productos = [];
        this._initTables();
    }

    _findProducto(codigo){
        let foundAt = -1;
        this._productos.forEach((e,index) => {
            if(e.codigo === codigo){
                foundAt = index;
                return;
            }
        })

        return foundAt
    }

    addVenta(codigo,cantidad){
        this._productos.forEach((e,index) => {
            if(e.codigo === codigo){
                e.cantidad = e.cantidad - cantidad;;
                let row = this._tabla.rows[index + 1];
                row.cells[2].innerHTML =  e.cantidad;
                Swal.fire({
                    type: "success",
                    title: "",
                    text: ""+ e.nombre+" vendido con exito."
                })
            }
        })
        
        console.log(localStorage.getItem("alumno"))
        localStorage.setItem("alumno",JSON.stringify(this._alumnos));
    }

    _initTables(){
        let lsProductos = JSON.parse(localStorage.getItem("producto"));

        if (lsProductos === null) {
            return;
        }

        lsProductos.forEach((e, index) => {
            this.addToTable(new Producto(e));
        });
    }

    addToTable(objProducto){
        let row = this._tabla.insertRow(-1);

        let cellCodigo = row.insertCell(0);
        let cellNombre = row.insertCell(1);
        let cellCantidad = row.insertCell(2);
        let cellCosto = row.insertCell(3);
        

        cellCodigo.innerHTML = objProducto.codigo;
        cellNombre.innerHTML = objProducto.nombre;
        cellCosto.innerHTML = objProducto.costo;
        cellCantidad.innerHTML = objProducto.cantidad;

        let Producto ={
            codigo: objProducto.codigo,
            nombre: objProducto.nombre,
            costo: objProducto.costo,
            cantidad: objProducto.cantidad
        }

        this._productos.push(Producto);
    }

    addProducto(objProducto){
        let f = this._findProducto(objProducto.codigo)

        if(f >= 0){
            Swal.fire({
                type: "error",
                title: "Error",
                text: "El producto ya esta registrado"
            })
            return;
        }

        this.addToTable(objProducto);
        localStorage.setItem("producto",JSON.stringify(this._productos));
        Swal.fire({
            type: "success",
            title: "",
            text: "Producto registrado"
        })
    }

} 