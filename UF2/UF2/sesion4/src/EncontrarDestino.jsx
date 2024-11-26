const destinos = [
  { id: 1, destino: "París", duracion: "5 días", precio: 1200 },
  { id: 2, destino: "Nueva York", duracion: "7 días", precio: 2000 },
  { id: 3, destino: "Tokio", duracion: "10 días", precio: 3000 },
];

export function EncontrarDestino() {
  const destinoNY = destinos.find(function (destino) {
    return destino.destino === "Nueva York";
  });

  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <p>
        Destino encontrado:{" "}
        {destinoNY
          ? `${destinoNY.destino} - ${destinoNY.duracion} - ${destinoNY.precio}€`
          : "No encontrado"}
      </p>
    </div>
  );
}
