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
function render (renderProductos, seccion){
    seccion.innerHTML= ``
    for (const producto of renderProductos) {
        const cards = document.createElement("div");
        cards.className = "card col-md-4 m-2";
        cards.style = "width: 18rem;"
        cards.innerHTML = `
                            <img src="${producto.imagen}" class="card-img-top" alt="...">
                            <div class="card-body">
                        <h5 class="card-title">Remera ${producto.genero}</h5>
                            </div>
                                `
      seccion.appendChild(cards)
    }
}
render(remeras, seccionRemeras)



// Selecciono el select por ID
const generoSelect = document.getElementById('Genero');
const colorSelect = document.getElementById('Color');

//Agrego el evento a los select
generoSelect.addEventListener('change', filtrarRemeras);
colorSelect.addEventListener('change', filtrarRemeras);

function filtrarRemeras() {
    const generoSeleccionado = generoSelect.value;//leo los valores del campo seleccionado, es el value
    const colorSeleccionado = colorSelect.value;
    if(generoSeleccionado === "Genero" && colorSeleccionado === "Color"){
      render(remeras,seccionRemeras )
    }else{
      if(generoSeleccionado === "Genero"){
        const filtroColor = remeras.filter(remera => remera.color === colorSeleccionado)
        render(filtroColor, seccionRemeras)
      }else if (colorSeleccionado === "Color"){
        const filtroGenero = remeras.filter(remera => remera.genero === generoSeleccionado)
        render(filtroGenero, seccionRemeras)
      }else{
        console.log("Selecion completa")
        const filtro = remeras.filter(remera => remera.genero === generoSeleccionado && remera.color === colorSeleccionado);
        console.log(filtro)
        render(filtro, seccionRemeras)
    }
  }
}

//******************************************************************************** */
//Pantalones

let pantalones = [
  {genero:"hombre",talle: 40, tipo: "jean", imagen:"https://taverniti.vtexassets.com/arquivos/ids/243727/11616_525X1.jpg?v=637938293706800000"},
  {genero:"hombre",talle: 42, tipo: "jean", imagen:"https://taverniti.vtexassets.com/arquivos/ids/243727/11616_525X1.jpg?v=637938293706800000"},
  {genero:"hombre",talle: 44, tipo: "jean", imagen:"https://taverniti.vtexassets.com/arquivos/ids/243727/11616_525X1.jpg?v=637938293706800000"},
  {genero:"hombre",talle: 40, tipo: "gabardina", imagen:"https://www.toche.com.ar/wp-content/uploads/2022/09/011968_hombre_hueso_2-540x810.jpg"},
  {genero:"hombre",talle: 42, tipo: "gabardina", imagen:"https://www.toche.com.ar/wp-content/uploads/2022/09/011968_hombre_hueso_2-540x810.jpg"},
  {genero:"hombre",talle: 44, tipo: "gabardina", imagen:"https://www.toche.com.ar/wp-content/uploads/2022/09/011968_hombre_hueso_2-540x810.jpg"},
  {genero:"mujer",talle: 35, tipo: "jean", imagen:"https://pieers.com/media/catalog/product/cache/8f1a5ad5c9df6a42af6d3684678433cf/p/p/ppr07ry0fwb_1.jpg"},
  {genero:"mujer",talle: 36, tipo: "jean", imagen:"https://pieers.com/media/catalog/product/cache/8f1a5ad5c9df6a42af6d3684678433cf/p/p/ppr07ry0fwb_1.jpg"},
  {genero:"mujer",talle: 37, tipo: "jean", imagen:"https://pieers.com/media/catalog/product/cache/8f1a5ad5c9df6a42af6d3684678433cf/p/p/ppr07ry0fwb_1.jpg"},
  {genero:"mujer",talle: 38, tipo: "jean", imagen:"https://pieers.com/media/catalog/product/cache/8f1a5ad5c9df6a42af6d3684678433cf/p/p/ppr07ry0fwb_1.jpg"},
  {genero:"mujer",talle: 39, tipo: "jean", imagen:"https://pieers.com/media/catalog/product/cache/8f1a5ad5c9df6a42af6d3684678433cf/p/p/ppr07ry0fwb_1.jpg"},
  {genero:"mujer",talle: 40, tipo: "jean", imagen:"https://pieers.com/media/catalog/product/cache/8f1a5ad5c9df6a42af6d3684678433cf/p/p/ppr07ry0fwb_1.jpg"},
  {genero:"mujer",talle: 38, tipo: "vestir", imagen:"https://i5.walmartimages.com.mx/mg/gm/3pp/asr/e17a12e4-67fb-4b2d-b95c-a0ce7d726199.a824fdb33848fa08f926d7088039ba1e.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"},
  {genero:"mujer",talle: 39, tipo: "vestir", imagen:"https://i5.walmartimages.com.mx/mg/gm/3pp/asr/e17a12e4-67fb-4b2d-b95c-a0ce7d726199.a824fdb33848fa08f926d7088039ba1e.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"},
  {genero:"mujer",talle: 40, tipo: "vestir", imagen:"https://i5.walmartimages.com.mx/mg/gm/3pp/asr/e17a12e4-67fb-4b2d-b95c-a0ce7d726199.a824fdb33848fa08f926d7088039ba1e.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"}
]

