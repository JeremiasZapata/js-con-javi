class Listado{
    constructor (datosLocalStorage ){
        this.Nombre = datosLocalStorage.nombre;
        this.Apellido = datosLocalStorage.apellido;
        this.Direccion = datosLocalStorage.direccion;
        this.Telefono = datosLocalStorage.telefono;
        this.MostrarDatos = function(){ console.log(" Nombre: " + this.Nombre + "\n" + " Apellido: " + this.Apellido + "\n" + " Dirección: " + this.Direccion + "\n" + " Teléfono: " + this.Telefono)}// metodo
    }
}



function PedirDatos(){
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let direccion = prompt("Ingrese su direccion");
let telefono = prompt("Ingrese su telefono");

const datos = {
    nombre: nombre ,
    apellido: apellido,
    direccion : direccion,
    telefono: telefono
}
localStorage.setItem("datos", JSON.stringify(datos));

}

function Activar(){

  let datosLocalStorage = JSON.parse(localStorage.getItem("datos"))
  console.log(datosLocalStorage);
  const Listado3 = new Listado (datosLocalStorage);
  return Listado3
}

  function MostrarDatosSolicitados(){
    let Listado3 = Activar()
    Listado3.MostrarDatos()
  }





  

  function limpiarCampos() {
    document.getElementById("myForm").reset();
  }

  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar recargar la página

    // Obtener los valores de los campos
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var direccion = document.getElementById("direccion").value;
    var telefono = document.getElementById("telefono").value;

    // Aquí puedes hacer lo que quieras con los datos, como enviarlos a un servidor o almacenarlos localmente

    // Limpiar los campos después de enviar
    limpiarCampos();
  });

//Listado3.MostrarDatos();


// let nombre = prompt("Ingrese su nombre");
// let apellido = prompt("Ingrese su apellido");
// let direccion = prompt("Ingrese su direccion");
// let telefono = prompt("Ingrese su telefono");

// console.log(Listado1);
// const Listado2 = new Listado (nombre, apellido, direccion, telefono);
// console.log(Listado2);
// Listado1.MostrarDatos();
// console.log(Listado3)



//******************************************************************************** */



{/* <input type="text" id="nombreInput">
<button onclick="obtenerNombre()">Obtener Nombre</button>

<script>
  function obtenerNombre() {
    var nombreInput = document.getElementById("nombreInput");
    var nombre = nombreInput.value;
    console.log("Hola, " + nombre);
  }
</script> */}

