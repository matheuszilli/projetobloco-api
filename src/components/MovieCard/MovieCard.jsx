import React from 'react';
import './MovieCard.css';

function MovieCard({ filme }) {
  return (
    <div className="cartao-filme">
      <img src={filme.imagem} alt={filme.titulo} />
      <h2>{filme.titulo}</h2>
    </div>
  );
}

export default MovieCard;
