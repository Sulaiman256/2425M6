console.log("Practica 7");

// Practica 7 Atrapame si puedes

// Declaramemos dos variables que son los dos jugadores

let posicionActualJugador = 1;
let posicionActualJugador2 = 1;

function movimientoJugador() {
  // Ahora haremos que atraves del boton saque un numero aleatorio de 1 a 6 y esas seran las casillas que se movera
  document.querySelector("#jugador1").addEventListener("click", () => {
    let movimientoRandom = Math.floor(Math.random() * 6) + 1;
    posicionActualJugador += movimientoRandom;

    // Ahora haremos que cuando llegue a la ultima casilla, vuelva a la primera
    if (posicionActualJugador > 20) {
      posicionActualJugador = 20;
    }
    moverFicha("jugador1", posicionActualJugador);
    alert("Te has movido" + movimientoRandom);
  });
  document.querySelector("#jugador2").addEventListener("click", () => {
    let movimientoRandom = Math.floor(Math.random() * 6) + 1;
    posicionActualJugador2 += movimientoRandom;

    // Ahora haremos que cuando llegue a la ultima casilla, vuelva a la primera
    if (posicionActualJugador2 > 20) {
      posicionActualJugador2 = 20;
    }
    moverFicha("jugador2", posicionActualJugador2);
    alert("Te has movido" + movimientoRandom);
  });
}

// Ahora haremos una funcion que sea para mover fichas

function moverFicha(jugador, posicion) {
  const casillaJugador = document.querySelector(`${jugador}`);
  const casillas = document.querySelectorAll(".casillas");
  casillas.forEach((casilla) => {
    casilla.innerHTML = "";
  });

  const nuevaCasilla = document.querySelector(`c${posicion}`);
  nuevaCasilla.appendChild(casillaJugador).cloneNode(true);
}
movimientoJugador();
