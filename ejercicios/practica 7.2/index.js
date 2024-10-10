console.log("practica 7.2");

const preguntas = [
  {
    question: "¿Cuál es el planeta más cercano al sol?",
    answers: ["Venus", "Marte", "Mercurio", "Júpiter"],
    correctAnswer: "Mercurio",
  },
  {
    question: "¿Quién pintó la Mona Lisa?",
    answers: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "¿Cuál es el río más largo del mundo?",
    answers: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"],
    correctAnswer: "Amazonas",
  },
  {
    question: "¿Cuál es el elemento químico con símbolo 'O'?",
    answers: ["Oxígeno", "Oro", "Osmio", "Organesón"],
    correctAnswer: "Oxígeno",
  },
  {
    question: "¿En qué continente se encuentra Egipto?",
    answers: ["Europa", "África", "Asia", "Oceanía"],
    correctAnswer: "África",
  },
  {
    question: "¿Cuál es el animal terrestre más rápido?",
    answers: ["León", "Tigre", "Guepardo", "Caballo"],
    correctAnswer: "Guepardo",
  },
  {
    question: "¿Qué año comenzó la Primera Guerra Mundial?",
    answers: ["1914", "1918", "1939", "1945"],
    correctAnswer: "1914",
  },
  {
    question: "¿Cuál es el país más grande del mundo por área?",
    answers: ["China", "Rusia", "Canadá", "Estados Unidos"],
    correctAnswer: "Rusia",
  },
  {
    question: "¿Quién desarrolló la teoría de la relatividad?",
    answers: [
      "Isaac Newton",
      "Albert Einstein",
      "Nikola Tesla",
      "Stephen Hawking",
    ],
    correctAnswer: "Albert Einstein",
  },
  {
    question: "¿Cuál es el idioma más hablado en el mundo?",
    answers: ["Español", "Inglés", "Mandarín", "Hindi"],
    correctAnswer: "Mandarín",
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

const dado1 = document.querySelector("#dado1");
const dado2 = document.querySelector("#dado2");
const ficha1 = document.querySelector("#ficha1");
const ficha2 = document.querySelector("#ficha2");

function tirarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

function reglasEspeciales(jugador, posicion) {
  if (jugador === 1) {
    if (posicion === 4 || posicion === 17) {
      alert("Jugador 1 pierde un turno");
      pierdeTurnoJugador1 = true;
    } else if (posicion === 11) {
      alert("Jugador1 retrocede a la casilla de salida");
      posicionJugador1 = 0;
    } else if (posicion === 6) {
      alert("Jugador 1 avanza a la casilla 11");
      posicionJugador1 = 10;
    }
  } else if (posicion === 13) {
    alert("jugador 1 avanza a la casilla 29");
    posicionJugador1 = 28;
  } else if (posicion === 1) {
    alert("Jugador 1 avanza a la casilla 21");
    posicionJugador1 = 20;
  } else if (posicion === 17) {
    alert("Jugador 1 pierde un turno");
    pierdeTurnoJugador1 = true;
  } else if (posicion === 21) {
    alert("Jugador 1 avanza dos casillas");
    posicionJugador1 += 2;
  } else if (posicion === 24) {
    alert("El jugador retrocede a casilla 9");
    posicionJugador1 = 8;
  } else if (posicion === 29) {
    alert("Jugador 1 retrocede a las 27 ");
    posicionJugador1 = 26;
  } else if (posicion === 31) {
    alert("Jugador 1 tira de nuevo.");
    moverFicha(1);
  } else if (posicion === 32) {
    alert("Jugador 1 retrocede a la casilla 20.");
    posicionJugador1 = 19;
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
    );

    if (respuesta !== preguntaAleatoria.correctAnswer) {
      alert("Respuesta incorrecta. Retrocede 1 posicion");
      posicionJugador1 = Math.max(0, posicionJugador1 - 1);
    }
    ficha1.style.top = posiciones[posicionJugador1].top;
    ficha1.style.left = posiciones[posicionJugador1].left;
  } else {
    if (posicion === 4 || posicion === 17) {
      alert("Jugador 2 pierde un turno");
      pierdeTurnoJugador1 = true;
    } else if (posicion === 11) {
      alert("Jugador2 retrocede a la casilla de salida");
      posicionJugador2 = 0;
    } else if (posicion === 6) {
      alert("Jugador 2 avanza a la casilla 11");
      posicionJugador2 = 10;
    } else if (posicion === 13) {
      alert("jugador 2 avanza a la casilla 29");
      posicionJugador2 = 28;
    } else if (posicion === 1) {
      alert("Jugador 2 avanza a la casilla 21");
      posicionJugador2 = 20;
    } else if (posicion === 17) {
      alert("Jugador 1 pierde un turno");
      pierdeTurnoJugador2 = true;
    } else if (posicion === 21) {
      alert("Jugador 2 avanza dos casillas");
      posicionJugador2 += 2;
    } else if (posicion === 24) {
      alert("El jugador retrocede a casilla 9");
      posicionJugador2 = 8;
    } else if (posicion === 29) {
      alert("Jugador 2 retrocede a las 27 ");
      posicionJugador2 = 26;
    } else if (posicion === 31) {
      alert("Jugador 2 tira de nuevo.");
      moverFicha(2);
    } else if (posicion === 32) {
      alert("Jugador 2 retrocede a la casilla 20.");
      posicionJugador2 = 19;
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
      );

      if (respuesta !== preguntaAleatoria.correctAnswer) {
        alert("Respuesta incorrecta. Retrocede 1 posicion");
        posicionJugador2 = Math.max(0, posicionJugador2 - 1);
      }
      ficha2.style.top = posiciones[posicionJugador2].top;
      ficha2.style.left = posiciones[posicionJugador2].left;
    }
  }
}
