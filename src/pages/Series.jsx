import React, { useEffect, useState } from 'react';
import api from '../server/api';
import SerieList from '../components/SerieList/SerieList';;
// import Filtro from '../components/Filtro/Filtro';

function Series() {
    const [series, setSeries] = useState([]);
    // const [filtros, setFiltros] = useState({});
  
    useEffect(() => {
      const carregarSeries = async () => {
        try {
          const resposta = await api.get('/tv/popular');
          setSeries(resposta.data.results);
        } catch (erro) {
          console.error('Erro ao carregar séries:', erro);
        }
      };
  
      carregarSeries();
    }, []);
  
    return (
      <div>
        <h1>Séries</h1>
        <SerieList series={series} />
      </div>
    );
  }
  
  export default Series;