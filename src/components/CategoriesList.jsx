import React from 'react';
import CategoryItem from './CategoryItem';
import useGetCategories from "@hooks/useGetCategories";
import API_KEY from '@utils/api_key';
import '@styles/CategoriesList.css';

const API = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`

function CategoriesList() {

  const categories = useGetCategories(API)
  console.log(categories)
  return (
    <article className="categories-list">
      {
        categories.map(category => (
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