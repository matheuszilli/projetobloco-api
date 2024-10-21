import React, { useEffect, useState } from 'react';
import api from '../server/api';
import MovieList from '../components/MovieList/MovieList';
// import Filtro from '../components/Filtro/Filtro';


function Filmes() {
  const [filmes, setFilmes] = useState([]);
  // const [filtros, setFiltros] = useState({});

  useEffect(() => {
    const carregarFilmes = async () => {
      try {
        const resposta = await api.get('/movie/popular');
        setFilmes(resposta.data.results);
      } catch (erro) {
        console.error('Erro ao carregar filme:', erro);
      }
    };

    carregarFilmes();
  }, []);

  return (
    <div>
      <h1>Filmes</h1>
      <MovieList filmes={filmes} />
    </div>
  );
}

export default Filmes;