//Secciones por ID
let seccionPantalones = document.querySelector("#renderPantalones");

// Render pantalones


//Render que muestra el contenido hacer una funcion de render de producots y le paso el 
// function renderPantalones (renderPantalon){
//   seccionPantalones.innerHTML= ``
//   for (const producto of renderPantalon) {
//       const cards = document.createElement("div");
//       cards.className = "card col-md-4 m-2";
//       cards.style = "width: 18rem;"
//       cards.innerHTML = `
//                           <img src="${producto.imagen}" class="card-img-top" alt="...">
//                           <div class="card-body">
//                       <h5 class="card-title">Pantalon ${producto.genero}</h5>
//                           </div>
//                               `
//     seccionPantalones.appendChild(cards)
//   }
// }
render(pantalones, seccionPantalones)

// Selecciono por select ID

const generoSeleccionadoPantalon = document.querySelector("#generoPantalon")
const tallesPantalon = document.querySelector("#tallesPantalon")
const tipoPantalon = document.querySelector("#tipoPantalon")

//agrego eventos

generoSeleccionadoPantalon.addEventListener('change', hideTalle)

// filtro de talles

function talles(arrayFiltradoGenero){
  tallesPantalon.innerHTML= ``
  
  for (const talles of arrayFiltradoGenero) {
        
    let option = document.createElement("option")
    option.value = talles.talle
    option.innerHTML = talles.talle
    tallesPantalon.appendChild(option)

  }
}


function hideTalle(){
  console.log("entro a la funcion")
  console.log(generoSeleccionadoPantalon.value)
  if(generoSeleccionadoPantalon.value !== "genero"){
    if(generoSeleccionadoPantalon.value === "hombre"){
      console.log("Filtro hombre")
      tallesPantalon.classList.remove("hide")
      const pantalonHombre = pantalones.filter(pantalonesHombre => pantalonesHombre.genero === "hombre")
      render(pantalonHombre, seccionPantalones)

      // Terminar///
      talles(pantalonHombre)
      
      

    }else if ( generoSeleccionadoPantalon.value === "mujer"){
      console.log("filtro mujer")

      tallesPantalon.classList.remove("hide")
      const pantalonMujer = pantalones.filter(pantalonesMujer => pantalonesMujer.genero === "mujer")
      render(pantalonMujer, seccionPantalones)
      talles(pantalonMujer)

    }

    console.log("entro al if")
  }else{
    tallesPantalon.classList.toggle("hide")
    render(pantalones, seccionPantalones)
    console.log("Entro al else de genero")
  }
}

