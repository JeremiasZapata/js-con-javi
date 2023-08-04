// Solicitar Nombre y Apellido (un solo prompt)
// Nombre de la Primer Asignatura #1
// Nota 1, Nota 2, Nota 3
// Nombre de la Primer Asignatura #2
// Nota 1, Nota 2, Nota 3
// Nombre de la Primer Asignatura #3
// Nota 1, Nota 2, Nota 3
// Informar el Promedio de la Asignatura #1
// Informar el Promedio de la Asignatura #2
// Informar el Promedio de la Asignatura #3
// Informar el Promedio General 

//ingrese su nombre y apellido
let nombre = prompt ("Ingrese su nombre y apellido");
alert(nombre);
//ingreso nombre y notas de los cuatrimestres de la primer asignatura
let subjec1 = prompt ("Ingrese el nombre de la primer asignatura");
let note11 = parseFloat(prompt("Ingrese la nota de su primer cuatrimetre"));

let note21 = parseFloat(prompt("Ingrese la nota de su segundo cuatrimetre"));
let note31 = parseFloat(prompt("Ingrese la nota de su tercer cuatrimetre"));

//ingreso nombre y notas de los cuatrimestres de la segunda asignatura
let subjec2 = prompt ("Ingrese el nombre de la segunda asignatura");
let note12 = parseFloat(prompt("Ingrese la nota de su primer cuatrimetre"));
let note22 = parseFloat(prompt("Ingrese la nota de su segundo cuatrimetre"));
let note32 = parseFloat(prompt("Ingrese la nota de su tercer cuatrimetre"));

//ingreso nombre y notas de los cuatrimestres de la tercer asignatura
let subjec3 = prompt ("Ingrese el nombre de la tercer asignatura");
let note13 = parseFloat(prompt("Ingrese la nota de su primer cuatrimetre"));
let note23 = parseFloat(prompt("Ingrese la nota de su segundo cuatrimetre"));
let note33 = parseFloat(prompt("Ingrese la nota de su tercer cuatrimetre"));

//Calculos los promedios de las asignaturas
let promedio1 = ((note11 + note21 + note31)/3);
let promedio2 = ((note12 + note22 + note32)/3);
let promedio3 = ((note13 + note23 + note33)/3);
//Calculo del promedio total
let promedioTotal = ((note13 + note23 + note33)/3);

let salida = "El promedio " + subjec1 + " es : " + promedio1 + "\n"; 
salida += "El promedio de la asginatura: " + subjec1 + " es : " + promedio1 + "\n";
salida += "El promedio de la asginatura: " + subjec2 + " es : " + promedio2 + "\n";
salida += "El promedio de la asginatura: " + subjec3 + " es : " + promedio3 + "\n";
salida += "El promedio de las asignaturas " + subjec1 +" " + subjec2 + " y " + subjec3 + " es: " + promedioTotal;

alert(salida);


//muestro los resultados de los promedios antes calculados
// alert ("El promedio de la asginatura: " + subjec1 + " es: " + promedio1 + "\n" + "El promedio de la asginatura: " + subjec2 + " es: " + promedio2 + "\n" + "El promedio de las asignaturas " + subjec1 +" " + subjec2 + " y " + subjec3 + "es: " + promedioTotal);
// alert ("El promedio de la asginatura: " + subjec2 + " es: " + promedio2);
// alert ("El promedio de la asginatura: " + subjec3 + " es: " + promedio3);
// alert ("El promedio de las asignaturas " + subjec1 +" " + subjec2 + " y " + subjec3 + "es: " + promedioTotal);


