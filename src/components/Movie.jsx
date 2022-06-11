import React from 'react';
import '@styles/Movie.css';

function Movie ({image}) {
  return (
    <div className="movie-container">
      <img src="https://image.tmdb.org/t/p/w300/adOzdWS35KAo21r9R4BuFCkLer6.jpg" className="movie-img" alt="Nombre de la película" />
    </div>
  );
}
export default Movie;