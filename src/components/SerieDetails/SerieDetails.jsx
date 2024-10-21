import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../server/api';
import './SerieDetails.css';

function SerieDetails() {
  const { id } = useParams();
  const [serie, setSerie] = useState(null);
  const [elenco, setElenco] = useState([]);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    const carregarDetalhes = async () => {
      try {
        const respostaSerie = await api.get(`/tv/${id}`);
        setSerie(respostaSerie.data);

        const respostaElenco = await api.get(`/tv/${id}/credits`);
        setElenco(respostaElenco.data.cast.slice(0, 5));

        const respostaTrailer = await api.get(`/tv/${id}/videos`);
        const trailerSerie = respostaTrailer.data.results.find(
          (video) => video.type === 'Trailer' && video.site === 'YouTube'
        );
        setTrailer(trailerSerie);
      } catch (erro) {
        console.error('Erro ao buscar detalhes da série:', erro);
      }
    };

    carregarDetalhes();
  }, [id]);

  if (!serie) {
    return <div>Carregando...</div>;
  }

  const imagemUrl = serie.poster_path
    ? `https://image.tmdb.org/t/p/w500${serie.poster_path}`
    : 'https://via.placeholder.com/300x450';

  return (
    <div className="detalhes-serie">
      <img src={imagemUrl} alt={serie.name} />
      <div className="detalhes-info">
        <h1>{serie.name}</h1>
        <p>
          <strong>Sinopse:</strong> {serie.overview}
        </p>
        <p>
          <strong>Primeiro episódio:</strong> {serie.first_air_date}
        </p>
        <p>
          <strong>Número de temporadas:</strong> {serie.number_of_seasons}
        </p>
        <p>
          <strong>Número de episódios:</strong> {serie.number_of_episodes}
        </p>
        <p>
          <strong>Gêneros:</strong>{' '}
          {serie.genres.map((genre) => genre.name).join(', ')}
        </p>
        <p>
          <strong>Avaliação:</strong> {serie.vote_average}
        </p>

        <h2>Elenco Principal</h2>
        <ul>
          {elenco.map((ator) => (
            <li key={ator.id}>
              {ator.name} como {ator.character}
            </li>
          ))}
        </ul>

        {trailer && (
          <div className="trailer">
            <h2>Trailer</h2>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}

export default SerieDetails;