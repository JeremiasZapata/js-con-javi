// Realizar una clase de nombre “ABMClientes”, el cual permitirá trabajar con un array de productos. Éste debe poder agregar, consultar, modificar y eliminar un producto.

// Debe guardar objetos con el siguiente formato:
// - Nombre, DNI, Direccion

// Métodos de la Clase
// - Agregar Cliente (No agregar Clientes con DNI duplicado)
// - Buscar Cliente => Devolver un Objeto Cliente
// - Modificar Cliente
// - Eliminar Cliente
// - Total Clientes


class AMBClientes {
    constructor() {
        this.clientes = [];

    }
    agregar (nombre, dni, direccion){
        if (this.validarClienteExistente(dni) == false){
            const clienteNuevo = {
                nombre: nombre,
                dni: dni,
                direccion:direccion
            }
            this.clientes.push(clienteNuevo)
            console.log(this.clientes)
        }else{
            alert("Ya existe un cliente con ese DNI")
        }
        

        
    }
    validarClienteExistente(dni){
        let resultado = this.clientes.some(item => item.dni === dni)
        return resultado

    }
    buscar(dniBuscar){
        
        let busqueda = this.clientes.find(buscarDni => buscarDni.dni === dniBuscar)

        return busqueda



    }
    modificar(){

    }
    eliminar(dniBuscarEliminar){
        const nuevoArrayUsuarios = this.clientes.filter(dniEliminar => dniEliminar.dni !== dniBuscarEliminar)
        this.clientes= nuevoArrayUsuarios;
        return this.clientes;

    }
    totalClientes(){
        return this.clientes.length
        
    }
}

const Clientes = new AMBClientes();

let nombre = prompt("Ingrese su nombre")
let dni = prompt("Ingrese su DNI")
let direccion = prompt("Ingrese su Direccion")

Clientes.agregar(nombre, dni, direccion)

Clientes.agregar(nombre, "123", direccion)

let dniBuscarEliminar = prompt("ingrese un dni para eliminar de la base de datos")

Clientes.eliminar(dniBuscarEliminar);

let dniBuscar = prompt("ingrese un dni para buscar si esta en base de datos")

Clientes.buscar(dniBuscar)
console.log(Clientes.clientes)
console.log(Clientes.buscar(dniBuscar))

