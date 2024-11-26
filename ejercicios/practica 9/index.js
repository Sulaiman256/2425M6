console.log("Practica 9");

function initializePattern(patron, offsetX, offsetY) {
  for (let i = 0; i < patron.length; i++) {
    for (let j = 0; j < patron[i].length; j++) {
      universo[offsetY + i][offsetX + j] = patron[i][j];
    }
  }
}

// Ahora definimos los patrones blinker, toad, y glider

const blinker = [[true, true, true]];

const toad = [
  [false, true, true, true],
  [true, true, false, false],
];

const glider = [
  [false, true, false],
  [false, false, true],
  [true, true, true],
];

function initializeGameWithPattern(patron) {
  universo = crearMatriz(columnasVerdaderas, filasVerdaderas);
  initializePattern(patron, 2, 2);
  dibujaUniversoConEstado(universo);
}

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const columnasVerdaderas = 10;
const filasVerdaderas = 20;
let universo = crearMatriz(columnasVerdaderas, filasVerdaderas);
let intervalo;

const cellSize = {
  width: canvas.width / columnasVerdaderas,
  height: canvas.height / filasVerdaderas,
};

function dibujaUniverso(filas, columnas) {
  const universo = document.createElement("div");
  universo.classList.add("universo");

  // generar filas
  for (let i = 0; i < filas; i++) {
    const fila = document.createElement("div");
    fila.classList.add("fila");

    // generar celdas
    for (let j = 0; j < columnas; j++) {
      const celda = document.createElement("div");
      celda.classList.add("celula");
      celda.setAttribute("data-id", `${i}-${j}`);
      celda.innerHTML = `${i}-${j}`;

      celda.addEventListener("click", function () {
        universo[i][j] = !universo[i][j];
        dibujaUniversoConEstado(universo);
      });
      fila.appendChild(celda);
    }
    universo.appendChild(fila);
  }
  document.body.appendChild(universo);
}
// dibujaUniverso(2, 3);

// Tarea 2 aleatorio()

function aleatorio() {
  return Math.random() <= 0.5;
}

// Pruebas de tarea 2 aleatorio

const numero = 1000;

const contador = {
  true: 0,
  false: 0,
};

for (let i = 0; i < numero; i++) {
  if (aleatorio()) {
    contador.true++;
  } else {
    contador.false++;
  }
}

console.log(`Total de llamadas: ${numero}`);
console.log(
  `True: ${contador.true} (${((contador.true / numero) * 100).toFixed(2)}%)`
);
console.log(
  `False: ${contador.false} (${((contador.false / numero) * 100).toFixed(2)}%)`
);

// Tarea 3 aleatorioPorcentaje()

function aleatorioPorcentaje(porcentaje) {
  const min = 0;
  const max = 100;
  const random = Math.random() * (max - min) + min;
  return random <= porcentaje;
}

// Pruebas de tarea 3 aleatorioPorcentaje

const numeroTarea3 = 10000;

const contadorTarea3 = {
  true: 0,
};

for (let i = 0; i < numeroTarea3; i++) {
  if (aleatorioPorcentaje(30)) {
    contadorTarea3.true++;
  }
}

console.log(`Total de llamadas: ${numeroTarea3}`);
console.log(
  `True: ${contadorTarea3.true} (${(
    (contadorTarea3.true / numeroTarea3) *
    100
  ).toFixed()}%)`
);

// Tarea 4 crearMatriz()
function crearMatriz(columna, filas) {
  const matriz = [];
  for (let i = 0; i < filas; i++) {
    const fila = [];
    for (let j = 0; j < columna; j++) {
      fila.push(aleatorio());
    }
    matriz.push(fila);
  }
  return matriz;
}

const columnas = 10;
const filas = 20;
const matrizGenerada = crearMatriz(columnas, filas);

console.log(`Dimensiones de la matriz: ${columnas} columnas y ${filas} filas`);
console.log(matrizGenerada);

if (
  matrizGenerada.length === filas &&
  matrizGenerada.every((fila) => fila.length === columnas)
) {
  console.log("La matriz tiene las dimensiones correctas.");
} else {
  console.log("La matriz NO tiene las dimensiones correctas.");
}

// tarea 5 dibujaUniversoConEstado()
function dibujaUniversoConEstado(matriz) {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      ctx.fillStyle = matriz[i][j] ? "black" : "white"; // Color según el estado
      ctx.fillRect(
        // esto dibuja los rectangulos en 2d debido al canvas
        j * cellSize.width,
        i * cellSize.height,
        cellSize.width,
        cellSize.height
      );
      ctx.strokeRect(
        // Esto dibuja el contorno de los rectangulos en 2d debido al canvas
        j * cellSize.width,
        i * cellSize.height,
        cellSize.width,
        cellSize.height
      );
    }
  }
}

const columnasNuevo = 5;

const filasNuevo = 4;
const matriz = crearMatriz(columnas, filas);

dibujaUniversoConEstado(matriz);

