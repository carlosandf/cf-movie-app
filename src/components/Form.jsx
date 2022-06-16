import React from 'react';

export default function Form() {
  return(
    <form id="searchForm" className="header-searchForm">
      <input type="text" placeholder="Buscar..." />
      <button>🔍</button>
    </form>
  );
}