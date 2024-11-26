console.log("Practica 7");

let posicionActualJugador1 = 1;

let posicionActualJugador2 = 1;

function movimientoJugador() {
  document.querySelector("#jugador1").addEventListener("click", () => {
    let movimientoRandom = Math.floor(Math.random() * 6) + 1;
    let posicionAnteriorJugador1 = posicionActualJugador1;
    posicionActualJugador1 += movimientoRandom;

    if (posicionActualJugador1 > 20) {
      posicionActualJugador1 = 20;
    }
    moverFicha("jugador1", posicionAnteriorJugador1, posicionActualJugador1);
    alert("Te has movido " + movimientoRandom);
    checkFichaActual();
    checkEndGame();
  });
  document.querySelector("#jugador2").addEventListener("click", () => {
    let movimientoRandom = Math.floor(Math.random() * 6) + 1;
    let posicionAnteriorJugador2 = posicionActualJugador2;
    posicionActualJugador2 += movimientoRandom;

    if (posicionActualJugador2 > 20) {
      posicionActualJugador2 = 20;
    }
    moverFicha("jugador2", posicionAnteriorJugador2, posicionActualJugador2);
    alert("Te has movido " + movimientoRandom);
    checkFichaActual();
    checkEndGame();
  });
}

function moverFicha(jugador, posicionAnterior, posicionActual) {
  const casillaAnterior = document.querySelector(
    `#c${jugador === "jugador1" ? posicionAnterior : `${posicionAnterior}-2`}`
  );
  casillaAnterior.innerHTML = "";

  const nuevaCasilla = document.querySelector(
    `#c${posicionActual}${jugador === "jugador1" ? "" : "-2"}`
  );
  const fichaActual = document.createElement("div");

  fichaActual.className =
    jugador === "jugador1" ? "ficha jugador1" : "ficha jugador2";

  nuevaCasilla.appendChild(fichaActual);
}

function checkFichaActual() {
  // Hay que hacer que si ambos coinciden en el mismo numero de casilla la ultima en llegar volvera a la casilla 1
  if (posicionActualJugador1 === posicionActualJugador2) {
    const lastArrived =
      posicionActualJugador1 > posicionActualJugador2 ? "jugador2" : "jugador1";

    if (lastArrived === "jugador1") {
      moverFicha("jugador1", posicionActualJugador1, 1);
      posicionActualJugador1 = 1;
    } else {
      moverFicha("jugador2", posicionActualJugador2, 1);
      posicionActualJugador2 = 1;
    }
    alert(lastArrived + " ha vuelto a la casilla de salida!!!");
  }
}
// Ahora hay que hacer otra funcion que diga que cuando se llega a la casilla 20 se acabe el juego

function checkEndGame() {
  if (posicionActualJugador1 === 20 || posicionActualJugador2 === 20) {
    alert("El juego ha terminado!");
    alert("Reiniciando partida");
    // hay que hacer que se cargue la pagina
    window.location.reload();
  }
}

movimientoJugador();
