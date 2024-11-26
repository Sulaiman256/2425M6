console.log("Practica 6");

//Crea una funció que rebi el número inicial i final i ens torni un número aleatori entre aquests dos valors.

//Ejercicio 1 - Aleatorio

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

// Ejercicio 2 - String

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

function search() {
  document
    .querySelector("#submitButton")
    .addEventListener("click", function () {
      let texto = document.querySelector("#texto").value;
      let inputBuscar = document.querySelector("#inputSearch").value;
      let text = document.querySelector("#textoNuevo");

      if (inputBuscar === "") return;

      const palabras = texto.split(" ");
      let nuevoTexto = "";
      let coincidencias = 0;

      for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].includes(inputBuscar)) {
          coincidencias++;
          nuevoTexto += `<span style="color: red;">${palabras[i]} </span>`;
        } else {
          nuevoTexto += palabras[i] = " ";
        }
      }

      text.innerHTML = nuevoTexto;
      document.querySelector(
        "#coincidencias"
      ).textContent = `Coincidencias : ${coincidencias}`;

      let totalWords = calculateWords(texto);
      document.querySelector("#calculateWords").innerHTML = totalWords;
      resumen(texto);
    });
}

// Funcion para contar palabras

function calculateWords(texto) {
  let palabras = texto.trim().split(" ");
  return palabras.length;
}

// Ahora haremos una funcion para el resumen para ello solo necesitamos las 10 primeras palabras del texto

function resumen(texto) {
  const resumen = texto.length > 10 ? texto.slice(0, 10) : texto;
  document.querySelector("#resumen").innerHTML = resumen;
}
search();

// Ejercicio 3 - Date

// funcion para que a traves del input y le demos al boton convertir nombre se ponga con guion no con espacios

document.querySelector("#ConvertToName").addEventListener("click", () => {
  let nombre = document.querySelector("#name").value;
  let nombreConGuiones = nombre.replaceAll(" ", "-");
  document.querySelector("#textName").innerHTML = nombreConGuiones;
});

document.querySelector("#ConvertToDate").addEventListener("click", () => {
  let nombre = document.querySelector("#date").value;
  let nombreConGuiones = nombre.replaceAll("/", "-");
  document.querySelector("#textDate").innerHTML = nombreConGuiones;
});

// Ejercicio 4 - Generador de contraseñas

// Crear una función que genere una contraseña aleatoria

function generarContraseña() {
  let caracteres =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let contraseña = "";
  for (let i = 0; i < 10; i++) {
    contraseña += caracteres.charAt(
      Math.floor(Math.random() * caracteres.length)
    );
  }
  return contraseña;
}

document.querySelector("#ButtonPassword").addEventListener("click", () => {
  let contraseñaGenerada = generarContraseña();
  document.querySelector("#pass").value = contraseñaGenerada;
});

// Ejercicio 5 - Generador de emoticonos

// Crear una función que genere un emoji aleatorio

function generarEmoticonos() {
  let emoticonos = ["😀", "😂", "😍", "🤔", "😎", "😭", "😡", "👍", "🙌", "🎉"];
  let numeroAleatorio = Math.floor(Math.random() * emoticonos.length);
  return emoticonos[numeroAleatorio];
}

document.querySelector("#ButtonEmoticon").addEventListener("click", () => {
  let emoticonoGenerado = generarEmoticonos();
  document.querySelector("#Emoticon").innerHTML = emoticonoGenerado;
});
