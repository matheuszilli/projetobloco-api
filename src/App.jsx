import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SearchBar from './components/SearchBar/SearchBar';
import MovieList from './components/MovieList/MovieList';
import './App.css';

function App() {
  const [termoPesquisa, setTermoPesquisa] = useState('');

  const filmes = [
    { id: 1, titulo: 'O Poderoso Chefão', imagem: 'https://via.placeholder.com/150x225' },
    { id: 2, titulo: 'Forrest Gump', imagem: 'https://via.placeholder.com/150x225' },
    { id: 3, titulo: 'A Origem', imagem: 'https://via.placeholder.com/150x225' },
    { id: 4, titulo: 'Clube da Luta', imagem: 'https://via.placeholder.com/150x225' },
    { id: 5, titulo: 'Interestelar', imagem: 'https://via.placeholder.com/150x225' },
    { id: 6, titulo: 'Matrix', imagem: 'https://via.placeholder.com/150x225' },
    { id: 7, titulo: 'O Senhor dos Anéis', imagem: 'https://via.placeholder.com/150x225' },
    { id: 8, titulo: 'Vingadores: Ultimato', imagem: 'https://via.placeholder.com/150x225' },
    { id: 9, titulo: 'Cidade de Deus', imagem: 'https://via.placeholder.com/150x225' },
    { id: 10, titulo: 'Coringa', imagem: 'https://via.placeholder.com/150x225' },
  ];

  const filmesFiltrados = filmes.filter(filme =>
    filme.titulo.toLowerCase().includes(termoPesquisa.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <SearchBar aoPesquisar={setTermoPesquisa} />
      <MovieList filmes={filmesFiltrados} />
      <Footer />
    </div>
  );
}

export default App;
