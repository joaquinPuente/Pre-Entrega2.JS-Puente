const stockProductos = [
    {id:1, img:"./img/fiat-cronos.jpg" , Modelo: "Fiat Cronos", Desc:"El auto perfecto para ciudades", Precio: 3627600 },
    {id:2, img: "./img/citroen-c4.jfif", Modelo: "Citroen C4 Nuevo", Desc:"Auto para quien busca confort", Precio: 3410000 },
    {id:3, img: "./img/citroen-berlingo.jpg", Modelo:"Citroen Berlingo", Desc:"Furgoneta perfecta para fletes", Precio: 3825300 },
    {id:4, img: "./img/gol-trend.jpg" ,Modelo: "Volskwagen Gol Trend", Desc:"La mejor opcion como primer auto", Precio: 3600000 }
]



let emailF = document.querySelector("#exampleInputEmail1");
let nypF = document.querySelector("#nyP");
let modeloF = document.querySelector("#modeloA");
let precioF = document.querySelector("#precioA");
let botonS = document.querySelector(".Enviar")
let info = document.querySelector(".info")
let carrito = []
let buscar = document.querySelector("#form1")
let btnB = document.querySelector(".btnBuscar")
let infoB = document.querySelector(".infoB")

let contenedor = document.querySelector(".cartas")

stockProductos.forEach((autos) => {
    const { id, img, Modelo, Desc, Precio} = autos
    contenedor.innerHTML += `
    <div class="card" style="width: 18rem;">
            <img src="${img}" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${Modelo}</h5> 
              <p class="card-text">${Desc}</p>
              <p class="card-text">$${Precio}</p>             
              <button onclick="agregarCarrito(${id})" class="btn btn-primary btn1">Agregar al carrito.</button>
            </div>
        </div>
    `
})

function agregarCarrito (id) {
    const item = stockProductos.find((autos) => autos.id === id)
    carrito.push(item)
    console.log(carrito)
}
























//Formulario
emailF.addEventListener("input", function () {
      console.log(emailF.value)  
});

nypF.addEventListener("input", function () {
      console.log (nypF.value)  
});

modeloF.addEventListener("input", function () {
    console.log (modeloF.value)  
});

precioF.addEventListener("input", function () {
    console.log (precioF.value)  
});

botonS.onclick = function () {
    alert(`Ya recibimos tu formulario, dentro de 3 dias habiles nos estaremos contactando`);
    let form = new Formulario (emailF.value, nypF.value, modeloF.value, precioF.value);
    const aJson = JSON.stringify(form);
    localStorage.setItem("Formulario de contacto", aJson);
}
function Formulario ( email, nyp, modelo, precio ) {
    this.email = email;
    this.nyp = nyp;
    this.modelo = modelo;
    this.precio = precio;
}

//Funcion para Buscar!!!

buscar.addEventListener("input", function () {
    artBuscado = buscar
    console.log(artBuscado.value)
})

btnB.addEventListener("click", function () { 
        const compra = [
            { nombre: "Fiat cronos", precio: 3627600 },
            { nombre: "Citroen Nuevo C3", precio: 3410000 },
            { nombre: "Citroen Berlingo Furgón", precio: 3825300 },
        ];
        const resultado = compra.filter((el) => el.nombre.includes(artBuscado.value));
        console.log(resultado);
        infoB.innerHTML= `<div class="alert alert-warning" role="alert">
    <h5>El resultado de su busqueda es ${resultado}</h5></div>
    `;
})