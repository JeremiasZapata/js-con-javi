
let tabla = "";
let numTabla=0;
i=0;
numTabla= parseInt(prompt("Ingrese la tabla que quiere visializar"));

for(i=1;i<=10;i++){
    let resultado = i*numTabla;
    //console.log(i + "x" + numTabla + "=" + resultado);
    tabla += i + "x" + numTabla + "=" + resultado + "\n";
}
alert(tabla);


