console.log("Practica 6");

//Crea una funció que rebi el número inicial i final i ens torni un número aleatori entre aquests dos valors.

function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numMin = document.querySelector("#num1").value;
let numMax = document.querySelector("#num2").value;

// Ahora haremos un event listener para que enviar un numero aleatorio entre numero min y numero max

document.querySelector("#buttonSubmit").addEventListener("click", () => {
  let numMin = parseInt(document.querySelector("#num1").value);
  let numMax = parseInt(document.querySelector("#num2").value);

  let numeroAleatorio = generarNumeroAleatorio(numMin, numMax);
  document.querySelector("#numeroAleatorio").textContent = numeroAleatorio;
});

// tenemos que hacer una funcion que con el texto del text area se convierta en mayusculas o minisculas

function parseMayusculas() {
  // Hay que conseguir el id texto y luego capturar el id del boton y que cuando se le de convierta el texto en mayusculas
  let botonMayusculas = document.querySelector("#mayuscula");
  botonMayusculas.addEventListener("click", () => {
    let texto = document.querySelector("#texto").value;
    document.querySelector("#texto").value = texto.toUpperCase();
  });
}
parseMayusculas();

function parseMinusculas() {
  let botonMinusculas = document.querySelector("#minuscula");
  botonMinusculas.addEventListener("click", () => {
    let texto = document.querySelector("#texto").value;
    document.querySelector("#texto").value = texto.toLowerCase();
  });
}

parseMinusculas();

// Hay que hacer cuando busque las coincidencias se muestre de un color distinto

function buscarCoincidencias() {
  let texto = document.querySelector("#texto");
  let inputBuscar = document.querySelector("#inputSearch").value;
  let buttonSubmit = document.querySelector("#buttonSubmit");
  buttonSubmit.addEventListener("click", () => {
    const buscar = inputBuscar.value;
    const contain = texto.innerHTML;

    let newContain = "";
    let textoLength = contain.length;
    let searchLength = buscar.length;
  });
}
