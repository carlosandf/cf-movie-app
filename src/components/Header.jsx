import React, { useState } from 'react';
import '@styles/Header.css';
import Form from './Form';
import { Link } from 'react-router-dom';

function Header({modifier, title}) {

  const view = modifier
  
  return (
    <header id="header" className="header-container">
      {
        view ?
          (
            <Link to="/">
              <span className="header-arrow">&lt;</span>
            </Link>
          ) 
        : null
      }
      {view && <h2 className="header-title header-title--categoryView">{title}</h2>}

      {!view && <h1 className="header-title">CFMovies</h1>}
      {!view && <Form />}
    </header>
  );
}
export default Header;