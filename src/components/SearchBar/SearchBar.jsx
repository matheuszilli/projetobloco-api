import React from 'react';
import './SearchBar.css';

function SearchBar({ aoPesquisar }) {
  return (
    <div className="barra-pesquisa">
      <input
        type="text"
        placeholder="Pesquisar filmes..."
        onChange={(e) => aoPesquisar(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
