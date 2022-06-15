import React from 'react';
import CategoriesList from '@components/CategoriesList';
import '@styles/Categories.css';

function CategoriesPreview() {
  return (
    <section id="categoriesPreview" className="categoriesPreview-container">
      <h2 className="categoriesPreview-title">Categorías</h2>
      <CategoriesList />
    </section>
  );
}
export default CategoriesPreview;