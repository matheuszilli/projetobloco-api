import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="cabecalho">
      <div className='cabecalho-titulo'>
      <h1>INFNET - Cinema</h1>
      <div className='cabecalho-acoes'>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#filmes">Filmes</a></li>
          <li><a href="#sobre">Sobre</a></li>
        </ul>
      </div>
      </div>
    </header>
  );
}

export default Header;
