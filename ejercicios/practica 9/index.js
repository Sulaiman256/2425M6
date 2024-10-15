console.log("Practica 9");

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
      fila.appendChild(celda);
    }
    universo.appendChild(fila);
  }
  document.body.appendChild(universo);
}
dibujaUniverso(2, 3);
