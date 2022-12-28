let emailF = document.querySelector("#exampleInputEmail1");
let nypF = document.querySelector("#nyP");
let modeloF = document.querySelector("#modeloA");
let precioF = document.querySelector("#precioA");
let botonS = document.querySelector(".Enviar")

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








/*alert ("Bienvenidos a la compra de tu proximo automotor!")

alert ("Indique en el siguiente cartel el auto que le interesa")

let auto = prompt(`Elija su proximo automovil:
1: Citroen Nuevo C3
2: Fiat Cronos
3: Citroen Berlingo Furgón 
4: Ingresar como administrador
5: Buscar
`)                       

switch (auto) {
    case "1":
        alert ("el valor del Citroen Nuevo C3 es de $ 3.410.000")
        let opcion1 = prompt(`Eliga su plan de cuotas es:
        1: En un pago sin intereses con transferencia incluida.
        2: 48 cuotas con intereses del 8 %
        3: 96 cuotas con intereses del 12 %
        4: 200 cuotas con intereses del 17 %`
        )
        if (opcion1 < 1 || opcion1 > 4) {
            alert (`El valor es invalido, se va a refrescar la pagina.`)
            location.reload ();
        }
        else {
            alert (`Muchas gracias por su compra!`)
        }
        break;
    case "2":
        alert ("el valor del Fiat Cronos es de $ 3.627.600")
        let opcion2 = prompt(`Eliga su plan de cuotas es:
        1: En un pago sin intereses con transferencia incluida.
        2: 48 cuotas con intereses del 3 %
        3: 96 cuotas con intereses del 8 %
        4: 200 cuotas con intereses del 12 %`
        )
        if (opcion1 < 1 || opcion1 > 4) {
            alert (`El valor es invalido, se va a refrescar la pagina.`)
            location.reload ();            
        }
        else {
            alert (`Muchas gracias por su compra!`)
        }
        break;
    case "3":
        alert ("el valor del Citroen Berlingo Furgón es de $ 3.825.300")
        let opcion3 = prompt(`Eliga su plan de cuotas es:
        1: En un pago sin intereses con transferencia incluida.
        2: 48 cuotas con intereses del 5 %
        3: 96 cuotas con intereses del 10 %
        4: 200 cuotas con intereses del 15 %`
        )
        if (opcion1 < 1 || opcion1 > 4) {
            alert (`El valor es invalido, se va a refrescar la pagina.`)
            location.reload ();
        }
        else {
            alert (`Muchas gracias por su compra!`)
        }
        
        break;

    case "4":
        alert(`Ingresaste como administrador! Vas a poder agregar un producto`)
        function Auto (modelo, precio, disponibilidad) {    
            this.modelo = modelo;    
            this.precio   = precio;    
            this.disponibilidad  = disponibilidad;
        }
        
        const Auto1 = new Auto (
            prompt(`Ingrese modelo`, ),
            prompt(`ingrese precio`,),
            prompt(`ingrese disponibilidad`,)    
        );

        alert (`Perfecto! A continuacion le mostraremos el producto agregado`)
        alert(JSON.stringify(Auto1, null, 4));
        break;

    case "5":
        const compra = [
            { nombre: "Fiat cronos", precio: 3000000  },
            { nombre: "Citroen Nuevo C3", precio: 3410000 },
            { nombre: "Citroen Berlingo Furgón", precio: 3825300 },
          ];
        let buscar = prompt(`Ingrese el producto a buscar`, )
        const resultado = compra.filter ( (el) => el.nombre.includes(buscar)) 
        alert(JSON.stringify(resultado, null, 4))
        break;


    default:
        alert ("El valor ingresado no es valido")
        break;
}
*/


/*

//FUNCIONES A USAR!




//Funcion para agregar productos/autos.
function Auto ( modelo, precio, disponible ) {
    this.modelo = modelo;
    this.precio = precio;
    this.disponible = disponible;
}
const auto1 = new Auto ("Fiat cronos", 3627600, true );
const auto2 = new Auto ("Citroen Nuevo C3", 3410000 , true );
const auto3 = new Auto ("Citroen Berlingo Furgón", 3825300, true);
console.log (auto1);
console.log (auto2);
console.log (auto3);




//Filtro de busqueda araves de un arrays de productos.
const compra = [
    { nombre: "Fiat cronos", precio: 3000000  },
    { nombre: "Citroen Nuevo C3", precio: 3410000 },
    { nombre: "Citroen Berlingo Furgón", precio: 3825300 },
  ];
const resultado = compra.filter ( (el) => el.nombre.includes('troen') )
console.log (resultado)




//Ingreso de datos de productos.
function Auto (modelo, precio, disponibilidad) {    
    this.modelo = modelo;    
    this.precio   = precio;    
    this.disponibilidad  = disponibilidad;
}
const Auto1 = new Auto (
    prompt(`Ingrese modelo`, ),
    prompt(`ingrese precio`,),
    prompt(`ingrese disponibilidad`,)    
);
console.log(Auto1)
alert( `Su producto ingresado es:`  ,JSON.stringify(Auto1, null, 4));




//Almacenar y concatenar diferentes arrays.
const AutoN1 = [
    { modelo: "Toyota Corolla" , precio: 3050 , disponibilidad:true,}
]

const AutoN2 = [
    { modelo: "Toyota Yaris" , precio: 300 , disponibilidad:true ,}
]

console.log(AutoN1);
console.log(AutoN2);

BdAutos =AutoN1.concat(AutoN2);
console.log(BdAutos);

*/
