// Solicitar peso y altura de una persona, calcula su IMC e informar su Estado de Salud.
// La salida debería ser un solo Alert informado lo siguiente:

// IMC: 27.4%
// Estado de Salud: Peso superior al normal

let peso = parseFloat(prompt("Ingrese su peso en Kg (ej: 85.3) "));
console.log(peso);
let altura = parseFloat(prompt("Ingrese su altura en mts (por ej: 1.78m) "));
console.log(altura);
let condicionPeso = '';

if ((isNaN(peso)) || (isNaN(altura)) ) {
    alert("Debe ingresar ambos datos. Y deben ser numeros");
    console.log(" entro al if");


    
}else {
    console.log("entro al else");
    let IMC = (peso/(Math.pow(altura, 2)));
    if (IMC < 18.5){
        condicionPeso = "Su clasificacion es : Bajo peso.";
    }else if (IMC >= 18.5 && IMC <= 24.9){
        condicionPeso = "Su clasificacion es : Peso adecuado.";
    }else if (IMC >= 25 && IMC <= 29.9){
        condicionPeso = "Su clasificacion es : Sobrepeso.";
    }else if (IMC >= 30 && IMC <= 34.9){
        condicionPeso ="Su clasificacion es : Obesidad grado I.";
    }else if (IMC >= 35 && IMC <= 39.9){
        condicionPeso ="Su clasificacion es : Obesidad grado II.";
    }else if (IMC > 40){
        condicionPeso ="Su clasificacion es : Obesidad grado III.";
    }
    alert("Su IMC es: " + IMC.toFixed(3) + "\n" + condicionPeso );
}






//     if (IMC < 18.5){
//     alert("Su IMC es: " + IMC + "\n" + "Su clasificacion es : Bajo peso.")
// }else if (IMC >= 18.5 && IMC <= 24.9){
//     alert("Su IMC es: " + IMC + "\n" + "Su clasificacion es : Peso adecuado.")
// }else if (IMC >= 25 && IMC <= 29.9){
//     alert("Su IMC es: " + IMC + "\n" + "Su clasificacion es : Sobrepeso.")
// }else if (IMC >= 30 && IMC <= 34.9){
//     alert("Su IMC es: " + IMC + "\n" + "Su clasificacion es : Obesidad grado I.")
// }else if (IMC >= 35 && IMC <= 39.9){
//     alert("Su IMC es: " + IMC + "\n" + "Su clasificacion es : Obesidad grado II.")
// }else {
//     alert("Su IMC es: " + IMC + "\n" + "Su clasificacion es : Obesidad grado III.")
// }









