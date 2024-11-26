console.log("practica 7.2");

const preguntas = [
  {
    question: "Cual es el planeta mas cercano al sol?",
    answers: ["Venus", "Marte", "Mercurio", "Jupiter"],
    correctAnswer: "Mercurio",
  },
  {
    question: "Quien pinto la Mona Lisa?",
    answers: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "Cual es el rio mas largo del mundo?",
    answers: ["Nilo", "Amazonas", "Yangtse", "Misisipi"],
    correctAnswer: "Nilo",
  },
  {
    question: "Cual es el elemento quimico con simbolo 'O'?",
    answers: ["Oxigeno", "Oro", "Osmio", "Organeson"],
    correctAnswer: "Oxigeno",
  },
  {
    question: "En que continente se encuentra Egipto?",
    answers: ["Europa", "Africa", "Asia", "Oceania"],
    correctAnswer: "Africa",
  },
  {
    question: "Cual es el animal terrestre mas rapido?",
    answers: ["Leon", "Tigre", "Guepardo", "Caballo"],
    correctAnswer: "Guepardo",
  },
  {
    question: "Que ano comenzo la Primera Guerra Mundial?",
    answers: ["1914", "1918", "1939", "1945"],
    correctAnswer: "1914",
  },
  {
    question: "Cual es el pais mas grande del mundo por area?",
    answers: ["China", "Rusia", "Canada", "Estados Unidos"],
    correctAnswer: "Rusia",
  },
  {
    question: "Quien desarrollo la teoria de la relatividad?",
    answers: [
      "Isaac Newton",
      "Albert Einstein",
      "Nikola Tesla",
      "Stephen Hawking",
    ],
    correctAnswer: "Albert Einstein",
  },
  {
    question: "Cual es el idioma mas hablado en el mundo?",
    answers: ["Espanol", "Ingles", "Mandarin", "Hindi"],
    correctAnswer: "Mandarin",
  },
  {
    question: "Cual es el oceano mas grande del mundo?",
    answers: ["Atlantico", "Pacifico", "Indico", "Artico"],
    correctAnswer: "Pacifico",
  },
  {
    question: "Quien escribio 'Cien anos de soledad'?",
    answers: [
      "Gabriel Garcia Marquez",
      "Jorge Luis Borges",
      "Mario Vargas Llosa",
      "Pablo Neruda",
    ],
    correctAnswer: "Gabriel Garcia Marquez",
  },
  {
    question: "En que año llego el hombre a la Luna?",
    answers: ["1965", "1969", "1972", "1975"],
    correctAnswer: "1969",
  },
  {
    question: "Cual es el pais con mayor poblacion del mundo?",
    answers: ["India", "Estados Unidos", "China", "Rusia"],
    correctAnswer: "China",
  },
  {
    question: "Cuantos huesos tiene el cuerpo humano?",
    answers: ["206", "210", "198", "220"],
    correctAnswer: "206",
  },
  {
    question: "Cual es el metal mas ligero?",
    answers: ["Oro", "Plomo", "Litio", "Aluminio"],
    correctAnswer: "Litio",
  },
  {
    question: "Cual es la capital de Japon?",
    answers: ["Osaka", "Tokio", "Kioto", "Hiroshima"],
    correctAnswer: "Tokio",
  },
  {
    question: "Cual es el deporte mas popular en el mundo?",
    answers: ["Baloncesto", "Tenis", "Futbol", "Cricket"],
    correctAnswer: "Futbol",
  },
  {
    question: "Cual es el desierto mas grande del mundo?",
    answers: ["Sahara", "Gobi", "Atacama", "Kalahari"],
    correctAnswer: "Sahara",
  },
  {
    question: "Que vitamina es esencial para la salud de los huesos?",
    answers: ["Vitamina A", "Vitamina C", "Vitamina D", "Vitamina E"],
    correctAnswer: "Vitamina D",
  },
  {
    question: "Cual es el unico mamifero que puede volar?",
    answers: ["Murcielago", "Aguila", "Pinguino", "Canguro"],
    correctAnswer: "Murcielago",
  },
  {
    question: "Que pais tiene mas islas en el mundo?",
    answers: ["Indonesia", "Suecia", "Filipinas", "Noruega"],
    correctAnswer: "Suecia",
  },
  {
    question: "En que pais se invento el futbol?",
    answers: ["Brasil", "España", "Reino Unido", "Italia"],
    correctAnswer: "Reino Unido",
  },
  {
    question: "Cual es el continente mas pequeño en area?",
    answers: ["Europa", "Antartida", "Oceania", "America del Sur"],
    correctAnswer: "Oceania",
  },
  {
    question: "Que color tiene el sol?",
    answers: ["Rojo", "Amarillo", "Blanco", "Naranja"],
    correctAnswer: "Blanco",
  },
  {
    question: "Que pais tiene el himno nacional mas largo?",
    answers: ["India", "Japon", "Grecia", "España"],
    correctAnswer: "Grecia",
  },
  {
    question: "Cual es el unico planeta con anillos visibles?",
    answers: ["Venus", "Jupiter", "Neptuno", "Saturno"],
    correctAnswer: "Saturno",
  },
  {
    question: "Cual es la torre mas alta del mundo?",
    answers: ["Torre Eiffel", "Burj Khalifa", "Empire State", "Taipei 101"],
    correctAnswer: "Burj Khalifa",
  },
];

