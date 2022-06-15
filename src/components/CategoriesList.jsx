import React from 'react';
import CategoryItem from './CategoryItem';
import '@styles/CategoriesList.css';
import { useGetCategories } from '../hooks/useGetData';

const endpoint = 'genre/movie/list'
function CategoriesList() {

  const genres = useGetCategories(endpoint);
  
  return (
    <article className="categories-list">
      {
        genres.map(category => (
          <CategoryItem 
            key={category.id}
            name={category.name}
            id={category.id}
          />
        ))
      }
    </article>
  );
}
export default CategoriesList;