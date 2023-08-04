// Métodos de Strings
/* let texto = "Anita";
console.log(texto);
console.log("Longitud: " + texto.length);
console.log("Posiciones 0, 1 y 2: " + texto[0] + "-" + texto[1] + "-" + texto[2]);

for (let i=0; i<texto.length; i++) {
    console.log(texto[i]);
} */

/* let texto2 = " Anita Laurita  ";
//texto2 = texto2.trim(); //Quita los espacios del comienzo y el final de un string
texto2 = texto2.replaceAll("i", "eee");
//console.log("Longitud: " + texto2.length);
console.log(texto2); */


// Código original
/* let total = 0;

for (i=1; i<=10; i++) {
    total += i;
}

console.log("Total: " + total); */

// Abstracción
/* const sumarRango = (valorInicial, valorFinal) => {
    let total = 0;

    for (i=valorInicial; i<=valorFinal; i++) {
        total += i;
    }

    return total;
}

console.log("Total: " + sumarRango(1, 100)); */


// Funciones de orden superior
// Ejemplo #1
function mayorQue(valor) {
    return (numero) => numero > valor;
}

let mayorQue10 = mayorQue(10); //(numero) => numero > 10
console.log(mayorQue10(5)); //(5) => 5 > 10 => false
console.log(mayorQue10(25)); //(25) => 25 > 10 => true 


// Ejemplo #2
/* function asignarOperacion(operacion) {
    if (operacion == "sumar") {
        return (a, b) => a + b;
    } else {
        return (a, b) => a - b;
    }
}

const suma = asignarOperacion("sumar");
const resta = asignarOperacion("resta");
console.log("Suma: " + suma(10, 20));
console.log("Resta: " + resta(30, 20)); */


// Ejemplo #3
/* function porCadaUno(arrayDeDatos, funcion) {
    for (const item of arrayDeDatos) {
        funcion(item); //acumular(2) acumular(4) acumular(6)
    }
}

let numeros = [2, 4, 6, 8, 10]; */

//porCadaUno(numeros, alert);

/* let total = 0;

function acumular(valor) {//2 //4 //6
    total += valor; //0+2=2 => 2+4=6 => 6+6=12
}

porCadaUno(numeros, acumular);
console.log(total); */


// Métodos de búsqueda y transformación de Arrays
// const nombres = ["Anita", "Jere", "Jose", "Mati"];
// let numeros = [2, 4, 6, 8, 10];

// Método Foreach (recorre cada uno de los elementos de un array)
/* let total = 0;

nombres.forEach(item => {
    alert(item);
})

numeros.forEach(num => {
    total += num;
});

console.log("Total: " + total); */

// const bebidas = [
//     {id:1, nombre:"Coca Cola", precio:700},
//     {id:2, nombre:"Pepsi", precio:650},
//     {id:3, nombre:"Manaos", precio:350}
// ];

// Método Find (busca 1 elemento y devuelve el primer que encuentra)
/* const producto1 = bebidas.find(item => item.nombre === "Pepsi");
const producto2 = bebidas.find(item => item.nombre === "Pepe");
console.log(producto1);
console.log(producto2); */

// Método Filter (devuelve un array, donde filtra a partir de una función comparadora)
/* const bebidas2 = bebidas.filter(pepe => pepe.nombre === "Coca Cola");
const bebidas3 = bebidas.filter(item => item.precio > 500);
const bebidas4 = bebidas.filter(item => item.precio > 5000);
console.log(bebidas2);
console.log(bebidas3);
console.log(bebidas4); */

// Método Some (devuelve true o false si encuentra un elemento)
/* let resultado = bebidas.some(item => item.precio === 2650);
console.log("Hay bebidas por $650? " + resultado); */

// Método Map (devuelve un nuevo array con elementos cambiados)
/* const bebidas2 = bebidas.map(item => ({nombre:item.nombre, precio:item.precio * 1.5}));
console.log(bebidas2); */

// Método Reduce (devuelve la suma de los elementos de un array)
/* function sumarNumeros() {
    return bebidas.reduce((acumulador, item) => acumulador += item.precio, 0);
}

console.log("El total es: " + sumarNumeros()); */

// Método Sort (ordernar elementos de un Array)
//bebidas.sort((a, b) => a.nombre - b.nombre);
// bebidas.sort((a, b) => a.precio - b.precio);
// console.log(bebidas);