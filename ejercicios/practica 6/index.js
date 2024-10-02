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
