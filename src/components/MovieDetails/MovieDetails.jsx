import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../server/api';
import './MovieDetails.css';

function MovieDetails() {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);
  const [elenco, setElenco] = useState([]);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    const carregarDetalhes = async () => {
      try {
        const respostaFilme = await api.get(`/movie/${id}`);
        setFilme(respostaFilme.data);

        const respostaElenco = await api.get(`/movie/${id}/credits`);
        setElenco(respostaElenco.data.cast.slice(0, 5)); // Pegando os 5 primeiros atores

        const respostaTrailer = await api.get(`/movie/${id}/videos`);
        const trailerFilme = respostaTrailer.data.results.find(
          (video) => video.type === 'Trailer' && video.site === 'YouTube'
        );
        setTrailer(trailerFilme);
      } catch (erro) {
        console.error('Erro ao buscar detalhes do filme:', erro);
      }
    };

    carregarDetalhes();
  }, [id]);

  if (!filme) {
    return <div>Carregando...</div>;
  }

  const imagemUrl = filme.poster_path
    ? `https://image.tmdb.org/t/p/w500${filme.poster_path}`
    : 'https://via.placeholder.com/300x450';

  return (
    <div className="detalhes-filme">
      <img src={imagemUrl} alt={filme.title} />
      <div className="detalhes-info">
        <h1>{filme.title}</h1>
        <p><strong>Sinopse:</strong> {filme.overview}</p>
        <p><strong>Data de lançamento:</strong> {filme.release_date}</p>
        <p><strong>Duração:</strong> {filme.runtime} minutos</p>
        <p>
          <strong>Gêneros:</strong>{' '}
          {filme.genres.map((genre) => genre.name).join(', ')}
        </p>
        <p><strong>Avaliação:</strong> {filme.vote_average}</p>

        <h2>Elenco Principal</h2>
        <ul>
          {elenco.map((ator) => (
            <li key={ator.id}>{ator.name} como {ator.character}</li>
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

export default MovieDetails;