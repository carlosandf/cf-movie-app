import React from 'react';
import Movie from '@components/Movie';
import CategoriesList from '@components/CategoriesList';
import '@styles/MovieDetails.css';

function MovieDetails() {
  return (
    <section id="movieDetail" className="movieDetail-container inactive">
      <h1 className="movieDetail-title">Deadpool</h1>
      <span className="movieDetail-score">7.6</span>
      <p className="movieDetail-description">
        Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy's life.
      </p>
      <CategoriesList />
      <article className="relatedMovies-container">
        <h2 className="relatedMovies-title">Películas similares</h2>
        <div className="relatedMovies-scrollContainer">
          <Movie />
          <Movie />
          <Movie />
          <Movie />
        </div>
      </article>
    </section>
  )
}
export default MovieDetails;