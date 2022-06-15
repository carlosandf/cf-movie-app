import React from 'react';
import CategoryItem from '@components/CategoryItem';



export default function RelatedCategories() {

  const categories = useGetCategories(endpoint)
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