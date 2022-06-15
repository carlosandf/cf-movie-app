import React from 'react';
import Header from '@components/Header';
import Trending from '@containers/Trending';
import Footer from '@components/Footer';
import CategoriesPreview from '@containers/CategoriesPreview';

export default function Home() {
  return (
    <React.StrictMode>
      <Header modifier={false} />
      <Trending />
      <CategoriesPreview />
      <Footer />
    </React.StrictMode>
  )
}