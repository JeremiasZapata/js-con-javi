// Diseñar un Sistema de Registración de Productos con (NOMBRE Y PRECIO), donde podamos calcular el IVA para cada producto comprado. Si el monto total supera los $50.000 pesos o 3 productos, realizar un descuento de 10%. Informar Productos comprados y Monto Total a Pagar.

let precio = 0;
let cantidadDeProductos=0;
const IVA = 1.21;
let productos="";
let precioDesc=0;
let i = 0;

cantidadDeProductos = parseInt(prompt("Ingrese la cantidad de productos a comprar"));
while (cantidadDeProductos != 0) {
    productos += prompt("Ingrese nombre de producto" + "\n");

    precio += parseInt(prompt("Ingrese el valor del producto" + "\n"))* IVA;
    console.log(precio);
    cantidadDeProductos --;
    console.log(cantidadDeProductos);
    i++
}
if (precio > 50000 || cantidadDeProductos >3 ){
    precio = precio * 0.9;
    
    console.log("Entro al if");
}
alert("Total productos: " + i + "\n" + "Precio: " + precio + "\n");



//-------------------------------------------------------------------------------------------------------------
