const destinos = [
  { id: 1, destino: "París", duracion: "5 días", precio: 1200 },
  { id: 2, destino: "Nueva York", duracion: "7 días", precio: 2000 },
  { id: 3, destino: "Tokio", duracion: "10 días", precio: 3000 },
];
export function ListaDestinosEconomicos() {
  const destinosFiltrados = destinos.filter(function (destino) {
    return destino.precio <= 2000;
  });
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      {destinosFiltrados.map(function (destino) {
        return (
          <p key={destino.id}>
            {destino.destino} - {destino.duracion} - {destino.precio}€
          </p>
        );
      })}
    </div>
  );
}
