import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Filmes from './pages/Filmes';
import Series from './pages/Series';
import Comunidade from './pages/Comunidade';
import MovieDetails from './components/MovieDetails/MovieDetails';
import SerieDetails from './components/SerieDetails/SerieDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filmes" element={<Filmes />} />
          <Route path="/series" element={<Series />} />
          <Route path="/comunidade" element={<Comunidade />} />
          <Route path="/filme/:id" element={<MovieDetails />} />
          <Route path="/serie/:id" element={<SerieDetails />} />
          {/* Adicionar outras rotas conforme necessário*/}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;