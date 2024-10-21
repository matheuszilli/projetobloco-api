import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

function MovieCard({ filme }) {
  const imagemUrl = filme.poster_path
    ? `https://image.tmdb.org/t/p/w500${filme.poster_path}`
    : 'https://via.placeholder.com/150x225';

  return (
    <div className="cartao-filme">
      <Link to={`/filme/${filme.id}`}>
        <img src={imagemUrl} alt={filme.title} />
        <h2 className="movie-title">{filme.title}</h2>
      </Link>
    </div>
  );
}

export default MovieCard;