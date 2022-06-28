import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Species from './components/fish/species';
import Header from './components/UI/Header';

function App() {
  const title = 'Fish Species';
  return (
    <div>
      <Header title={title} />
      <Routes>
        <Route path="/" element={<Species />} />
      </Routes>
    </div>
  );
}

export default App;