let posiciones = [
  { top: "450px", left: "120px" }, // Casilla 0
  { top: "400px", left: "120px" }, // Casilla 1
  { top: "325px", left: "120px" }, // Casilla 2
  { top: "265px", left: "130px" }, // Casilla 3
  { top: "220px", left: "130px" }, // Casilla 4
  { top: "120px", left: "150px" }, // Casilla 5
  { top: "120px", left: "200px" }, // Casilla 6
  { top: "120px", left: "260px" }, // Casilla 7
  { top: "120px", left: "300px" }, // Casilla 8
  { top: "120px", left: "355px" }, // Casilla 9
  { top: "120px", left: "400px" }, // Casilla 10
  { top: "120px", left: "460px" }, // Casilla 11
  { top: "200px", left: "460px" }, // Casilla 12
  { top: "260px", left: "460px" }, // Casilla 13
  { top: "350px", left: "460px" }, // Casilla 14
  { top: "450px", left: "460px" }, // Casilla 15
  { top: "450px", left: "400px" }, // Casilla 16
  { top: "450px", left: "360px" }, // Casilla 17
  { top: "450px", left: "280px" }, // Casilla 18
  { top: "450px", left: "200px" }, // Casilla 19
  { top: "380px", left: "200px" }, // Casilla 20
  { top: "320px", left: "200px" }, // Casilla 21
  { top: "200px", left: "200px" }, // Casilla 22
  { top: "200px", left: "250px" }, // Casilla 23
  { top: "200px", left: "300px" }, // Casilla 24
  { top: "200px", left: "350px" }, // Casilla 25
  { top: "200px", left: "410px" }, // Casilla 26
  { top: "250px", left: "410px" }, // Casilla 27
  { top: "300px", left: "410px" }, // Casilla 28
  { top: "350px", left: "410px" }, // Casilla 29
  { top: "350px", left: "350px" }, // Casilla 30
  { top: "350px", left: "300px" }, // Casilla 31
  { top: "350px", left: "245px" }, // Casilla 32
  { top: "280px", left: "245px" }, // Casilla 33
  { top: "280px", left: "300px" }, // Casilla 34
  { top: "280px", left: "350px" }, // Casilla 35
];

let posicionJugador1 = 0;
let posicionJugador2 = 0;
let pierdeTurnoJugador1 = false;
let pierdeTurnoJugador2 = false;
let turnoJugador1 = true;

const dado1 = document.querySelector("#dado1");
const dado2 = document.querySelector("#dado2");
const ficha1 = document.querySelector("#ficha1");
const ficha2 = document.querySelector("#ficha2");
const turnoDiv = document.querySelector("#turno");

