// let productos = [{nombre: "STANDARD GRAPHIC CREW BATWING", precio: 14800, imagen: "https://levisarg.vtexassets.com/arquivos/ids/731207-1200-auto?v=638204490601730000&width=1200&height=auto&aspect=true"}, {nombre: "STANDARD GRAPHIC CREW BATWING", precio: 14800, imagen: "https://levisarg.vtexassets.com/arquivos/ids/731207-1200-auto?v=638204490601730000&width=1200&height=auto&aspect=true"}, {nombre: "STANDARD GRAPHIC CREW BATWING", precio: 14800, imagen: "https://levisarg.vtexassets.com/arquivos/ids/731207-1200-auto?v=638204490601730000&width=1200&height=auto&aspect=true"}
// ]

// for (const producto of productos) {
//     let card = document.createElement("div.col")
//     card.innerHTML = `<div class="card h-25 d-inline-block mx-5" style="width: 10rem;">
//     <img src="${producto.imagen}" class="card-img-top" style="width: 100%; height: 50vh;" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">${producto.nombre}</h5>
//       <p class="card-text">${"$" + producto.precio}</p>
//       <a href="#" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>`
//   document.body.prepend(card)
// }



// let productos2 = [{nombre: "STANDARD GRAPHIC CREW BATWING", precio: 14800, imagen: "https://levisarg.vtexassets.com/arquivos/ids/731207-1200-auto?v=638204490601730000&width=1200&height=auto&aspect=true"}, {nombre: "STANDARD GRAPHIC CREW BATWING", precio: 14800, imagen: "https://levisarg.vtexassets.com/arquivos/ids/731207-1200-auto?v=638204490601730000&width=1200&height=auto&aspect=true"}
// ]
// for (const remeras of productos2) {
//     let card1 = document.createElement("div");
//     card1.innerHTML =`<div class="card" style="width: 10rem;">
//     <img src="${remeras.imagen}" class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">${remeras.nombre}</h5>
//       <p class="card-text">${"$" + remeras.precio}</p>
//       <a href="#" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>`
//   const card1Div = document.getElementById("card1");
//   card1Div.appendChild(card1);
// }

// let productos3 = [{nombre: "STANDARD GRAPHIC CREW BATWING", precio: 14800, imagen: "https://levisarg.vtexassets.com/arquivos/ids/731207-1200-auto?v=638204490601730000&width=1200&height=auto&aspect=true"}, {nombre: "STANDARD GRAPHIC CREW BATWING", precio: 14800, imagen: "https://levisarg.vtexassets.com/arquivos/ids/731207-1200-auto?v=638204490601730000&width=1200&height=auto&aspect=true"}
// ]

// for (const remeras2 of productos3) {
//     let card2 = document.createElement("div");
//     card2.innerHTML = `<div class="card" style="width: 10rem;">
//     <img src="${remeras2.imagen}" class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">${remeras2.nombre}</h5>
//       <p class="card-text">${"$" + remeras2.precio}</p>
//       <a href="#" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>`
//   const card2Div = document.getElementById("card2");
//   card2Div.appendChild(card2)
// }


//Realizar un Render de Productos, donde tenga 3 botones (Todos, Hombres y Mujeres)

// * "Todos" que muestre todos los productos de Hombres y Mujeres
// * "Hombres" debe mostrar únicamente los productos de Hombres
// * "Mujeres" debe mostrar únicamente los productos de Mujeres



let ropas = [
  {gender:"male", tipo:"Ropa interior"},
  {gender:"male", tipo:"Camisa"},
  {gender:"male", tipo:"pantalon"},
  {gender:"female", tipo:"Ropa interior"},
  {gender:"female", tipo:"Camisa"},
  {gender:"female", tipo:"pantalon"}
]

const maleButton = document.querySelector("#Male")
const allButton = document.querySelector("#All")
const femaleButton = document.querySelector("#Female")
const clearButton = document.querySelector("#Clear")

console.log(maleButton)
console.log(allButton)
console.log(femaleButton)


function maleFilter (){
  let maleRender = document.querySelector("#render")
  maleRender.innerHTML= `<div>
</div>`;

  let maleFilter = ropas.filter(genero => genero.gender == "male")
  console.log(maleFilter)

  for (const ropa of maleFilter) {
    let cosasDeHombre = document.createElement("div");
    cosasDeHombre.innerHTML = `<div class="card" style="width: 10rem;">
    <img src="" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${ropa.gender}</h5>
      <p class="card-text">${ropa.tipo}</p>
    </div>
  </div>`
  maleRender.appendChild(cosasDeHombre)
  }
  
  }


function femaleFilter (){
  let femaleRender = document.querySelector("#render")
  let femaleFilter = ropas.filter(genero => genero.gender == "female")
  femaleRender.innerHTML= `<div>
</div>`;

  for (const ropa of femaleFilter) {
    let cosasDeChicas = document.createElement("div");
    cosasDeChicas.innerHTML = `<div class="card" style="width: 10rem;">
    <img src="" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${ropa.gender}</h5>
      <p class="card-text">${ropa.tipo}</p>
    </div>
  </div>`

  femaleRender.appendChild(cosasDeChicas)
  }
  
}


function allFilter (){
  let allRender = document.querySelector("#render")
  allRender.innerHTML= `<div>
  </div>`;
  

  for (const ropa of ropas) {
    let todasLasCosas = document.createElement("div");
    todasLasCosas.innerHTML = `<div class="card" style="width: 10rem;">
    <img src="" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${ropa.gender}</h5>
      <p class="card-text">${ropa.tipo}</p>
    </div>
  </div>`
  allRender.appendChild(todasLasCosas)
}

}


function clear () {
  let clearAll = document.querySelector("#render")
  clearAll.innerHTML =  `<div>
  </div>`;
}


maleButton.onclick = maleFilter
allButton.onclick = allFilter
femaleButton.onclick = femaleFilter
clearButton.onclick = clear