// tarea 6 contarVecinosVivos
function contarVecinosVivos(matriz, x, y) {
  let contador = 0;

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const nuevaX = x + i;
      const nuevaY = y + j;

      if (
        nuevaX >= 0 &&
        nuevaX < matriz.length &&
        nuevaY >= 0 &&
        nuevaY < matriz[0].length
      ) {
        if (i !== 0 || j !== 0) {
          if (matriz[nuevaX][nuevaY]) {
            contador++;
          }
        }
      }
    }
  }

  return contador;
}

const matrizPrueba = [
  [true, false, true],
  [false, true, false],
  [true, false, true],
];

// Verifica el número de vecinos vivos para diferentes células
console.log(contarVecinosVivos(matrizPrueba, 0, 0));
console.log(contarVecinosVivos(matrizPrueba, 0, 1));
console.log(contarVecinosVivos(matrizPrueba, 0, 2));
console.log(contarVecinosVivos(matrizPrueba, 1, 1));
console.log(contarVecinosVivos(matrizPrueba, 2, 0));
console.log(contarVecinosVivos(matrizPrueba, 2, 1));
console.log(contarVecinosVivos(matrizPrueba, 2, 2));

// tarea 7 evolucionarCelula()

function evolucionarCelula(matriz, x, y) {
  const vecinosVivos = contarVecinosVivos(matriz, x, y);
  const esViva = matriz[x][y];
  if (esViva) {
    if (vecinosVivos < 2) {
      console.log("Muere por soledad");
      return false;
    } else if (vecinosVivos === 2 || vecinosVivos === 3) {
      console.log("Sobrevive");
      return true;
    } else {
      console.log("Muere por sobrepoblacion");
      return false;
    }
  } else {
    if (vecinosVivos === 3) {
      console.log("Revive por reproduccion");
      return true;
    } else {
      console.log("Sigue muerta");
      return false;
    }
  }
}
console.log(evolucionarCelula(matrizPrueba, 0, 0)); // debería morir (soledad)
console.log(evolucionarCelula(matrizPrueba, 0, 1)); // debería seguir muerta
console.log(evolucionarCelula(matrizPrueba, 1, 1)); // debería sobrevivir
console.log(evolucionarCelula(matrizPrueba, 2, 2)); // debería morir (soledad)

// tarea 8 crearMatrizEvolucionada()

function crearMatrizEvolucionada(matrizActual) {
  const filas = matrizActual.length;
  const columnas = matrizActual[0].length;
  const newMatriz = [];

  for (let i = 0; i < filas; i++) {
    const fila = [];
    for (let j = 0; j < columnas; j++) {
      fila.push(evolucionarCelula(matrizActual, i, j));
    }
    newMatriz.push(fila);
  }
  return newMatriz;
}
const matrizInicial = [
  [true, false, true],
  [false, true, false],
  [true, false, true],
];

console.log("Estado inicial:");
console.table(matrizInicial);

const matrizEvolucionada = crearMatrizEvolucionada(matrizInicial);

console.log("Estado evolucionado:");

console.table(matrizEvolucionada);

const matrizEvolucionada2 = crearMatrizEvolucionada(matrizEvolucionada);

console.log("Estado evolucionado 2:");

console.table(matrizEvolucionada2);

// Tarea 9 copiarMatriz()

function copiarMatriz(matrizOrigen, matrizDestino) {
  const filas = matrizOrigen.length;
  const columnas = matrizOrigen[0].length;

  for (let x = 0; x < filas; x++) {
    matrizDestino[x] = [];
    for (let y = 0; y < columnas; y++) {
      matrizDestino[x][y] = matrizOrigen[x][y];
    }
  }
}

const matrizOrigen = [
  [true, false, true],
  [false, true, false],
  [true, false, true],
];
const matrizDestino = [];

copiarMatriz(matrizOrigen, matrizDestino);

console.log("Matriz original:");
console.table(matrizOrigen);
console.log("Matriz copiada:");
console.table(matrizDestino);

// Tarea 10 implementacion completa del juego

function Game() {
  intervalo = setInterval(() => {
    universo = crearMatrizEvolucionada(universo);
    dibujaUniversoConEstado(universo);
  }, 500);
}

function pause() {
  clearInterval(intervalo);
}

function resetGame() {
  pause();
  universo = crearMatriz(columnasVerdaderas, filasVerdaderas);
  dibujaUniversoConEstado(universo);
}

document
  .querySelector("#blinker")
  .addEventListener("click", () => initializeGameWithPattern(blinker));
document
  .querySelector("#toad")
  .addEventListener("click", () => initializeGameWithPattern(toad));
document
  .querySelector("#glider")
  .addEventListener("click", () => initializeGameWithPattern(glider));

document.querySelector("#start").addEventListener("click", Game);
document.querySelector("#stop").addEventListener("click", pause);
document.querySelector("#restart").addEventListener("click", resetGame);

dibujaUniversoConEstado(universo);
