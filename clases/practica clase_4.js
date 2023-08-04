// Crear un sistema de registración de Clientes, donde se va a solicitar los siguientes datos:

// - Apellido *
// - Nombre *
// - Tipo de Documento *
// - Número de Documento *
// - Fecha de Nacimiento
// - Email
// - Teléfono/Celular
// - CUIL

// Requerimientos:
// - Validar todos los campos que sea obligatorios
// - Informar un 1 solo alert todos los datos de Registración
// - Deberiamos utilizar funciones en alguna parte del código

// Página: https://www.icbc.com.ar/personas/formpaquetes

// longName = nombreSolicitado.length // no lo usamos por ahora

function datosSolicitados(nombreSolicitado, tipoDocSolicitado, documentoSolicitado, mailSolicitado) {
  alert(
      "Nombre: " +
      nombreSolicitado +
      "\n" +
      "Tipo de doc: " +
      tipoDocSolicitado +
      "\n" +
      "Numero de doc: " +
      documentoSolicitado +
      "\n" + 
      "Emai: " + mailSolicitado
  );
}

function validarNombreApellido(nombre) {
  let patron = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]{2,15}$/;
  if (patron.test(nombre)) {
    console.log("Nombre válido"); 
    return true;
  }else{
        return false
  }  
}

function validarNumero(numero) {
  let patron = /^[1234567890\s]{6,9}$/;
  if (patron.test(numero)) {
    console.log("numero válido"); 
    return true;
  }else{
        return false
  }  
}

function validarMail(mail) {
  let patron = /^[.\s]$/;
  if (patron.test(mail)) {
    console.log("mail válido"); 
    return true;
  }else{
        return false
  }  
}

function mail() {
  let mailSolicitado = prompt("Ingrese un email").trim();
  
  while (!(validarMail(mailSolicitado))){
      mailSolicitado = prompt("Dato inválido. Por favor, ingresa un mail válido:").trim();
  }
      //console.log(validarNombre(nombreSolicitado));
      return mailSolicitado;
}


function nombre() {
    let nombreSolicitado = prompt("Ingrese nombre").trim();
    
    while (!(validarNombreApellido(nombreSolicitado))){
        nombreSolicitado = prompt("Dato inválido. Por favor, ingresa un nombre válido:").trim();
    }
        //console.log(validarNombre(nombreSolicitado));
        return nombreSolicitado;
}


function apellido() {
  let apellidoSolicitado = prompt("Ingrese nombre");
  while (!(validarNombreApellido(apellidoSolicitado))){
    apellidoSolicitado = prompt("Dato inválido. Por favor, ingresa un nombre válido:").trim();
}
  //longSurname = apellidoSolicitado.length;
  
      return apellidoSolicitado;
  }

function tipoDoc() {
  tipoDocSolicitado = prompt("Ingrese Tipo documento");
  return tipoDocSolicitado;
}
function doc() {
  documentoSolicitado = prompt("Ingrese numero de documento").trim;
  while (!(validarNumero(documentoSolicitado))){
    documentoSolicitado = prompt("Dato inválido. Por favor, ingresa un número válido:").trim();
}
  return documentoSolicitado;
}
function DatosDeCliente() {
  datosSolicitados(nombre(), tipoDoc(), doc(), mail());
}
DatosDeCliente();




  
  
