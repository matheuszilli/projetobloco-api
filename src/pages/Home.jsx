import React, { useEffect, useState } from 'react';
import api from '../server/api';
import MovieList from '../components/MovieList/MovieList';
import SerieList from '../components/SerieList/SerieList';

function Home() {
  const [filmesPopulares, setFilmesPopulares] = useState([]);
  const [seriesPopulares, setSeriesPopulares] = useState([]);

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const respostaFilmes = await api.get('/movie/popular');
        setFilmesPopulares(respostaFilmes.data.results);

        const respostaSeries = await api.get('/tv/popular');
        setSeriesPopulares(respostaSeries.data.results);
      } catch (erro) {
        console.error('Erro ao carregar dados:', erro);
      }
    };

    carregarDados();
  }, []);

  return (
    <div>
      <h2>Filmes Populares</h2>
      <MovieList filmes={filmesPopulares} />

      <h2>Séries Populares</h2>
      <SerieList series={seriesPopulares} />
    </div>
  );
}

export default Home;