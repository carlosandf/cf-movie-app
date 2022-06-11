import React from 'react';
import Movie from '@components/Movie';
import '@styles/GenericList.css';

function GenericList() {
  return (
    <section id="genericList" className="genericList-container inactive">
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
    </section>
  );
}
export default GenericList;