const sonidoTirarDado = new Audio("./sound/throw.wav");
const sonidoRespuestaCorrecta = new Audio("./sound/answerWinner.wav");
const sonidoRespuestaIncorrecta = new Audio("./sound/answerLose.wav");
const sonidoAvanzar = new Audio("./sound/moveUp.mp3");
const sonidoPerderTurno = new Audio("./sound/loseTurn.wav");
const sonidoEstrella = new Audio("./sound/star.mp3");
const sonidoMalaSuerte = new Audio("./sound/badLuck.wav");
const sonidoBuenaSuerte = new Audio("./sound/goodLuck.wav");
const sonidoGanador = new Audio("./sound/winGame.wav");
const sonidoDeFondo = new Audio("./sound/fondo.mp3");
const sonidoMuerte = new Audio("./sound/death.mp3");

sonidoDeFondo.loop = true;

document.addEventListener("DOMContentLoaded", function () {
  sonidoDeFondo.play();
});

dado2.disabled = true;

function mostrarTurno() {
  turnoDiv.innerHTML = "";
  if (turnoJugador1) {
    turnoDiv.innerHTML = "Turno Jugador 1";
    turnoDiv.className = "jugador1";
  } else {
    turnoDiv.innerHTML = "Turno Jugador 2";
    turnoDiv.className = "jugador2";
  }
  turnoDiv.style.display = "flex";
}

function tirarDado() {
  sonidoTirarDado.play();
  sonidoAvanzar.play();
  return Math.floor(Math.random() * 6) + 1;
}

