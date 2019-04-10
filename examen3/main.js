import Producto from "./Inventario.js";
import Tabla from "./Tabla.js";

class Main{
    constructor(){
        let tabla = new Tabla(document.querySelector("#tabla"));
        document.querySelector("#guardar").addEventListener("click", () => {

                let codigo = document.querySelector("#codigo").value;
                let nombre = document.querySelector("#nombre").value;
                let cantidad = document.querySelector("#cantidad").value;
                let costo = document.querySelector("#costo").value;

        
                let objProducto = {
                  codigo: codigo,
                  nombre: nombre,
                  cantidad: cantidad,
                  costo: costo
                };

                let p = new Producto(objProducto);
                tabla.addProducto(objProducto);

            
        });

        document.querySelector("#vender").addEventListener("click", () => {
            let codigo = document.querySelector("#codigo").value;
            let cantidad = document.querySelector("#cantidad").value;

            tabla.addVenta(codigo,cantidad);  
        });
    }
}

let m = new Main();