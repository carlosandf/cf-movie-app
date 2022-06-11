import React from 'react';
import Header from '@components/Header';
import Trending from '@containers/Trending';
import Categories from '@containers/Categories';
import GenericList from '@containers/GenericList';
import MovieDetails from '@containers/MovieDetails';
import  Footer from '@components/Footer';

function App() {
  return (
    <>
      <Header />
      <Trending />
      <Categories />
      <GenericList />
      <MovieDetails />
      <Footer />
    </>
  );
}
export default App;