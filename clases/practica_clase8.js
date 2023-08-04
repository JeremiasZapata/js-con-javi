// Realizar una clase de nombre "UserManager".

// Debe guardar los siguientes datos:
// - Nombre, Email, Fecha y Hora de Creación Formato: (DD-MM-YYYY HH:MM)

// Métodos de la Clase
// - AgregarUsuario(nombre, email) => Se debe autogenerar el Id, y generar dinámicamente la fecha
// - BuscarUsuario(id)
// - ModificarUsuario(id, nombre, email) => Deberá almacenar fecha y hora de actualización
// - EliminarUsuario(id)
// - TotalUsuarios

class UserManager3 {
    constructor(){
        this.User3=[];
    }
    //metodos
    agregarUsuario3(nombre3, email3, DNI3 ){
        if(this.User3.some(DniIngresado3 => DniIngresado3.dni === DNI3)){
            alert("El usuario ya existe")
        }else{
            const nuevoUsuario3 = {
                nombre:nombre3,
                email:email3,
                dni:DNI3,
                fecha: this.generadorDeFecha(),
                nombresAnteriores:[]
            }
            this.User3.push(nuevoUsuario3)
        }
    }
        buscarPorDni(DniIngresadoBusqueda){
            const UsuarioBuscadoPorDni = this.User3.find(dniBuscar => dniBuscar.dni === DniIngresadoBusqueda)
            if(UsuarioBuscadoPorDni){
                console.log(UsuarioBuscadoPorDni.nombre)
            }else{
                console.log("no existe")
            }
        }
        // historialUsers(DniIngresado){
        //     const HistorialNombre = this.User3.find(nombreAnterior => nombreAnterior.dni === DniIngresado)
        //     let nombreAnterior = HistorialNombre.nombre;
        //     console.log("el nombre anterior era: " + nombreAnterior);
        //     return nombreAnterior;

        // }
        modificarNombrePorDNI(DNIaModificar) {
            const usuarioEncontrado = this.User3.find(usuario => usuario.dni === DNIaModificar);
            if (usuarioEncontrado) {
                let NombreAnterior = usuarioEncontrado.nombre
                usuarioEncontrado.nombreAnterior = NombreAnterior
                
                usuarioEncontrado.nombresAnteriores.push(NombreAnterior)
                

                const nuevoNombre = prompt("Ingrese el nuevo nombre:");
                usuarioEncontrado.nombre = nuevoNombre;
                usuarioEncontrado.fecha= this.generadorDeFecha()
                
                console.log("El nombre se ha modificado correctamente.");
            } else {
                console.log("No se encontró un usuario con ese DNI.");
            }
            
        }
        generadorDeFecha(){
            const fecha = new Date ();
        const dia = fecha.getDate();
        const mes = fecha.getMonth () +1 ;
        const anio = fecha.getFullYear();
        const hora = fecha.getHours ();
        const minutos = fecha.getMinutes ();
        const segundos = fecha.getSeconds ();
        if (minutos < 10 ){ //metodo de string que tome los dos ultimos caracteres del lado derecho
            return `${dia}-${mes}-${anio}  ${hora}:0${minutos}:${segundos}`
        }else{
            return `${dia}-${mes}-${anio}  ${hora}:${minutos}:${segundos}`
            }
        }
        
    }


const Usuarios3 = new UserManager3();
const Usuarios4 = new UserManager3();


Usuarios3.agregarUsuario3("jere", "jere@gmail.com", 30601375)
Usuarios3.agregarUsuario3("gise", "gise@gmail.com", 30601376)
console.log(Usuarios3)
// Usuarios3.buscarPorDni(30601376)
// setTimeout(function() {
//     const DNIIngresado = prompt("Ingrese el DNI del usuario:");
    
//     Usuarios3.modificarNombrePorDNI(Number(DNIIngresado));
    
//     console.log("dejamos pasar 3 segundos para que haya una diferencia");
// }, 3000);

const DNIIngresado = prompt("Ingrese el DNI del usuario:");
Usuarios3.modificarNombrePorDNI(Number(DNIIngresado));


