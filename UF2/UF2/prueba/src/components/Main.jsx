import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from './MovieCard';
import movies from './movies';

// Componente Main
const Main = () => {
  const [movieSeleccionada, setMovieSeleccionada] = useState(null);
  
  const [numeroEntradas, setNumeroEntradas] = useState(10); 

  
  const manejarSeleccion = (title) => {
    console.log('Película seleccionada:', title); 
    setMovieSeleccionada(title);
  };

  const restarEntrada = () => {
    if (numeroEntradas > 0) {
      setNumeroEntradas(numeroEntradas - 1);
    }
  };

 
  const sumarEntrada = () => {
    
    setNumeroEntradas(numeroEntradas + 1);
  };

 
  useEffect(() => {
    console.log('movieSeleccionada actualizada:', movieSeleccionada);
  }, [movieSeleccionada]); 

  return (
    <div className="container">
      <h1>Selecciona tu película</h1>

      <div className="row">
        {movies.map((movie, index) => (
          <div key={index} className="col-md-4">
            <MovieCard
              title={movie.title}
              description={movie.description}
              image={movie.poster}
              method={() => manejarSeleccion(movie.title)}
            />
          </div>
        ))}
      </div>

    {movieSeleccionada && (
  <div className="container my-5">
    <h2 className="text-center mb-4">Información de la película seleccionada</h2>
    <div className="text-center mb-4">
      <p className="lead text-muted">{movieSeleccionada}</p>
    </div>
    <div className="row justify-content-center">
      <div className="col-4 d-flex justify-content-center align-items-center mb-3">
        <button
          className="btn btn-lg btn-danger me-3"
          onClick={restarEntrada}
        >
          <i className="bi bi-dash-lg"></i> -
        </button>
      </div>
      <div className="col-4 d-flex justify-content-center align-items-center mb-3">
        <button
          className="btn btn-lg btn-success ms-3"
          onClick={sumarEntrada}
        >
          <i className="bi bi-plus-lg"></i> +
        </button>
      </div>
    </div>
    <div className="text-center mt-4">
      <p className="h5">Entradas disponibles: <span className="badge bg-info">{numeroEntradas}</span></p>
    </div>
  </div>
)}

    </div>
  );
};

export default Main;
