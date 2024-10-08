let posicionActualJugador1 = 0;
let posicionActualJugador2 = 0;

let position = [
  { left: "15%", top: "40%", value: 0 },
  { left: "30%", top: "35%", value: 1 },
  { left: "15%", top: "30%", value: 2 },
  { left: "15%", top: "25%", value: 3 },
  { left: "15%", top: "20%", value: 4 },
  { left: "15%", top: "15%", value: 5 },
  { left: "20%", top: "15%", value: 6 },
  { left: "25%", top: "15%", value: 7 },
  { left: "30%", top: "15%", value: 8 },
];

function playerMove() {
  document.querySelector("#lanzarDado1").addEventListener("click", () => {
    let movimientoRandom = Math.floor(Math.random() * 3) + 1;
    let posicionAnteriorJugador1 = posicionActualJugador1;

    // Actualizamos la posición actual del jugador 1
    posicionActualJugador1 += movimientoRandom;

    // Control de límites
    if (posicionActualJugador1 >= position.length) {
      posicionActualJugador1 = position.length - 1; // No exceder el límite
    }

    alert("Te has movido " + movimientoRandom);
    console.log(
      "Jugador 1 estaba en la casilla " +
        posicionAnteriorJugador1 +
        " y ahora está en la casilla " +
        posicionActualJugador1
    );
    moverFicha(
      "fichaJugador1",
      posicionAnteriorJugador1,
      posicionActualJugador1
    );
  });

  document.querySelector("#lanzarDado2").addEventListener("click", () => {
    let movimientoRandom = Math.floor(Math.random() * 6) + 1;
    let posicionAnteriorJugador2 = posicionActualJugador2;

    posicionActualJugador2 += movimientoRandom;

    if (posicionActualJugador2 >= position.length) {
      posicionActualJugador2 = position.length - 1;
    }

    alert("Te has movido " + movimientoRandom);
    console.log(
      "Jugador 2 estaba en la casilla " +
        posicionAnteriorJugador2 +
        " y ahora está en la casilla " +
        posicionActualJugador2
    );
    moverFicha(
      "fichaJugador2",
      posicionAnteriorJugador2,
      posicionActualJugador2
    );
  });
}

function moverFicha(idFicha, posicionAnterior, posicionActual) {
  let fichaActual = document.querySelector(`#${idFicha}`);

  if (fichaActual) {
    const tablero = document.querySelector(".tablero");
    const tableroRect = tablero.getBoundingClientRect();

    const nuevaPosicion = position[posicionActual];

    const left =
      tableroRect.left +
      (parseFloat(nuevaPosicion.left) / 100) * tableroRect.width;
    const top =
      tableroRect.top +
      (parseFloat(nuevaPosicion.top) / 100) * tableroRect.height;

    fichaActual.style.transition = "left 0.5s, top 0.5s";
    fichaActual.style.left = `${left}px`;
    fichaActual.style.top = `${top}px`;

    if (position[posicionActual].value === Math.floor(Math.random() * 6)) {
      console.log("Practica 7.2");
    }
  } else {
    console.error("Ficha no encontrada: " + idFicha);
  }
}

playerMove();
