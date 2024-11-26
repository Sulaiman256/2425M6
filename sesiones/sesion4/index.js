console.log('Sesion 4');

// array
const frutas = ['manzana', 'pera', 'platano', 9, 32 , "34"];
// acceso a posicion del array
console.log(frutas[5])

const barquitos = [
    ["1A", "1B", "1C"],
    ["2A", "2B", "2C"],
    ["3A", "3B", "3C"],
]

console.log(barquitos[2][1]) // 2C

// Objetos

const persona = {
    nombre: 'Pepe',
    apellidos: 'Lotillas Rotas'
}

console.log('nombre : ' , persona.nombre)
console.log('apellido: ', persona.apellidos)

// array de objetos
const ArrayPersonas = [
    { nombre: 'Pepe',
        apellidos: 'Lotillas Rotas'},
    { nombre: 'Sara',
      apellidos: 'Lotillas Rotas'},
    { nombre: 'Andres',
      apellidos: 'Roto Rotas'},
]

console.log(ArrayPersonas[2].nombre)

const alumnes = [
    {
      nom: "Joan Pérez",
      edat: 18,
      correu: "joan.perez@example.com",
      moduls: [
        { nom: "Desenvolupament Web", nota: 8.5 },
        { nom: "Bases de Dades", nota: 7.0 },
        { nom: "Sistemes Operatius", nota: 6.5 }
      ]
    },
    {
      nom: "Maria Sánchez",
      edat: 19,
      correu: "maria.sanchez@example.com",
      moduls: [
        { nom: "Desenvolupament Web", nota: 9.0 },
        { nom: "Bases de Dades", nota: 8.0 },
        { nom: "Sistemes Operatius", nota: 7.5 }
      ]
    },
    {
      nom: "Pere Martínez",
      edat: 20,
      correu: "pere.martinez@example.com",
      moduls: [
        { nom: "Desenvolupament Web", nota: 7.5 },
        { nom: "Bases de Dades", nota: 6.0 },
        { nom: "Sistemes Operatius", nota: 8.0 }
      ]
    }
  ];

  console.log('La nota de de sistemas operativos de maria sanchez es: ', alumnes[1].moduls[2].nota)
  console.log('Nombre del segundo modulo de Pere', alumnes[2].moduls[1].nom)
  console.log('Array de maria', alumnes[1])

  // Recorres una array de objetos con for

  for (let i=0;i<ArrayPersonas.length;i++){
    console.log('Nombre de ', i, ':', ArrayPersonas[i].nombre)
  }

  // Generar html a partir de un array

  // Creamos lista desordeanda con los nombres de los alumnos

  let listaHtml= '<ul>'

  for(let i=0;i<ArrayPersonas.length;i++){
     listaHtml += `<li> ${ArrayPersonas[i].nombre} </li>`
  }

  listaHtml += '</ul>'

  document.querySelector('#miLista').innerHTML = listaHtml

let tablaHtml = 'xxxxx'

for (let i = 0; i < ArrayPersonas.length; i++) {
  tablaHtml += `
    <tr>
      <td>${ArrayPersonas[i].nombre}</td>
      <td>${ArrayPersonas[i].apellidos}</td>
    </tr>
  `;
}

console.log(tablaHtml)

document.querySelector("#tablita").innerHTML = `
 <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Apellidos</th>
          </tr>
        </thead>
        <tbody>
         ${tablaHtml}
        </tbody>
      </table>
      `




const quiz = [
  {
    pregunta: '¿Cuál es la capital de España?',
    respuestas: ['Madrid', 'Barcelona', 'Sevilla', 'Granada'],
    correcta: "0"
  },
  {
    pregunta: '¿Cuál es la capital de Italia?',
    respuestas: ['Roma', 'Venecia', 'Madrid', 'Paris'],
    correcta: "0"
  },
  {
    pregunta: '¿Cuál es la capital de Portugal?',
    respuestas: ['Lisboa', 'Madrid', 'Porto', 'Bilbao'],
    correcta: "0"
  }
]
let quizHtml = ''
for (let i = 0; i < quiz.length; i++) {
  quizHtml += `
    <h2>${quiz[i].pregunta}</h2>
    <button id='btn1'>${quiz[i].respuestas[0]}</button>
    <button>${quiz[i].respuestas[1]}</button>
    <button>${quiz[i].respuestas[2]}</button>
  `
 

}





document.querySelector('#quiz').innerHTML = quizHtml