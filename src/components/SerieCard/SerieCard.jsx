import React from 'react';
import { Link } from 'react-router-dom';
import './SerieCard.css';

function SerieCard({ serie }) {
  const imagemUrl = serie.poster_path
    ? `https://image.tmdb.org/t/p/w500${serie.poster_path}`
    : 'https://via.placeholder.com/150x225';

  return (
    <div className="cartao-serie">
      <Link to={`/serie/${serie.id}`}>
        <img src={imagemUrl} alt={serie.name} />
        <h2 className="serie-title">{serie.name}</h2>
      </Link>
    </div>
  );
}

export default SerieCard;