function reglasEspeciales(jugador, posicion) {
  if (jugador === 1) {
    if (posicion === 4 || posicion === 17) {
      alert("Jugador 1 pierde un turno.");
      sonidoPerderTurno.play();
      dado1.disabled = true;
      pierdeTurnoJugador1 = true;
    } else if (posicion === 11) {
      alert("Jugador 1 retrocede a la casilla 1.");
      sonidoMalaSuerte.play();
      posicionJugador1 = 0;
    } else if (posicion === 30) {
      alert("Jugador 1 tira de nuevo.");
      sonidoBuenaSuerte.play();
      moverFicha(1);
    } else if (posicion === 6) {
      alert("Jugador 1 avanza a la casilla 11.");
      sonidoEstrella.play();
      posicionJugador1 = 10;
    } else if (posicion === 13) {
      alert("Jugador 1 avanza a la casilla 29.");
      sonidoBuenaSuerte.play();
      posicionJugador1 = 28;
    } else if (posicion === 32) {
      alert("Jugador 1 retrocede a la casilla 20.");
      sonidoMalaSuerte.play();
      posicionJugador1 = 19;
    } else if (posicion === 1) {
      sonidoBuenaSuerte.play();
      alert("Jugador 1 avanza a la casilla 21.");
      posicionJugador1 = 20;
    } else if (posicion === 17) {
      sonidoPerderTurno.play();
      alert("Jugador 1 pierde un turno");
      pierdeTurnoJugador1 = true;
    } else if (posicion === 21) {
      sonidoAvanzar.play();
      alert("Jugador 1 avanza 2 casillas");
      posicionJugador1 += 2;
    } else if (posicion === 24) {
      sonidoMalaSuerte.play();
      alert("Jugador 1 retrocede a casilla 9");
      posicionJugador1 = 8;
    } else if (posicion === 29) {
      sonidoMalaSuerte.play();
      alert("Jugador 1 retrocede a las 27 ");
      sonidoMalaSuerte.play();
      posicionJugador1 = 26;
    } else if (posicion === 35) {
      posicionJugador1 = 35;
      sonidoGanador.play();
    } else if (
      posicion === 2 ||
      posicion === 3 ||
      posicion === 5 ||
      posicion === 7 ||
      posicion === 8 ||
      posicion === 9 ||
      posicion === 12 ||
      posicion === 14 ||
      posicion === 15 ||
      posicion === 16 ||
      posicion === 18 ||
      posicion === 19 ||
      posicion === 20 ||
      posicion === 22 ||
      posicion === 23 ||
      posicion === 25 ||
      posicion === 26 ||
      posicion === 27 ||
      posicion === 28 ||
      posicion === 31 ||
      posicion === 33 ||
      posicion === 34 ||
      posicion === 35
    ) {
      const preguntaAleatoria =
        preguntas[Math.floor(Math.random() * preguntas.length)];
      let respuesta = prompt(
        preguntaAleatoria.question +
          "\n1. " +
          preguntaAleatoria.answers[0] +
          "\n2. " +
          preguntaAleatoria.answers[1] +
          "\n3. " +
          preguntaAleatoria.answers[2]
      )
        .trim()
        .toLowerCase();

      if (respuesta === preguntaAleatoria.correctAnswer.toLowerCase()) {
        alert("Respuesta correcta");
        sonidoRespuestaCorrecta.play();
      } else {
        alert("Respuesta incorrecta. Retroceder 1 posición.");
        posicionJugador1 = Math.max(0, posicionJugador1 - 1);
        sonidoRespuestaIncorrecta.play();
      }
    }

    if (posicionJugador1 === posicionJugador2) {
      preguntaAleatoria.disabled = true;
    }

    ficha1.style.top = posiciones[posicionJugador1].top;
    ficha1.style.left = posiciones[posicionJugador1].left;
  } else {
    if (posicion === 4 || posicion === 17) {
      alert("Jugador 2 pierde un turno.");
      sonidoPerderTurno.play();
      dado2.disabled = true;
      pierdeTurnoJugador2 = true;
    } else if (posicion === 11) {
      sonidoMalaSuerte.play();
      alert("Jugador 2 retrocede a la casilla 0.");
      posicionJugador2 = 0;
    } else if (posicion === 30) {
      sonidoBuenaSuerte.play();
      alert("Jugador 2 tira de nuevo.");
      moverFicha(2);
    } else if (posicion === 6) {
      sonidoEstrella.play();
      alert("Jugador 2 avanza a la casilla 11.");
      posicionJugador2 = 10;
    } else if (posicion === 13) {
      sonidoBuenaSuerte.play();
      alert("Jugador 2 avanza a la casilla 29.");
      posicionJugador2 = 28;
    } else if (posicion === 32) {
      sonidoMalaSuerte.play();
      alert("Jugador 2 retrocede a la casilla 20.");
      posicionJugador2 = 19;
    } else if (posicion === 1) {
      sonidoBuenaSuerte.play();
      alert("Jugador 2 avanza a la casilla 21.");
      posicionJugador2 = 20;
    } else if (posicion === 17) {
      sonidoPerderTurno.play();

      alert("Jugador 2 pierde un turno");
      pierdeTurnoJugador2 = true;
    } else if (posicion === 21) {
      sonidoAvanzar.play();
      alert("Jugador 2 avanza 2 casillas");
      posicionJugador2 += 2;
    } else if (posicion === 24) {
      sonidoMalaSuerte.play();

      alert("Jugador 2 retrocede a casilla 9");
      posicionJugador2 = 8;
    } else if (posicion === 29) {
      sonidoMalaSuerte.play();

      alert("Jugador 2 retrocede a las 27 ");
      posicionJugador2 = 26;
    } else if (posicion === 35) {
      sonidoGanador.play();

      posicionJugador2 = 35;
    } else if (
      posicion === 2 ||
      posicion === 3 ||
      posicion === 5 ||
      posicion === 7 ||
      posicion === 8 ||
      posicion === 9 ||
      posicion === 12 ||
      posicion === 14 ||
      posicion === 15 ||
      posicion === 16 ||
      posicion === 18 ||
      posicion === 19 ||
      posicion === 20 ||
      posicion === 22 ||
      posicion === 23 ||
      posicion === 25 ||
      posicion === 26 ||
      posicion === 27 ||
      posicion === 28 ||
      posicion === 31 ||
      posicion === 33 ||
      posicion === 34 ||
      posicion === 35
    ) {
      const preguntaAleatoria =
        preguntas[Math.floor(Math.random() * preguntas.length)];
      let respuesta = prompt(
        preguntaAleatoria.question +
          "\n1. " +
          preguntaAleatoria.answers[0] +
          "\n2. " +
          preguntaAleatoria.answers[1] +
          "\n3. " +
          preguntaAleatoria.answers[2]
      )
        .trim()
        .toLowerCase();

      if (respuesta === preguntaAleatoria.correctAnswer.toLowerCase()) {
        alert("Respuesta correcta");
        sonidoRespuestaCorrecta.play();
      } else {
        alert("Respuesta incorrecta. Retroceder 1 posición.");
        posicionJugador2 = Math.max(0, posicionJugador2 - 1);
        sonidoRespuestaIncorrecta.play();
      }
    }

    ficha2.style.top = posiciones[posicionJugador2].top;
    ficha2.style.left = posiciones[posicionJugador2].left;
  }
  if (pierdeTurnoJugador1 && jugador === 1) {
    dado2.disable = false;
    pierdeTurnoJugador1 = false;
  } else if (pierdeTurnoJugador2 && jugador === 2) {
    dado1.disabled = false;
    pierdeTurnoJugador2 = false;
  } else {
    dado1.disabled = false;
    dado2.disabled = false;
  }
}

