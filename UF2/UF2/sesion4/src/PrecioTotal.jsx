const destinos = [
  { id: 1, destino: "París", duracion: "5 días", precio: 1200 },
  { id: 2, destino: "Nueva York", duracion: "7 días", precio: 2000 },
  { id: 3, destino: "Tokio", duracion: "10 días", precio: 3000 },
];

export function PrecioTotal() {
  const precioTotal = destinos.reduce(function (acumulador, destino) {
    return acumulador + destino.precio;
  }, 0);
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <p>Precio total de todos los destinos: {precioTotal}€</p>
    </div>
  );
}
