// Solicitar una aplicación de cotizador de prestamos, donde se deberá solicitar:
// - Monto del Préstamo
// - Plazo (cantidad de cuotas) Puede ser: 12 (70% anual), 24 (80% anual) o 36 (90% anual)
// - Tipo de Cliente

// Informar:
// - El valor de cada cuota
// - El total a pagar del prestamos

// Tasas:
// Exclusive - Tasa 119%
// Premium - Tasa 124%
// Start - Tasa 129%

//----------------------------------------------------------------------------------------------------------

//tasas de interes por tipo de cliente
let exclusive =  (100/119);
let premium = (100/124);
let start = (100/129);
let tipoCliente;
let valorTotal = 0;

//Intereses por plazos
let term12 = 1.7;
let term24 = 1.8;
let term36 = 1.9;

//Pido datos
let monto = parseInt(prompt("Ingrese el monto del prestamo."));

let plazo = parseInt(prompt("Ingrese el plazo (12, 24 o 36 meses)."));



if (!((plazo != 12) && (plazo != 24) && (plazo != 36) )){
    tipoCliente = prompt("Ingrese tipo de cliente (Exclusive, Premium, Start).").toLowerCase();
    if ((tipoCliente == "exclusive") || (tipoCliente == "premium") || (tipoCliente == "start")){
        if(tipoCliente == "exclusive"){
            valorTotal = monto + monto/exclusive;
        }else if ( tipoCliente == "premium" ){
            valorTotal = monto + monto/premium;
        }else if (valorTotal = monto + monto/start);  
            alert("El total a pagar es: " + valorTotal + "\n" + "El valor de la cuota es: " + (valorTotal/plazo).toFixed(2));
        }else alert("Debe ingresar un valor de cliente válido.");
    } else alert ( "Debe ingresar un valor de plazo válido.");
    
    
    
    
        
        
        


        
        
    






