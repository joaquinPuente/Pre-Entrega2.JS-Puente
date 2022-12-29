let emailF = document.querySelector("#exampleInputEmail1");
let nypF = document.querySelector("#nyP");
let modeloF = document.querySelector("#modeloA");
let precioF = document.querySelector("#precioA");
let botonS = document.querySelector(".Enviar")
let info = document.querySelector(".info")

let buscar = document.querySelector("#form1")
let btnB = document.querySelector(".btnBuscar")
let infoB = document.querySelector(".infoB")

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


let carrito = []

let btn1 = document.querySelector(".btn1")
btn1.addEventListener("click", () => {
    console.log(`apretaste btn1`)
    
    carrito.push(3410000)
})


let btn2 = document.querySelector(".btn2")
btn2.addEventListener("click", () => {
    console.log(`apretaste btn2`)
    
    carrito.push(3825300)
})

let btn3 = document.querySelector(".btn3")
btn3.addEventListener("click", () => {
    console.log(`apretaste btn3`)
   
    carrito.push(3825300)
})

console.log(carrito)

let btnC = document.querySelector(".btnC")
btnC.addEventListener ("click", () => {
    let suma = 0;
    for (let i = 0 ; i < carrito.length ; i++) {
        suma += carrito[i];
    }
    console.log(suma)
    info.innerHTML= `<div class="alert alert-warning" role="alert">
    <h5> Muchas gracias por su compra! Su monto a pagar es $ ${suma}</h5></div>
    `;
})

let btnBorrarCompra = document.querySelector (".btnCb")
btnBorrarCompra.addEventListener ("click", ()=> {
    location.reload();
})

function Formulario ( email, nyp, modelo, precio ) {
    this.email = email;
    this.nyp = nyp;
    this.modelo = modelo;
    this.precio = precio;
}

let btnR = document.querySelector(".btnrefresh")
btnR.addEventListener ("click", ()=> {
    console.log(`seleccione borrar`)
})

