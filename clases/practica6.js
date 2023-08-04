// Realizar una clase de nombre “ProductManager”, el cual permitirá trabajar con múltiples productos. Éste debe poder agregar, consultar, modificar y eliminar un producto.

// Debe guardar objetos con el siguiente formato:
// - Nombre

// Testing del Proyecto:
// - Se deberá agregar nombre de productos
// - Listar los productos
// - Modificar 1 producto
// - Eliminar 1 Producto


class ProductManager {
    constructor (){
        this.arrayProductos =[] ;
    }
    agregarProducto(agregar) {
        this.arrayProductos.push(agregar) 
    }
    consultar(){
        

    }
    modificar(consulta, modificar){
        let indice = this.arrayProductos.indexOf(consulta);
        if (indice != -1){
            this.arrayProductos[indice] = modificar;
        }else{
            alert("No existe el item mencionado")
        }

    }
        eliminarProducto(eliminar){

            let indice = this.arrayProductos.indexOf(eliminar)
            if(indice != -1){
                this.arrayProductos.splice(indice,1)
            }else{
                alert("No existe el item mencionado")
            }

        }
        
    }


//Agregar por prompt

let agregar = prompt("ingrese un producto para agregar").toLowerCase()
const ProductoAgregar = new ProductManager();
ProductoAgregar.agregarProducto(agregar);
console.log(ProductoAgregar.arrayProductos);

let eliminar = prompt("Ingrese un elemento a eliminar ESC para omitir").toLowerCase();
ProductoAgregar.eliminarProducto(eliminar);



//Con valores fijos
// ProductoAgregar.agregarProducto("pepsi")
// console.log(ProductoAgregar)
// console.log(ProductoAgregar.arrayProductos)

let productosCargados = "";
for (const item of ProductoAgregar.arrayProductos) {
    productosCargados += item + "\n";
    console.log(item + "- ");
}
console.log(productosCargados)
alert(productosCargados + "\n")


let consulta = prompt("Ingrese el producto que desea modificar").toLowerCase();
let modificar = prompt("Ingrese el nuevo producto").toLowerCase();
ProductoAgregar.modificar(consulta, modificar);


// for (const item of ProductoAgregar.arrayProductos) {
//     productosCargados += item + "\n";
//     console.log(item + "- ");
// }
console.log(ProductoAgregar.arrayProductos)
alert(ProductoAgregar.arrayProductos);

