import React from 'react';
import '@styles/Movie.css';

function Movie ({image, name}) {
  const urlImage = `https://image.tmdb.org/t/p/w300${image}`
  return (
    <div className="movie-container">
      <img 
        src={urlImage}
        className="movie-img" 
        alt={name} 
      />
    </div>
  );
}
export default Movie;