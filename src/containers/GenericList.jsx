import React from 'react';
import Movie from '@components/Movie';
import '@styles/GenericList.css';

function GenericList({data}) {

  return (
    <section id="genericList" className="genericList-container">
      {
        data.map(movie => (
          <Movie 
            image={movie.poster_path}
            name={movie.original_title}
            key={movie.id} />
        ))
      }
    </section>
  );
}
export default GenericList;