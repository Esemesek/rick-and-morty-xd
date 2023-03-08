import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CharacterListPage from './pages/CharacterListPage/CharacterListPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CharacterListPage />} />
      </Routes>
    </BrowserRouter>
  );
}
