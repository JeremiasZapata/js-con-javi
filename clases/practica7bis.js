// Realizar una clase de nombre "ProductManager", el cual permitirá trabajar con un array de productos. Éste debe poder agregar, consultar, modificar y eliminar un producto.
// Las propiedades son: productos y carrito.

// Debe guardar objetos con el siguiente formato:
// - Nombre, Precio, Stock

// Métodos de la Clase
// - AgregarProducto 
// - BuscarProducto
// - ModificarProducto
// - EliminarProducto 
// - TotalProductos
// - agregarProductoCarrito(id) => (si es el mismo producto, aumentar stock)
// - eliminarProductoCarrito(id) => (si hay stock, decrementar sino quitar producto)

var id = 0;
  function generadorID(){
      id += 1
      return id
  }

class ProductManager{
      constructor(){
        this.Productos = [];
        this.Carrito = [{nombre:"jean prueba", precio:9000, stock:11}];
        
      }
      AgregarProducto(nombre, precio, stock){
            const NuevoProducto={
              nombre:nombre,
              precio:precio, 
              stock:stock,
              id:generadorID(),
              unidadesCarrito:0
            }
            this.Productos.push(NuevoProducto);
      }
      BuscarProducto(busqueda){
          const ProductoBuscado = this.Productos.filter(Producto => Producto.nombre.includes(busqueda))
          return ProductoBuscado
      }
      ModificarProducto(){

      }
      EliminarProducto(){

      }
      TotalProductos(){

      }
      AgregarProductoCarrito(agregarCarrito){
        let disponibilidad = Boolean;
        
        let producotSeleccionado = [];
          if (this.Carrito.some(item => item.nombre === agregarCarrito)){
            producotSeleccionado = this.Productos.find(producto => producto.nombre === agregarCarrito)
            console.log("entro al true")
            producotSeleccionado.unidadesCarrito += 1
            
            disponibilidad = true;
          }else{
            producotSeleccionado = this.Productos.find(producto => producto.nombre === agregarCarrito)
            disponibilidad = false;
            console.log("entro al false")
            
            this.Carrito.push(producotSeleccionado)
            
          }
          producotSeleccionado.stock -= 1; 
          producotSeleccionado.unidadesCarrito += 1
          return disponibilidad

      }
      EliminarProductoCarrito(){

      }
      VaciarCarrito(){
        this.Carrito=[]
      }
}

const Jeans = new ProductManager();
Jeans.AgregarProducto("jean prueba", 7000, 15);
Jeans.AgregarProducto("jean a", 5000, 12);
Jeans.AgregarProducto("jean azul", 5000, 12);
Jeans.AgregarProducto("jean verde", 6000, 10);
Jeans.AgregarProducto("jean rojo", 7000, 15);
Jeans.AgregarProducto("buso azul", 7000, 15);
Jeans.AgregarProducto("buso verde", 7000, 15);
Jeans.AgregarProducto("buso rojo", 7000, 15);
console.log(Jeans.BuscarProducto(prompt("Buscar")))
Jeans.AgregarProductoCarrito(prompt("Agregar producto carrito"))
Jeans.AgregarProductoCarrito(prompt("Agregar producto carrito"))
// Jeans.VaciarCarrito();




console.log(Jeans.Productos)
console.log(Jeans.Carrito)



