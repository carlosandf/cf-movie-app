import React, { useEffect, useState } from 'react';
import Movie from '@components/Movie';
import '@styles/Trending.css';
import getTrendingPreview from '@hooks/getTrendingPreview';

function Trending() {
  // const [data, setData] = useState('')

  // setData(getTrendingPreview())

  return(
    <section id="trendingPreview" className="trendingPreview-container">
      <div className="trendingPreview-header">
        <h2 className="trendingPreview-title">Tendencias</h2>
        <button className="trendingPreview-btn">Ver más</button>
      </div>
      <article className="trendingPreview-movieList">
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </article>
    </section>
  );
}
export default Trending;