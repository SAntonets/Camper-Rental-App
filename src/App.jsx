import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Loader from './components/Loader/Loader';

// Лейзі лоадінг компонентів
const HomePage = lazy(() => import('./pages/HomePages/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
