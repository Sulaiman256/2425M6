console.log("practica 7.2");

// Variables para las posiciones de las fichas
let posiciones = [
  { top: "450px", left: "120px" }, // Casilla 0
  { top: "400px", left: "120px" }, // Casilla 1
  { top: "325px", left: "120px" }, // Casilla 2
  { top: "265px", left: "130px" }, // Casilla 3
  { top: "220px", left: "130px" }, // Casilla 4
  { top: "120px", left: "150px" }, // Casilla 5
  { top: "120px", left: "200px" }, // Casilla 6
  // ... Agrega más posiciones según las casillas del tablero
];

// Inicialización de la posición de los jugadores
let posicionJugador1 = 0; // Índice de la casilla
let posicionJugador2 = 0; // Índice de la casilla

const dado1 = document.getElementById("dado1");
const dado2 = document.getElementById("dado2");
const ficha1 = document.getElementById("ficha1");
const ficha2 = document.getElementById("ficha2");

// Función para generar un número aleatorio entre 1 y 6
function tirarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

// Función para mover una ficha
function moverFicha(jugador) {
  const pasos = tirarDado(); // Número de casillas que moverá
  alert(`Jugador ${jugador} ha sacado un ${pasos}`);

  if (jugador === 1) {
    posicionJugador1 += pasos; // Mueve al jugador 1
    if (posicionJugador1 >= posiciones.length) {
      alert("Jugador 1 ha llegado al final!");
      return; // Termina el juego
    }
    ficha1.style.top = `${posiciones[posicionJugador1].top}px`;
    ficha1.style.left = `${posiciones[posicionJugador1].left}px`;
  } else {
    posicionJugador2 += pasos; // Mueve al jugador 2
    if (posicionJugador2 >= posiciones.length) {
      alert("Jugador 2 ha llegado al final!");
      return; // Termina el juego
    }
    ficha2.style.top = `${posiciones[posicionJugador2].top}px`;
    ficha2.style.left = `${posiciones[posicionJugador2].left}px`;
  }
}

// Eventos para los botones de dado
dado1.addEventListener("click", () => moverFicha(1));
dado2.addEventListener("click", () => moverFicha(2));
