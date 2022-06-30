import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Species from './components/fish/species';
import SpeciesDetail from './components/fish/species-detail';
import Header from './components/UI/Header';

function App() {
  const title = 'Fish Species';
  return (
    <div className="main-container">
      <Header title={title} />
      <Routes>
        <Route path="/" element={<Species />} />
        <Route path="/species" element={<SpeciesDetail />} />
      </Routes>
    </div>
  );
}

export default App;
