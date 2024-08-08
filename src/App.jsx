
import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import CatalogPage from './pages/CatalogPage/CatalogPage'
import FavoritesPage from './pages/FavoritesPage/FavoritesPage'
import HomePage from './pages/HomePages/HomePage'

function App() {


  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </>
  )
}

export default App
