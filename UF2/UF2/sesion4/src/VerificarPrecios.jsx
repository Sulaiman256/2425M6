const destinos = [
  { id: 1, destino: "París", duracion: "5 días", precio: 1200 },
  { id: 2, destino: "Nueva York", duracion: "7 días", precio: 2000 },
  { id: 3, destino: "Tokio", duracion: "10 días", precio: 3000 },
];

export function VerificarPrecios() {
  const algunDestinoBarato = destinos.some(function (destino) {
    return destino.precio < 1500;
  });
  const todosDestinosCaros = destinos.every(function (destino) {
    return destino.precio > 1000;
  });
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <p>¿Algún destino es barato? {algunDestinoBarato ? "Sí" : "No"}</p>
      <p>¿Todos los destinos son caros? {todosDestinosCaros ? "Sí" : "No"}</p>
    </div>
  );
}
