import React from 'react';
import '@styles/Header.css';

function Header({modifier}) {
  return (
    <header id="header" className="header-container">
      <span className="header-arrow inactive">&lt;</span>
      <h1 className="header-title">CFMovies</h1>
      <h2 className="header-title header-title--categoryView inactive">Acción</h2>
      <form id="searchForm" className="header-searchForm">
        <input type="text" placeholder="Vengadores" />
        <button>🔍</button>
      </form>
    </header>
  );
}
export default Header;