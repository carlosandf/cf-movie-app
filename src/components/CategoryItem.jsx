import React from 'react';
import '@styles/CategoryItem.css';

function CategoryItem({id, name}) {

  const idStyle = `id${id}`
  return (
    <div className="category-container">
      <h3 id={idStyle} className="category-title">{name}</h3>
    </div>
  )
}
export default CategoryItem;