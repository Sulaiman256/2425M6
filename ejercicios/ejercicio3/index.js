/*Exercici 1: Configurar l'entorn

*/

//Exercici 2: Crear l'array de preguntes

const quiz = [{
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

function checkAnswer(selectedAnswer, correctAnswer) {
    const result = document.querySelector("#result");
    if (selectedAnswer === correctAnswer) {
        alert("Correcto!");
    } else {
        // div que con fondo rojo
        alert("Incorrecto! La respuesta correcta era: " + correctAnswer);
    }
}
// Ejercicio 5 Agregar evento al boton para pasar a la siguiente pregunta

document.querySelector("#next-question").addEventListener("click", () => {
    console.log("Next button clicked");
    randomQuestion();
});
document.addEventListener("DOMContentLoaded", randomQuestion);

// Ejercicio 6 Control de error anadir control de errores para comprovar si has seleccionado una respuesta anterior