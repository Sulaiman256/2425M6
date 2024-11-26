/*Exercici 1: Configurar l'entorn

*/

//Exercici 2: Crear l'array de preguntes

const quiz = [
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
console.log(quiz);

let selectedAnswer = null;

// Exercici 3: Carregar una pregunta aleatòria

function randomQuestion() {
  if (quiz && quiz.length > 0) {
    const randomIndex = Math.floor(Math.random() * quiz.length);
    const pregunta = quiz[randomIndex];
    console.log(pregunta.question);
    document.querySelector("#question").textContent = pregunta.question;
    generateAnswers(pregunta.answers, pregunta.correctAnswer);
  } else {
    console.log("No hay preguntas disponibles");
  }
}

// Exercici 4: Seleccionar una resposta

function generateAnswers(answers, correctAnswer) {
  let html = "";
  answers.forEach((answer, index) => {
    html += `<button class="btn btn-primary" id="answer${
      index + 1
    }">${answer}</button>`;
  });
  document.querySelector("#answers").innerHTML = html;
  // Agregar el evento al boton
  answers.forEach((answer, index) => {
    document
      .querySelector(`#answer${index + 1}`)
      .addEventListener("click", () => {
        console.log(`Answer ${index + 1} clicked ${answer}`);
        checkAnswer(answer, correctAnswer);
      });
  });
}
// funcion que chequea la respuesta seleccionada

function checkAnswer(answer, correctAnswer) {
  selectedAnswer = answer;
  const result = document.querySelector("#result");
  if (answer === correctAnswer) {
    // Ahora haremos un div que con fondo verde porque es cuando sera correcto el result
    result.innerHTML = `Correcto! La respuesta correcta era: ${correctAnswer}`;
    result.style.backgroundColor = "green";
    result.style.color = "white";
    mouJugador(true);
  } else {
    // div que con fondo rojo
    result.innerHTML = `Incorrecto! La respuesta correcta era: ${correctAnswer}`;
    result.style.backgroundColor = "red";
    result.style.color = "white";

    mouJugador(false);
  }

  result.classList.add("alert", "mt-3");
  result.style.display = "block";
}
// Ejercicio 5 Agregar evento al boton para pasar a la siguiente pregunta
// Exercici 6: Control d'errors

document.querySelector("#next-question").addEventListener("click", () => {
  if (selectedAnswer === null) {
    alert(
      "Debes seleccionar una respuesta antes de pasar a la siguiente pregunta"
    );
  } else if (selectedAnswer != null) {
    selectedAnswer = null;
    document.querySelector("#result").innerHTML = "";
    document.querySelector("#result").style.display = "none";
    randomQuestion();
  } else {
    console.log("Next button clicked");

    randomQuestion();
  }
});
// Practica 3 Juego de mesa con preguntas

// Primer  paso definir variables

let posicioActual = 1;
let encerts = 0;
let errors = 0;

console.log(
  "Posicion actual: ",
  posicioActual,
  "Aciertos: ",
  encerts,
  "Errores: ",
  errors
);

function mouJugador(endavant) {
  const divs = document.querySelectorAll(".div");

  if (endavant === true) {
    posicioActual++;
    encerts++;
    console.log(
      "Has avanzado tu posicion: ",
      posicioActual,
      "Respuesta correcta",
      "Aciertos: ",
      encerts
    );
  } else {
    if (posicioActual > 1) {
      posicioActual -= 3;
      errors++;
      console.log(
        "Has retrocedido tu posicion: ",
        posicioActual,
        "Respuesta incorrecta",
        "Errores: ",
        errors
      );
    }
  }

  // Actualizar la posición actual con color rojo
  const posicioActualUpdate = document.querySelector(
    `.div-point:nth-child(${posicioActual})`
  );
  if (posicioActualUpdate) {
    posicioActualUpdate.classList.add("bg-danger");
  }

  if (posicioActual > 1) {
    const posicionNegativa = document.querySelector(
      `.div-point:nth-child(${posicioActual - 1})`
    );
    if (posicionNegativa) {
      posicionNegativa.classList.remove("bg-danger");
      posicionNegativa.classList.add("bg-primary");
    }
  }
  comprovarFinalJoc();
}
// Comprobar el final de juego para ello tendremos que ver si ha llegado a la casilla 20 y mostrar un alert con los aciertos y errores y desactivar siguiente pregunta

function comprovarFinalJoc() {
  if (posicioActual === 21) {
    alert(
      `Has completado el juego! Has acertado ${encerts} veces y ha fallado ${errors} veces.`
    );
    document.querySelector("#next-question").disabled = true;
  }
}

document.addEventListener("DOMContentLoaded", randomQuestion);