function moverFicha(jugador) {
  if (jugador === 1 && pierdeTurnoJugador1) {
    alert("Jugador 1 pierde su turno.");
    pierdeTurnoJugador1 = false;
    turnoJugador1 = false;
    return;
  }
  if (jugador === 2 && pierdeTurnoJugador2) {
    alert("Jugador 2 pierde su turno.");
    pierdeTurnoJugador2 = false;
    turnoJugador1 = true;
    return;
  }

  const pasos = tirarDado();
  alert(`Jugador ${jugador} ha sacado un ${pasos}`);

  let nuevaPosicion;
  if (jugador === 1) {
    nuevaPosicion = posicionJugador1 + pasos;
    if (nuevaPosicion >= posiciones.length) {
      alert("Jugador 1 ha llegado al final!");
      setTimeout(function () {
        window.location.reload();
      }, 3000);
      return;
    }
    posicionJugador1 = nuevaPosicion;
    ficha1.style.top = posiciones[posicionJugador1].top;
    ficha1.style.left = posiciones[posicionJugador1].left;

    2;
    if (posicionJugador1 === posicionJugador2) {
      alert(
        "Jugador 1 ha eliminado a Jugador 2 y lo regresa a la posición inicial."
      );
      sonidoMuerte.play();
      posicionJugador2 = 0;
      ficha2.style.top = posiciones[posicionJugador2].top;
      ficha2.style.left = posiciones[posicionJugador2].left;
    }

    reglasEspeciales(1, posicionJugador1);
    turnoJugador1 = false;
  } else {
    nuevaPosicion = posicionJugador2 + pasos;
    if (nuevaPosicion >= posiciones.length) {
      alert("Jugador 2 ha llegado al final!");
      setTimeout(function () {
        window.location.reload();
      }, 3000);
      return;
    }
    posicionJugador2 = nuevaPosicion;
    ficha2.style.top = posiciones[posicionJugador2].top;
    ficha2.style.left = posiciones[posicionJugador2].left;

    if (posicionJugador2 === posicionJugador1) {
      alert(
        "Jugador 2 ha eliminado a Jugador 1 y lo regresa a la posición inicial."
      );
      sonidoMuerte.play();
      posicionJugador1 = 0;
      ficha1.style.top = posiciones[posicionJugador1].top;
      ficha1.style.left = posiciones[posicionJugador1].left;
    }

    reglasEspeciales(2, posicionJugador2);
    turnoJugador1 = true;
  }

  dado1.disabled = !turnoJugador1;
  dado2.disabled = turnoJugador1;
  mostrarTurno();
}

dado1.addEventListener("click", () => moverFicha(1));
dado2.addEventListener("click", () => moverFicha(2));
