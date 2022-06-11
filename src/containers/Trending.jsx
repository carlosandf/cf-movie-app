import React from 'react';
import Movie from '@components/Movie';
import '@styles/Trending.css';
import useGetMovies from '@hooks/useGetMovies';
import API_KEY from "@utils/api_key";

const API = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

function Trending() {

  const movies = useGetMovies(API)
  console.log(movies)
  return(
    <section id="trendingPreview" className="trendingPreview-container">
      <div className="trendingPreview-header">
        <h2 className="trendingPreview-title">Tendencias</h2>
        <button className="trendingPreview-btn">Ver más</button>
      </div>
      <article className="trendingPreview-movieList">
        {
          movies.map(movie => (
            <Movie 
              image={movie.poster_path}
              name={movie.original_title}
              key={movie.id} />
          ))
        }
      </article>
    </section>
  );
}
export default Trending;