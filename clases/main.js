
let altura;
let peso;
let nombre1;
let IMC 

nombre1 = prompt ("ingrese su nombre");

peso = parseFloat (prompt("Ingrese su peso"));
altura = parseFloat (prompt ("Ingrese su altura"));

IMC = (peso / (altura * altura));


alert (nombre1 + " Su IMC es: " + IMC);


let nombre;
nombre = prompt("ingrese su nombre en minuscula");

console.log(nombre.toUpperCase());