const DNIIngresado2 = prompt("Ingrese el DNI del usuario:");
Usuarios3.modificarNombrePorDNI(Number(DNIIngresado2));


























// class UserManager2 {
//     constructor(){
//         this.User2 = []
//         }
//         //Metodos
//         agregarUsuario2(nombre, email, DNI){
//             if(this.User2.some(DniIngresado => DniIngresado.dni === DNI)){
//                 alert('El usuario ya existe')
//             }else{
//                 const nuevoUsuario2 = {
//                     nombre:nombre,
//                     email:email,
//                     dni:DNI
//                 }
//                 this.User2.push(nuevoUsuario2)
//             }
//         }
//     }

//     const Usuario2 = new UserManager2();
//     Usuario2.agregarUsuario2('jere', 'jere@gmail.com', 30601375)
//     console.log(Usuario2)
//     Usuario2.agregarUsuario2('jere', 'jere@gmail.com', 30601375)
//     console.log(Usuario2)

    



// class UserManager{
//     constructor(){
//         this.Usuarios=[]
//     }
//     agregarUsuario(nombre, email){
//         const nuevoUsuario = {
//             nombre:nombre,
//             email:email,
//             id:0,
//             fecha:0
//         }

//         this.Usuarios.push(nuevoUsuario);

//     }
//     buscarUsuario(){

//     }
//     generadorID(){
//         return 0

//     }
//     modificarUsuario(){

//     }
//     eliminarUsuario(id){
//         let usuarioEliminado = this.Usuarios.filter(usuario => usuario.id !== id)
//         this.Usuarios = usuarioEliminado;
//     }
//     generadorFecha(){
//         return 0
//     }
//     TotalUsuarios(){

//     }
// }

// const Usuario1 = new UserManager()
// Usuario1.agregarUsuario("jere", "jeremias@gmail.com")
// console.log(Usuario1.Usuarios)





// class UserManager {
//     constructor (){
//         this.usuarios = [];
//     }

//     agregarUsuario (nombre, email) {
//         const usuario = {
//             id:this.generadorId(),
//             nombre:nombre,
//             email:email,
//             fechaCreacion: this.crearFecha(),
//         }

//     this.usuarios.push(usuario);
//     }

//     generadorId () {
//         let max = 0;
//         this.usuarios.forEach(usuario => {
//         if (usuario.id > max) {
//             max = usuario.id;
//         }
//         })
//         return max+1;
//     }

//     crearFecha () {
//         const fecha = new Date ();
//         const dia = fecha.getDate();
//         const mes = fecha.getMonth () +1 ;
//         const anio = fecha.getFullYear();
//         const hora = fecha.getHours ();
//         const minutos = fecha.getMinutes ();
//         const segundos = fecha.getSeconds ();

//         return `${dia}-${mes}-${anio}  ${hora}:${minutos}:${segundos}`
//     }

//     buscarUsuario(id) {
//         let usuarioBuscado = this.usuarios.find (usuario => usuario.id === id);
//         console.log(usuarioBuscado);
//         if (usuarioBuscado) {
//             return usuarioBuscado;
//         } else {
//             console.log("Usuario no encontrado");
//         }
//     }

//     modificarUsuario () {

//     }

//     eliminarUsuario (id) {
//         let usuarioEliminado = this.usuarios.filter (usuario => usuario.id !== id);

//         this.usuarios = usuarioEliminado;
//         return this.usuarios;

//     }

//     totalUsuario () {
//         console.log("Total de usuarios: ", this.usuarios.length);
//     }


// }

// const Manager = new UserManager();

// Manager.agregarUsuario ("Javier Veron", "juan.veron@loadingswebs.com");
// console.log (Manager)
// Manager.agregarUsuario ("Jeremias Zapata", "juan.veron@loadingswebs.com");
// Manager.agregarUsuario ("Matias Ribaloff", "juan.veron@loadingswebs.com");

// Manager.eliminarUsuario (1);
// console.log (Manager)

// Manager.agregarUsuario ("Javier Veron", "juan.veron@loadingswebs.com");

// Manager.buscarUsuario (2);

// Manager.totalUsuario ();