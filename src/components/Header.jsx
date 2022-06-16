import React, { useState } from 'react';
import '@styles/Header.css';
import Form from './Form';
import { Link } from 'react-router-dom';

function Header({arrow, logo, form, title, name}) {

  
  return (
    <header id="header" className="header-container">
      {
        arrow ?
          (
            <Link to="/">
              <span className="header-arrow">&lt;</span>
            </Link>
          ) 
        : null
      }
      {logo && <h1 className="header-title">CFMovies</h1>}
      {form && <Form />}
      {title && <h2 className="header-title header-title--categoryView">{name}</h2>}
    </header>
  );
}
export default Header;