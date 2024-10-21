import axios from 'axios';

const apiKey ='872cb5f87cce1052311d4b897aca27ff';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: apiKey,
    language: 'pt-BR',
  },
});

export default api;