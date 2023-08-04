//Ingresar 3 nombres en minúscula con 3 edades por prompt, luego presentarlas en un solo alert. Todos los textos mostrarlos en mayúscula.  Por consola decir que tipo de dato es cada dato ingresado.   String o número.

//Declaro y pido que se ingresen valores
let contador = 0;
let nombre1 = prompt("Ingrese un primer nombre");
let edad1 = parseInt(prompt("Ingrese la primer edad"));

contador ++; //sumo uno a contador para luego usarlo para el promedio


let nombre2 = prompt("Ingrese un segundo nombre");
let edad2 = parseInt( prompt("Ingrese una segunda edad"));

contador++;  //sumo uno a contador para luego usarlo para el promedio

let nombre3 = prompt("Ingrese un tercer nombre");
let edad3 = parseInt (prompt("Ingrese una tercer edad"));

contador++; //sumo uno a contador para luego usarlo para el promedio

//Calculo el promedio usando el contador rudimentario
let promedio = ((edad1 + edad2 + edad3)/ contador);

//Muestro los datos en un solo alert
alert("El primer nombre es " + nombre1.toUpperCase() + " y la edad es: " + edad1 + "\n" + "El segundo nombre es " + nombre2.toUpperCase() + " y la edad es " + edad2 + "\n" + "El tercer nombre es " + nombre3.toUpperCase() + " y la edad es " + edad3 + "\n" + "El promedio de las edades es: " + promedio);

//Muestro en consola que tipos de datos tengo
console.log(nombre1 + " es un: " + typeof nombre1);
console.log(edad1 + " es un: " + typeof edad1);
console.log(nombre2 + " es un: " + typeof nombre2);
console.log(edad2 + " es un: " + typeof edad2);
console.log(nombre3 + " es un: " + typeof nombre3);
console.log(edad3 + " es un: " + typeof edad3);




