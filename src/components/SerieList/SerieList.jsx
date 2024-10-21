import React, { useRef } from 'react';
import SerieCard from '../SerieCard/SerieCard';
import './SerieList.css';

function SerieList({ series }) {
  const listaRef = useRef(null);

  const rolarParaEsquerda = () => {
    listaRef.current.scrollLeft -= 200;
  };

  const rolarParaDireita = () => {
    listaRef.current.scrollLeft += 200;
  };

  return (
    <div className="lista-series-container">
      <div className="lista-series" ref={listaRef}>
        {series.map((serie) => (
          <SerieCard key={serie.id} serie={serie} />
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

export default SerieList;