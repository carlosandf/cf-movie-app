import React from 'react';
import '@styles/CategoryItem.css';
import { Link } from 'react-router-dom';

function CategoryItem({id, name}) {

  const idStyle = `id${id}`
  return (
    <div className="category-container">
      <Link to={`/category/${id}`}>
        <h3 id={idStyle} className="category-title">{name}</h3>
      </Link>
    </div>
  )
}
export default CategoryItem;