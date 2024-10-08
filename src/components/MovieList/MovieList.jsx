import React, { useRef } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';

function MovieList({ filmes }) {
  const listaRef = useRef(null);

  const rolarParaEsquerda = () => {
    listaRef.current.scrollLeft -= 200;
  };

  const rolarParaDireita = () => {
    listaRef.current.scrollLeft += 200;
  };

  return (
    <div className="lista-filmes-container">
      <div className="lista-filmes" ref={listaRef}>
        {filmes.map((filme) => (
          <MovieCard key={filme.id} filme={filme} />
        ))}
      </div>
      <button className="botao-navegacao botao-anterior" onClick={rolarParaEsquerda}>
        &#8249;
      </button>
      <button className="botao-navegacao botao-proximo" onClick={rolarParaDireita}>
        &#8250;
      </button>
    </div>
  );
}

export default MovieList;
