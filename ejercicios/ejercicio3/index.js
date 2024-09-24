const quiz = [
    {
      question: "¿Cuál es el planeta más cercano al sol?",
      answers: ["Venus", "Marte", "Mercurio", "Júpiter"],
      correctAnswer: "Mercurio"
    },
    {
      question: "¿Quién pintó la Mona Lisa?",
      answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
      correctAnswer: "Leonardo da Vinci"
    },
    {
      question: "¿Cuál es el río más largo del mundo?",
      answers: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"],
      correctAnswer: "Amazonas"
    },
    {
      question: "¿Cuál es el elemento químico con símbolo 'O'?",
      answers: ["Oxígeno", "Oro", "Osmio", "Organesón"],
      correctAnswer: "Oxígeno"
    },
    {
      question: "¿En qué continente se encuentra Egipto?",
      answers: ["Europa", "África", "Asia", "Oceanía"],
      correctAnswer: "África"
    },
    {
      question: "¿Cuál es el animal terrestre más rápido?",
      answers: ["León", "Tigre", "Guepardo", "Caballo"],
      correctAnswer: "Guepardo"
    },
    {
      question: "¿Qué año comenzó la Primera Guerra Mundial?",
      answers: ["1914", "1918", "1939", "1945"],
      correctAnswer: "1914"
    },
    {
      question: "¿Cuál es el país más grande del mundo por área?",
      answers: ["China", "Rusia", "Canadá", "Estados Unidos"],
      correctAnswer: "Rusia"
    },
    {
      question: "¿Quién desarrolló la teoría de la relatividad?",
      answers: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Stephen Hawking"],
      correctAnswer: "Albert Einstein"
    },
    {
      question: "¿Cuál es el idioma más hablado en el mundo?",
      answers: ["Español", "Inglés", "Mandarín", "Hindi"],
      correctAnswer: "Mandarín"
    }
  ];
  console.log(quiz);

function randomQuestion(){
  if(quiz && quiz.length > 0){
    const randomIndex = Math.floor(Math.random() * quiz.length);
    const pregunta = quiz[randomIndex]
    console.log(pregunta.question);
    document.querySelector('#question').textContent = pregunta.question;
    generateAnswers(pregunta.answers);
  }else{
    console.log('No hay preguntas disponibles');
  }
}

function generateAnswers(answers){
  let html = '';
  answers.forEach((answer, index)=>{
    html += `<button class="btn btn-primary" id="answer${index + 1}">${answer}</button>`;

  })
  document.querySelector('#answers').innerHTML = html;
   answers.forEach((answer, index) => {
    document.querySelector(`#answer${index + 1}`).addEventListener('click', () => {
      const correctAnswer = quiz.find(q => q.question === document.querySelector('#question').innerHTML).correctAnswer;
      console.log(`Answer ${index + 1} clicked: ${answer}`);
      checkAnswer(answer, answers[0], correctAnswer);
    });
  });
}

function checkAnswer(selectedAnswer,  correctAnswer){
  const result = document.querySelector('#result');
  if(selectedAnswer === correctAnswer){
    result.innerHTML = 'Correcto!';
    result.classList.add('text-success');
  }else{
    result.innerHTML = 'Incorrecto! La respuesta correcta es:'+ correctAnswer;
    result.classList.add('text-danger');
  }
}

document.addEventListener("DOMContentLoaded", randomQuestion);
