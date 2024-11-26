import { EncontrarDestino } from "./EncontrarDestino";
import { ListaDestinos } from "./ListaDestinos";
import { ListaDestinosEconomicos } from "./ListaDestinosEconomicos";
import { LoguearDestinos } from "./LoguearDestinos";
import { PrecioTotal } from "./PrecioTotal";
import { VerificarPrecios } from "./VerificarPrecios";
import viajes from "./viajes.json";
import { useState } from "react";

function App() {
  const [listaViajes, setListaViajes] = useState(viajes);
  const [ordenAscendente, setOrdenAscendente] = useState(true);

  // Función para ordenar y desordenar los viajes por precio
  function ordenarViajes() {
    const viajesOrdenados = [...listaViajes].sort((a, b) => {
      return ordenAscendente ? a.precio - b.precio : b.precio - a.precio;
    });
    setListaViajes(viajesOrdenados);
    setOrdenAscendente(!ordenAscendente);
  }

  // Función para eliminar un viaje específico
  function eliminarViaje(id) {
    const viajesActualizados = listaViajes.filter((viaje) => viaje.id !== id);
    setListaViajes(viajesActualizados);
  }

  return (
    <div>
      <h1>Lista de Viajes</h1>
      <button onClick={ordenarViajes}>
        {ordenAscendente
          ? "Ordenar por Precio Descendente"
          : "Ordenar por Precio Ascendente"}
      </button>
      <table border="1">
        <thead>
          <tr>
            <th>Destino</th>
            <th>Duración</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {listaViajes.map((viaje) => (
            <tr key={viaje.id}>
              <td>{viaje.destino}</td>
              <td>{viaje.duracion}</td>
              <td>${viaje.precio}</td>
              <td>
                <button onClick={() => eliminarViaje(viaje.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h1>Eejemplos de funciones de arrays en React</h1>
        <ListaDestinos />
        <PrecioTotal />
        <EncontrarDestino />
        <VerificarPrecios />
        <LoguearDestinos />
        <ListaDestinosEconomicos />
      </div>
    </div>
  );
}

export default App;
