// Realizar un Render de Productos, donde tenga 3 botones (Todos, Hombres y Mujeres)

// * "Todos" que muestre todos los productos de Hombres y Mujeres
// * "Hombres" debe mostrar únicamente los productos de Hombres
// * "Mujeres" debe mostrar únicamente los productos de Mujeres

// Observacion:
// * Se pueden crear elementos HTML o bien se pueden renderizar utlizando contenido HTML.

let remeras = [
    {genero: "hombre", color:"verde", imagen:"https://www.cottonclub.com.ar/pub/media/catalog/product/cache/65e2670acbf1788249a95924f3789a80/0/a/0a1a2803-5a72-4a5a-82d3-a2e89d7069a3.jpg" },
    {genero: "hombre", color:"rosa", imagen:"https://ladooscurojeans.com/wp-content/uploads/1970/01/49.png" },
    {genero: "hombre", color:"azul", imagen:"https://www.clicksport.com.ar/3364-large_default/adidas-remera-m-c-running-hombre-25-7-tee-run-azul.jpg" },
    {genero: "hombre", color:"roja", imagen:"https://www.blowland.com.ar/1115-large_default/converse-remera-lifestyle-hombre-rojo.jpg" },
    {genero: "hombre", color:"amarilla", imagen:"https://megasports.vteximg.com.br/arquivos/ids/206667-400-400/02164549001_0.jpg?v=637726723238130000" },
    {genero: "hombre", color:"negra", imagen:"https://www.cottonclub.com.ar/pub/media/catalog/product/cache/65e2670acbf1788249a95924f3789a80/1/1/1100_negra_copia.jpg" },

    {genero: "mujer", color:"verde", imagen:"https://sportotalar.vtexassets.com/arquivos/ids/323089-800-450?v=637819081550030000&width=800&height=450&aspect=true" },
    {genero: "mujer", color:"rosa", imagen:"https://http2.mlstatic.com/D_NQ_NP_891009-MLA51149402345_082022-O.webp" },
    {genero: "mujer", color:"azul", imagen:"https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/r/e/remera-puma-entrenamiento-favourite-cat-mujer-azul-640020520260012-1.jpg" },
    {genero: "mujer", color:"roja", imagen:"https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/r/e/remera-lacoste-lisa-mujer-roja-24823028-40002f546321240-1.jpg" },
    {genero: "mujer", color:"amarilla", imagen:"https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/r/e/remera-nike-entrenamiento-dri-fit-script-mujer-amarilla-510020dn6685752-1.jpg" },
    {genero: "mujer", color:"negra", imagen:"https://i.pinimg.com/originals/26/3b/e4/263be46f7032008111fce7e60434ad56.webp" }
]
//Secciones por ID
let seccionRemeras = document.querySelector("#renderRemeras");

//Render que muestra el contenido
function render (renderRemeras){
    seccionRemeras.innerHTML= ``
    for (const producto of renderRemeras) {
        const cards = document.createElement("div");
        cards.className = "card col-md-4 m-2";
        cards.style = "width: 18rem;"
        cards.innerHTML = `
                            <img src="${producto.imagen}" class="card-img-top" alt="...">
                            <div class="card-body">
                        <h5 class="card-title">Remera ${producto.genero}</h5>
                            </div>
                                `
      seccionRemeras.appendChild(cards)
    }
}
render(remeras)




const generoSelect = document.getElementById('Genero');
const colorSelect = document.getElementById('Color');

generoSelect.addEventListener('change', filtrarRemeras);
colorSelect.addEventListener('change', filtrarRemeras);

function filtrarRemeras() {
    const generoSeleccionado = generoSelect.value;
    const colorSeleccionado = colorSelect.value;
    if(generoSeleccionado === "Genero" && colorSeleccionado === "Color"){
      render(remeras)
    }else{
      if(generoSeleccionado === "Genero"){
        const filtroColor = remeras.filter(remera => remera.color === colorSeleccionado)
        render(filtroColor)
      }else if (colorSeleccionado === "Color"){
        const filtroGenero = remeras.filter(remera => remera.genero === generoSeleccionado)
        render(filtroGenero)
      }else{
        console.log("Selecion completa")
        const filtro = remeras.filter(remera => remera.genero === generoSeleccionado && remera.color === colorSeleccionado);
        console.log(filtro)
        render(filtro)
    }
  }
}


