import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <h1>Catálogo de Filmes e Séries</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/filmes">Filmes</Link></li>
          <li><Link to="/series">Séries</Link></li>
          <li><Link to="/comunidade">Comunidade</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;